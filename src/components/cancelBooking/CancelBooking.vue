<template>
  <main class="c-site-main">
    <section class="c-section -first">
      <div class="o-container">
        <div class="o-layout -gutter || o-flex -flex-column@to-medium">
          <div class="o-layout_item u-3/5@from-medium XXXXXXXX-gutters-px-10">
            <div class="c-progress">
              <!-- <BookingStepsProgress /> -->
              <div class="c-configurator">
                <!-- if nemoguće poništiti ili je već poništeno -->
                <h1
                  v-if="requestSent && !isSuccess"
                  class="c-heading"
                >
                  Greška
                </h1>
                <p v-if="requestSent && !isSuccess">
                  Termin nije moguće poništiti. Vjerojatno ste ga ranije poništili. Vratite se na <a
                    href="/"
                    class="o-link"
                  >naslovnicu</a>.
                </p>
                <!-- else if uspješno poništeno -->
                <h1
                  v-if="requestSent && isSuccess"
                  class="c-heading"
                >
                  Poništeno
                </h1>
                <p v-if="requestSent && isSuccess">
                  Termin je poništen. Vratite se na <a
                    href="/"
                    class="o-link"
                  >naslovnicu</a>.
                </p>
                <!-- else -->
                <div
                  v-if="!requestSent && appointment"
                  class="c-summary"
                >
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
                          {{ appointment.date }} u {{ appointment.time }}
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
                        <p class="c-summary_answer">
                          {{ appointment.customer.name }}<br>
                          {{ appointment.customer.email }}<br>
                          {{ appointment.customer.phone }}<br>
                        </p>
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
                        <p
                          class="c-summary_answer"
                        >
                          <em>{{ appointment.message }}</em><br>
                        </p>
                        <p
                          class="c-summary_answer"
                        >
                          <em>Bez napomene</em><br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="c-summary_footer">
                    <button
                      class="c-button -primary || is-submit"
                      @click="cancel()"
                    >
                      <span class="c-button_label">Poništi</span>
                    </button>
                  </div>
                </div>
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import ActionTypes from '@/store/action-types';

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

    let appointmentID: number;
    if (typeof route.params.appointmentID === 'string') {
      appointmentID = parseInt(route.params.appointmentID, 10);
    } else {
      appointmentID = parseInt(route.params.appointmentID[0], 10);
    }

    store.dispatch(ActionTypes.FETCH_APPOINTMENT, appointmentID);

    const appointment = computed(() => store.state.appointment.appointment);

    async function cancel() {
      if (appointment.value !== null) {
        try {
          await store.dispatch(ActionTypes.CANCEL_APPOINTMENT, appointment.value.id);
          requestSent.value = true;
          isSuccess.value = true;
        } catch (error) {
          requestSent.value = true;
          isSuccess.value = false;
        }
      }
    }

    return {
      cancel,
      requestSent,
      isSuccess,
      appointment,
    };
  },
});
</script>
