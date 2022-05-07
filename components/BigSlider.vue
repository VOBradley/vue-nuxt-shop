<template>
  <section class="inner banner">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-12 col-sm-10 col-md-9 col-lg-9 col-xl-9">
          <VueSlickCarousel v-bind="settings" class="banner-list" ref="carousel">
            <div v-for="slide in sliderItems" :key="slide.img">
              <img :src="slide.img" alt="">
            </div>
          </VueSlickCarousel>

          <div class="banner-btn-wrap">
            <div class="banner-btn banner-prev" @click="showPrev">
              <img src="img/arrow-left.svg" alt="" />
            </div>
            <div class="banner-btn banner-next" @click="showNext">
              <img src="img/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'


export default {
  name: 'BigSlider',
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },

      sliderItems: [
        {
          img: '/img/bannertemp1.jpg',
        },
        {
          img: '/img/bannertemp2.jpg',
        },
        {
          img: '/img/bannertemp3.jpg',
        },
        {
          img: '/img/bannertemp4.jpg',
        },
      ]
    }
  },

  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>
