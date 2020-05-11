import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages'

Vue.use(VueRouter)

const routes = pages

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
