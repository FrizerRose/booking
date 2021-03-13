<template>
  <BookingSteps
    v-if="appointment && selectedCompany && canCancel"
    :is-rescheduling="true"
  />
  <main
    v-else
    class="c-site-main"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <h1
            v-if="canCancel"
            class="c-heading"
          >
            Rezervacija ne postoji. Ako ste joj već zamjenili termin trebali ste dobiti mail sa novim linkom za promjenu rezervacije.
          </h1>
          <h1 v-else>
            Više nije moguće promjeniti termin rezervacije. {{ selectedCompany.name }} ne prima promjene ovako blizu početku termina.
          </h1>
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
import { dateDiffInHours } from '@/utils/time';

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

    store.dispatch(ActionTypes.FETCH_APPOINTMENT, appointmentID);

    const appointment = computed(() => store.state.appointment.appointment);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    const canCancel = computed(() => {
      const appointmentDate = new Date(`${appointment.value?.date}T${appointment.value?.time}`);
      const dateDifference = dateDiffInHours(appointmentDate, new Date());

      const hasCancellationWindowPassed = dateDifference < (selectedCompany.value?.preferences.cancellationWindow || 2);

      return selectedCompany.value?.preferences.canCancel && !hasCancellationWindowPassed;
    });

    return {
      appointment,
      selectedCompany,
      canCancel,
    };
  },
});
</script>
