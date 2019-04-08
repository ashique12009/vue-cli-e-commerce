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

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
