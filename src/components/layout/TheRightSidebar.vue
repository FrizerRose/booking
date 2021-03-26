<template>
  <div class="o-layout_item u-1/5@from-medium is-hidden@to-medium">
    <p v-if="selectedCompany.preferences.showRules && selectedCompany.preferences.rules">
      <strong>Pravila ponašanja</strong>
      <br>
      {{ selectedCompany.preferences.rules }}
    </p>
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
