<template>
  <div class="menu-mobile" v-bind:class="{ menuMobileActive: open }">
    <div class="menu-mobile-wrapper">
      <div class="mobile-logo">
        <img
          class="filter-white"
          src="@/static/img/logo.svg"
          alt="Логотип компании"
        />
        <div class="mobile-close" @click="toggleMobileMenu()">
          <img class="filter-white" src="@/static/img/icon-close.svg" alt="" />
        </div>
      </div>

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

      <div class="nav-left">
        <a class="nav-link" href="about.html">О компании</a>
        <a class="nav-link" href="supplier.html">Поставщикам</a>
        <a class="nav-link" href="contacts.html">Контакты</a>
      </div>

      <ul>
        <li><a class="header-nav-link" href="#">Виды рыб</a></li>
        <li class="header-nav-link-openmenu">
          <a class="header-nav-link" href="#">Каталог</a>
          <ul>
            <li><a href="#">Снекки</a></li>
            <li><a href="#">Чипсы</a></li>
            <li><a href="#">Сёмга слабосолёная</a></li>
          </ul>
        </li>
        <li><a class="header-nav-link" href="#">Новинки и акции</a></li>
        <li><a class="header-nav-link" href="#">Доставка и оплата</a></li>
        <li><a class="header-nav-link" href="#">Статьи</a></li>
        <li class="header-nav-account-li">
          <a class="header-nav-account" href="#"
            ><img
              class="filter-white"
              src="@/static/img/icon-account.svg"
              alt="Иконка аккаунта"
          /></a>
          <div class="mobile-account">
            <div class="modal-account-block">
              <div class="modal-account-block-btn-list">
                <a href="#">Личный кабинет</a>
                <a href="#">Вход</a>
                <a href="#">Регистрация</a>
              </div>
              <div class="modal-account-block-link-list">
                <a href="#">Профиль</a>
                <a href="#">Адреса доставки</a>
                <a href="#">Мои заказы</a>
                <a href="#">Избранное</a>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="nav-right">
        <button class="nav-callback callBack">Обратный звонок</button>
        <a class="nav-phone" href="tel:988444">+7 (495) 970-46-00</a>
        <a class="nav-social" href="#"
          ><img
            class="filter-white"
            src="@/static/img/icon-vk.svg"
            alt="Иконка вконтакте"
        /></a>
        <a class="nav-social" href="#"
          ><img
            class="filter-white"
            src="@/static/img/icon-instagram.svg"
            alt="Иконка инстаграм"
        /></a>
        <a class="nav-social" href="#"
          ><img
            class="filter-white"
            src="@/static/img/icon-youtube.svg"
            alt="Иконка ютуб"
        /></a>
        <a class="nav-social" href="#"
          ><img
            class="filter-white"
            src="@/static/img/icon-whatsapp.svg"
            alt="Иконка вотсап"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  components: {},
  data() {
    return {
      mobileMenuOpen: this.open,
    }
  },
  props: { open: Boolean },

  methods: {
    toggleMobileMenu() {
      this.$emit('toggleMobileMenu', this.open)
    },
  },
}
</script>
