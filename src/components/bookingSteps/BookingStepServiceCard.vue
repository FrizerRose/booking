<template>
  <li
    class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
  >
    <div class="o-background-wrap">
      <div class="o-background -has-shadow" />
      <article
        v-if="!isCompactMode"
        class="c-card-service has-links-inside"
      >
        <div class="o-layout || o-flex">
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
            <div class="c-card-service_info u-height-100">
              <div class="o-vertical u-height-100">
                <div class="o-vertical_item">
                  <h1 class="c-heading">
                    {{ service.name }}
                  </h1>
                  <span class="o-tag">
                    <span class="o-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5a7.002 7.002 0 00-6.382 4.12 1 1 0 01-1.822-.825 9 9 0 11-.409 6.324l-1.001 1.43a1 1 0
                        11-1.639-1.147l2.434-3.476a1 1 0 011.393-.245l3.475 2.433a1 1 0 11-1.147 1.639l-1.563-1.095A7 7 0 1012 5z"
                        />
                        <path d="M12 6.2a1 1 0 011 1v4.182l2.647 1.324a1 1 0 11-.894 1.788l-3.2-1.6A1 1 0 0111 12V7.2a1 1 0 011-1z" />
                      </svg>
                    </span>
                    <span class="o-tag_label">duration</span>
                  </span>
                </div>
                <div class="o-vertical_item o-flex -justify-end -align-center">
                  <span class="o-tag || u-margin-left">
                    <span class="o-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.91 3a1 1 0 10-2 0v2.273H9.863a3.864 3.864 0 000 7.727h1.045v3.727H7a1 1 0 100 2h3.91V21a1 1 0
                        102 0v-2.273h1.044a3.864 3.864 0 000-7.727H12.91V7.273H16a1 1 0 100-2h-3.09V3zM9.863 7.273a1.864 1.864
                        0 100 3.727h1.045V7.273H9.864zm4.09 9.454a1.864 1.864 0 000-3.727H12.91v3.727h1.045z"
                        />
                      </svg>
                    </span>
                    <span class="o-tag_label">price</span>
                  </span>
                  <button
                    class="c-button -primary || has-links-inside_main-link || u-margin-left"
                    @click="nextStep()"
                  >
                    <span class="has-links-inside_background" />
                    <span class="c-button_label">cta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article
        v-if="isCompactMode"
        class="c-card-service has-links-inside"
      >
        <div class="c-card-service_info">
          <div class="o-vertical u-height-100">
            <div class="o-vertical_item">
              <h1 class="c-heading">
                {{ service.name }}
              </h1>
              <span class="o-tag">
                <span class="o-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5a7.002 7.002 0 00-6.382 4.12 1 1 0 01-1.822-.825 9 9 0 11-.409 6.324l-1.001 1.43a1 1 0
                        11-1.639-1.147l2.434-3.476a1 1 0 011.393-.245l3.475 2.433a1 1 0 11-1.147 1.639l-1.563-1.095A7 7 0 1012 5z"
                    />
                    <path d="M12 6.2a1 1 0 011 1v4.182l2.647 1.324a1 1 0 11-.894 1.788l-3.2-1.6A1 1 0 0111 12V7.2a1 1 0 011-1z" />
                  </svg>
                </span>
                <span class="o-tag_label">duration</span>
              </span>
            </div>
            <div class="o-vertical_item o-flex -justify-end -align-center">
              <span class="o-tag || u-margin-left">
                <span class="o-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.91 3a1 1 0 10-2 0v2.273H9.863a3.864 3.864 0 000 7.727h1.045v3.727H7a1 1 0 100 2h3.91V21a1 1 0
                        102 0v-2.273h1.044a3.864 3.864 0 000-7.727H12.91V7.273H16a1 1 0 100-2h-3.09V3zM9.863 7.273a1.864 1.864
                        0 100 3.727h1.045V7.273H9.864zm4.09 9.454a1.864 1.864 0 000-3.727H12.91v3.727h1.045z"
                    />
                  </svg>
                </span>
                <span class="o-tag_label">price</span>
              </span>
              <button
                class="c-button -primary || has-links-inside_main-link || u-margin-left"
                @click="nextStep()"
              >
                <span class="has-links-inside_background" />
                <span class="c-button_label">cta</span>
              </button>
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
import Service from '@/types/service';

export default defineComponent({
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    const isCompactMode = ref(false);
    isCompactMode.value = true;

    function nextStep() {
      store.commit(MutationTypes.CHANGE_CURRENT_STEP, currentStep.value + 1);
      store.commit(MutationTypes.CHANGE_STAFF, props.service.staff);
      store.commit(MutationTypes.CHANGE_SELECTED_SERVICE, props.service as Service);
    }

    return {
      nextStep,
      isCompactMode,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
