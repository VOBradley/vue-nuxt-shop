<template>
  <div>
    <div class="header-nav">
      <div class="header-nav-menu-mobile" @click="toggleMobileMenu()">
        <img src="@/static/img/icon-menu.svg" alt="" />
      </div>
      <div class="header-nav-logo">
        <img :src="logo" alt="Логотип компании" />
      </div>
      <div class="header-nav-link">
        <ul>
          <li
            v-for="item in items"
            :key="item.label"
            :class="{ headerNavLinkOpenMenu: item.nodes }"
          >
            <a
              href="#"
              class="header-nav-link"
              v-if="item.nodes"
              @click="item.dropdown = !item.dropdown"
              >{{ item.label }}
            </a>
            <NuxtLink
              class="header-nav-link"
              :to="item.link"
              v-if="!item.nodes"
              >{{ item.label }}</NuxtLink
            >
            <ul v-if="item.dropdown == true">
              <li v-for="node in item.nodes" :key="node.label">
                <NuxtLink class="header-nav-link" :to="node.link">{{
                  node.label
                }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="header-nav-account-li">
            <a
              href="#"
              class="header-nav-account"
              @click="accountMenuOpen = !accountMenuOpen"
              ><img
                src="/_nuxt/static/img/icon-account.svg"
                alt="Иконка аккаунта"
                class="filter-white"
            /></a>
            <div class="modal modal-account" v-if="accountMenuOpen">
              <div class="modal-account-block">
                <div class="modal-account-block-btn-list">
                  <a href="#">Личный кабинет</a> <a href="#">Вход</a>
                  <a href="#">Регистрация</a>
                </div>
                <div class="modal-account-block-link-list">
                  <a href="#">Профиль</a> <a href="#">Адреса доставки</a>
                  <a href="#">Мои заказы</a> <a href="#">Избранное</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="header-nav-cart @click='cartOpen()'">
        <div class="header-nav-cart-info">
          {{ cartCount }} товаров
          <span>{{ cartPrice }} сом.</span>
        </div>
        <a href="#" class="header-nav-cart-icon" @click="toggleCart()">
          <img
            class="filter-red"
            src="@/static/img/icon-cart.svg"
            alt="Иконка корзины"
          />
        </a>
        <div class="modal modal-cart" v-show="cartOpen">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div class="product-block">
                <div class="product-img">
                  <img src="~/static/img/btemp1.jpg" alt="" />
                  <div class="product-like">
                    <img
                      class="filter-white product-like-img"
                      src="@/static/img/icon-like.svg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>Мидии с лимоном</h3>
                <div class="product-delivery">
                  <img src="@/static/img/icon-delivery.svg" alt="" />
                  Понедельник
                </div>
                <div class="product-buy">
                  <div class="product-price">82 руб</div>
                  <div class="product-q">2 шт</div>
                  <button class="product-buy-btn">Купить</button>
                </div>
              </div>
            </div>

            <div
              class="modal-cart-bottom row d-flex align-items-center justify-content-center"
            >
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="modal-cart-both">
                  Итого:
                  <span>{{ cartPrice }} сом.</span>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <NuxtLink class="modal-cart-btn" to="/cart"> Корзина </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="menu-mobile"
      v-bind:class="{ menuMobileActive: mobileMenuOpen }"
    >
      <div class="menu-mobile-wrapper">
        <div class="mobile-logo">
          <img
            class="filter-white"
            src="@/static/img/logo.svg"
            alt="Логотип компании"
          />
          <div class="mobile-close" @click="toggleMobileMenu()">
            <img
              class="filter-white"
              src="@/static/img/icon-close.svg"
              alt=""
            />
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
          <li
            v-for="item in items"
            :key="item.label"
            :class="{ headerNavLinkOpenMenuMobile: item.nodes }"
          >
            <a
              href="#"
              class="header-nav-link"
              v-if="item.nodes"
              @click="item.dropdown = !item.dropdown"
              >{{ item.label }}
            </a>
            <NuxtLink
              class="header-nav-link"
              :to="item.link"
              v-if="!item.nodes"
              >{{ item.label }}</NuxtLink
            >
            <ul v-if="item.dropdown == true">
              <li v-for="node in item.nodes" :key="node.label">
                <NuxtLink class="header-nav-link" :to="node.link">{{
                  node.label
                }}</NuxtLink>
              </li>
            </ul>
          </li>
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
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  components: {},
  data() {
    return {
      logo: '/img/logo.svg',

      cartOpen: false,
      accountMenuOpen: false,

      mobileMenuOpen: false,

      cartCount: 0,
      cartPrice: 0,

      items: [
        {
          label: 'Виды рыбы',
          link: '/fish',
        },
        {
          label: 'Каталог',
          dropdown: false,
          nodes: [
            {
              label: 'Снеки',
              link: '/',
            },
            {
              label: 'Чипсы',
              link: '/',
            },
            {
              label: 'Семга слабосолёная',
              link: '/',
            },
          ],
        },
        {
          label: 'Новинки и акции',
          link: '/',
        },
        {
          label: 'Доставка и оплата',
          link: '/',
        },
        {
          label: 'Статьи',
          link: '/',
        },
      ],
    }
  },

  methods: {
    toggleCart() {
      this.cartOpen = !this.cartOpen
    },

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      this.$emit('toggleMobileMenu', this.open)
    },
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
