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
import Header from '@/layouts/header/index.vue'
import Footer from '@/layouts/footer/index.vue'

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
