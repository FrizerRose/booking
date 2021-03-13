<template>
  <div class="o-layout_item u-1/5@from-medium XXXXXXXX-gutters-px-10 || -flex-order-minus-1@from-medium">
    <div class="o-layout -gutters || u-bg-wheat">
      <div class="o-layout_item XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <article class="o-group">
          <figure class="o-image-wrap -max-width || o-ratio">
            <img
              v-if="selectedCompany.image.link"
              class="o-image"
              :src="selectedCompany.image.link"
              alt="img text"
            >
          </figure>
          <p class="ccccccc">
            {{ selectedCompany.about }}
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
