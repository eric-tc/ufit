import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store/store';

import VueGlobalVariable from 'vue-global-var'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.use(VueGlobalVariable, {
  globals: {
  $ip: "134.209.207.110:5000",
  },
  });

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-search-select/dist/VueSearchSelect.css'


const router = new VueRouter({
  routes,
  mode: 'history'
})



new Vue({
  el: '#app',
  store, //--------------->STORE
  router,//---------------> ROUTER
  render: h => h(App)
})


