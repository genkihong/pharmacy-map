import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import { Icon } from 'leaflet';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'leaflet/dist/leaflet.css';
import './assets/css/tailwind.css';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component('Loading', Loading);

delete Icon.Default.prototype._getIconUrl; // eslint-disable-line
Icon.Default.mergeOptions({
  iconRetinaUrl: require('./assets/images/point.svg'), // eslint-disable-line
  iconUrl: require('./assets/images/point.svg'), // eslint-disable-line
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // eslint-disable-line
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
