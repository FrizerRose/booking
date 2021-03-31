<template>
  <div>
    <h1 class="c-heading -h1 u-margin-bottom-3/2">
      Vaš termin je zabilježen.
    </h1>
    <p class="c-heading -h3 u-margin-bottom">
      Provjerite e-mail.
    </p>
    <p>
      Na navedenu e-mail adresu će vam stići poruka s potvrdom termina.
    </p>
    <div class="c-summary">
      <div
        v-if="selectedService"
        class="c-summary_row"
      >
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Vrsta usluge:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              {{ selectedService.name }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="selectedStaff"
        class="c-summary_row"
      >
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Osoba na usluzi:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              {{ selectedStaff.name }}
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
              {{ selectedDateTime.date }} u {{ selectedDateTime.time }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="selectedCustomer"
        class="c-summary_row"
      >
        <div class="o-layout">
          <div class="o-layout_item u-1/2">
            <p class="c-summary_question">
              Vaši podatci:
            </p>
          </div>
          <div class="o-layout_item u-1/2">
            <p class="c-summary_answer">
              {{ selectedCustomer.name }}<br>
              {{ selectedCustomer.email }}<br>
              {{ selectedCustomer.phone }}<br>
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
            <div v-if="selectedNotice !== ''">
              <p class="c-summary_answer -min-height">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <pre v-html="selectedNotice" /><br>
              </p>
            </div>
            <div v-else>
              <p class="c-summary_answer -min-height -italic">
                Bez napomene
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';

import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();

    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const selectedService = computed(() => store.state.shared.selectedService);
    const selectedStaff = computed(() => store.state.shared.selectedStaff);
    const selectedCustomer = computed(() => store.state.shared.selectedCustomer);
    const selectedDateTime = computed(() => store.state.shared.selectedDateTime);
    const selectedNotice = computed(() => store.state.shared.selectedNotice);

    return {
      selectedCompany,
      selectedService,
      selectedStaff,
      selectedCustomer,
      selectedDateTime,
      selectedNotice,
    };
  },
});
</script>
