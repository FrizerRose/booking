<template>
  <div class="o-layout">
    <div class="o-layout_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <div class="u-padding">
          <div v-if="selectedCompany">
            <div v-if="hasError">
              <div class="c-summary u-margin-bottom-4">
                <h1 class="c-heading">
                  Greška
                </h1>
                <p>
                  Imamo problem sa serverom. Molimo pokušajte kasnije.
                </p>
              </div>
            </div>

            <div v-else>
              <div class="c-summary">
                <div
                  v-if="selectedService"
                  class="c-summary_row"
                >
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
                <div
                  v-if="selectedStaff"
                  class="c-summary_row"
                >
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
                        {{ getHumanReadableDateTime(selectedDateTime.date, selectedDateTime.time) }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  v-if="selectedCustomer"
                  class="c-summary_row"
                >
                  <div class="o-layout">
                    <div class="o-layout_item u-1/2">
                      <p class="c-summary_question">
                        Vaši podatci:
                      </p>
                    </div>
                    <div class="o-layout_item u-1/2">
                      <pre class="o-pre c-summary_answer">
                        {{ selectedCustomer.name }}<br>
                        {{ selectedCustomer.email }}<br>
                        {{ selectedCustomer.phone }}<br>
                      </pre>
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
                      <div v-if="selectedNotice !== ''">
                        <div class="c-summary_answer -min-height">
                          <pre class="o-pre">
                            {{ selectedNotice }}
                          </pre>
                        </div>
                      </div>
                      <div v-else>
                        <p class="c-summary_answer -min-height -italic">
                          Bez napomene
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="c-summary_footer">
                  <div class="c-form">
                    <div class="c-form_legal">
                      <p>
                        Pročitajte uvjete poslovanja <a
                          href="#"
                          class="o-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span class="o-link_background" />
                          <span class="o-link_label">ovdje</span>
                        </a>
                        <span v-if="selectedCompany.preferences.termsLink">i</span>
                        <a
                          v-if="selectedCompany.preferences.termsLink"
                          :href="selectedCompany.preferences.termsLink"
                          class="o-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span class="o-link_background" />
                          <span class="o-link_label">ovdje.</span>
                        </a>
                      </p>
                    </div>
                    <div :class="{'c-form_item': true, 'has-error': termsError}">
                      <div>
                        <span
                          v-if="termsError"
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
                        v-model="termsChecked"
                        class="c-form_checkbox"
                        type="checkbox"
                        @change="termsError = false"
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
                      <input
                        id="id-form-checkbox-sakriveno"
                        v-model="honeypotChecked"
                        style="visibility: hidden"
                        name="adlksjdlaksjdlakjsdaljk"
                        type="checkbox"
                        autocomplete="off"
                      >
                      <label
                        class="c-form_checkboxLabel u-screen-reader-text"
                        for="id-form-checkbox-sakriveno"
                        style="visibility: hidden"
                      >Sakriveno anti-spam polje. Nemojte ga označiti.
                      </label>
                    </div>
                    <button
                      class="c-button -secondary -submit"
                      @click="confirm()"
                    >
                      <span class="c-button_label">Potvrdi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';
import { nextStep } from '@/utils/helpers';
import { getHumanReadableDateTime } from '@/utils/time';

export default defineComponent({
  props: {
    isRescheduling: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const selectedService = computed(() => store.state.shared.selectedService);
    const selectedStaff = computed(() => store.state.shared.selectedStaff);
    const selectedCustomer = computed(() => store.state.shared.selectedCustomer);
    const selectedDateTime = computed(() => store.state.shared.selectedDateTime);
    const selectedNotice = computed(() => store.state.shared.selectedNotice);

    const hasError = ref(false);
    const termsChecked = ref(false);
    const honeypotChecked = ref(false);
    const termsError = ref(false);

    async function confirm() {
      if (!honeypotChecked.value) {
        if (!termsChecked.value) {
          termsError.value = true;
          return;
        }
        termsError.value = false;

        // Cancel the original appointment if this is a rescheduling
        if (props.isRescheduling) {
          const appointment = computed(() => store.state.appointment.appointment);
          if (appointment.value) {
            await store.dispatch(ActionTypes.CANCEL_APPOINTMENT, { id: appointment.value.id, isReschedule: true });
          }
        }

        try {
          await store.dispatch(ActionTypes.CREATE_APPOINTMENT, {
            company: selectedCompany.value?.id,
            staff: selectedStaff.value?.id,
            service: selectedService.value?.id,
            customer: selectedCustomer.value?.id,
            message: selectedNotice.value,
            date: selectedDateTime.value.date,
            time: selectedDateTime.value.time,
          });

          nextStep();
        } catch {
          hasError.value = true;
        }
      }
    }

    return {
      confirm,
      selectedCompany,
      selectedService,
      selectedStaff,
      selectedCustomer,
      selectedDateTime,
      selectedNotice,
      hasError,
      honeypotChecked,
      termsChecked,
      termsError,
      getHumanReadableDateTime,
    };
  },
});
</script>
