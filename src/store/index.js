import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    pharmacies: [],
    loacations: [],
    zones: [],
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status); // 執行 mutations 內的 LOADING 要用 context.commit
    },
    getPharmacy(context) {
      const api = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
      // fetch(api).then((res) => res.json())
      //   .then((data) => {
      //     console.log('data', data); // eslint-disable-line no-console
      //     context.commit('PHARMACY', data);
      // });
      context.commit('LOADING', true);
      axios.get(api).then((res) => {
        // console.log('data', res.data.features);
        context.commit('PHARMACY', res.data.features);
        // context.commit('LOCATIONS', res.data.features);
        // context.commit('ZONES', res.data.features);
        context.commit('LOADING', false);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PHARMACY(state, payload) {
      state.pharmacies = payload;
    },
    // LOCATIONS(state, payload) {
    // const cityArray = payload.map((value) => value.properties.address.substr(0, 3));
    // state.locations = cityArray.filter((value, index, arr) => arr.indexOf(value) === index);
    //   const city = new Set();
    //   payload.forEach((value) => {
    //     city.add(value.properties.address.substr(0, 3));
    //   });
    //   state.locations = Array.from(city);
    //   console.log('locations', state.locations);
    // },
    // ZONES(state, payload) {
    //   const zone = new Set();
    //   payload.forEach((value) => {
    //     zone.add(value.properties.address.substr(3, 3));
    //   });
    //   state.zones = Array.from(zone);
    //   console.log('zones', state.zones);
    // },
  },
});
