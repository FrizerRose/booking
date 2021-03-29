<template>
  <div class="o-layout_item o-list_item">
    <div v-if="hasError">
      <h1>Greška. Molimo pokušajte kasnije.</h1>
    </div>
    <div
      v-else
      class="o-background-wrap"
    >
      <div class="o-background -has-shadow  -overflow" />
      <div class="o-background-wrap -overflow">
        <div class="o-background -has-bg" />
        <article class="c-card-service has-links-inside">
          <div class="o-layout || o-flex">
            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
              <figure class="c-card-service_image-wrap -max-width || o-ratio u-rounded">
                <div class="o-ratio_content">
                  <img
                    v-if="isIDontCareOld"
                    class="c-card-service_image u-objfit"
                    src="https://i.postimg.cc/3xvBQ32k/ios-10-shrug-emoji-0.png"
                    alt="img text"
                  >
                  <span
                    v-if="isIDontCare"
                    class="o-icon c-card-service_image u-objfit"
                  >
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
                  <span
                    v-if="staff.image === null"
                    class="o-icon c-card-service_image u-objfit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.754 4a2.288 2.288 0 100 4.575 2.288 2.288
                      0 000-4.575zM7.466 6.288a4.288 4.288 0 118.575 0 4.288 4.288 0 01-8.575 0zM18.394 12.32a1 1 0
                      01-.068 1.034l-5.753 8.22a1 1 0 01-1.639 0l-5.753-8.22A1 1 0 016 11.781h11.507a1 1 0 01.887.538zm-2.808
                      1.46H7.921l3.832 5.476 3.833-5.475z"
                      />
                    </svg>
                  </span>
                  <img
                    v-if="!isIDontCare && staff.image && staff.image.link"
                    class="c-card-service_image u-objfit"
                    :src="staff.image.link"
                    alt="img text"
                  >
                </div>
              </figure>
            </div>
            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
              <div class="c-card-service_info u-margin-left u-height-100">
                <div class="o-vertical u-height-100">
                  <div class="o-vertical_item">
                    <h1
                      v-if="isIDontCare"
                      class="c-card-service_heading"
                    >
                      Svejedno mi je
                    </h1>
                    <h1
                      v-else
                      class="c-card-service_heading"
                    >
                      {{ staff.name }}
                    </h1>
                  </div>
                  <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                    <button
                      class="c-button -primary -step || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                      @click="selectStaff()"
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import ActionTypes from '@/store/action-types';
import Staff from '@/types/staff';
import { nextStep } from '@/utils/helpers';

export default defineComponent({
  props: {
    staff: {
      type: Object,
      required: false,
      default: (() => ({ id: 1, name: '' })),
    },
    isIDontCare: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const hasError = ref(false);

    const selectedService = computed(() => store.state.shared.selectedService);

    async function selectStaff() {
      const chosenStaffID = [];

      // Create a list of selected Staff
      if (props.isIDontCare) {
        // Add all Staff
        if (selectedService.value?.staff) {
          chosenStaffID.push(...selectedService.value.staff.map((worker) => worker.id));
        }
      } else {
        // Add selected Staff
        chosenStaffID.push(props.staff.id);
        store.commit(MutationTypes.CHANGE_SELECTED_STAFF, props.staff as Staff);
      }

      // Get details about the chosen Staff (reserved appointments)
      try {
        await store.dispatch(ActionTypes.FETCH_STAFF_BY_ID, chosenStaffID);
        nextStep();
      } catch {
        hasError.value = true;
      }
    }

    return {
      selectStaff,
      hasError,
    };
  },
});
</script>
