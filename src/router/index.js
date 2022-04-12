import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '*',//*通配符
    name: 'notfound',
    component: ()=>import('../views/NotFound.vue'),
  },
  {
    // 根路径localhost:8080
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/process',
    name: 'process',
    component: () => import(/* webpackChunkName: "about" */ '../views/Process.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
