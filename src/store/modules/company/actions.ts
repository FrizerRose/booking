/* eslint-disable @typescript-eslint/camelcase */
// Cyclical dependency needed to make vuex fully typed.
import { CompanyService } from '@/api';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { ApiError } from '@/types/customError';
import { ActionContext, ActionTree } from 'vuex';
import ServiceMutationTypes from '../service/mutation-types';
import { Mutations as ServiceMutations } from '../service/mutations';
import SharedMutationTypes from '../shared/mutation-types';
import { Mutations as SharedMutations } from '../shared/mutations';
import LocalActionTypes from './action-types';
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
        console.log(response.data);

        let icons = [];
        if (response.data.image?.link) {
          icons = [
            {
              src: `${response.data.image.link}`,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: `${response.data.image.link}`,
              sizes: '512x512',
              type: 'image/png',
            },
          ];
        } else {
          icons = [
            {
              src: `https://${response.data.bookingPageSlug}.dolazim.hr/img/icons/android-chrome-192x192.png`,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: `https://${response.data.bookingPageSlug}.dolazim.hr/img/icons/android-chrome-512x512.png`,
              sizes: '512x512',
              type: 'image/png',
            },
          ];
        }

        const myDynamicManifest = {
          name: `${response.data.name}`, // ovo je ime koje piše samo kod dodavanja shortcuta
          short_name: `${response.data.name}`, // ovo je tekst koji piše ispod shortcuta nakon što je dodan
          description: `Zakaži termin preko weba - ${response.data.name}`,
          start_url: `https://${response.data.bookingPageSlug}.dolazim.hr`,
          icons,
          background_color: '#ffffff', // ovo radi, a za theme_color treba pwa u vue.config.js
        };
        const stringManifest = JSON.stringify(myDynamicManifest);
        const blob = new Blob([stringManifest], { type: 'application/json' });
        const manifestURL = URL.createObjectURL(blob);
        const manifestElement = document.querySelector('#manifest');
        console.log('🚀 ~ file: actions.ts ~ line 78 ~ manifestElement', manifestElement);
        if (manifestElement) {
          manifestElement.setAttribute('href', manifestURL);
        }

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

        if (response.data.preferences.hasBorders) {
          document.documentElement.className = `${document.documentElement.className} display-borders`;
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
