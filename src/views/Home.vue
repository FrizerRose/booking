<template>
  <BookingSteps v-if="selectedCompany" />
  <main class="c-site-main">
    <section>
      <div class="o-container">
        <h1 class="c-heading">
          Obrt nije pronađen.
        </h1>
      </div>
    </section>
  </main>
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
