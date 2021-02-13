<template>
  <li
    id="tab-provjeri-i-potvrdi"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-provjeri-i-potvrdi"
  >
    <div class="c-summary">
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Vrsta usluge:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              Šišanje
            </p>
          </div>
        </div>
      </div>
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Osoba na usluzi:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              Miljenko
            </p>
          </div>
        </div>
      </div>
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Datum i vrijeme:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              5. svibnja 2021. u 14:30
            </p>
          </div>
        </div>
      </div>
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Vaši podatci:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              Ivana Ivić<br>
              ivana.ivic@example.com<br>
              +385 (91) 000-11-22<br>
            </p>
          </div>
        </div>
      </div>
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Napomena:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              <em>Bez napomene</em><br>
            </p>
          </div>
        </div>
      </div>
      <div class="c-summary_row">
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <button
              class="c-button -primary || has-links-inside_main-link"
              @click="nextStep()"
            >
              <span class="c-button_label">Potvrdi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
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
