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
                <h1 class="c-heading">
                  Greška
                </h1>
                <p>
                  Termin nije moguće poništiti. Vjerojatno ste ga ranije poništili. Vratite se na <a
                    href="/"
                    class="o-link"
                  >naslovnicu</a>.
                </p>
                <!-- else if uspješno poništeno -->
                <h1 class="c-heading">
                  Poništeno
                </h1>
                <p>
                  Termin je poništen. Vratite se na <a
                    href="/"
                    class="o-link"
                  >naslovnicu</a>.
                </p>
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
                          {-{ selectedService.name }-}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="c-summary_row">
                    <div class="o-layout">
                      <div class="o-layout_item u-1/2">
                        <p class="c-summary_question">
                          Osoba na usluzi:
                        </p>
                      </div>
                      <div class="o-layout_item u-1/2">
                        <p class="c-summary_answer">
                          {-{ selectedStaff.name }-}
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
                          {-{ selectedDateTime.date }-} u {-{ selectedDateTime.time }-}
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
                          {-{ selectedCustomer.name }-}<br>
                          {-{ selectedCustomer.email }-}<br>
                          {-{ selectedCustomer.phone }-}<br>
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
                          <em>{-{ selectedNotice }-}</em><br>
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
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import ActionTypes from '@/store/action-types';

export default defineComponent({
  components: {
    TheLeftSidebar,
    TheRightSidebar,
  },
  setup() {
    const store = useStore();

    // TODO: fetch using slug from URL
    store.dispatch(ActionTypes.FETCH_COMPANY, 1);
  },
});
</script>
