<template>
  <main class="c-site-main">
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <div class="c-heading-wrap x-is-anim">
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
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>
