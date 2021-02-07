import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import store from '@/store'

Vue.use(VueRouter)

// 动态路由
const tableRule = {
  path: '/table',
  name: 'table',
  component: () => import('@/views/table')
}
const imageRule = {
  path: '/image',
  name: 'image',
  component: () => import('@/views/image')
}
const userRule = {
  path: '/users',
  name: 'users',
  component: () => import('@/views/users')
}

/**
 * eslint报错
 * error Unnecessarily quoted property 'xxx' found quote-props
 * 表示 key没必要加引号 'table': tableRule => table: tableRule
 */
// 路由规则和字符串的映射关系
const ruleMapping = {
  table: tableRule,
  users: userRule,
  image: imageRule
}

const routes = [
  {
    path: '/login',
    // name: 'login', // 这里如果有name 控制台会提醒
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        // name: 'home',
        component: () => import('@/views/home')
      }
    ]
  }
  // 没有找到页面刷新动态路由丢失问题的解决方法 先将404页面注释
  // {
  //   path: '*',
  //   component: () => import('@/views/404')
  // }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = sessionStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export function initDynamicRoutes () {
  // console.log(router)
  // 根据二级权限 对路由规则进行动态的添加
  const currentRoutes = router.options.routes
  // currentRoutes[2].children.push()
  const rightList = store.state.rightList
  rightList.forEach(item => {
    item.children.forEach(item => {
      // item 二级权限
      const temp = ruleMapping[item.path]
      currentRoutes[1].children.push(temp)
    })
  })
  // console.log(currentRoutes)
  router.addRoutes(currentRoutes)
}

export default router
