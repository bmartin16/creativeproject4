import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import MakeYourOwn from '../views/MakeYourOwn.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
  path: '/cart',
  name: 'Cart',
  component: Cart
  },
  {
  path: '/makeYourOwn',
  name: 'MakeYourOwn',
  component: MakeYourOwn
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
