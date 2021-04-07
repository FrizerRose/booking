<template>
  <div class="o-layout o-list -gutter-1">
    <div class="o-layout_item u-1/2 o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <article class="c-card-service has-links-inside">
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
                    d="M6 9a1 1 0 110-2h12a1 1 0 01.707 1.707L8.414 19H18a1 1 0 010 2H6a1 1 0 01-.707-1.707L15.586 9H6zM8.893 1.293a1 1 0
                    011.414 0L12 2.986l1.693-1.693a1 1 0 111.414 1.414l-2.4 2.4a1 1 0 01-1.414 0l-2.4-2.4a1 1 0 010-1.414z"
                  />
                </svg>
              </span>
            </div>
          </figure>
          <div class="c-card-service_info u-margin-top u-height-100">
            <div class="o-vertical u-height-100">
              <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                <button
                  class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                  @click="selectSex('female')"
                >
                  <span class="has-links-inside_background" />
                  <span class="c-button_label">Za žene</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="o-layout_item u-1/2 o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <article class="c-card-service has-links-inside">
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
                    d="M4.617 5.076a1 1 0 011.09.217l6.493 6.493 6.493-6.493A1 1 0 0120.4 6v12a1 1 0 11-2 0V8.414l-5.493 5.493a1 1 0
                    01-1.414 0L6 8.414V18a1 1 0 11-2 0V6a1 1 0 01.617-.924z"
                  />
                </svg>
              </span>
            </div>
          </figure>
          <div class="c-card-service_info u-margin-top u-height-100">
            <div class="o-vertical u-height-100">
              <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                <button
                  class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                  @click="selectSex('male')"
                >
                  <span class="has-links-inside_background" />
                  <span class="c-button_label">Za muškarce</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="o-layout_item o-list_item">
      <div class="o-background-wrap">
        <div class="o-background -has-shadow -overflow" />
        <div class="o-background -has-bg -overflow" />
        <div class="o-background -has-border -overflow -theme-color" />
        <article class="c-card-service has-links-inside">
          <div class="c-card-service_info -max-width u-height-100">
            <div class="o-vertical u-height-100">
              <div class="o-vertical_item" />
              <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                <button
                  class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                  @click="selectSex('both')"
                >
                  <span class="has-links-inside_background" />
                  <span class="c-button_label">Svejedno mi je</span>
                </button>
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
