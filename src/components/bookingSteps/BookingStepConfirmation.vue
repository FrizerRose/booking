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
              <pre v-html="selectedNotice" /><br>
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
      <div class="c-summary_footer">
        <div class="c-form">
          <div class="c-form_legal">
            <p>
              Stranica je zaštićena reCAPTCHA tehnologijom i <a
                href="#"
                class="o-link"
              >Googleovim pravilima privatnosti</a>.<br>
              Pročitajte <a
                href="#"
                class="o-link"
              >uvjete poslovanja</a>.
            </p>
          </div>
          <div class="c-form_item">
            <div>
              <span
                class="o-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.293 15.707l1.414-1.414L15 18.586l4.293-4.293 1.414 1.414L15 21.414l-5.707-5.707z" />
                  <path d="M11 5H4V3h7a5 5 0 015 5v12h-2V8a3 3 0 00-3-3z" />
                </svg>
              </span>
            </div>
            <input
              id="id-form-checkbox"
              class="c-form_checkbox"
              type="checkbox"
            >
            <label
              class="c-form_checkboxLabel"
              for="id-form-checkbox"
            >
              <div class="o-background-wrap -is-checkbox-focus">
                <div class="o-background-focus" />
                <span class="c-form_checkboxLabel_inner">
                  Prihvaćam uvjete poslovanja
                </span>
              </div>
              <span class="-before">
                <div class="o-background-focus-wrap">
                  <div class="o-background-focus" />
                </div>
                <div class="o-background-wrap -is-input -is-checkbox">
                  <div class="o-background -delay-1" />
                </div>
              </span>
              <span class="-after" />
            </label>
          </div>
          <button
            class="c-button -primary || is-submit"
            @click="nextStep()"
          >
            <span class="c-button_label">Potvrdi</span>
          </button>
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
        window.scrollTo(0, 0);
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
