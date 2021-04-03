<template>
  <main :class="{'is-loaded': isMounted, 'c-site-main': true}">
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
                  <h1 class="c-heading u-margin-bottom">
                    404
                  </h1>
                </div>
              </div>
              <div class="o-row -delay-1">
                <div class="o-row_inner">
                  <p>
                    Ova stranica nije pronađena.
                    Vratite se na <router-link
                      to="/"
                      class="o-link"
                    >
                      <span class="o-link_background" />
                      <span class="o-link_label">naslovnicu</span>
                    </router-link>.
                  </p>
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
  defineComponent, ref, onMounted,
} from 'vue';

export default defineComponent({
  setup() {
    const isMounted = ref(false);

    onMounted(async () => {
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      isMounted,
    };
  },
});
</script>
