// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'
// Import 
Vue.use(VueRouter);
// Vue.use(Vuex);
Vue.use(VueCurrencyFilter)
// Vue Currency
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

const router = new VueRouter({
	mode: 'history',
	routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

