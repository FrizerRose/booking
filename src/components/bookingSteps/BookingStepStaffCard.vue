<template>
  <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
    <div class="o-background-wrap">
      <div class="o-background -has-shadow" />
      <article class="c-card-service has-links-inside">
        <div class="o-layout">
          <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
            <figure class="c-card-service_image-wrap -max-width || o-ratio">
              <img
                class="c-card-service_image"
                src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                alt="img text"
              >
            </figure>
          </div>
          <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
            <div class="c-card-service_info">
              <h1 class="c-heading">
                {{ staff.name }}
              </h1>

              <button
                class="c-button -primary || has-links-inside_main-link"
                @click="nextStep()"
              >
                <span class="c-button_label">Odaberi</span>
              </button>
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
