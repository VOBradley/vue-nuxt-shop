<template>
  <div class="main-title">
    <img v-if="showImg" src="img/shark-title.png" :alt="title" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  components: {},
  data() {
    return {
      
    }
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    showImg: {
      type: Boolean,
      default: true,
    },
  }
}
</script>
