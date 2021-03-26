<template>
  <BookingSteps v-if="selectedCompany" />

  <main
    v-else
    class="c-site-main"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <div class="c-heading-wrap is-anim">
            <h1 class="c-heading">
              Obrt nije pronađen.
            </h1>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import BookingSteps from '@/components/bookingSteps/BookingSteps.vue';
import MutationTypes from '@/store/mutation-types';
import { useStore } from '@/store';

export default defineComponent({
  components: {
    BookingSteps,
  },
  setup() {
    const store = useStore();
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    const mq = window.matchMedia('(min-width: 1000px)');
    mq.addEventListener('change', () => {
      store.commit(MutationTypes.CHANGE_IS_MOBILE, window.innerWidth <= 999);
    });
    store.commit(MutationTypes.CHANGE_IS_MOBILE, window.innerWidth <= 999);

    return {
      selectedCompany,
    };
  },
});
</script>
