<template>
  <div class="o-layout o-list -gutter-1">
    <div class="o-layout_item o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <article class="c-card-service has-links-inside">
          <div class="o-layout -gutter-1 || o-flex">
            <div class="o-layout_item u-1/2@to-medium u-1/4@from-medium">
              <figure class="c-card-service_image-wrap -max-width || o-ratio u-rounded">
                <div class="o-ratio_content">
                  <span class="o-icon c-card-service_image u-objfit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.484 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 0112.9 19V5a1 1 0 01.584-.91zM14.9 7.187v9.628L20.47 12 14.9 7.186z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.584 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 013 19V5a1 1 0 01.584-.91zM5 7.187v9.628L10.57 12 5 7.186z"
                      />
                    </svg>
                  </span>
                </div>
              </figure>
            </div>
            <div class="o-layout_item u-1/2@to-medium u-3/4@from-medium">
              <div class="c-card-service_info u-height-100">
                <div class="o-vertical u-height-100">
                  <div class="o-vertical_item">
                    <h1 class="c-card-service_heading">
                      Svejedno mi je
                    </h1>
                  </div>
                  <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                    <button
                      class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                      @click="selectSex('both')"
                    >
                      <span class="has-links-inside_background" />
                      <span class="c-button_label">Odaberi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="o-layout_item u-1/2@from-medium o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <article class="c-card-service has-links-inside">
          <div class="o-layout -gutter-1 || o-flex">
            <div class="o-layout_item u-1/2@to-medium u-1/3@from-medium">
              <figure class="c-card-service_image-wrap -max-width || o-ratio u-rounded">
                <div class="o-ratio_content">
                  <span class="o-icon c-card-service_image u-objfit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.484 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 0112.9 19V5a1 1 0 01.584-.91zM14.9 7.187v9.628L20.47 12 14.9 7.186z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.584 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 013 19V5a1 1 0 01.584-.91zM5 7.187v9.628L10.57 12 5 7.186z"
                      />
                    </svg>
                  </span>
                </div>
              </figure>
            </div>
            <div class="o-layout_item u-1/2@to-medium u-2/3@from-medium">
              <div class="c-card-service_info u-height-100">
                <div class="o-vertical u-height-100">
                  <div class="o-vertical_item">
                    <h1 class="c-card-service_heading">
                      Za žene
                    </h1>
                  </div>
                  <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                    <button
                      class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                      @click="selectSex('female')"
                    >
                      <span class="has-links-inside_background" />
                      <span class="c-button_label">Odaberi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="o-layout_item u-1/2@from-medium o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <article class="c-card-service has-links-inside">
          <div class="o-layout -gutter-1 || o-flex">
            <div class="o-layout_item u-1/2@to-medium u-1/3@from-medium">
              <figure class="c-card-service_image-wrap -max-width || o-ratio u-rounded">
                <div class="o-ratio_content">
                  <span class="o-icon c-card-service_image u-objfit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.484 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 0112.9 19V5a1 1 0 01.584-.91zM14.9 7.187v9.628L20.47 12 14.9 7.186z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.584 4.09a1 1 0 011.07.153l8.1 7a1 1 0 010
                    1.514l-8.1 7A1 1 0 013 19V5a1 1 0 01.584-.91zM5 7.187v9.628L10.57 12 5 7.186z"
                      />
                    </svg>
                  </span>
                </div>
              </figure>
            </div>
            <div class="o-layout_item u-1/2@to-medium u-2/3@from-medium">
              <div class="c-card-service_info u-height-100">
                <div class="o-vertical u-height-100">
                  <div class="o-vertical_item">
                    <h1 class="c-card-service_heading">
                      Za muškarce
                    </h1>
                  </div>
                  <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                    <button
                      class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                      @click="selectSex('male')"
                    >
                      <span class="has-links-inside_background" />
                      <span class="c-button_label">Odaberi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import { nextStep } from '@/utils/helpers';

export default defineComponent({
  setup() {
    const store = useStore();

    function selectSex(sex: string) {
      store.commit(MutationTypes.CHANGE_SELECTED_SEX, sex);

      nextStep();
    }

    return {
      selectSex,
    };
  },
});
</script>
