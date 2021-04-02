<template>
  <div class="o-background-wrap has-1/2-gutters@to-medium">
    <div class="o-background -has-shadow@to-medium -overflow" />
    <div class="o-background -has-bg@to-medium -overflow" />
    <div class="c-progress_inner">
      <div class="c-progress-indicator">
        <div class="c-progress-number">
          <span
            v-if="selectedCompany?.preferences.hasStaffPick"
            class="c-progress-number_label"
          >
            {{ (currentStep * 20) - 20 }}%
          </span>
          <span
            v-else-if="currentStep > 1"
            class="c-progress-number_label"
          >
            {{ ((currentStep -1) * 25) - 25 }}%
          </span>
          <span
            v-else
            class="c-progress-number_label"
          >
            {{ (currentStep * 25) - 25 }}%
          </span>
        </div>
        <div class="c-progress-indicator_line-wrap">
          <div class="c-progress-indicator_line-wrap-bg" />
          <div
            class="c-progress-indicator_line -has-theme-color XXXXXXXX-has-glow"
            :style="progressBarTransformScale"
          />
        </div>
      </div>
      <div
        v-if="currentStep > 1"
        class="c-progress-nav"
      >
        <div class="o-layout || o-flex -justify-between -align-center || c-steps-header">
          <div class="o-layout_item u-width-auto">
            <!-- <p>odabrani korak</p> -->
          </div>
          <div class="o-layout_item u-width-auto">
            <div class="o-flex">
              <button
                v-if="currentStep > 1 && !isMenuOpen"
                class="c-button -secondary || is-hidden@from-medium || u-margin-left@to-medium"
                @click="goBackOneStep()"
              >
                <span class="o-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.858 12l5.293-5.293-1.414-1.414L3.03 12l6.707 6.707 1.414-1.414L5.858 12z" />
                    <path d="M4.444 11H20v2H4.444v-2z" />
                  </svg>
                </span>
                <span
                  class="c-button_label"
                >nazad</span>
              </button>
              <button
                class="c-button -secondary || c-steps-header_menu-toggle is-hidden@from-medium || u-margin-left@to-medium"
                @click="toggleMenu()"
              >
                <span
                  class="c-button_label"
                  :class="{'is-hidden': isMenuOpen}"
                >koraci</span>
                <span
                  class="c-button_label"
                  :class="{'is-hidden': !isMenuOpen}"
                >zatvori</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="c-steps-menu">
    <div :class="{'c-steps-menu_inner': true, 'is-open': isMenuOpen}">
      <div class="o-background-wrap has-1/2-gutters@to-medium">
        <div class="o-background -has-shadow@to-medium -overflow" />
        <div class="o-background -has-bg@to-medium -overflow" />
        <div class="o-layout">
          <div class="o-layout_item">
            <div class="c-steps-list-wrap">
              <!-- <div class="is-overflow-swipe"> -->
              <ul class="o-list c-steps-list">
                <li
                  v-if="selectedCompany?.preferences.hasSexPick"
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 1}"
                >
                  <button
                    class="c-button -primary -step"
                    @click="changeCurrentStep(1)"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Odabir radnika</span>
                    </span>
                  </button>
                </li>
                <li
                  v-if="!isRescheduling"
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 2}"
                >
                  <button
                    class="c-button -primary -step"
                    :disabled="currentStep < 2"
                    @click="changeCurrentStep(2)"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Usluge</span>
                    </span>
                  </button>
                </li>
                <li
                  v-if="selectedCompany?.preferences.hasStaffPick"
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 3}"
                >
                  <button
                    class="c-button -primary -step"
                    :disabled="currentStep < 3"
                    @click="changeCurrentStep(3)"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Odabir radnika</span>
                    </span>
                  </button>
                </li>
                <li
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 5}"
                >
                  <button
                    class="c-button -primary -step"
                    :disabled="currentStep < 5"
                    @click="changeCurrentStep(5)"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Odabir termina</span>
                    </span>
                  </button>
                </li>
                <li
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 6}"
                >
                  <button
                    class="c-button -primary -step"
                    :disabled="currentStep < 6"
                    @click="changeCurrentStep(6)"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Vaši podatci</span>
                    </span>
                  </button>
                </li>
                <li
                  class="o-list_item c-steps-list_item"
                  :class="{'is-current': currentStep === 7}"
                >
                  <button
                    class="c-button -primary -step"
                    :disabled="currentStep < 7"
                  >
                    <span class="c-button_label -has-overflow">
                      <span class="c-button_label-overflow">Provjeri i potvrdi</span>
                    </span>
                  </button>
                </li>
              </ul>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  computed,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

export default defineComponent({
  props: {
    isRescheduling: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);
    const isMenuOpen = computed(() => store.state.shared.isMenuOpen);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    function toggleMenu() {
      store.commit(MutationTypes.CHANGE_MENU_OPEN, !isMenuOpen.value);
    }

    function goBackOneStep() {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value - 1);
      if (isMenuOpen.value) {
        toggleMenu();
      }
    }

    function changeCurrentStep(stepNumber: number) {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, stepNumber);
      if (isMenuOpen.value) {
        toggleMenu();
      }
    }

    let stepSubtractor = 0;
    if (selectedCompany.value?.preferences.hasStaffPick) {
      stepSubtractor += 1;
    }
    if (selectedCompany.value?.preferences.hasSexPick) {
      stepSubtractor += 1;
    }

    // Calculate % value for the progress bar and create css string
    const stepCount = computed(() => (selectedCompany.value?.preferences.hasStaffPick ? 5 : 4));
    const singleStepValue = computed(() => 1 / stepCount.value);
    const realStepValue = computed(() => (!selectedCompany.value?.preferences.hasStaffPick && currentStep.value > 1
      ? currentStep.value - 1 : currentStep.value));
    const scaleValue = computed(() => (realStepValue.value * singleStepValue.value) - singleStepValue.value);
    const progressBarTransformScale = computed(() => `transform: scaleX(${scaleValue.value});`);

    return {
      selectedCompany,
      currentStep,
      changeCurrentStep,
      goBackOneStep,
      isMenuOpen,
      toggleMenu,
      progressBarTransformScale,
    };
  },
});
</script>
