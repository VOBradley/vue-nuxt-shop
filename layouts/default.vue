<template>
  <v-app class="app">
    <Header />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/layouts/main/Header.vue'
import Footer from '@/layouts/main/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
  data() {
    return {}
  },
}
</script>
<style></style>
