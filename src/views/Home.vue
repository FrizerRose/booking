<template>
  <BookingSteps v-if="selectedCompany" />

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

    let companyID: string | number = 6;
    if (process.env.NODE_ENV === 'production') {
      const urlFragments = window.location.hostname.split('.');
      [companyID] = urlFragments;
    }

    store.dispatch(ActionTypes.FETCH_COMPANY, companyID);

    return { selectedCompany };
  },
});
</script>
