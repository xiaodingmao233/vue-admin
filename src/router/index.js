import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
