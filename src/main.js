import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router= new VueRouter({
  routes,
  mode:'history'
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
