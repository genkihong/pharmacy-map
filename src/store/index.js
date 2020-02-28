/* eslint-disable arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    pharmacies: [],
    searchData: [],
    selectedCity: '高雄市',
    selectedZone: '',
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
    SEARCHDATA(state, payload) {
      state.searchData = payload;
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
  },
  getters: {
    isLoading: (state) => {
      return state.isLoading;
    },
    selectedCity: (state) => {
      return state.selectedCity;
    },
    selectedZone: (state) => {
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
    filterTownData: (state, getters) => {
      return getters.filterCityData.filter((value) => {
        return value.properties.town === getters.selectedZone;
      });
    },
    updateMap: (state, getters) => {
      let filterData = [];
      if (state.searchData.length > 0) {
        filterData = state.searchData;
      } else if (getters.selectedZone) {
        filterData = getters.filterTownData;
      } else if (getters.selectedCity) {
        filterData = getters.filterCityData;
      }
      return filterData;
    },
  },
});
