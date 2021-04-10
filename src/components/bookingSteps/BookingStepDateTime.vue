<template>
  <div class="o-layout">
    <div class="o-layout_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <div class="u-padding">
          <div class="c-form_item">
            <div class="o-background-wrap -is-datepicker">
              <div class="o-background" />
              <datepicker
                v-model="selectedDate"
                :lower-limit="today"
                :upper-limit="upperLimitDate"
                input-format="d. M. yyyy."
                :locale="locale"
              />
            </div>
          </div>

          <div v-if="availableAppointmentTimes.length">
            <ul class="c-timeslots-list o-layout -gutter-2 || o-list">
              <li
                v-for="time in availableAppointmentTimes"
                :key="time"
                class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item"
              >
                <button
                  class="c-button -primary -step"
                  @click="selectDateTime(time)"
                >
                  <span class="c-button_label">{{ time.time }}</span>
                </button>
              </li>
            </ul>
          </div>
          <div v-else>
            <!-- ne stavljaj bg :) -->
            <p>
              Nema slobodnih termina za odabrani dan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent, computed, ref,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import Datepicker from 'vue3-datepicker';
import { hr as hrLocale } from 'date-fns/locale';
import Appointment from '@/types/appointment';
import Staff from '@/types/staff';
import { nextStep } from '@/utils/helpers';
import {
  dateIsToday, getDateStringFromDate, getDayName, timeStringToNumber, hasBreakOnDay, hasDayOff,
} from '@/utils/time';

type StaffWithAvailability = Staff & { available: boolean };

