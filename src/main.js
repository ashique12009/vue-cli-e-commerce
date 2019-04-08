import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.use(VueRouter);

import { routes } from './router/index';
const router = new VueRouter({
  routes
});

import Vuex from 'vuex';
Vue.use(Vuex);
import { storage } from './store/index';

const store = new Vuex.Store(storage);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
