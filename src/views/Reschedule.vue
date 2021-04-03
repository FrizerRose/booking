<template>
  <BookingSteps
    v-if="appointment && selectedCompany && canCancel"
    :is-rescheduling="true"
  />
  <main
    v-else
    class="c-site-main"
    :class="{'is-loaded': isMounted, 'c-site-main': true}"
  >
    <section class="c-section">
      <div class="o-container">
        <div class="o-orphan">
          <div class="o-background-wrap">
            <div class="o-background -has-shadow -overflow" />
            <div class="o-background -has-bg -overflow" />
            <div
              class="o-background -has-border -overflow"
              :class="{'-theme-color': borderColorFromTheme}"
            />
            <div class="o-orphan_inner">
              <div v-if="canCancel">
                <div class="o-row">
                  <div class="o-row_inner">
                    <h1 class="c-heading u-margin-bottom">
                      Rezervacija ne postoji.
                    </h1>
                  </div>
                </div>
                <div class="o-row -delay-1">
                  <div class="o-row_inner">
                    <p>
                      Ako ste joj već zamjenili termin trebali ste dobiti mail sa novim linkom za promjenu rezervacije.
                    </p>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="o-row">
                  <div class="o-row_inner">
                    <h1 class="c-heading u-margin-bottom">
                      Više nije moguće promjeniti termin rezervacije.
                    </h1>
                  </div>
                </div>
                <div class="o-row -delay-1">
                  <div class="o-row_inner">
                    <p>
                      {{ selectedCompany.name }} ne prima promjene ovako blizu zakazanog termina.
                    </p>
                  </div>
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
  defineComponent, computed, ref, onMounted,
} from 'vue';
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

    const isMounted = ref(false);

    onMounted(async () => {
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      appointment,
      selectedCompany,
      canCancel,
      isMounted,
    };
  },
});
</script>
