import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    username: sessionStorage.getItem('username'),
    photo: sessionStorage.getItem('photo')
  },
  mutations: {
    setRightList (state, data) {
      state.rightList = data
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUsername (state, data) {
      state.username = data
      sessionStorage.setItem('username', data)
    },
    setPhoto (state, data) {
      state.photo = data
      sessionStorage.setItem('photo', data)
    }
  },
  actions: {},
  getters: {}
})
