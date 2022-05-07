import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
  topNav: [
    {
      label: 'О компании',
      link: '/',
    },
    {
      label: 'Поставщикам',
      link: '/',
    },
    {
      label: 'Контакты',
      link: '/',
    },
  ],
})

