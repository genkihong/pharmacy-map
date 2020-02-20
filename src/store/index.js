/* eslint-disable arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    pharmacies: [],
    updateMap: [],
    selectedCity: '高雄市',
    selectedZone: '三民區',
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PHARMACY(state, payload) {
      state.pharmacies = payload;
    },
    SELECTEDCITY(state, payload) {
      state.selectedCity = payload;
    },
    SELECTEDZONE(state, payload) {
      state.selectedZone = payload;
    },
  },
  actions: {
    getPharmacy({ commit }) {
      const api = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
      commit('LOADING', true);
      axios.get(api).then((res) => {
        commit('PHARMACY', res.data.features);
        commit('LOADING', false);
      });
    },
    selectedCity({ commit }, value) {
      commit('SELECTEDCITY', value);
    },
    selectedZone({ commit }, value) {
      commit('SELECTEDZONE', value);
    },
  },
  getters: {
    isLoading: (state) => {
      return state.isLoading;
    },
    selectedCity(state) {
      return state.selectedCity;
    },
    selectedZone(state) {
      return state.selectedZone;
    },
    county: (state) => {
      const city = new Set();
      state.pharmacies.forEach((value) => {
        if (!value.properties.county) return;
        city.add(value.properties.county);
      });
      return Array.from(city);
    },
    towns: (state, getters) => {
      const zone = new Set();
      getters.filterCityData.forEach((value) => {
        zone.add(value.properties.town);
      });
      return Array.from(zone);
    },
    filterCityData: (state, getters) => {
      return state.pharmacies.filter((value) => {
        return value.properties.county === getters.selectedCity;
      });
    },
    updateMap: (state, getters) => {
      const filterData = state.pharmacies.filter((value) => {
        return value.properties.county === getters.selectedCity
                && value.properties.town === getters.selectedZone;
      });
      return getters.selectedZone ? filterData : getters.filterCityData;
    },
  },
});
