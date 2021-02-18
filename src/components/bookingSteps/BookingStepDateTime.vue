<template>
  <li
    id="tab-odabir-termina"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-odabir-termina"
  >
    <!-- ends termin -->
    <div class="o-layout">
      <div
        class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
        <div class="c-form_item">
          <label
            class="c-form_label"
            for="id-datepicker-start"
          >
            biraj termin
          </label>
          <div class="o-background-wrap -is-datepicker">
            <div class="o-background" />
            <datepicker
              v-model="selectedDate"
              :lower-limit="today"
              :upper-limit="monthFromNow"
              input-format="dd.MM.yyyy"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="o-layout">
      <div
        class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
        <ul class="c-timeslots-list o-layout -gutter-small || o-list">
          <li
            v-for="time in availableAppointmentTimes"
            :key="time"
            class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item"
          >
            <button
              class="c-button -tab"
              @click="nextStep(time)"
            >
              <span class="c-button_label">{{ time.time }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- ends termin -->
  </li>
</template>

<script lang='ts'>
import {
  defineComponent, computed, ref,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import Datepicker from 'vue3-datepicker';
import Appointment from '@/types/appointment';
import Staff from '@/types/staff';

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
    const currentStep = computed(() => store.state.shared.currentStep);
    const allStaff = computed(() => store.state.staff.staff);
    const staffArray: (Staff & { available: boolean })[] = [];
    // eslint-disable-next-line no-return-assign
    allStaff.value.forEach((staff) => staffArray[staff.id] = { ...staff, available: true });

    // TODO: fetch startTime and endTime from the api
    const startTime = 8;
    const endTime = 16;
    const possibleAppointmentTimes: string[] = [];
    for (let i = startTime; i < endTime; i += 1) {
      const prefix = i < 10 ? '0' : '';
      possibleAppointmentTimes.push(`${prefix + i}:00`);
      possibleAppointmentTimes.push(`${prefix + i}:15`);
      possibleAppointmentTimes.push(`${prefix + i}:30`);
      possibleAppointmentTimes.push(`${prefix + i}:45`);
    }

    // For the datepicker
    const selectedDate = ref(new Date());
    const today = new Date();
    const bokingWindow = 30;
    const monthFromNow = ref(new Date());
    monthFromNow.value.setDate(monthFromNow.value.getDate() + bokingWindow);

    function getDateStringFromDate(date: Date) {
      const dd = String(date.getDate());
      let mm = String(date.getMonth() + 1); // January is 0!
      const yyyy = date.getFullYear();

      if (mm.length < 2) {
        mm = `0${mm}`;
      }

      return `${yyyy}-${mm}-${dd}`;
    }

    const reservedAppointments = computed(() => store.state.shared.reservedAppointments);
    const appointmentsOnNewDate = computed(() => reservedAppointments.value.filter(
      (appointment: Appointment) => appointment.date === getDateStringFromDate(selectedDate.value),
    ));

    const selectedService = computed(() => store.state.shared.selectedService);

    function dateIsToday(date: Date) {
      return date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear();
    }

    const appointmentAvailability = computed(() => {
      let timeArray = possibleAppointmentTimes.map((time) => ({ time, staff: JSON.parse(JSON.stringify(staffArray)) }));

      // if the selectedDay is today, filter out appointments that have passed
      if (dateIsToday(selectedDate.value)) {
        timeArray = timeArray.filter((time) => {
          const timeFragments = time.time.split(':');
          const timeOfAppointment = new Date();
          timeOfAppointment.setHours(parseInt(timeFragments[0], 10), parseInt(timeFragments[1], 10));
          return today < timeOfAppointment;
        });
      }
      appointmentsOnNewDate.value.forEach((appointment) => {
        const futureSlotsTaken = appointment.service.duration / 15;
        const index = timeArray.findIndex((item) => item.time === appointment.time);
        for (let i = 0; i < futureSlotsTaken; i += 1) {
          if (timeArray[index + i] !== undefined) {
            timeArray[index + i].staff[appointment.staff.id].available = false;
          }
        }

        if (selectedService?.value?.duration) {
          const pastSlotsTaken = selectedService.value?.duration / 15;
          for (let i = 0; i < pastSlotsTaken; i += 1) {
            if (timeArray[index - i] !== undefined) {
              timeArray[index - i].staff[appointment.staff.id].available = false;
            }
          }
        }
      });

      return timeArray.map(((time) => {
        if (!time.staff.some((staff: Staff & {available: boolean}) => staff?.available)) {
          // eslint-disable-next-line no-param-reassign
          time.time = '';
        }
        return time;
      }));
    });

    const availableAppointmentTimes = computed(() => appointmentAvailability.value.filter((item) => item.time !== ''));

    function nextStep(time: {time: string; staff: (Staff & { available: boolean })[]}) {
      // Formatting date and time strings
      const dateString = getDateStringFromDate(selectedDate.value);
      const timeString = `${time.time}:00`;

      const availableStaff = time.staff.filter((worker) => worker?.available);

      let selectedStaff: Staff;

      if (availableStaff.length > 1) {
        const staffAppointmentsToday: { worker: (Staff & { available: boolean }); count: number }[] = [];
        // eslint-disable-next-line no-return-assign
        availableStaff.forEach((worker) => staffAppointmentsToday[worker.id] = { worker, count: 0 });
        // eslint-disable-next-line no-return-assign
        appointmentsOnNewDate.value.forEach((appointment) => staffAppointmentsToday[appointment.staff.id].count += 1);

        staffAppointmentsToday.sort((workerA, workerB) => workerA.count - workerB.count);
        if (staffAppointmentsToday[0].count === staffAppointmentsToday[1].count) {
          const randomInt = Math.floor(Math.random());
          selectedStaff = staffAppointmentsToday[randomInt].worker;
        } else {
          selectedStaff = staffAppointmentsToday[0].worker;
        }
      } else {
        [selectedStaff] = availableStaff;
      }

      store.commit(MutationTypes.CHANGE_SELECTED_STAFF, selectedStaff as Staff);
      store.commit(MutationTypes.CHANGE_SELECTED_DATETIME, { date: dateString, time: timeString });

      window.scrollTo(0, 0);

      if (props.isRescheduling) {
        // Skip personal details
        store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 2);
      } else {
        store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
      }
    }

    return {
      nextStep,
      availableAppointmentTimes,
      selectedDate,
      today,
      monthFromNow,
      appointmentsOnNewDate,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
