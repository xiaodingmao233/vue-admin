import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入axios
// import axios from 'axios'
// 引入Vuex
// import Vuex from 'vuex'
import store from './store/index'
import * as echarts from 'echarts' // 5.0版本的echarts引入方法
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './assets/css/index.css'
// 引入mock
import '../mock'
// 注册permission
import './utils/permission'

Vue.prototype.$echarts = echarts

// Vue.prototype.$axios = axios
// Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
