<template>
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
          <NuxtLink class="header-nav-link" :to="item.link" v-if="!item.nodes">{{ item.label }}</NuxtLink>
          <ul v-if="item.dropdown == true">
            <li v-for="node in item.nodes" :key="node.label">
              <NuxtLink class="header-nav-link" :to="node.link">{{ node.label }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="header-nav-account-li">
          <a href="#" class="header-nav-account" @click="accountMenuOpen = !accountMenuOpen"
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
              <NuxtLink class="modal-cart-btn" to="/cart">
                Корзина
              </NuxtLink>
            </div>
          </div>
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

      cartCount: 0,
      cartPrice: 0,

      items: [
        {
          label: 'Виды рыбы',
          link: '/fish'
        },
        {
          label: 'Каталог',
          dropdown: false,
          nodes: [
            {
              label: 'Снеки',
              link: '/'
            },
            {
              label: 'Чипсы',
              link: '/'
            },
            {
              label: 'Семга слабосолёная',
              link: '/'
            },
          ],
        },
        {
          label: 'Новинки и акции',
          link: '/'
        },
        {
          label: 'Доставка и оплата',
          link: '/'
        },
        {
          label: 'Статьи',
          link: '/'
        },
      ],
    }
  },

  methods: {
    toggleCart() {
      this.cartOpen = !this.cartOpen
    },
  },
}
</script>
