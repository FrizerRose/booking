<template>
  <div class="o-layout">
    <div class="o-layout_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <div class="u-padding">
          <form class="c-form">
            <div :class="{'c-form_item': true, 'has-error': formData.name.error}">
              <label
                class="c-form_label"
                for="id-form-name"
              >
                Ime
                <span
                  v-if="formData.name.error"
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
              </label>
              <div class="o-background-wrap -is-input">
                <div class="o-background -delay-1" />
                <input
                  id="id-form-name"
                  v-model="formData.name.data"
                  class="c-form_input"
                  type="text"
                  @change="formData.name.error = false"
                >
              </div>
            </div>
            <div :class="{'c-form_item': true, 'has-error': formData.email.error}">
              <label
                class="c-form_label"
                for="id-form-email"
              >
                E-mail
                <span
                  v-if="formData.email.error"
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
              </label>
              <div class="o-background-wrap -is-input">
                <div class="o-background -delay-2" />
                <input
                  id="id-form-email"
                  v-model="formData.email.data"
                  class="c-form_input"
                  type="email"
                  @change="formData.email.error = false"
                >
              </div>
            </div>
            <div :class="{'c-form_item': true, 'has-error': formData.phone.error}">
              <label
                class="c-form_label"
                for="phone"
              >
                Mobitel
                <span
                  v-if="formData.phone.error"
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
              </label>
              <div class="o-background-wrap -is-input">
                <div class="o-background -delay-3" />
                <input
                  id="phone"
                  v-model="formData.phone.data"
                  class="c-form_input"
                  type="tel"
                  name="phone"
                  @change="formData.phone.error = false"
                >
              </div>
            </div>
            <div :class="{'c-form_item': true, 'has-error': formData.message.error}">
              <label
                class="c-form_label"
                for="id-form-textarea"
              >
                Napomena
                <span
                  v-if="formData.message.error"
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
              </label>
              <div class="o-background-wrap -is-input">
                <div class="o-background -delay-4" />
                <textarea
                  id="if-form-textarea"
                  v-model="formData.message.data"
                  class="c-form_textarea"
                  @change="formData.message.error = false"
                />
              </div>
            </div>
            <div :class="{'c-form_item': true, 'has-error': formData.terms.error}">
              <label class="c-form_label u-margin-bottom-0">
                <span
                  v-if="formData.terms.error"
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
              </label>
              <input
                id="id-form-checkbox"
                v-model="formData.terms.data"
                class="c-form_checkbox"
                type="checkbox"
                @change="formData.terms.error = false"
              >
              <label
                class="c-form_checkboxLabel"
                for="id-form-checkbox"
              >
                Prihvaćam primitak e-mail poruke s potvrdom rezervacije i podsjetnikom za odabrani termin
                <span class="-before">
                  <div class="o-background-focus-wrap">
                    <div class="o-background-focus" />
                  </div>
                  <div class="o-background-wrap -is-input -is-checkbox">
                    <div class="o-background -delay-5" />
                  </div>
                </span>
                <span class="-after" />
              </label>
            </div>
            <div
              v-if="hasError"
              class="c-form_dialog"
            >
              <div class="o-background-wrap -is-dialog -is-error">
                <div class="o-background" />
                <p>{{ errorMsg }}</p>
              </div>
            </div>
            <div class="c-form_submit">
              <button
                class="c-button -secondary -submit"
                type="submit"
                @click.prevent="submitForm()"
              >
                <span class="c-button_label">Potvrdi</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent, computed, reactive, ref,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import ActionTypes from '@/store/action-types';
import Customer from '@/types/customer';
import { nextStep, isEmail } from '@/utils/helpers';

export default defineComponent({
  setup() {
    const store = useStore();
    const company = computed(() => store.state.shared.selectedCompany);
    const selectedCustomer = computed(() => store.state.shared.selectedCustomer);
    const selectedNotice = computed(() => store.state.shared.selectedNotice);

    const formData = reactive({
      name: { data: '', error: false },
      email: { data: '', error: false },
      phone: { data: '', error: false },
      message: { data: '', error: false },
      terms: { data: false, error: false },
    });

    // Pre-fil data if user has previously submitted it
    if (selectedCustomer.value) {
      formData.name.data = selectedCustomer.value.name;
      formData.email.data = selectedCustomer.value.email;
      formData.phone.data = selectedCustomer.value.name;
      formData.terms.data = true;
    }

    if (selectedNotice.value) {
      formData.message.data = selectedNotice.value;
    }

    const hasError = ref(false);
    const errorMsg = ref('');

    async function submitForm() {
      // Reset error value on every submit
      hasError.value = false;

      if (formData.name.data === '') {
        formData.name.error = true;
        hasError.value = true;
      } else {
        formData.name.error = false;
      }
      if (formData.email.data === ''
      || !isEmail(formData.email.data)) {
        formData.email.error = true;
        hasError.value = true;
      } else {
        formData.email.error = false;
      }
      if (formData.terms.data === false) {
        formData.terms.error = true;
        hasError.value = true;
      } else {
        formData.terms.error = false;
      }

      // Some fields missing, display error msg
      if (hasError.value) {
        errorMsg.value = 'Molimo vas da ispunite naznačena polja i pokušate ponovo.';
      } else {
        try {
          await store.dispatch(ActionTypes.CREATE_CUSTOMER, {
            name: formData.name.data,
            email: formData.email.data,
            phone: formData.phone.data,
            company: company.value?.id,
          } as Customer);

          store.commit(MutationTypes.CHANGE_SELECTED_NOTICE, formData.message.data.replace(/(<([^>]+)>)/gi, ''));
          nextStep();
        } catch {
          hasError.value = true;
          errorMsg.value = 'Imamo problem sa serverom. Molimo pokušajte kasnije.';
        }
      }
    }

    return {
      submitForm,
      formData,
      hasError,
      errorMsg,
    };
  },
});
</script>
