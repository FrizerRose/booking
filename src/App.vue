<template>
  <router-view
    v-if="isCompanyFetched"
  />

  <div v-else>
    SPINNNNNNNNNNNNNNNER
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed,
} from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const isCompanyFetched = computed(() => store.state.shared.isCompanyFetched);

    return {
      isCompanyFetched,
    };
  },
});
</script>
