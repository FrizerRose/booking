<template>
  <div
    v-if="services.length"
    class="o-layout o-list XXXXXXXX-gutter"
  >
    <BookingStepServiceCard
      v-for="service in services"
      :key="service.id"
      :service="service"
    />
  </div>
  <div v-else>
    <h1>Trenutno nema ponuđenih usluga.</h1>
  </div>
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
