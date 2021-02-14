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
        <input
          id="start"
          type="date"
          name="trip-start"
          value="2021-02-14"
          min="2021-02-14"
          max="2021-03-14"
        >
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
              class="c-button -outline"
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
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    function nextStep(time: string) {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

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

    return {
      nextStep,
      possibleAppointmentTimes,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
