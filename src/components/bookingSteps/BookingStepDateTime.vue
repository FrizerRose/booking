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
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        >
      </div>
    </div>
    <div class="o-layout -gutter">
      <div
        class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
        <ul class="c-timeslots-list o-layout -gutter || o-list">
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">8:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">8:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">8:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">8:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">9:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">9:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">9:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">9:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">10:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">10:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">10:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">10:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">11:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">11:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">11:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">11:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">12:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">12:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">12:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">12:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">13:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">13:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">13:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">13:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">14:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">14:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">14:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">14:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">15:00</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">15:15</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">15:30</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">15:45</span>
            </button>
          </li>
          <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
            <button
              class="c-button -tab"
              @click="nextStep()"
            >
              <span class="c-button_label">16:00</span>
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

    function nextStep() {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

    return {
      nextStep,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
