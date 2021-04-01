<template>
  <div>
    <TheHeader />
    <main class="c-site-main">
      <section
        v-if="currentStep < 6"
        class="c-section"
      >
        <div class="o-container">
          <div class="c-progress">
            <div class="o-background-wrap has-1/2-gutters@from-medium">
              <div class="o-background -has-shadow@from-medium -overflow" />
              <div class="o-background -has-bg@from-medium -overflow" />
              <div class="c-progress">
                <h1 v-if="isRescheduling">
                  Promjena termina
                </h1>
                <BookingStepsProgress :is-rescheduling="isRescheduling" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="c-section -first">
        <div class="o-container">
          <div class="o-background-wrap x-has-1/2-gutters@from-medium">
            <div class="o-background x-has-shadow@from-medium x-overflow" />
            <div class="o-background x-has-bg@from-medium x-overflow" />
            <div class="o-layout -gutter-2 || o-flex -flex-column@to-medium">
              <div class="o-layout_item u-3/5@from-medium">
                <div class="c-configurator">
                  <BookingStepServices v-if="currentStep === 1 && !isRescheduling" />
                  <BookingStepStaff v-if="currentStep === 2" />
                  <BookingStepDateTime
                    v-if="currentStep === 3"
                    :is-rescheduling="isRescheduling"
                  />
                  <BookingStepPersonalDetails v-if="currentStep === 4 && !isRescheduling" />
                  <BookingStepConfirmation
                    v-if="currentStep === 5"
                    :is-rescheduling="isRescheduling"
                  />
                  <BookingStepSummary v-if="currentStep === 6" />
                </div>
              </div>

              <TheLeftSidebar />

              <TheRightSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang='ts'>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheLeftSidebar from '@/components/layout/TheLeftSidebar.vue';
import TheRightSidebar from '@/components/layout/TheRightSidebar.vue';
import BookingStepsProgress from '@/components/bookingSteps/progressBar/BookingStepsProgress.vue';
import BookingStepServices from '@/components/bookingSteps/BookingStepServices.vue';
import BookingStepStaff from '@/components/bookingSteps/BookingStepStaff.vue';
import BookingStepDateTime from '@/components/bookingSteps/BookingStepDateTime.vue';
import BookingStepPersonalDetails from '@/components/bookingSteps/BookingStepPersonalDetails.vue';
import BookingStepConfirmation from '@/components/bookingSteps/BookingStepConfirmation.vue';
import BookingStepSummary from '@/components/bookingSteps/BookingStepSummary.vue';
import {
  defineComponent, computed,
} from 'vue';
import { useStore } from '@/store';
import MutationTypes from '@/store/mutation-types';

export default defineComponent({
  components: {
    TheHeader,
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
  props: {
    isRescheduling: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();
    const currentStep = computed(() => store.state.shared.currentStep);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    if (props.isRescheduling) {
      // Skip service step if this is a reschedulling flow
      if (selectedCompany.value?.preferences.hasStaffPick) {
        store.commit(MutationTypes.CHANGE_CURRENT_STEP, 2);
      } else {
        store.commit(MutationTypes.CHANGE_CURRENT_STEP, 3);
      }
    }

    return {
      currentStep,
    };
  },
});
</script>
