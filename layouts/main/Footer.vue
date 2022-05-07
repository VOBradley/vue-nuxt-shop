<template>
  <footer class="inner footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <div class="footer-block">
            <NuxtLink v-for="mainLink in mainLinks" :key="mainLink.label" class="footer-block-big-link" :to="mainLink.link">
              {{ mainLink.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer-block">
            <NuxtLink v-for="newsLink in newsLinks" :key="newsLink.label" class="footer-block-little-link" :to="newsLink.link">
              {{ newsLink.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div class="footer-block">
            <NuxtLink v-for="otherLink in otherLinks" :key="otherLink.label" class="footer-block-little-link" :to="otherLink.link">
              {{ otherLink.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <div class="footer-block">
            <NuxtLink
              class="footer-block-contact"
              v-for="contact in contactData"
              :key="contact.label"
              to="/"
              >
              <img :src="contact.icon" class="filter-white" alt="">
              {{ contact.label }}</NuxtLink
            >
            <Search />
            <div class="footer-block-copy">{{ copyText }}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'Footer',
  components: {
    Search,
  },
  data() {
    return {
      contactData: [
        {
          icon: '/img/icon-phone.svg',
          label: '+996700000157',
        },
        {
          icon: '/img/icon-email.svg',
          label: 'vladobradley@yahoo.com',
        },
      ],

      mainLinks: [
        {
          label: 'Главная',
          link: '/',
        },
        {
          label: 'О нас',
          link: '/about',
        },
        {
          label: 'Каталог',
          link: '/catalog',
        },
        {
          label: 'Контакты',
          link: '/contacts',
        },
      ],

      newsLinks: this.$store.state.nav,

      otherLinks: [
        {
          label: 'Политика конфиденциальности',
          link: '/privacy-policy',
        },
        {
          label: 'Политика обработки персональных данных',
          link: '/personal-data-processing-policy',
        },
        {
          label: 'Политика возврата товара',
          link: '/return-policy',
        },
        {
          label: 'Политика обмена товарами',
          link: '/exchange-policy',
        },
      ],

      copyText: 'Копирайт текст 2022'
    }
  },
}
</script>
