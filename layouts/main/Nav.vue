<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-left">
          <a class="nav-link" href="about.html">О компании</a>
          <a class="nav-link" href="supplier.html">Поставщикам</a>
          <a class="nav-link" href="contacts.html">Контакты</a>
        </div>

        <div class="nav-right">
          <button class="nav-callback callBack">Обратный звонок</button>
          <a class="nav-phone" href="tel:988444">+7 (495) 970-46-00</a>
          <a class="nav-social" href="#"
            ><img
              class="filter-white"
              src="@/static/img/icon-vk.svg"
              alt="Иконка вконтакте"
          /></a>
          <a class="nav-social" href="#"
            ><img
              class="filter-white"
              src="@/static/img/icon-instagram.svg"
              alt="Иконка инстаграм"
          /></a>
          <a class="nav-social" href="#"
            ><img
              class="filter-white"
              src="@/static/img/icon-youtube.svg"
              alt="Иконка ютуб"
          /></a>
          <a class="nav-social" href="#"
            ><img
              class="filter-white"
              src="@/static/img/icon-whatsapp.svg"
              alt="Иконка вотсап"
          /></a>
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
    return {}
  },
}
</script>
