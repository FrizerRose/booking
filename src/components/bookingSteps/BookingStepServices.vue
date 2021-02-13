<template>
  <li
    id="tab-usluge"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-usluge"
  >
    <!-- usluge -->
    <ul class="o-layout o-list XXXXXXXX-gutter">
      <li
        v-for="service in services"
        :key="service.id"
        class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
      >
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
                    {{ service.name }}
                  </h1>
                  <button
                    class="c-button -primary || has-links-inside_main-link"
                    @click="nextStep()"
                  >
                    <span class="c-button_label">cta</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </li>
    </ul>
    <!-- ends usluge -->
  </li>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

export default defineComponent({
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    function nextStep() {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
    }

    const services = computed(() => store.state.service.services);

    return {
      nextStep,
      services,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
