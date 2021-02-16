<template>
  <TheHeader />
  <CancelBooking />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import CancelBooking from '@/components/cancelBooking/CancelBooking.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    CancelBooking,
  },
});
</script>
