<template>
  <router-view
    :class="{'is-loaded': isMounted}"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const isMounted = ref(false);

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      isMounted,
    };
  },
});
</script>
