// Cyclical dependency needed to make vuex fully typed.
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ActionContext, ActionTree } from 'vuex';
import { CompanyService } from '@/api';
import { ApiError } from '@/types/customError';
import LocalActionTypes from './action-types';
import ServiceMutationTypes from '../service/mutation-types';
import StaffMutationTypes from '../staff/mutation-types';
import SharedMutationTypes from '../shared/mutation-types';
import { Mutations as ServiceMutations } from '../service/mutations';
import { Mutations as StaffMutations } from '../staff/mutations';
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

type AugmentedStaffActionContext = {
  commit<K extends keyof StaffMutations>(
    key: K,
    payload: Parameters<StaffMutations[K]>[1],
  ): ReturnType<StaffMutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [LocalActionTypes.FETCH_COMPANY](
    { commit }: AugmentedSharedActionContext & AugmentedServiceActionContext & AugmentedStaffActionContext,
    id: number
  ): void;
}

// API access.
const companyService = new CompanyService();

// Action implementation.
export const actions: ActionTree<State, RootState> & Actions = {
  async [LocalActionTypes.FETCH_COMPANY]({ commit }, id: number) {
    const response = await companyService.get(id);
    if (response.status === 200 && response.data !== undefined) {
      commit(SharedMutationTypes.CHANGE_SELECTED_COMPANY, response.data);
      commit(ServiceMutationTypes.CHANGE_SERVICES, response.data.services);
      commit(StaffMutationTypes.CHANGE_STAFF, response.data.staff);
    } else {
      throw new ApiError('No company by this ID.');
    }
  },
};
