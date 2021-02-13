<template>
  <li
    id="tab-vasi-podatci"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-vasi-podatci"
  >
    <form class="c-form">
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="id-form-name"
        >Name</label>
        <input
          id="id-form-name"
          class="c-form_input"
          type="text"
        >
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="id-form-email"
        >Email</label>
        <input
          id="id-form-email"
          class="c-form_input"
          type="email"
        >
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="phone"
        >Phone</label>
        <input
          id="phone"
          class="c-form_input"
          type="tel"
          name="phone"
        >
      </div>
      <div class="c-form_item">
        <label
          class="c-form_label"
          for="id-form-textarea"
        >Textarea</label>
        <textarea
          id="if-form-textarea"
          class="c-form_textarea"
        />
      </div>
      <div class="c-form_item">
        <input
          id="id-form-checkbox"
          class="c-form_checkbox"
          type="checkbox"
        >
        <label
          class="c-form_checkbox-label"
          for="id-form-checkbox"
        >Prihvaćam uvjete</label>
      </div>
      <button
        class="c-button -primary"
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
