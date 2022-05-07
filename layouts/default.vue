<template>
  <div class="app">
    <Header />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
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
    return {
      
    }
  },

}
</script>
<style></style>
