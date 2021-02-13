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
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    BookingSteps,
  },
  setup() {
    const store = useStore();

    // TODO: fetch using slug from URL
    store.dispatch(ActionTypes.FETCH_COMPANY, 1);
  },
});
</script>
