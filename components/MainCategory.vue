<template>
  <section class="inner grid">
    <div class="container">
      <Title :title="'Привет мир'" :showImg="true" />
      <div class="row">

        <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" v-for="category in categories" :key="category.title">
          <div class="snack-block">
            <a
              href="#"
              class="snack-img"
              :style="{ backgroundImage: `url(${category.image})` }"
            ></a>
            <div class="snack-info">
              <a class="snack-title" href="#">{{ category.title }}</a>
              <ul class="snack-list">
                <li v-for="item in category.items" :key="item.title">
                  <a href="">{{ item.title }}</a>
                </li>
              </ul>
              <a href="#" class="snack-btn"
                ><img
                  class="filter-white"
                  src="img/arrow-btn.svg"
                  alt="Кнопка вправо"
              /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'MainCategory',
  components: {
    Title,
  },
  data() {
    return {
      title: 'Категории',
      categories: [
        {
          title: 'Снеки',
          image: 'img/temp1.jpg',
          items: [
            {
              title: 'Рыбные снеки',
            },
            {
              title: 'Мясные снеки',
            },
            {
              title: 'Копчённые снеки',
            },
            {
              title: 'Снеки на заказ',
            },
            {
              title: 'Снеки на заказ',
            },
          ],
        },
        {
          title: 'Снеки',
          image: 'img/temp2.jpg',
          items: [
            {
              title: 'Рыбные снеки',
            },
            {
              title: 'Мясные снеки',
            },
            {
              title: 'Копчённые снеки',
            },
            {
              title: 'Снеки на заказ',
            },
            {
              title: 'Снеки на заказ',
            },
          ],
        },
      ],
    }
  },

  methods: {},
}
</script>
