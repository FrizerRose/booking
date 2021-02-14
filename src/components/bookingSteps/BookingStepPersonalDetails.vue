<template>
  <li
    id="tab-vasi-podatci"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-vasi-podatci"
  >
    <form class="c-form">
      <div class="c-form_item || has-error">
        <label
          class="c-form_label"
          for="id-form-name"
        >
          Name
          <span
            v-if="isError"
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
          <div class="o-background" />
          <input
            id="id-form-name"
            class="c-form_input"
            type="text"
          >
        </div>
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="id-form-email"
        >
          Email
          <span
            v-if="isError"
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
          <div class="o-background" />
          <input
            id="id-form-email"
            class="c-form_input"
            type="email"
          >
        </div>
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="phone"
        >
          Phone
          <span
            v-if="isError"
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
          <div class="o-background" />
          <input
            id="phone"
            class="c-form_input"
            type="tel"
            name="phone"
          >
        </div>
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="id-form-textarea"
        >
          Textarea
          <span
            v-if="isError"
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
          <div class="o-background" />
          <textarea
            id="if-form-textarea"
            class="c-form_textarea"
          />
        </div>
      </div>
      <div class="c-form_item || has-error">
        <input
          id="id-form-checkbox"
          class="c-form_checkbox"
          type="checkbox"
        >
        <label
          class="c-form_checkboxLabel"
          for="id-form-checkbox"
        >
          Prihvaćam uvjete
          <span
            v-if="isError"
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
          <span class="-before">
            <div class="o-background-wrap -is-input -is-checkbox">
              <div class="o-background" />
            </div>
          </span>
          <span class="-after" />
        </label>
      </div>
      <button
        class="c-button -primary || is-submit"
        type="submit"
        @click="nextStep()"
      >
        <span class="c-button_label">Submit</span>
      </button>
    </form>
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
