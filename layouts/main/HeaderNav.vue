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
                  <NuxtLink
                    v-for="item in auth"
                    :key="item.label"
                    :to="item.link"
                    >{{ item.label }}</NuxtLink
                  >
                </div>
                <div class="modal-account-block-link-list">
                  <NuxtLink
                    v-for="item in morelink"
                    :key="item.label"
                    :to="item.link"
                    >{{ item.label }}</NuxtLink
                  >
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

        <Search />

        <div class="nav-left">
          <NuxtLink
            v-for="item in topnav"
            :key="item.label"
            class="nav-link"
            :to="item.link"
            >{{ item.label }}</NuxtLink
          >
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
                  <NuxtLink
                    v-for="item in auth"
                    :key="item.label"
                    :to="item.link"
                    >{{ item.label }}</NuxtLink
                  >
                </div>
                <div class="modal-account-block-link-list">
                  <NuxtLink
                    v-for="item in morelink"
                    :key="item.label"
                    :to="item.link"
                    >{{ item.label }}</NuxtLink
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="nav-right">
          <button class="nav-callback callBack">Обратный звонок</button>
          <a class="nav-phone" :href="`tel:${phone}`">{{ phone }}</a>
          <NuxtLink
            v-for="soc in social"
            :key="soc.icon"
            class="nav-social"
            :to="soc.link"
            ><img class="filter-white" :src="soc.icon" alt="Иконка вотсап"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '~/components/Search.vue'
export default {
  name: 'HeaderNav',
  components: { Search },
  data() {
    return {
      logo: '/img/logo.svg',

      cartOpen: false,
      accountMenuOpen: false,

      mobileMenuOpen: false,

      cartCount: 0,
      cartPrice: 0,

      topnav: this.$store.state.nav,
      items: this.$store.state.middlenav,
      auth: this.$store.state.auth,
      morelink: this.$store.state.morelink,
      social: this.$store.state.social,
      phone: this.$store.state.phone1,
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
