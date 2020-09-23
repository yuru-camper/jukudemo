import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue'
import result from '../views/result.vue'
import enrollment from '../views/enrollment.vue'

import h_index from '../views/hiromitu/index.vue'
import h_info from '../views/hiromitu/info.vue'
import h_fee from '../views/hiromitu/fee.vue'
import h_review from '../views/hiromitu/review.vue'

import h_s_sample from '../views/hiromitu/shortMovie/sample.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/result',
    name: 'result',
    component: result
  },
  {
    path: '/enrollment',
    name: 'enrollment',
    component: enrollment
  },
  {
    path: '/hiromitu/',
    name: 'h_index',
    component: h_index
  },
  {
    path: '/hiromitu/info',
    name: 'h_info',
    component: h_info
  },
  {
    path: '/hiromitu/fee',
    name: 'h_fee',
    component: h_fee
  },
  {
    path: '/hiromitu/review',
    name: 'h_review',
    component: h_review
  },
  {
    path: '/hiromitu/shortmovie/sample',
    name: 'h_s_sample',
    component: h_s_sample
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
