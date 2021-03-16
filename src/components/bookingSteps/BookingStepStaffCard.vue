<template>
  <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
    <div v-if="hasError">
      <h1>Greška. Molimo pokušajte kasnije.</h1>
    </div>
    <div
      v-else
      class="o-background-wrap"
    >
      <div class="o-background -has-shadow" />
      <article class="c-card-service has-links-inside">
        <div class="o-layout || o-flex">
          <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
            <figure class="c-card-service_image-wrap -max-width || o-ratio">
              <img
                v-if="isIDontCare"
                class="c-card-service_image"
                src="https://i.postimg.cc/3xvBQ32k/ios-10-shrug-emoji-0.png"
                alt="img text"
              >
              <img
                v-if="!isIDontCare && staff.image && staff.image.link"
                class="c-card-service_image"
                :src="staff.image.link"
                alt="img text"
              >
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
  </li>
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

    async function selectStaff() {
      const chosenStaffID = [];

      // Create a list of selected Staff
      if (props.isIDontCare) {
        // Add all Staff
        const allStaff = computed(() => store.state.staff.allStaff);
        chosenStaffID.push(...allStaff.value.map((worker) => worker.id));
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
