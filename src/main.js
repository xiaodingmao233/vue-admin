import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入axios
import axios from 'axios'
// 引入Vuex
import Vuex from 'vuex'
import store from './store/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './styles/index.css'
// 引入mock
import '../mock'

Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
