<template>
  <div class="o-layout o-list -gutter">
    <BookingStepStaffCard :is-i-dont-care="true" />
    <BookingStepStaffCard
      v-for="worker in staff"
      :key="worker.id"
      :staff="worker"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import BookingStepStaffCard from './BookingStepStaffCard.vue';

export default defineComponent({
  components: {
    BookingStepStaffCard,
  },
  setup() {
    const store = useStore();
    const staff = computed(() => store.state.staff.allStaff);

    return {
      staff,
    };
  },
});
</script>
