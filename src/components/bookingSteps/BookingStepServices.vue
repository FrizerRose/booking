<template>
  <li
    id="tab-usluge"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-usluge"
  >
    <!-- usluge -->
    <ul class="o-layout o-list XXXXXXXX-gutter">
      <BookingStepServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </ul>
    <!-- ends usluge -->
  </li>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import BookingStepServiceCard from './BookingStepServiceCard.vue';

export default defineComponent({
  components: {
    BookingStepServiceCard,
  },
  setup() {
    const store = useStore();

    const services = computed(() => store.state.service.services);

    return {
      services,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
