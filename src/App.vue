<template>
  <router-view
    v-if="isCompanyFetched"
    :class="{'is-loaded': isMounted && isCompanyFetched}"
  />

  <div v-else>
    SPINNNNNNNNNNNNNNNER
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, computed,
} from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const isCompanyFetched = computed(() => store.state.shared.isCompanyFetched);

    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      isMounted,
      isCompanyFetched,
    };
  },
});
</script>
