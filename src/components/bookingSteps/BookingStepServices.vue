<template>
  <li
    id="tab-usluge"
    class="o-list_item"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tab-id-usluge"
  >
    <ul
      v-if="services.length"
      class="o-layout o-list XXXXXXXX-gutter"
    >
      <BookingStepServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </ul>
    <div v-else>
      <h1>Trenutno nema ponuđenih usluga.</h1>
    </div>
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
