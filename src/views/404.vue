<template>
  <main :class="{'is-loaded': isMounted, 'c-site-main': true}">
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <div class="c-heading-wrap is-anim">
            <h1 class="c-heading">
              404
            </h1>
            <p>
              Ova stranica nije pronađena. Vratite se na <router-link
                to="/"
                class="o-link"
              >
                naslovnicu
              </router-link>.
            </p>
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
      }, 0);
    });

    return {
      isMounted,
    };
  },
});
</script>
