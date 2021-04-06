import { computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import ActionTypes from '@/store/action-types';
import * as punycode from 'punycode';

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

export function fetchCompanyFromURL() {
  const store = useStore();

  let companyID: string | number = 1;
  if (process.env.NODE_ENV === 'production') {
    const urlFragments = window.location.hostname.split('.');
    [companyID] = urlFragments;
    if (companyID === 'dolazim') {
      window.location.href = 'https://landing.dolazim.hr';
    }
    if (companyID.slice(0, 4) === 'xn--') {
      companyID = punycode.decode(companyID.slice(4));
    }
  } else if (process.env.VUE_APP_COMPANY_ID) {
    companyID = parseInt(process.env.VUE_APP_COMPANY_ID, 10);
  }

  store.dispatch(ActionTypes.FETCH_COMPANY, companyID);
}
