<template>
  <div v-if="isAppointmentFetched">
    <BookingSteps
      v-if="appointment && selectedCompany && canCancel"
      :is-rescheduling="true"
    />
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
                        Ne primamo promjene ovako blizu zakazanog termina.
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
    const isAppointmentFetched = computed(() => store.state.shared.isAppointmentFetched);

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
      isAppointmentFetched,
      isMounted,
    };
  },
});
</script>
