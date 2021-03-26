<template>
  <main class="c-site-main">
    <section class="c-section -first">
      <div class="o-container">
        <div class="o-layout -gutter-small || o-flex -flex-column@to-medium">
          <div class="o-layout_item u-3/5@from-medium XXXXXXXX-gutters-px-10">
            <div class="c-progress">
              <!-- <BookingStepsProgress /> -->
              <div class="c-configurator">
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

          <TheLeftSidebar />

          <TheRightSidebar />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import TheLeftSidebar from '@/components/layout/TheLeftSidebar.vue';
import TheRightSidebar from '@/components/layout/TheRightSidebar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheLeftSidebar,
    TheRightSidebar,
  },
});
</script>
