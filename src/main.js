import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store/store';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

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


