import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'leaflet/dist/leaflet.css';
import './assets/css/tailwind.css';
import './assets/css/output.css';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(axios);

Vue.component('Loading', Loading);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
