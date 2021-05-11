<template>
  <div v-if="isCompanyFetched">
    <main
      v-if="selectedCompany && selectedCompany.preferences.showTerms && selectedCompany.preferences.termsText"
      :class="{'is-loaded': isMounted, 'c-site-main': true}"
    >
      <section class="c-section -first">
        <div class="o-container">
          <div class="o-layout -gutter-2 || o-flex -flex-column@to-medium">
            <div class="o-layout_item u-1/5@from-medium" />
            <div class="o-layout_item u-3/5@from-medium">
              <h1 class="c-heading u-margin-bottom">
                Uvjeti poslovanja
              </h1>
              <pre class="o-pre c-summary_answer u-margin-top-3">
                {{ selectedCompany.preferences.termsText }}<br>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>

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
                Poslovni subjekt nema unešene uvjete poslovanja.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

  <div v-else>
    <main class="c-site-main">
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
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, onMounted,
} from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const isCompanyFetched = computed(() => store.state.shared.isCompanyFetched);

    const isMounted = ref(false);

    onMounted(async () => {
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      selectedCompany,
      isCompanyFetched,
      isMounted,
    };
  },
});
</script>
