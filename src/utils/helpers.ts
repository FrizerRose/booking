import { computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

// Increments the current step and scrolls to the top of the page.
export function nextStep(increment = 1) {
  const store = useStore();
  const currentStep = computed(() => store.state.shared.currentStep);
  store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + increment);

  window.scrollTo(0, 0);
}

export function isEmail(email: string) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
