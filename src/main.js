import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
