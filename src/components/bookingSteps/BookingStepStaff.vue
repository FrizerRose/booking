<template>
  <li
    id="tab-odabir-radnika"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-odabir-radnika"
  >
    <!-- odaberi radnika -->
    <ul class="o-layout o-list -gutter">
      <BookingStepStaffCard :is-i-dont-care="true" />
      <BookingStepStaffCard
        v-for="worker in staff"
        :key="worker.id"
        :staff="worker"
      />
    </ul>
    <!-- ends odaberi radnika -->
  </li>
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

    const staff = computed(() => store.state.staff.staff);

    return {
      staff,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
