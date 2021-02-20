<template>
  <CancelBooking />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CancelBooking from '@/components/cancelBooking/CancelBooking.vue';

export default defineComponent({
  components: {
    CancelBooking,
  },
});
</script>
