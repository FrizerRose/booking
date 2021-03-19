<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium XXXXXXXX-gutters-px-10 || -flex-order-minus-1@from-medium"
  >
    <div class="o-layout -gutters || u-bg-wheat">
      <div class="o-layout_item XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <article class="o-group">
          <figure class="o-image-wrap -max-width || o-ratio">
            <img
              v-if="selectedCompany.image && selectedCompany.image.link"
              class="o-image"
              :src="selectedCompany.image.link"
              alt="img text"
            >
          </figure>
          <p v-if="selectedCompany.preferences.showCoronaRules && selectedCompany.preferences.coronaRules">
            <strong>COVID-19 upozorenje</strong>
            <br>
            {{ selectedCompany.preferences.coronaRules }}
          </p>
          <p>
            <strong>O nama:</strong>
            <br>
            {{ selectedCompany.about }}
          </p>
          <p v-if="selectedCompany.preferences.showRules && selectedCompany.preferences.rules">
            <strong>Pravila ponašanja</strong>
            <br>
            {{ selectedCompany.preferences.rules }}
          </p>
        </article>
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
