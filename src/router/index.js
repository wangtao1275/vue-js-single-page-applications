import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCategory from '../components/AppCategory.vue'
import AppLogin from '../components/AppLogin.vue'
import NotFound from '../components/NotFound.vue'
// const AppCategory = () => import('../components/AppCategory')
// const AppLogin = () => import('../components/AppLogin')
// const NotFound = () => import('../components/NotFound')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/login', component: AppLogin},
    {path: '/category/:id', name: 'category', component: AppCategory},
    {path: '/', redirect: '/category/front-end'},
    {path: '*', component: NotFound}
  ]
})

export default router
