<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium || -flex-order-minus-1@from-medium is-hidden@to-medium"
  >
    <div class="o-background-wrap has-1/2-gutters@from-medium">
      <div class="o-background -has-shadow@from-medium -overflow" />
      <div class="o-background -has-bg@from-medium -overflow" />
      <div class="o-background -has-border@from-medium -overflow -theme-color" />
      <div class="o-group u-padding-top u-padding-bottom">
        <div class="o-layout -gutters">
          <div class="o-layout_item u-2/5@to-medium">
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
            <!-- ovdje ne želimo da je ovaj ispod span unutar figure i ne želimo da ima .u-theme-text i .u-theme-bg -->
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
            <div v-if="selectedCompany.about.length">
              <div class="u-margin-bottom-1/4">
                <strong>O nama</strong>
              </div>
              <pre class="o-pre">
                {{ selectedCompany.about }}
              </pre>
            </div>
            <div v-else>
              <div class="u-margin-bottom-1/4">
                <strong>O nama</strong>
              </div>
              <pre class="o-pre">
                Nedostaje tekst "O nama". Napišite par riječi o djelatnostima koje obavljate.
              </pre>
            </div>
          </div>
        </div>
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
