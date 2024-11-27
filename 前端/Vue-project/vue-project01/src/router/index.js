import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personal-info',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalInfoPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
