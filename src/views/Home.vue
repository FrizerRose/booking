<template>
  <TheHeader />
  <BookingSteps />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import BookingSteps from '@/components/bookingSteps/BookingSteps.vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    BookingSteps,
  },
});
</script>
