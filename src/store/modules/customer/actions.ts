// Cyclical dependency needed to make vuex fully typed.
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ActionContext, ActionTree } from 'vuex';
import { CustomerService } from '@/api';
import { ApiError } from '@/types/customError';
import Customer from '@/types/customer';
import { AxiosResponse } from 'axios';
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
  [LocalActionTypes.CREATE_CUSTOMER](
    { commit }: AugmentedActionContext & AugmentedSharedActionContext,
    payload: Customer
  ): Promise<AxiosResponse>;
}

// API access.
const customerService = new CustomerService();

// Action implementation.
export const actions: ActionTree<State, RootState> & Actions = {
  async [LocalActionTypes.CREATE_CUSTOMER]({ commit }, payload: Customer): Promise<AxiosResponse> {
    const response = await customerService.create(payload);
    console.log(response, response.data);
    if (response.status === 201 && response.data !== undefined) {
      commit(LocalMutationTypes.CHANGE_CUSTOMER, response.data);
      commit(SharedMutationTypes.CHANGE_SELECTED_CUSTOMER, response.data);
    } else {
      throw new ApiError('No customer by this ID.');
    }

    return response;
  },
};
