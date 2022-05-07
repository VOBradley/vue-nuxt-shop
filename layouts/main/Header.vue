<template>
  <div>
    <Nav />
    <header class="header">
      <div class="meat-parallax">
        <div class="meat-block meat-block1" data-parallax-strength="60"></div>
        <div class="meat-block meat-block2"></div>
        <div class="meat-block meat-block3"></div>
        <div class="meat-block meat-block4"></div>
        <div class="meat-block meat-block5"></div>
      </div>
      <div class="container">
        <div class="header-wrapper">
        <HeaderNav />
          <div class="header-info">
            <div class="header-title">
              <h1>
                {{ title}}
              </h1>
              <NuxtLink to="/">Калькулятор стоимости</NuxtLink>
              <p>Поиск по каталогу</p>
              <div class="search-block">
                <label for="search">
                  <div class="search-block-icon">
                    <img
                      class="filter-white"
                      src="@/static/img/icon-search.svg"
                      alt="Иконка поиска"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="search-block-input"
                    type="search"
                    placeholder="Поиск.."
                  />
                  <button class="search-block-btn">
                    <img
                      class="filter-white"
                      src="@/static/img/arrow-btn.svg"
                      alt="Иконка вправо"
                    />
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
import Nav from '@/layouts/main/Nav.vue'
import HeaderNav from '@/layouts/main/HeaderNav.vue'

export default {
  name: 'Header',
  components: {
    Nav,
    HeaderNav,
  },
  data() {
    return {
      title: 'Системы безопасности и видеонаблюдение',
      mobileMenuOpen: false,
    }
  },

  methods: {
    toggleMobileMenu(open) {
      this.mobileMenuOpen = !this.mobileMenuOpen
      open = !open
    },
  },
}
</script>