export default defineComponent({
  components: { Datepicker },
  props: {
    isRescheduling: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();
    const selectedService = computed(() => store.state.shared.selectedService);
    const selectedStaff = computed(() => store.state.shared.selectedStaff);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    // Data for the datepicker
    const today = new Date();
    const selectedDate = ref(new Date());
    const upperLimitDate = ref(new Date());
    const locale = hrLocale;

    const bookingWindow = selectedCompany.value?.preferences.schedulingWindow || 30;
    upperLimitDate.value.setDate(upperLimitDate.value.getDate() + bookingWindow);

    const reservedAppointments = computed(() => store.state.shared.reservedAppointments);
    const appointmentsOnNewDate = computed(() => reservedAppointments.value.filter(
      (appointment: Appointment) => appointment.date === getDateStringFromDate(selectedDate.value),
    ));

    // Array of Staff to be considered
    const availableStaff = computed(() => {
      const staffArray: StaffWithAvailability[] = [];

      if (selectedCompany.value && hasDayOff(selectedCompany.value, selectedDate.value)) {
        return staffArray;
      }

      if (selectedStaff.value) {
        if (!hasBreakOnDay(selectedStaff.value, selectedDate.value)) {
          // If there was staff selected in the previous step, only add it
          staffArray[selectedStaff.value.id] = { ...selectedStaff.value, available: true };
        }
      } else {
        // Otherwise, add all staff that performs this service
        const allStaff = computed(() => store.state.staff.allStaff.filter((worker) => worker.isPublic));
        allStaff.value.forEach((staff) => {
          if (!hasBreakOnDay(staff, selectedDate.value)) {
            staffArray[staff.id] = { ...staff, available: true };
          }
        });
      }

      return staffArray;
    });

    // Create an array with formatted times of day with 15 minute increments
    const possibleAppointmentTimes = computed(() => {
      const timeSlots: string[] = [];
      const timeSlotsWithStaff: { time: string; staff: number[] }[] = [];

      // Array of start,end,staffId pairs that are used to generate time slots
      const formattedShifts: {start: number; end: number; staffId: number}[] = [];
      const individualSchedules = availableStaff.value.map((staff) => ({
        id: staff.id,
        schedule: staff.hours[getDayName(selectedDate.value)],
      }));
      individualSchedules.forEach((schedule) => {
        if (schedule.schedule.active) {
          schedule.schedule.shifts.forEach((shift) => formattedShifts.push({
            start: timeStringToNumber(shift.start),
            end: timeStringToNumber(shift.end),
            staffId: schedule.id,
          }));
        }
      });

      formattedShifts.forEach((shift) => {
        if (selectedService?.value?.duration) {
          const slotsNeeded = selectedService.value.duration / 15;
          const totalShiftSlots = (shift.end - shift.start) * 4;
          const availableSlotsCount = totalShiftSlots - slotsNeeded + 1;
          let slotsAssigned = 0;

          for (let i = shift.start; i < shift.end; i += 1) {
            const prefix = i < 10 ? '0' : '';
            const suffixes = [':00', ':15', ':30', ':45'];

            // eslint-disable-next-line no-loop-func
            suffixes.forEach((suffix) => {
              if (slotsAssigned < availableSlotsCount) {
                if (timeSlots.includes(`${prefix + i}${suffix}`)) {
                  // Add this worker to a previously assigned time slot
                  const previouslyAssignedSlot = timeSlotsWithStaff.find((slot) => slot.time === `${prefix + i}${suffix}`);
                  if (previouslyAssignedSlot) {
                    previouslyAssignedSlot.staff.push(shift.staffId);
                  }
                } else {
                  // Add new time slot
                  const hour = Math.floor(i);
                  const timeString = `${prefix}${hour}${suffix}`;

                  timeSlots.push(timeString);
                  timeSlotsWithStaff.push({ time: timeString, staff: [shift.staffId] });
                }
                slotsAssigned += 1;
              }
            });
          }
        }
      });

      return timeSlotsWithStaff;
    });

    const appointmentAvailability = computed(() => {
      // Create an array of objects containing Time and Available Staff
      let timeArray = possibleAppointmentTimes.value.map((slot) => {
        const chosenStaff: StaffWithAvailability[] = [];
        slot.staff.forEach((staffId) => {
          const matchedStaff = availableStaff.value.find((staff) => staff?.id === staffId);
          if (matchedStaff) {
            chosenStaff[matchedStaff.id] = JSON.parse(JSON.stringify(matchedStaff));
          }
        });

        return {
          time: slot.time,
          staff: chosenStaff,
        };
      });

      // if the selectedDay is today, filter out appointments that have passed (or are within lead time window)
      if (dateIsToday(selectedDate.value)) {
        const leadTimeWindow = selectedCompany.value?.preferences.leadTimeWindow || 2;
        const firstAvailalbeTime = new Date();
        firstAvailalbeTime.setHours(firstAvailalbeTime.getHours() + leadTimeWindow);

        timeArray = timeArray.filter((time) => {
          const timeFragments = time.time.split(':');
          const timeOfAppointment = new Date();

          timeOfAppointment.setHours(parseInt(timeFragments[0], 10), parseInt(timeFragments[1], 10));
          return firstAvailalbeTime < timeOfAppointment;
        });
      }

      appointmentsOnNewDate.value.forEach((reservedAppointment) => {
        // Find time slot that corresponds with the start of the already reserved appointment
        const index = timeArray.findIndex((item) => item.time === reservedAppointment.time);
        if (index > -1) {
        // Remove slots that are during the Service duration
          const futureSlotsTaken = reservedAppointment.service.duration / 15;
          for (let i = 0; i < futureSlotsTaken; i += 1) {
            if (timeArray[index + i] !== undefined && timeArray[index + i].staff[reservedAppointment.staff.id] !== undefined) {
              timeArray[index + i].staff[reservedAppointment.staff.id].available = false;
            }
          }

          // Remove slots that leave too little time to finish the Service before the already reserved appointment
          if (selectedService?.value?.duration) {
            const pastSlotsTaken = selectedService.value?.duration / 15;
            for (let i = 0; i < pastSlotsTaken; i += 1) {
              if (timeArray[index - i] !== undefined && timeArray[index - i].staff[reservedAppointment.staff.id] !== undefined) {
                timeArray[index - i].staff[reservedAppointment.staff.id].available = false;
              }
            }
          }
        }
      });

      return timeArray.map(((timeSlot) => {
        const hasAvailableStaff = timeSlot.staff.some((staff: StaffWithAvailability) => staff?.available);
        // If all staff is unavailable during the time slot, mark it empty
        if (!hasAvailableStaff) {
          return { ...timeSlot, time: '' };
        }
        return timeSlot;
      }));
    });

    // Filter out time slots marked as empty (no available staff)
    const availableAppointmentTimes = computed(() => appointmentAvailability.value.filter((item) => item.time !== ''));

    function selectDateTime(time: {time: string; staff: StaffWithAvailability[]}) {
      const staffAvailableOnDay = time.staff.filter((worker) => worker?.available);

      let chosenStaff: Staff;
      // More than 1 Staff available for the appointment
      if (staffAvailableOnDay.length > 1) {
        // Create array of objects containing staff and how many appointments they have on the selected day
        const staffAppointmentsToday: { worker: StaffWithAvailability; count: number }[] = [];
        staffAvailableOnDay.forEach((worker) => {
          staffAppointmentsToday[worker.id] = { worker, count: 0 };
        });
        appointmentsOnNewDate.value.forEach((appointment) => {
          staffAppointmentsToday[appointment.staff.id].count += 1;
        });

        // Pick the worker with least amount of appointments on the day, if two are equal, pick randomly
        staffAppointmentsToday.sort((workerA, workerB) => workerA.count - workerB.count);
        if (staffAppointmentsToday[0].count === staffAppointmentsToday[1].count) {
          const randomInt = Math.floor(Math.random() * 2);
          chosenStaff = staffAppointmentsToday[randomInt].worker;
        } else {
          chosenStaff = staffAppointmentsToday[0].worker;
        }
      } else {
        // Only one staff available
        [chosenStaff] = staffAvailableOnDay;
      }
      store.commit(MutationTypes.CHANGE_SELECTED_STAFF, chosenStaff);

      // Formatting date and time strings
      const dateString = getDateStringFromDate(selectedDate.value);
      const timeString = `${time.time}:00`;
      store.commit(MutationTypes.CHANGE_SELECTED_DATETIME, { date: dateString, time: timeString });

      if (props.isRescheduling) {
        // Skip personal details when rescheduling because we already have them saved
        nextStep(2);
      } else {
        nextStep();
      }
    }

    return {
      selectDateTime,
      availableAppointmentTimes,
      selectedDate,
      today,
      upperLimitDate,
      locale,
      appointmentsOnNewDate,
    };
  },
});
</script>
