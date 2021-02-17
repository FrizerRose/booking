<template>
  <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
    <div class="o-background-wrap">
      <div class="o-background -has-shadow" />
      <article class="c-card-service has-links-inside">
        <div class="o-layout || o-flex">
          <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
            <figure class="c-card-service_image-wrap -max-width || o-ratio">
              <img
                class="c-card-service_image"
                src="https://source.unsplash.com/random"
                alt="img text"
              >
            </figure>
          </div>
          <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
            <div class="c-card-service_info u-margin-left u-height-100">
              <div class="o-vertical u-height-100">
                <div class="o-vertical_item">
                  <h1 class="c-card-service_heading">
                    {{ staff.name }}
                  </h1>
                </div>
                <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
                  <button
                    class="c-button -tab || has-links-inside_main-link || u-margin-top-3"
                    @click="nextStep()"
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
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import ActionTypes from '@/store/action-types';
// import Staff from '@/types/staff';

export default defineComponent({
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    async function nextStep() {
      // store.commit(MutationTypes.CHANGE_SELECTED_STAFF, props.staff as Staff);
      await store.dispatch(ActionTypes.FETCH_STAFF_BY_ID, props.staff.id);
      window.scrollTo(0, 0);
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

    return {
      nextStep,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
