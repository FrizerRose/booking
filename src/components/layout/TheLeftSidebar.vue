<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium || -flex-order-minus-1@from-medium is-hidden@to-medium"
  >
    <div class="o-layout -gutters">
      <div class="o-layout_item u-2/5@to-medium XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <figure class="c-card-company-image o-image-wrap -max-width || o-ratio">
          <img
            v-if="selectedCompany.image && selectedCompany.image.link"
            class="o-image"
            :src="selectedCompany.image.link"
            alt="img text"
          >
        </figure>
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
