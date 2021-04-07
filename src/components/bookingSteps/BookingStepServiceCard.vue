<template>
  <div class="o-layout_item o-list_item">
    <div class="o-background-wrap">
      <div class="o-background -has-shadow -overflow" />
      <div class="o-background -has-bg -overflow" />
      <div class="o-background -has-border -overflow -theme-color" />
      <article
        v-if="isCompactMode"
        class="c-card-service has-links-inside"
      >
        <div class="c-card-service_info">
          <h1 class="c-card-service_heading">
            {{ service.name }}
          </h1>
          <div class="o-layout o-flex -justify-between -align-end">
            <div class="o-layout_item u-width-auto">
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
                <span class="o-tag_label">{{ service.duration }} min</span>
              </span>
              <span class="o-tag || u-margin-left">
                <span class="o-icon" />
                <span class="o-tag_label">{{ service.price }} kn</span>
              </span>
            </div>
            <div class="o-vertical_item XXXXXXXXo-flex -justify-end -align-center">
              <button
                class="c-button -primary || has-links-inside_main-link || XXXXXXXXu-margin-top-3"
                @click="selectService()"
              >
                <span class="has-links-inside_background" />
                <span class="c-button_label">Odaberi</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <article
        v-else
        class="c-card-service has-links-inside"
      >
        <div class="o-layout || o-flex">
          <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
            <figure
              class="c-card-service_image-wrap || o-ratio u-rounded"
              :class="{'u-theme-text': !colorFromTheme, 'u-theme-bg': bgFromTheme}"
            >
              <div class="o-ratio_content">
                <img
                  v-if="!isCompactMode"
                  class="c-card-service_image u-objfit"
                  src="https://source.unsplash.com/random"
                  alt="img text"
                >
                <span
                  v-else
                  class="o-icon c-card-service_image u-objfit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.726 4.018a4.682 4.682 0 00-4.682 6.595 1 1 0 01-.204 1.12l-6.544 6.544a1.009 1.009 0 101.427
                          1.427l6.544-6.544a1 1 0 011.12-.204 4.683 4.683 0 006.595-4.682l-2.358 2.358a1.947 1.947 0 01-2.726
                          0l-.007-.007-1.523-1.523a1.947 1.947 0 010-2.726l.007-.007 2.35-2.35zm-1.614-1.91a6.683 6.683 0
                          013.954.486 1 1 0 01.294 1.619l-3.526 3.526 1.427 1.427 3.527-3.526a1 1 0 011.618.295 6.682 6.682 0
                          01-8.185 9.1l-6.084 6.084a3.009 3.009 0 11-4.256-4.256l6.084-6.084a6.683 6.683 0 015.148-8.67z"
                    />
                  </svg>
                </span>
              </div>
            </figure>
          </div>

          <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
            <div class="c-card-service_info u-margin-left u-height-100">
              <div class="o-vertical u-height-100">
                <div class="o-vertical_item">
                  <h1 class="c-card-service_heading">
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
                    <span class="o-tag_label">{{ service.duration }} min</span>
                  </span>
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
                    <span class="o-tag_label">{{ service.price }} kn</span>
                  </span>
                </div>
                <div class="o-vertical_item o-flex -justify-end -align-center">
                  <button
                    class="c-button -primary || has-links-inside_main-link || u-margin-left"
                    @click="selectService()"
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
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';
import Service from '@/types/service';
import { nextStep } from '@/utils/helpers';

export default defineComponent({
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const isCompactMode = ref(true);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    function selectService() {
      console.log('🚀 ~ file: BookingStepServiceCard.vue ~ line 173 ~ selectService ~ props.service', props.service);
      store.commit(MutationTypes.CHANGE_STAFF, props.service.staff);
      store.commit(MutationTypes.CHANGE_SELECTED_SERVICE, props.service as Service);

      if (selectedCompany.value?.preferences.hasStaffPick) {
        nextStep();
      } else {
        nextStep(2);
      }
    }

    return {
      selectService,
      isCompactMode,
    };
  },
});
</script>
