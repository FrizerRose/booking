<template>
  <BookingSteps v-if="selectedCompany" />
  <div v-else>
    <h1>Obrt nije pronađen.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import BookingSteps from '@/components/bookingSteps/BookingSteps.vue';
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';

export default defineComponent({
  components: {
    BookingSteps,
  },
  setup() {
    const store = useStore();
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    // TODO: fetch company using slug from URL
    store.dispatch(ActionTypes.FETCH_COMPANY, 1);

    return { selectedCompany };
  },
});
</script>
