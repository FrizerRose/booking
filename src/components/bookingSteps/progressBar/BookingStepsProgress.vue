<template>
  <div class="c-progress_inner">
    <div class="o-background-wrap has-no-gutters@to-medium">
      <div class="o-background -has-shadow" />
      <div class="c-progress-indicator">
        <div class="c-progress-number">
          <span class="c-progress-number_label">
            {{ (currentStep * 20) - 20 }}%
          </span>
        </div>
        <div class="c-progress-indicator_line-wrap">
          <div class="c-progress-indicator_line-wrap-bg" />
          <div
            class="c-progress-indicator_line aaaa"
            :style="progressBarTransformScale"
          />
        </div>
      </div>
    </div>
    <div class="o-background-wrap has-no-gutters@to-medium">
      <div class="o-background -has-shadow" />
      <div class="o-layout || o-flex -justify-between || c-steps-header">
        <div class="o-layout_item u-width-auto">
          <p>odabrani korak</p>
        </div>
        <div class="o-layout_item u-width-auto">
          <button
            class="c-button -primary || c-steps-header_menu-toggle"
            @click="toggleMenu()"
          >
            <span
              class="c-button_label"
            >menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="c-steps-menu">
      <div :class="{'c-steps-menu_inner': true, 'is-open': isMenuOpen}">
        <div class="o-background-wrap has-no-gutters@to-medium">
          <div class="o-background -has-shadow" />
          <div class="o-layout">
            <div class="o-layout_item">
              <div class="c-steps-list-wrap">
                <!-- <div class="is-overflow-swipe"> -->
                <ul
                  class="o-list c-steps-list"
                  role="tablist"
                  aria-label="Koraci rezervacije"
                >
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-usluge"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 1}"
                      role="tab"
                      aria-selected="true"
                      aria-controls="tab-usluge"
                      @click="changeCurrentStep(1)"
                    >
                      <span class="c-button_label">Usluge</span>
                    </button>
                  </li>
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-odabir-radnika"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 2}"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-odabir-radnika"
                      tabindex="-1"
                      :disabled="currentStep < 2"
                      @click="changeCurrentStep(2)"
                    >
                      <span class="c-button_label">Odabir radnika</span>
                    </button>
                  </li>
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-odabir-termina"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 3}"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-odabir-termina"
                      tabindex="-1"
                      :disabled="currentStep < 3"
                      @click="changeCurrentStep(3)"
                    >
                      <span class="c-button_label">Odabir termina</span>
                    </button>
                  </li>
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-vasi-podatci"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 4}"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-vasi-podatci"
                      tabindex="-1"
                      :disabled="currentStep < 4"
                      @click="changeCurrentStep(4)"
                    >
                      <span class="c-button_label">Vaši podatci</span>
                    </button>
                  </li>
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-provjeri-i-potvrdi"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 5}"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-provjeri-i-potvrdi"
                      tabindex="-1"
                      :disabled="currentStep < 5"
                    >
                      <span class="c-button_label">Provjeri i potvrdi</span>
                    </button>
                  </li>
                  <li class="o-list_item c-steps-list_item">
                    <button
                      id="tab-id-sazetak"
                      :class="{'c-button -tab': true, 'is-current': currentStep === 6}"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-sazetak"
                      tabindex="-1"
                      :disabled="currentStep < 6"
                    >
                      <span class="c-button_label">Sažetak</span>
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
  </div>
</template>

<script lang='ts'>
import {
  defineComponent, computed, ref,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);
    const scaleValue = computed(() => (currentStep.value * 0.2) - 0.2);
    const progressBarTransformScale = computed(() => `transform: scaleX(${scaleValue.value});`);

    function changeCurrentStep(stepNumber: number) {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, stepNumber);
    }

    const isMenuOpen = ref(false);
    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return {
      currentStep,
      progressBarTransformScale,
      changeCurrentStep,
      toggleMenu,
      isMenuOpen,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
