<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium || -flex-order-minus-1@from-medium is-hidden@to-medium"
  >
    <div class="o-layout -gutters">
      <div class="o-layout_item u-2/5@to-medium XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <figure
          v-if="selectedCompany.image && selectedCompany.image.link"
          class="c-card-company-image o-image-wrap -max-width || o-ratio"
        >
          <div class="o-ratio_content">
            <img
              class="o-image u-objfit"
              :src="selectedCompany.image.link"
              alt="img text"
            >
          </div>
        </figure>
        <span
          v-else
          class="o-ratio"
        >
          <svg
            class="c-card-company-image-fallback o-ratio_content"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0H0v24h12zm0-6a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </span>
      </div>
      <div class="o-layout_item u-3/5@to-medium">
        <p>
          <strong>O nama</strong>
          <br>
          {{ selectedCompany.about }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    return {
      selectedCompany,
    };
  },
});
</script>
