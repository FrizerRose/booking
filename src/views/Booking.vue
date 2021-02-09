<template>
  <header class="c-site-header">
    <div class="o-container">
      <div class="c-site-header_inner">
        <div class="c-site-header_main || has-no-gutters@to-small">
          <div class="c-site-header_main_inner">
            <div role="banner">
              <h1 class="c-site-brand">
                <a
                  class="c-site-brand_link"
                  href="#"
                  rel="home"
                >company name</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="c-site-main">
    <section class="c-section -first">
      <div class="o-container">
        <div class="o-layout -gutter || o-flex -flex-column@to-medium">
          <div class="o-layout_item u-3/5@from-medium XXXXXXXX-gutters-px-10">
            <div class="c-progress">
              <div class="c-progress_inner">
                <div class="o-background-wrap has-no-gutters@to-medium">
                  <div class="o-background -has-shadow" />
                  <div class="c-progress-indicator">
                    <div class="c-progress-number">
                      <span class="c-progress-number_label">
                        100%
                      </span>
                    </div>
                    <div class="c-progress-indicator_line-wrap">
                      <div class="c-progress-indicator_line-wrap-bg" />
                      <div class="c-progress-indicator_line" />
                    </div>
                  </div>
                </div>
                <div class="o-background-wrap has-no-gutters@to-medium">
                  <div class="o-background -has-shadow" />
                  <div class="o-layout || o-flex -justify-between || c-steps-header">
                    <div class="o-layout_item u-width-auto">
                      <p>odabrani korak</p>
                    </div>
                    <div class="o-layout_item u-width-auto">
                      <button class="c-button -primary || c-steps-header_menu-toggle">
                        <span class="c-button_label">menu</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="c-steps-menu">
                  <div class="c-steps-menu_inner is-open">
                    <div class="o-background-wrap has-no-gutters@to-medium">
                      <div class="o-background -has-shadow" />
                      <div class="o-layout">
                        <div class="o-layout_item">
                          <div class="c-steps-list-wrap">
                            <!-- <div class="is-overflow-swipe"> -->
                            <ul
                              class="o-list c-steps-list"
                              role="tablist"
                              aria-label="Koraci rezervacije"
                            >
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-usluge"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="true"
                                  aria-controls="tab-usluge"
                                >
                                  <span class="c-button_label">Usluge</span>
                                </button>
                              </li>
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-odabir-radnika"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="tab-odabir-radnika"
                                  tabindex="-1"
                                  disabled
                                >
                                  <span class="c-button_label">Odabir radnika</span>
                                </button>
                              </li>
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-odabir-termina"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="tab-odabir-termina"
                                  tabindex="-1"
                                  disabled
                                >
                                  <span class="c-button_label">Odabir termina</span>
                                </button>
                              </li>
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-vasi-podatci"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="tab-vasi-podatci"
                                  tabindex="-1"
                                  disabled
                                >
                                  <span class="c-button_label">Vaši podatci</span>
                                </button>
                              </li>
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-provjeri-i-potvrdi"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="tab-provjeri-i-potvrdi"
                                  tabindex="-1"
                                  disabled
                                >
                                  <span class="c-button_label">Provjeri i potvrdi</span>
                                </button>
                              </li>
                              <li class="o-list_item c-steps-list_item">
                                <button
                                  id="tab-id-sazetak"
                                  class="c-button -tab"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="tab-sazetak"
                                  tabindex="-1"
                                  disabled
                                >
                                  <span class="c-button_label">Sažetak</span>
                                </button>
                              </li>
                            </ul>
                            <!-- </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- TAB PANEL -->
              <ul class="o-list">
                <li
                  id="tab-usluge"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-usluge"
                >
                  <!-- usluge -->
                  <ul class="o-layout o-list XXXXXXXX-gutter">
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Šišanje
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe aperiam modi fugiat similique! Totam,
                                  magni recusandae. Ipsum!
                                </p>
                                <p>Link ipsum <a href="">link to something</a></p>
                                <button class="c-button -primary || has-links-inside_main-link">
                                  <span class="c-button_label">cta</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Šišanje i pranje
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit sit aperiam quasi?
                                </p>
                                <button class="has-links-inside_main-link">
                                  <span class="c-button_label">test focus</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Pranje i frizura
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at, tempore alias consequatur animi quam
                                  suscipit sunt et laboriosam doloribus illo consectetur non libero!
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                  </ul>
                  <!-- ends usluge -->
                </li>
                <li
                  id="tab-odabir-radnika"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-odabir-radnika"
                  hidden
                >
                  <!-- odaberi radnika -->
                  <ul class="o-layout o-list -gutter">
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Miljenko
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe aperiam modi fugiat similique! Totam,
                                  magni recusandae. Ipsum!
                                </p>
                                <p>Link ipsum <a href="">Miljenkov instagram 🔥</a></p>
                                <button class="c-button -primary || has-links-inside_main-link">
                                  <span class="c-button_label">Odaberi Miljenka</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout || o-flex -align-center">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <div class="o-flex -align-center -justify-between">
                                  <h1 class="c-heading">
                                    Miljenko
                                  </h1>
                                  <button class="c-button -primary || has-links-inside_main-link">
                                    <span class="c-button_label">[>]</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="c-card-service_info">
                            <div class="o-flex -align-center -justify-between">
                              <h1 class="c-heading">
                                Miljenko
                              </h1>
                              <button class="c-button -primary || has-links-inside_main-link">
                                <span class="c-button_label">[>]</span>
                              </button>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Trpimir
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe aperiam modi fugiat similique! Totam,
                                  magni recusandae. Ipsum!
                                </p>
                                <p>Link ipsum <a href="">Trpimirov blog</a></p>
                                <button class="c-button -primary || has-links-inside_main-link">
                                  <span class="c-button_label">Odaberi Trpimira</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                    <li class="o-layout_item o-list_item -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                      <div class="o-background-wrap">
                        <div class="o-background -has-shadow" />
                        <article class="c-card-service has-links-inside">
                          <div class="o-layout">
                            <div class="o-layout_item u-1/3@to-medium u-1/4@from-medium">
                              <figure class="c-card-service_image-wrap -max-width || o-ratio">
                                <img
                                  class="c-card-service_image"
                                  src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                                  alt="img text"
                                >
                              </figure>
                            </div>
                            <div class="o-layout_item u-2/3@to-medium u-3/4@from-medium">
                              <div class="c-card-service_info">
                                <h1 class="c-heading">
                                  Petra
                                </h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe aperiam modi fugiat similique! Totam,
                                  magni recusandae. Ipsum!
                                </p>
                                <!--                               <p>Link ipsum <a href="">link</a></p> -->
                                <button class="c-button -primary || has-links-inside_main-link">
                                  <span class="c-button_label">Odaberi Petru</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                  </ul>
                  <!-- ends odaberi radnika -->
                </li>
                <li
                  id="tab-odabir-termina"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-odabir-termina"
                  hidden
                >
                  <!-- ends termin -->
                  <div class="o-layout -gutter">
                    <div
                      class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
                    >
                      <label for="start">biraj termin</label>
                      <input
                        id="start"
                        type="date"
                        name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01"
                        max="2018-12-31"
                      >
                    </div>
                  </div>
                  <div class="o-layout -gutter">
                    <div
                      class="o-layout_item u-1/2@from-medium -gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center"
                    >
                      <ul class="c-timeslots-list o-layout -gutter || o-list">
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">8:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">8:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">8:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">8:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">9:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">9:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">9:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">9:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">10:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">10:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">10:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">10:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">11:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">11:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">11:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">11:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">12:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">12:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">12:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">12:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">13:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">13:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">13:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">13:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">14:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">14:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">14:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">14:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">15:00</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">15:15</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">15:30</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">15:45</span>
                          </button>
                        </li>
                        <li class="c-timeslots-list_item o-layout_item u-1/2 || o-list_item">
                          <button class="c-button -outline">
                            <span class="c-button_label">16:00</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- ends termin -->
                </li>
                <li
                  id="tab-vasi-podatci"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-vasi-podatci"
                  hidden
                >
                  <form class="c-form">
                    <div class="c-form_item">
                      <label
                        class="c-form_label"
                        for="id-form-name"
                      >Name</label>
                      <input
                        id="id-form-name"
                        class="c-form_input"
                        type="text"
                      >
                    </div>
                    <div class="c-form_item">
                      <label
                        class="c-form_label"
                        for="id-form-email"
                      >Email</label>
                      <input
                        id="id-form-email"
                        class="c-form_input"
                        type="email"
                      >
                    </div>
                    <div class="c-form_item">
                      <label
                        class="c-form_label"
                        for="phone"
                      >Phone</label>
                      <input
                        id="phone"
                        class="c-form_input"
                        type="tel"
                        name="phone"
                      >
                    </div>
                    <div class="c-form_item">
                      <label
                        class="c-form_label"
                        for="id-form-textarea"
                      >Textarea</label>
                      <textarea
                        id="if-form-textarea"
                        class="c-form_textarea"
                      />
                    </div>
                    <div class="c-form_item">
                      <input
                        id="id-form-checkbox"
                        class="c-form_checkbox"
                        type="checkbox"
                      >
                      <label
                        class="c-form_checkbox-label"
                        for="id-form-checkbox"
                      >Prihvaćam uvjete</label>
                    </div>
                    <button
                      class="c-button -primary"
                      type="submit"
                    >
                      <span class="c-button_label">Submit</span>
                    </button>
                  </form>
                </li>
                <li
                  id="tab-provjeri-i-potvrdi"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-provjeri-i-potvrdi"
                  hidden
                >
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
                            Šišanje
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
                            Miljenko
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
                            5. svibnja 2021. u 14:30
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
                            Ivana Ivić<br>
                            ivana.ivic@example.com<br>
                            +385 (91) 000-11-22<br>
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
                          <p class="c-summary_answer">
                            <em>Bez napomene</em><br>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  id="tab-sazetak"
                  class="o-list_item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby="tab-id-sazetak"
                  hidden
                >
                  <p>
                    sažetak tab panel
                  </p>
                </li>
              </ul>
              <!-- ends TAB PANEL -->
            </div>
          </div>

          <div class="o-layout_item u-1/5@from-medium XXXXXXXX-gutters-px-10 || -flex-order-minus-1@from-medium">
            <div class="o-layout -gutters || u-bg-wheat">
              <div class="o-layout_item XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                <article class="o-group">
                  <h1 class="c-heading">
                    Sidebar left
                  </h1>
                  <figure class="o-image-wrap -max-width || o-ratio">
                    <img
                      class="o-image"
                      src="https://www.mdstrat.com/wp-content/uploads/2020/07/payment_integrity_facs.svg"
                      alt="img text"
                    >
                  </figure>
                  <p class="ccccccc">
                    General company notice
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div class="o-layout_item u-1/5@from-medium XXXXXXXX-gutters-px-10">
            <div class="o-layout -gutters || u-bg-wheat">
              <div class="o-layout_item XXXXXXXX-gutters-px-10 || XXXXXXXXo-flex -flex-column -justify-center -align-center">
                <article class="o-group">
                  <h1 class="c-heading">
                    Sidebar right
                  </h1>
                  <address class="o-address">
                    Company Name<br>
                    Ulica 50<br>
                    10000 Grad
                  </address>
                  <p class="ccccccc">
                    Kontakt podatci
                  </p>
                  <ul>
                    <li>
                      <a
                        class="o-link"
                        href="tel:+385-95-666-3333"
                      >
                        <span class="o-link_label">+385-95-666-3333</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="o-link"
                        href="mailto:email@example.com"
                      >
                        <span class="o-link_label">Send us an email</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="o-link"
                        href="https://fb.com/examplecompanyname"
                      >
                        <span class="o-link_label">Facebook</span>
                      </a>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="c-site-footer">
    <div class="o-container">
      footer
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  components: {
    // HelloWorld,
  },
});
</script>
