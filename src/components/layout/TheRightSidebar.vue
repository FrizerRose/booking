<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium is-hidden@to-medium"
  >
    <div class="o-background-wrap has-1/2-gutters@from-medium">
      <div class="o-background -has-shadow@from-medium -overflow" />
      <div class="o-background -has-bg@from-medium -overflow" />
      <div class="o-group u-padding-top u-padding-bottom">
        <p>
          <strong>Adresa</strong>
          <br>
        </p>
        <address class="c-card-company-address">
          {{ selectedCompany.name }}<br>
          <span v-if="selectedCompany.streetName">{{ selectedCompany.streetName }}</span><br>
          <span v-if="selectedCompany.city">{{ selectedCompany.city }}</span><br>
          <a
            v-if="selectedCompany.city && selectedCompany.streetName"
            :href="'https://www.google.com/maps/search/?api=1&parameters=' + selectedCompany.streetName + ',' + selectedCompany.city"
            target="_blank"
          >
            Otvori na Google Kartama
          </a>
        </address>

        <ul class="c-card-company-contact_list">
          <li
            v-if="selectedCompany.phone"
            class="c-card-company-contact_list-item"
          >
            <a
              class="c-card-company-contact_link o-link -padding"
              type="tel"
              :href="selectedCompany.phone"
              target="_blank"
            >
              <span class="o-link_label">{{ selectedCompany.phone }}</span>
            </a>
          </li>
          <li class="c-card-company-contact_list-item">
            <a
              class="c-card-company-contact_link o-link -padding"
              :href="'mailto:' + selectedCompany.contactEmail"
              target="_blank"
            >
              <span class="o-link_label">E-mail</span>
            </a>
          </li>
          <li
            v-if="selectedCompany.preferences.facebookLink"
            class="c-card-company-contact_list-item"
          >
            <a
              class="c-card-company-contact_link o-link -padding"
              :href="selectedCompany.preferences.facebookLink"
              target="_blank"
            >
              <span class="o-link_label">Facebook</span>
            </a>
          </li>
          <li
            v-if="selectedCompany.preferences.instagramLink"
            class="c-card-company-contact_list-item"
          >
            <a
              class="c-card-company-contact_link o-link -padding"
              :href="selectedCompany.preferences.instagramLink"
              target="_blank"
            >
              <span class="o-link_label">Instagram</span>
            </a>
          </li>
          <li
            v-if="selectedCompany.preferences.websiteLink"
            class="c-card-company-contact_list-item"
          >
            <a
              class="c-card-company-contact_link o-link -padding"
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
