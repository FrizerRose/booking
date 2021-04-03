<template>
  <main
    v-if="isAppointmentFetched"
    class="c-site-main"
  >
    <section class="c-section -first">
      <div class="o-container">
        <div class="o-layout -gutter-2 || o-flex -flex-column@to-medium">
          <div
            v-if="canCancel"
            class="o-layout_item u-3/5@from-medium"
          >
            <div class="c-progress">
              <div class="c-configurator">
                <div class="o-layout">
                  <div class="o-layout_item">
                    <div class="o-background-wrap">
                      <div class="o-background -has-shadow -overflow" />
                      <div class="o-background -has-bg -overflow" />
                      <div class="o-background -has-border -overflow -theme-color" />
                      <div class="u-padding">
                        <div v-if="(requestSent && !isSuccess) || (!requestSent && !appointment)">
                          <!-- if nemoguće poništiti ili je već poništeno -->
                          <div class="c-summary -is-missing">
                            <h1 class="c-heading u-margin-bottom">
                              Greška
                            </h1>
                            <p>
                              Termin nije moguće poništiti. Vjerojatno ste ga ranije poništili.
                              Vratite se na <a
                                href="/"
                                class="o-link"
                              >
                                <span class="o-link_background" />
                                <span class="o-link_label">naslovnicu</span>
                              </a>.
                            </p>
                          </div>
                        </div>

                        <div v-if="requestSent && isSuccess">
                          <!-- else if uspješno poništeno -->
                          <div class="c-summary -is-missing">
                            <h1 class="c-heading u-margin-bottom">
                              Poništeno
                            </h1>
                            <p>
                              Termin je poništen.
                              Vratite se na <a
                                href="/"
                                class="o-link"
                              >
                                <span class="o-link_background" />
                                <span class="o-link_label">naslovnicu</span>
                              </a>.
                            </p>
                          </div>
                        </div>

                        <div v-if="!requestSent && appointment">
                          <!-- else -->
                          <div class="c-summary">
                            <div class="c-summary_row">
                              <div class="o-layout">
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_question">
                                    Vrsta usluge:
                                  </p>
                                </div>
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_answer">
                                    {{ appointment.service.name }}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="c-summary_row">
                              <div class="o-layout">
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_question">
                                    Datum i vrijeme:
                                  </p>
                                </div>
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_answer">
                                    {{ getHumanReadableDateTime(appointment.date, appointment.time) }}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="c-summary_row">
                              <div class="o-layout">
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_question">
                                    Vaši podatci:
                                  </p>
                                </div>
                                <div class="o-layout_item u-1/2">
                                  <pre class="o-pre c-summary_answer">
                                    {{ appointment.customer.name }}<br>
                                    {{ appointment.customer.email }}<br>
                                    {{ appointment.customer.phone }}<br>
                                  </pre>
                                </div>
                              </div>
                            </div>
                            <div class="c-summary_row">
                              <div class="o-layout">
                                <div class="o-layout_item u-1/2">
                                  <p class="c-summary_question">
                                    Napomena:
                                  </p>
                                </div>
                                <div class="o-layout_item u-1/2">
                                  <pre
                                    v-if="appointment.message.length"
                                    class="o-pre c-summary_answer"
                                  >
                                    <em>{{ appointment.message }}</em><br>
                                  </pre>
                                  <pre
                                    v-else
                                    class="o-pre c-summary_answer"
                                  >
                                    <em>Bez napomene</em><br>
                                  </pre>
                                </div>
                              </div>
                            </div>
                            <div class="c-summary_footer">
                              <button
                                class="c-button -secondary -submit"
                                @click="cancel()"
                              >
                                <span class="c-button_label">Poništi</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="selectedCompany && !canCancel"
            class="o-layout_item u-3/5@from-medium XXXXXXXX-gutters-px-10"
          >
            <h1>Termin nije moguće otkazati.</h1>
            <h2 v-if="selectedCompany.preferences.canCancel">
              {{ selectedCompany.name }} ne prima otkazivanja ovako blizu početku termina.
            </h2>
            <h2 v-else>
              {{ selectedCompany.name }} ne prihvača otkazivanja.
            </h2>
          </div>

          <TheLeftSidebar />

          <TheRightSidebar />
        </div>
      </div>
    </section>
  </main>
  <main
    v-else
    class="
      c-site-main"
  >
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
</template>

<script lang="ts">
import TheLeftSidebar from '@/components/layout/TheLeftSidebar.vue';
import TheRightSidebar from '@/components/layout/TheRightSidebar.vue';
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import ActionTypes from '@/store/action-types';
import { dateDiffInHours, getHumanReadableDateTime } from '@/utils/time';

export default defineComponent({
  components: {
    TheLeftSidebar,
    TheRightSidebar,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const requestSent = ref(false);
    const isSuccess = ref(false);

    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const isAppointmentFetched = computed(() => store.state.shared.isAppointmentFetched);

    // Parse the appointment id from the route
    let appointmentID: number;
    if (typeof route.params.appointmentID === 'string') {
      appointmentID = parseInt(route.params.appointmentID, 10);
    } else {
      appointmentID = parseInt(route.params.appointmentID[0], 10);
    }
    store.dispatch(ActionTypes.FETCH_APPOINTMENT, appointmentID);
    const appointment = computed(() => store.state.appointment.appointment);

    const canCancel = computed(() => {
      const appointmentDate = new Date(`${appointment.value?.date}T${appointment.value?.time}`);
      const dateDifference = dateDiffInHours(appointmentDate, new Date());

      const hasCancellationWindowPassed = dateDifference < (selectedCompany.value?.preferences.cancellationWindow || 2);

      return selectedCompany.value?.preferences.canCancel && !hasCancellationWindowPassed;
    });

    async function cancel() {
      if (appointment.value?.company.id === selectedCompany.value?.id) {
        try {
          await store.dispatch(ActionTypes.CANCEL_APPOINTMENT, { id: appointment?.value?.id, isReschedule: false });
          requestSent.value = true;
          isSuccess.value = true;
        } catch (error) {
          requestSent.value = true;
          isSuccess.value = false;
        }
      }
    }

    return {
      selectedCompany,
      isAppointmentFetched,
      cancel,
      requestSent,
      isSuccess,
      appointment,
      canCancel,
      getHumanReadableDateTime,
    };
  },
});
</script>
