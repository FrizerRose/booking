<template>
  <header
    v-if="selectedCompany"
    class="c-site-header c-site-main"
  >
    <div class="o-container">
      <div class="o-background-wrap has-no-gutters@to-medium">
        <div class="o-background -has-shadow" />
        <div class="c-site-header_inner">
          <div class="c-site-header_main || has-no-gutters@to-small">
            <div class="c-site-header_main_inner">
              <div
                class="c-site-header_main_inner_item"
                role="banner"
              >
                <h1 class="c-site-brand">
                  <a
                    class="c-site-brand_link"
                    href="#"
                    rel="home"
                  >{{ selectedCompany.name }}</a>
                </h1>
              </div>
              <div
                :class="{
                  'is-hidden@from-medium': (!selectedCompany.preferences.showRules &&
                    !selectedCompany.preferences.showCoronaRules) ||
                    (selectedCompany.preferences.rules === '' &&
                      selectedCompany.preferences.coronaRules === ''),
                }"
                class="c-site-header_main_inner_item"
              >
                <div class="o-layout -right">
                  <button
                    class="c-button -info"
                    @click="toggleSiteInfo()"
                  >
                    <span
                      class="c-button_label -margin-bottom"
                      :class="{'is-hidden': isSiteInfoOpen}"
                    >pročitajte info</span>
                    <span
                      class="c-button_label -margin-bottom"
                      :class="{'is-hidden': !isSiteInfoOpen}"
                    >zatvori</span>
                    <span class="o-icon u-margin-left-1/2">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7.4a1 1 0 011 1V12a1 1 0 11-2 0V8.4a1 1 0 011-1zM11 15.6a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="c-card-warning-desktop-wrap">
                  <div
                    class="c-card-warning-desktop"
                    :class="{'is-open': isSiteInfoOpen}"
                  >
                    <div class="o-background-wrap">
                      <div class="o-background -has-shadow-v2 -has-bg -overflow" />
                      <div class="-overflow">
                        <div class="o-layout is-hidden@to-medium">
                          <div class="o-layout_item">
                            <div class="o-background-wrap -is-warning">
                              <div class="o-background" />
                              <div
                                v-if="selectedCompany.preferences.showCoronaRules && selectedCompany.preferences.coronaRules"
                                class="c-card-warning"
                              >
                                <span class="c-card-warning_item -shrink-0 o-icon -size-2 u-margin-right-1/2">
                                  <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M10.57 2.375a2.914 2.914 0 013.922 1.028l.003.005L22.6 16.94l.009.014a2.914 2.914 0 01-2.492
                                        4.371H3.882a2.914 2.914 0 01-2.491-4.37l.008-.015 8.11-13.538c.26-.428.625-.782 1.061-1.028zM12
                                        4a.914.914 0 00-.78.438l-8.1 13.523a.914.914 0 00.78 1.366h16.2a.914.914 0 00.78-1.366L12.783
                                        4.44l-.002-.003A.914.914 0 0012 4z"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 7.841a1 1 0 011 1v3.829a1 1 0 01-2 0V8.84a1 1 0 011-1zM11 16.498a1 1 0 011-1h.01a1 1 0 010
                                        2H12a1 1 0 01-1-1z"
                                    />
                                  </svg>
                                </span>
                                <div class="c-card-warning_item">
                                  <strong>COVID-19 upozorenje</strong>
                                  <pre class="o-pre">
                                    {{ selectedCompany.preferences.coronaRules }}
                                  </pre>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="o-layout_item">
                            <div class="c-card-info">
                              <div
                                v-if="selectedCompany.preferences.showRules && selectedCompany.preferences.rules"
                                class="c-card-company-contact_rules"
                              >
                                <div class="u-margin-bottom-1/4">
                                  <strong>Pravila ponašanja</strong>
                                </div>
                                <pre class="o-pre">
                                  {{ selectedCompany.preferences.rules }}
                                </pre>
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
          </div>
        </div>
      </div>
      <div class="c-card-company is-hidden@from-medium">
        <div
          class="c-card-company_inner"
          :class="{'is-open': isSiteInfoOpen}"
        >
          <div class="o-background-wrap x-has-no-gutters@to-medium">
            <div class="o-background -has-shadow-v2 -has-bg -overflow" />
            <div class=" -overflow">
              <div class="o-layout">
                <div class="o-layout_item">
                  <div class="o-background-wrap -is-warning">
                    <div class="o-background" />
                    <div
                      v-if="selectedCompany.preferences.showCoronaRules && selectedCompany.preferences.coronaRules"
                      class="c-card-warning"
                    >
                      <span class="c-card-warning_item -shrink-0 o-icon -size-2 u-margin-right-1/2">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.57 2.375a2.914 2.914 0 013.922 1.028l.003.005L22.6 16.94l.009.014a2.914 2.914 0 01-2.492
                            4.371H3.882a2.914 2.914 0 01-2.491-4.37l.008-.015 8.11-13.538c.26-.428.625-.782 1.061-1.028zM12
                            4a.914.914 0 00-.78.438l-8.1 13.523a.914.914 0 00.78 1.366h16.2a.914.914 0 00.78-1.366L12.783
                            4.44l-.002-.003A.914.914 0 0012 4z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 7.841a1 1 0 011 1v3.829a1 1 0 01-2 0V8.84a1 1 0 011-1zM11 16.498a1 1 0 011-1h.01a1 1 0 010
                            2H12a1 1 0 01-1-1z"
                          />
                        </svg>
                      </span>
                      <span class="c-card-warning_item">
                        <strong>COVID-19 upozorenje</strong>
                        <pre class="o-pre">
                          {{ selectedCompany.preferences.coronaRules }}
                        </pre>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="o-layout_item">
                  <div class="c-card-info">
                    <div class="o-layout -gutter-small">
                      <div class="o-layout_item u-2/5@to-medium">
                        <figure
                          v-if="selectedCompany.image && selectedCompany.image.link"
                          class="c-card-company-image o-image-wrap -max-width || o-ratio"
                        >
                          <div class="o-ratio_content">
                            <img
                              class="o-image u-objfit"
                              :src="selectedCompany.image.link"
                              alt="img text"
                            >
                          </div>
                        </figure>
                        <span
                          v-else
                          class="o-ratio"
                        >
                          <svg
                            class="c-card-company-image-fallback o-ratio_content"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0H0v24h12zm0-6a6 6 0 100-12 6 6 0 000 12z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="o-layout_item u-3/5@to-medium">
                        <div v-if="selectedCompany.about.length">
                          <div class="u-margin-bottom-1/4">
                            <strong>O nama</strong>
                          </div>
                          <pre class="o-pre">
                            {{ selectedCompany.about }}
                          </pre>
                        </div>
                        <div v-else>
                          <div class="u-margin-bottom-1/4">
                            <strong>O nama</strong>
                          </div>
                          <pre class="o-pre">
                            Nedostaje tekst "O nama". Napišite par riječi o djelatnostima koje obavljate.
                          </pre>
                        </div>
                      </div>
                      <div class="o-layout_item">
                        <div class="o-layout -gutter-small c-card-company-contact">
                          <div class="o-layout_item u-2/5@to-medium">
                            <div class="u-margin-bottom-1/4">
                              <strong>Adresa</strong>
                            </div>
                            <address class="c-card-company-address">
                              {{ selectedCompany.name }}<br>
                              <span v-if="selectedCompany.streetName">{{ selectedCompany.streetName }}</span>
                              <br>
                              <span v-if="selectedCompany.city">{{ selectedCompany.city }}</span>
                              <br>
                            </address>
                          </div>
                          <div class="o-layout_item u-3/5@to-medium">
                            <div class="u-margin-bottom-1/4">
                              <strong>Na webu</strong>
                            </div>
                            <ul class="c-card-company-contact_list o-list -margin-1/2">
                              <li
                                v-if="selectedCompany.city && selectedCompany.streetName"
                                class="c-card-company-contact_list-item o-list_item"
                              >
                                <a
                                  v-if="selectedCompany.city && selectedCompany.streetName"
                                  :href="'https://www.google.com/maps/search/?api=1&query=' +
                                    selectedCompany.streetName + ',' + selectedCompany.city"
                                  class="c-card-company-contact_link o-link -lonely"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">Otvori na Google Kartama</span>
                                </a>
                              </li>
                              <li
                                v-if="selectedCompany.phone"
                                class="c-card-company-contact_list-item o-list_item"
                              >
                                <a
                                  class="c-card-company-contact_link o-link -lonely"
                                  type="tel"
                                  :href="selectedCompany.phone"
                                  target="_blank"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">{{ selectedCompany.phone }}</span>
                                </a>
                              </li>
                              <li class="c-card-company-contact_list-item o-list_item">
                                <a
                                  class="c-card-company-contact_link o-link -lonely"
                                  :href="'mailto:' + selectedCompany.contactEmail"
                                  target="_blank"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">E-mail</span>
                                </a>
                              </li>
                              <li
                                v-if="selectedCompany.preferences.facebookLink"
                                class="c-card-company-contact_list-item o-list_item"
                              >
                                <a
                                  class="c-card-company-contact_link o-link -lonely"
                                  :href="selectedCompany.preferences.facebookLink"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">Facebook</span>
                                </a>
                              </li>
                              <li
                                v-if="selectedCompany.preferences.instagramLink"
                                class="c-card-company-contact_list-item o-list_item"
                              >
                                <a
                                  class="c-card-company-contact_link o-link -lonely"
                                  :href="selectedCompany.preferences.instagramLink"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">Instagram</span>
                                </a>
                              </li>
                              <li
                                v-if="selectedCompany.preferences.websiteLink"
                                class="c-card-company-contact_list-item o-list_item"
                              >
                                <a
                                  class="c-card-company-contact_link o-link -lonely"
                                  :href="selectedCompany.preferences.websiteLink"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span class="o-link_background" />
                                  <span class="o-link_label">Web</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="o-layout_item">
                        <div
                          v-if="selectedCompany.preferences.showRules && selectedCompany.preferences.rules"
                          class="c-card-company-contact_rules"
                        >
                          <div class="u-margin-bottom-1/4">
                            <strong>Pravila ponašanja</strong>
                          </div>
                          <pre class="o-pre">
                            {{ selectedCompany.preferences.rules }}
                          </pre>
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
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const isSiteInfoOpen = ref(false);
    const selectedCompany = computed(() => store.state.shared.selectedCompany);

    function toggleSiteInfo() {
      isSiteInfoOpen.value = !isSiteInfoOpen.value;
    }

    return {
      toggleSiteInfo,
      isSiteInfoOpen,
      selectedCompany,
    };
  },
});
</script>
