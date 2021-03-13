<template>
  <div class="o-layout_item u-1/5@from-medium XXXXXXXX-gutters-px-10">
    <div class="o-layout -gutters || u-bg-wheat">
      <div class="o-layout_item XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
        <article class="o-group">
          <address class="o-address">
            {{ selectedCompany.name }}<br>
            {{ selectedCompany.streetName }}<br>
            {{ selectedCompany.city }}
          </address>
          <p class="ccccccc">
            Kontakt podatci
          </p>
          <ul>
            <li v-if="selectedCompany.phone">
              <a
                class="o-link"
                :href="selectedCompany.phone"
                target="_blank"
              >
                <span class="o-link_label">{{ selectedCompany.phone }}</span>
              </a>
            </li>
            <li>
              <a
                class="o-link"
                :href="selectedCompany.contactEmail"
                target="_blank"
              >
                <span class="o-link_label">Pošalji nam mail</span>
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
        </article>
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
