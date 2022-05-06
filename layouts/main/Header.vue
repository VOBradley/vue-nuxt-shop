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
          <div class="header-nav">
            <div class="header-nav-menu-mobile" @click="toggleMobileMenu()">
              <img src="@/static/img/icon-menu.svg" alt="" />
            </div>
            <div class="header-nav-logo">
              <img src="@/static/img/logo.svg" alt="Логотип компании" />
            </div>
            <div class="header-nav-link">
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
                <li>
                  <a class="header-nav-link" href="#">Доставка и оплата</a>
                </li>
                <li><a class="header-nav-link" href="#">Статьи</a></li>
                <li class="header-nav-account-li">
                  <a class="header-nav-account" href="#"
                    ><img
                      class="filter-white"
                      src="@/static/img/icon-account.svg"
                      alt="Иконка аккаунта"
                  /></a>
                  <div class="modal modal-account" style="display: none">
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
            </div>
            <div class="header-nav-cart @click='cartOpen()'">
              <div class="header-nav-cart-info">
                0 товаров
                <span>0 руб.</span>
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
                        <span>5000 р.</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <a href="#" class="modal-cart-btn">Корзина</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-info">
            <div class="header-title">
              <h1>
                Производство и продажа <br />
                закусок к пиву
              </h1>
              <a href="#">Заказать прайс</a>
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
    <MobileMenu
      :open.sync="mobileMenuOpen"
      @toggleMobileMenu="toggleMobileMenu()"
    />
  </div>
</template>

<script>
import Nav from '@/layouts/main/Nav.vue'
import MobileMenu from '@/layouts/main/MobileMenu.vue'

export default {
  name: 'Header',
  components: {
    Nav,
    MobileMenu,
  },
  data() {
    return {
      mobileMenuOpen: false,
      cartOpen: false,

    
      
    }
  },

  methods: {
    toggleMobileMenu(open) {
      this.mobileMenuOpen = !this.mobileMenuOpen
      open = !open
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen
    },
  },
}
</script>
