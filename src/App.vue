<template>
  <router-view
    v-if="isCompanyFetched"
  />

  <main
    v-else
    :class="{'is-loaded': isMounted, 'c-site-main': true}"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <span class="o-icon o-loader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2a.91.91 0 01.91.91v3.635a.91.91 0 11-1.82 0V2.91A.91.91
              0 0112 2zM12 16.546a.91.91 0 01.91.909v3.636a.91.91 0 11-1.82 0v-3.636a.91.91 0 01.91-.91zM4.93 4.93a.91.91 0
              011.286 0l2.572 2.573a.91.91 0 01-1.285 1.285L4.93 6.216a.91.91 0 010-1.286zM15.212 15.212a.91.91 0 011.285
              0l2.573 2.572a.91.91 0 01-1.286 1.286l-2.572-2.573a.91.91 0 010-1.285zM2 12a.91.91 0 01.91-.91h3.635a.91.91
              0 110 1.82H2.91A.91.91 0 012 12zM16.545 12a.91.91 0 01.91-.91h3.636a.91.91 0 010 1.82h-3.637a.91.91 0
              01-.909-.91zM8.788 15.212a.909.909 0 010 1.285L6.216 19.07a.91.91 0 01-1.286-1.286l2.573-2.572a.91.91 0
              011.285 0zM19.07 4.93a.91.91 0 010 1.286l-2.573 2.572a.909.909 0 11-1.285-1.285l2.572-2.573a.91.91 0 011.286 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {
  defineComponent, computed,
} from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const isCompanyFetched = computed(() => store.state.shared.isCompanyFetched);

    return {
      isCompanyFetched,
    };
  },
});
</script>
