import Vue from 'vue'
import VueRouter from 'vue-router'
import Oros from '../views/Oros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Oros',
    component: Oros
  },

]

const router = new VueRouter({
  routes
})

export default router
