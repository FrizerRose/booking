import Service from '@/types/service';
import Staff from '@/types/staff';
import { MutationTree } from 'vuex';
import LocalMutationTypes from './mutation-types';
import { State } from './state';

// Blueprint for mutations. All of them have to be implemented.
export type Mutations<S = State> = {
  [LocalMutationTypes.CHANGE_CURRENT_STEP](state: S, payload: number): void;
  [LocalMutationTypes.CHANGE_SELECTED_SERVICE](state: S, payload: Service | null): void;
  [LocalMutationTypes.CHANGE_SELECTED_STAFF](state: S, payload: Staff | null): void;
  [LocalMutationTypes.CHANGE_SELECTED_DATETIME](state: S, payload: number | null): void;
  [LocalMutationTypes.CHANGE_PERSONAL_DETAILS](state: S, payload: unknown): void;
}

// Mutuation implementation.
export const mutations: MutationTree<State> & Mutations = {
  [LocalMutationTypes.CHANGE_CURRENT_STEP](state, payload: number) {
    state.currentStep = payload;
  },
  [LocalMutationTypes.CHANGE_SELECTED_SERVICE](state, payload: Service | null) {
    state.selectedService = payload;
  },
  [LocalMutationTypes.CHANGE_SELECTED_STAFF](state, payload: Staff | null) {
    state.selectedStaff = payload;
  },
  [LocalMutationTypes.CHANGE_SELECTED_DATETIME](state, payload: number | null) {
    state.selectedDateTime = payload;
  },
  [LocalMutationTypes.CHANGE_PERSONAL_DETAILS](state, payload: unknown) {
    state.personalDetails = payload;
  },
};
