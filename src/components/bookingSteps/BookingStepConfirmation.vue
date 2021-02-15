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
              {{ selectedService.name }}
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
              {{ selectedStaff.name }}
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
              {{ selectedDateTime.date }} u {{ selectedDateTime.time }}
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
              {{ selectedCustomer.name }}<br>
              {{ selectedCustomer.email }}<br>
              {{ selectedCustomer.phone }}<br>
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
            <p
              v-if="selectedNotice !== ''"
              class="c-summary_answer"
            >
              <em>{{ selectedNotice }}</em><br>
            </p>
            <p
              v-else
              class="c-summary_answer"
            >
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
              <span class="has-links-inside_background" />
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
import ActionTypes from '@/store/action-types';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);
    const createdAppointment = computed(() => store.state.shared.createdAppointment);

    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const selectedService = computed(() => store.state.shared.selectedService);
    const selectedStaff = computed(() => store.state.shared.selectedStaff);
    const selectedCustomer = computed(() => store.state.shared.selectedCustomer);
    const selectedDateTime = computed(() => store.state.shared.selectedDateTime);
    const selectedNotice = computed(() => store.state.shared.selectedNotice);

    async function nextStep() {
      await store.dispatch(ActionTypes.CREATE_APPOINTMENT, {
        company: selectedCompany.value?.id,
        staff: selectedStaff.value?.id,
        service: selectedService.value?.id,
        customer: selectedCustomer.value?.id,
        message: selectedNotice.value,
        date: selectedDateTime.value.date,
        time: selectedDateTime.value.time,
      });

      if (createdAppointment.value) {
        store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
      } else {
        // TODO: print out an error message
      }
    }

    return {
      nextStep,
      selectedCompany,
      selectedService,
      selectedStaff,
      selectedCustomer,
      selectedDateTime,
      selectedNotice,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
