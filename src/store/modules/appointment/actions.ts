// Cyclical dependency needed to make vuex fully typed.
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ActionContext, ActionTree } from 'vuex';
import { AppointmentService } from '@/api';
import { ApiError } from '@/types/customError';
import LocalActionTypes from './action-types';
import LocalMutationTypes from './mutation-types';
import SharedMutationTypes from '../shared/mutation-types';
import { Mutations } from './mutations';
import { Mutations as SharedMutations } from '../shared/mutations';
import { State } from './state';

// Constraints commit to mutations from the right module
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

type AugmentedSharedActionContext = {
  commit<K extends keyof SharedMutations>(
    key: K,
    payload: Parameters<SharedMutations[K]>[1],
  ): ReturnType<SharedMutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LocalActionTypes.FETCH_APPOINTMENT](
    { commit }: AugmentedActionContext,
    id: number
  ): void;
  [LocalActionTypes.CREATE_APPOINTMENT](
    { commit }: AugmentedSharedActionContext,
    payload: object
  ): void;
}

// API access.
const appointmentService = new AppointmentService();

// Action implementation.
export const actions: ActionTree<State, RootState> & Actions = {
  async [LocalActionTypes.FETCH_APPOINTMENT]({ commit }, id: number) {
    const response = await appointmentService.get(id);
    console.log(response, response.data);
    if (response.status === 200 && response.data !== undefined) {
      commit(LocalMutationTypes.CHANGE_APPOINTMENT, response.data);
    } else {
      throw new ApiError('No appointment by this ID.');
    }
  },
  async [LocalActionTypes.CREATE_APPOINTMENT]({ commit }, payload) {
    const response = await appointmentService.create(payload);
    if (response.status === 201 && response.data !== undefined) {
      commit(SharedMutationTypes.CHANGE_CREATED_APPOINTMENT, response.data);
    } else {
      throw new ApiError('Could not create an appointment.');
    }
  },
};
