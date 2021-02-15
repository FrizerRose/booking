<template>
  <li
    id="tab-odabir-termina"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-odabir-termina"
  >
    <!-- ends termin -->
    <div class="o-layout -gutter">
      <div
        class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
        <label for="start">biraj termin</label>
        <datepicker
          v-model="selectedDate"
          :lower-limit="today"
          :upper-limit="monthFromNow"
          input-format="dd.MM.yyyy"
        />
      </div>
    </div>
    <div class="o-layout -gutter">
      <div
        class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
        <ul class="c-timeslots-list o-layout -gutter || o-list">
          <li
            v-for="time in availableAppointmentTimes"
            :key="time"
            class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item"
          >
            <button
              class="c-button -tab"
              @click="nextStep(time)"
            >
              <span class="c-button_label">{{ time }}</span>
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
  defineComponent, computed, ref, watch, reactive,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import Datepicker from 'vue3-datepicker';
import Appointment from '@/types/appointment';

export default defineComponent({
  components: { Datepicker },
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

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

    function nextStep(time: string) {
      // Formatting date and time strings
      const dateString = getDateStringFromDate(selectedDate.value);
      const timeString = `${time}:00`;

      store.commit(MutationTypes.CHANGE_SELECTED_DATETIME, { date: dateString, time: timeString });
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

    const reservedAppointments = computed(() => store.state.shared.reservedAppointments);
    const appointmentsOnNewDate = computed(() => reservedAppointments.value.filter(
      (appointment: Appointment) => appointment.date === getDateStringFromDate(selectedDate.value),
    ));

    const selectedService = computed(() => store.state.shared.selectedService);

    const appointmentAvailability = computed(() => {
      const timeArray: string[] = [...possibleAppointmentTimes];
      appointmentsOnNewDate.value.forEach((appointment) => {
        const futureSlotsTaken = appointment.service.duration / 15;
        const index = timeArray.findIndex((item) => item === appointment.time);
        for (let i = 0; i < futureSlotsTaken; i += 1) {
          timeArray[index + i] = '';
        }

        if (selectedService?.value?.duration) {
          const pastSlotsTaken = selectedService.value?.duration / 15;
          for (let i = 0; i < pastSlotsTaken; i += 1) {
            timeArray[index - i] = '';
          }
        }
      });
      return timeArray;
    });

    const availableAppointmentTimes = computed(() => appointmentAvailability.value.filter((item) => item !== ''));

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
