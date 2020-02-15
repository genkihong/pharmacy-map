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
    updateMap: [],
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
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
    updateMap(context, data) {
      context.commit('UPDATEMAP', data);
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
    },
    TOWNS(state, payload) {
      state.towns = payload;
    },
    UPDATEMAP(state, payload) {
      state.updateMap = payload;
    },
  },
});
