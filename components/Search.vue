<template>
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
</template>

<script>
export default {
  name: 'Search',
  components: {},
  data() {
    return {
      search: '',
    }
  },
}
</script>
