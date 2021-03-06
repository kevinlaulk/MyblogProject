import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'UserList',
    component: () => import('../views/UserList.vue')
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: () => import('../views/Userinfo.vue')
  },
  {
    path: '/vuecli',
    name: 'vuecli',
    component: () => import('../views/vuecli.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
// 定义了router方法，通过安装router插件实现，并被main.js中使用
