<template>
  <BookingSteps
    v-if="appointment"
    :is-rescheduling="true"
  />
  <main
    v-else
    class="c-site-main"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-background-wrap">
          <div class="o-background -has-shadow" />
          <div class="o-orphan">
            <h1 class="c-heading">
              Rezervacija ne postoji. Ako ste joj već zamjenili termin trebali ste dobiti mail sa novim linkom za promjenu rezervacije.
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
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    BookingSteps,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    // Parse the appointment id out of the route
    let appointmentID: number;
    if (typeof route.params.appointmentID === 'string') {
      appointmentID = parseInt(route.params.appointmentID, 10);
    } else {
      appointmentID = parseInt(route.params.appointmentID[0], 10);
    }

    // TODO: fetch using slug from URL
    store.dispatch(ActionTypes.FETCH_COMPANY, 1);
    store.dispatch(ActionTypes.FETCH_APPOINTMENT, appointmentID);

    const appointment = computed(() => store.state.appointment.appointment);

    return {
      appointment,
    };
  },
});
</script>
