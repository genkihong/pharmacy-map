/* eslint-disable arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    pharmacies: [],
    county: [],
    towns: [],
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status); // 執行 mutations 內的 LOADING 要用 context.commit
    },
    getPharmacy(context) {
      const api = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
      context.commit('LOADING', true);
      axios.get(api).then((res) => {
        context.commit('PHARMACY', res.data.features);
        context.commit('COUNTY', res.data.features);
        context.commit('LOADING', false);
      });
    },
    towns(context, zones) {
      context.commit('TOWNS', zones);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PHARMACY(state, payload) {
      state.pharmacies = payload;
    },
    COUNTY(state, payload) {
      const city = new Set();
      payload.forEach((value) => {
        if (!value.properties.county) return;
        city.add(value.properties.county);
      });
      state.county = Array.from(city);
      // console.log('縣市', state.county);
    },
    TOWNS(state, payload) {
      state.towns = payload;
      // console.log('地區', state.towns);
    },
  },
});
