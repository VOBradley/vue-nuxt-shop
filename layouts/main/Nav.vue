<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-left">
          <NuxtLink
            v-for="item in topItems"
            :key="item.label"
            class="nav-link"
            :to="item.link"
            >{{ item.label }}</NuxtLink
          >
        </div>

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
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  components: {},
  data() {
    return {
      topItems: [
        {
          label: 'Поставщикам',
          link: '/',
        },
        {
          label: 'Поставки',
          link: '/',
        },
        {
          label: 'О нас',
          link: '/',
        },
      ],
      social: [
        {
          icon: '/img/icon-vk.svg',
          link: '/',
        },
        {
          icon: '/img/icon-instagram.svg',
          link: '/',
        },
        {
          icon: '/img/icon-youtube.svg',
          link: '/',
        },
        {
          icon: '/img/icon-whatsapp.svg',
          link: '/',
        },
      ],
      phone: '996700000157',
    }
  },
}
</script>
