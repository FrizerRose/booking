<template>
  <div
    v-if="servicesForSelectedSex.length"
    class="o-layout o-list XXXXXXXX-gutter"
  >
    <BookingStepServiceCard
      v-for="service in servicesForSelectedSex"
      :key="service.id"
      :service="service"
    />
  </div>
  <div v-else>
    <div class="o-layout">
      <div class="o-layout_item">
        <div class="o-background-wrap">
          <div class="o-background -has-shadow -overflow" />
          <div class="o-background -has-bg -overflow" />
          <div class="o-background -has-border -overflow -theme-color" />
          <article class="c-card-service has-links-inside">
            <div class="o-layout || o-flex">
              <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                <figure class="c-card-service_image-wrap || o-ratio u-rounded u-theme-text">
                  <div class="o-ratio_content">
                    <span class="o-icon c-card-service_image u-objfit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.726 4.018a4.682 4.682 0 00-4.682 6.595 1 1 0 01-.204 1.12l-6.544 6.544a1.009 1.009 0 101.427
                          1.427l6.544-6.544a1 1 0 011.12-.204 4.683 4.683 0 006.595-4.682l-2.358 2.358a1.947 1.947 0 01-2.726
                          0l-.007-.007-1.523-1.523a1.947 1.947 0 010-2.726l.007-.007 2.35-2.35zm-1.614-1.91a6.683 6.683 0
                          013.954.486 1 1 0 01.294 1.619l-3.526 3.526 1.427 1.427 3.527-3.526a1 1 0 011.618.295 6.682 6.682 0
                          01-8.185 9.1l-6.084 6.084a3.009 3.009 0 11-4.256-4.256l6.084-6.084a6.683 6.683 0 015.148-8.67z"
                        />
                      </svg>
                    </span>
                  </div>
                </figure>
              </div>
              <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                <div class="c-card-service_info u-margin-left u-height-100">
                  <div class="o-vertical u-height-100">
                    <div class="o-vertical_item">
                      <h1 class="c-card-service_heading">
                        Nema usluga u ponudi
                      </h1>
                    </div>
                    <div class="o-vertical_item o-flex -justify-end -align-center">
                      <a
                        :href="'https://' + selectedCompany?.bookingPageSlug + '.admin.dolazim.hr/usluge'"
                        class="c-button -primary || has-links-inside_main-link || u-margin-left"
                      >
                        <span class="has-links-inside_background" />
                        <span class="c-button_label">Dodaj uslugu</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import BookingStepServiceCard from './BookingStepServiceCard.vue';

export default defineComponent({
  components: {
    BookingStepServiceCard,
  },
  setup() {
    const store = useStore();

    const selectedCompany = computed(() => store.state.shared.selectedCompany);
    const selectedSex = computed(() => store.state.shared.selectedSex);
    const services = computed(() => store.state.service.services);

    const servicesForSelectedSex = services.value.filter((service) => {
      if (selectedSex.value === 'both') {
        return true;
      }

      return service.sex === selectedSex.value || service.sex === 'both';
    });

    return {
      servicesForSelectedSex,
      selectedCompany,
    };
  },
});
</script>
