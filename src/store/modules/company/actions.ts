// Cyclical dependency needed to make vuex fully typed.
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ActionContext, ActionTree } from 'vuex';
import { CompanyService } from '@/api';
import { ApiError } from '@/types/customError';
import LocalActionTypes from './action-types';
import ServiceMutationTypes from '../service/mutation-types';
import LocalMutationTypes from './mutation-types';
import { Mutations } from './mutations';
import { Mutations as ServiceMutations } from '../service/mutations';
import { State } from './state';

// Constraints commit to mutations from the right module
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

type AugmentedServiceActionContext = {
  commit<K extends keyof ServiceMutations>(
    key: K,
    payload: Parameters<ServiceMutations[K]>[1],
  ): ReturnType<ServiceMutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LocalActionTypes.FETCH_COMPANY](
    { commit }: AugmentedActionContext & AugmentedServiceActionContext,
    id: number
  ): void;
}

// API access.
const companyService = new CompanyService();

// Action implementation.
export const actions: ActionTree<State, RootState> & Actions = {
  async [LocalActionTypes.FETCH_COMPANY]({ commit }, id: number) {
    const response = await companyService.get(id);
    console.log(response, response.data);
    if (response.status === 200 && response.data !== undefined) {
      commit(LocalMutationTypes.CHANGE_COMPANY, response.data);
      commit(ServiceMutationTypes.CHANGE_SERVICES, response.data.services);
    } else {
      throw new ApiError('No company by this ID.');
    }
  },
};
