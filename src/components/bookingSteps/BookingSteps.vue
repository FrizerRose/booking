<template>
  <main class="c-site-main">
    <section class="c-section -first">
      <div class="o-container">
        <div class="o-layout -gutter || o-flex -flex-column@to-medium">
          <div class="o-layout_item u-3/5@from-medium XXXXXXXX-gutters-px-10">
            <div class="c-progress">
              <BookingStepsProgress />
              <!-- TAB PANEL -->
              <ul class="o-list">
                <BookingStepServices v-if="currentStep === 1" />
                <BookingStepStaff v-if="currentStep === 2" />
                <BookingStepDateTime v-if="currentStep === 3" />
                <BookingStepPersonalDetails v-if="currentStep === 4" />
                <BookingStepConfirmation v-if="currentStep === 5" />
                <BookingStepSummary v-if="currentStep === 6" />
              </ul>
              <!-- ends TAB PANEL -->
            </div>
          </div>

          <TheLeftSidebar />

          <TheRightSidebar />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang='ts'>
import TheLeftSidebar from '@/components/layout/TheLeftSidebar.vue';
import TheRightSidebar from '@/components/layout/TheRightSidebar.vue';
import BookingStepsProgress from '@/components/bookingSteps/progressBar/BookingStepsProgress.vue';
import BookingStepServices from '@/components/bookingSteps/BookingStepServices.vue';
import BookingStepStaff from '@/components/bookingSteps/BookingStepStaff.vue';
import BookingStepDateTime from '@/components/bookingSteps/BookingStepDateTime.vue';
import BookingStepPersonalDetails from '@/components/bookingSteps/BookingStepPersonalDetails.vue';
import BookingStepConfirmation from '@/components/bookingSteps/BookingStepConfirmation.vue';
import BookingStepSummary from '@/components/bookingSteps/BookingStepSummary.vue';
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  components: {
    TheLeftSidebar,
    TheRightSidebar,
    BookingStepsProgress,
    BookingStepServices,
    BookingStepStaff,
    BookingStepDateTime,
    BookingStepPersonalDetails,
    BookingStepConfirmation,
    BookingStepSummary,
  },
  setup() {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);

    return {
      currentStep,
    };
  },
});
</script>

<style scoped lang='scss'>

</style>
