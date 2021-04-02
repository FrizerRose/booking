// Cyclical dependency needed to make vuex fully typed.
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ActionContext, ActionTree } from 'vuex';
import { CompanyService } from '@/api';
import { ApiError } from '@/types/customError';
import LocalActionTypes from './action-types';
import ServiceMutationTypes from '../service/mutation-types';
import SharedMutationTypes from '../shared/mutation-types';
import { Mutations as ServiceMutations } from '../service/mutations';
import { Mutations as SharedMutations } from '../shared/mutations';
import { State } from './state';

// Constraints commit to mutations from the right module
type AugmentedSharedActionContext = {
  commit<K extends keyof SharedMutations>(
    key: K,
    payload: Parameters<SharedMutations[K]>[1],
  ): ReturnType<SharedMutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

type AugmentedServiceActionContext = {
  commit<K extends keyof ServiceMutations>(
    key: K,
    payload: Parameters<ServiceMutations[K]>[1],
  ): ReturnType<ServiceMutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LocalActionTypes.FETCH_COMPANY](
    { commit }: AugmentedSharedActionContext & AugmentedServiceActionContext,
    id: number | string
  ): void;
}

// API access.
const companyService = new CompanyService();

// Action implementation.
export const actions: ActionTree<State, RootState> & Actions = {
  async [LocalActionTypes.FETCH_COMPANY]({ commit }, id: number | string) {
    try {
      let response;
      if (typeof id === 'number') {
        response = await companyService.get(id);
      } else {
        response = await companyService.getBySlug(id);
      }

      commit(SharedMutationTypes.CHANGE_IS_COMPANY_FETCHED, true);

      if (response.status === 200 && response.data) {
        commit(SharedMutationTypes.CHANGE_IS_COMPANY_PUBLIC, response.data.isPublic);
        commit(SharedMutationTypes.CHANGE_SELECTED_COMPANY, response.data);
        commit(ServiceMutationTypes.CHANGE_SERVICES, response.data.services);
        document.documentElement.className = response.data.preferences.colorVariant;
        if (response.data.preferences.hasDarkMode) {
          document.documentElement.className = `${document.documentElement.className} mode-dark`;
        }

        if (response.data.preferences.hasPattern) {
          document.documentElement.className = `${document.documentElement.className} pattern-zigzag`;
        }
      } else {
        throw new ApiError('No company by this ID.');
      }
    } catch {
      commit(SharedMutationTypes.CHANGE_IS_COMPANY_FETCHED, true);
      throw new ApiError('No company by this ID.');
    }
  },
};
