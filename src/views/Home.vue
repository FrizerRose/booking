<template>
  <BookingSteps v-if="!selectedCompany" />

  <main
    v-else
    class="c-site-main"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <h1 class="c-heading">
            Obrt nije pronađen.
          </h1>
        </div>
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
