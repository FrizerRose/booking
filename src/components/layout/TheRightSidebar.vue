<template>
  <div
    v-if="selectedCompany"
    class="o-layout_item u-1/5@from-medium is-hidden@to-medium"
  >
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
