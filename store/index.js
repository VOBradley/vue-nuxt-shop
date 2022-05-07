import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
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

export const getters = () => ({
  getTopNav(state) {
    return state.topNav
  }
})