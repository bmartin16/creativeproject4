import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.config.productionTip = false

let data = {
  items: [],
  cart: [],
  currentId: 1,
  color: 'black.jpg',
  numberOfShirts: 0,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
