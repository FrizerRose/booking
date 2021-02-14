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
            v-for="time in possibleAppointmentTimes"
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import Datepicker from 'vue3-datepicker';

export default defineComponent({
  components: { Datepicker },
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    // TODO: fetch startTime and endTime from the api
    const startTime = 8;
    const endTime = 16;
    const possibleAppointmentTimes = [];
    for (let i = startTime; i < endTime; i += 1) {
      possibleAppointmentTimes.push(`${i}:00`);
      possibleAppointmentTimes.push(`${i}:15`);
      possibleAppointmentTimes.push(`${i}:30`);
      possibleAppointmentTimes.push(`${i}:45`);
    }

    const selectedDate = ref(new Date());
    const today = new Date();
    const bokingWindow = 30;
    const monthFromNow = ref(new Date());
    monthFromNow.value.setDate(monthFromNow.value.getDate() + bokingWindow);

    function nextStep(time: string) {
      // Combine selected date and selected time into a timestamp
      const date = selectedDate.value;
      const timeFragments = time.split(':');
      date.setHours(parseInt(timeFragments[0], 10), parseInt(timeFragments[1], 10), 0, 0);
      const selectedTimestamp = Math.floor(date.getTime() / 1000);

      store.commit(MutationTypes.CHANGE_SELECTED_DATETIME, selectedTimestamp);
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

    return {
      nextStep,
      possibleAppointmentTimes,
      selectedDate,
      today,
      monthFromNow,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
