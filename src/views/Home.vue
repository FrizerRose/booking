<template>
  <BookingSteps v-if="selectedCompany" />

  <main
    v-else
    :class="{'is-loaded': isMounted, 'c-site-main': true}"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <div class="o-background-wrap">
            <div class="o-background -has-shadow -overflow" />
            <div class="o-background -has-bg -overflow" />
            <div class="o-background -has-border -overflow -theme-color" />
            <div class="o-orphan_inner">
              <div class="o-row">
                <div class="o-row_inner">
                  <h1 class="c-heading">
                    Obrt nije pronađen.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, onMounted,
} from 'vue';
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

    const isMounted = ref(false);

    onMounted(async () => {
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      selectedCompany,
      isMounted,
    };
  },
});
</script>
