<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium || -flex-order-minus-1@from-medium is-hidden@to-medium"
  >
    <div class="o-layout -gutters">
      <div class="o-layout_item u-2/5@to-medium XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <figure class="c-card-company-image o-image-wrap -max-width || o-ratio">
          <img
            v-if="selectedCompany.image && selectedCompany.image.link"
            class="o-image"
            :src="selectedCompany.image.link"
            alt="img text"
          >
        </figure>
      </div>
      <div class="o-layout_item u-3/5@to-medium">
        <p>
          <strong>O nama</strong>
          <br>
          {{ selectedCompany.about }}
        </p>
      </div>
      <div class="o-layout_item c-card-company-contact">
        <p>
          <strong>Adresa</strong>
          <br>
        </p>
        <address class="c-card-company-address">
          {{ selectedCompany.name }}<br>
          {{ selectedCompany.streetName }}<br>
          {{ selectedCompany.city }}
        </address>

        <ul class="c-card-company-contact_list">
          <li
            v-if="selectedCompany.phone"
            class="c-card-company-contact_list-item"
          >
            <a
              class="c-card-company-contact_link o-link"
              type="tel"
              :href="selectedCompany.phone"
              target="_blank"
            >
              <span class="o-link_label">{{ selectedCompany.phone }}</span>
            </a>
          </li>
          <li class="c-card-company-contact_list-item">
            <a
              class="c-card-company-contact_link o-link"
              :href="'mailto:' + selectedCompany.contactEmail"
              target="_blank"
            >
              <span class="o-link_label">E-mail</span>
            </a>
          </li>
          <li v-if="selectedCompany.preferences.facebookLink">
            <a
              class="o-link"
              :href="selectedCompany.preferences.facebookLink"
              target="_blank"
            >
              <span class="o-link_label">Facebook</span>
            </a>
          </li>
          <li v-if="selectedCompany.preferences.instagramLink">
            <a
              class="o-link"
              :href="selectedCompany.preferences.instagramLink"
              target="_blank"
            >
              <span class="o-link_label">Instagram</span>
            </a>
          </li>
          <li v-if="selectedCompany.preferences.websiteLink">
            <a
              class="o-link"
              :href="selectedCompany.preferences.websiteLink"
              target="_blank"
            >
              <span class="o-link_label">Web</span>
            </a>
          </li>
        </ul>
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

    return {
      selectedCompany,
    };
  },
});
</script>
