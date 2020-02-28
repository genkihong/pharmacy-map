<template>
  <div id="app" class="md:flex h-screen">
    <Loading
      :active.sync="isLoading"
      :opacity="0.8"
      :width="60"
      background-color="#000"
      loader="bars"
      color="#668AFE"
    >
      <template slot="after">
        <span class="text-white">Loading...</span>
      </template>
    </Loading>
    <div class="w-full md:w-3/12 overflow-y-scroll h-screen">
      <div class="bg-light p-4 sticky top-0 z-10">
        <div class="flex items-center mb-4">
          <label for="city" class="mr-5">縣市</label>
          <select id="city" class="h-10 bg-white flex-auto"
            v-model="selectedCity" @change="selectedZone = ''">
            <option value="" selected>=== 請選擇城市 ===</option>
            <option :value="item" v-for="item in county" :key="item">{{item}}</option>
          </select>
        </div>
        <div class="flex items-center mb-4">
          <label for="zone" class="mr-5">地區</label>
          <select id="zone" class="h-10 bg-white flex-auto"
            v-model="selectedZone">
            <option value="" selected>=== 請選擇行政區 ===</option>
            <option :value="item" v-for="item in towns" :key="item">{{item}}</option>
          </select>
        </div>
        <div class="flex rounded border border-primary mb-4">
          <input type="text" class="flex-auto rounded-l pl-4" placeholder="進階搜尋藥局"
            v-model.trim="searchText"
            @keyup.enter="handleSearch">
          <button class="bg-primary hover:bg-darken text-white py-2 px-4 cursor-pointer"
            @click="handleSearch">
            <i class="fas fa-search fa-lg"></i>
          </button>
          <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white
            hover:border-transparent cursor-pointer py-2 px-4" @click="clearSearch">
            <i class="fas fa-sync-alt fa-lg"></i>
          </button>
        </div>
        <p class="text-right" v-if="isResult">
          取得口罩數量的藥局有 <span class="text-primary text-2xl">0</span> 家
        </p>
        <p class="text-right" v-else>
          取得口罩數量的藥局有 <span class="text-primary text-2xl">{{ updateMap.length }}</span> 家
        </p>
      </div>
      <div class="border-b-2 border-gray-200 p-8" v-if="isResult">
        <h2 class="text-3xl text-center">查無資料…</h2>
      </div>
      <ul v-else>
        <li class="border-b-2 border-gray-200 p-4 hover:bg-blue-100"
          v-for="item in updateMap" :key="item.properties.id">
          <a :href="`https://www.google.com.tw/maps/search/${ item.properties.address }`" target="_blank">
            <h2 class="text-xl font-medium mb-4">{{ item.properties.name }}</h2>
            <div class="text-grey flex items-center mb-3">
              <img class="mr-2" src="./assets/images/location.svg" width="14" alt="">
              <span>{{ item.properties.address }}</span>
            </div>
            <div class="text-grey flex items-center mb-3">
              <img class="mr-2" src="./assets/images/phone.svg" width="16" alt="">
              <span>{{ item.properties.phone }}</span>
            </div>
            <div class="text-grey flex items-baseline mb-3" v-if="item.properties.note !== '-'">
              <i class="fas fa-exclamation-circle mr-2"></i>
              <p>{{ item.properties.note }}</p>
            </div>
            <div class="text-grey flex items-baseline mb-3" v-if="item.properties.custom_note !== ''">
              <i class="fas fa-exclamation-circle mr-2"></i>
              <p>{{ item.properties.custom_note }}</p>
            </div>
            <div class="flex justify-center mb-2">
              <div class="text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2
                bg-gray-300 text-gray-600" v-if="!item.properties.mask_adult">
                <span>成人口罩: 已售完</span>
              </div>
              <div class="text-center py-3 rounded-l rounded-r-none border-r w-1/2
                bg-primary text-white" v-else>
                <span>成人口罩: {{ item.properties.mask_adult }}</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2
                bg-gray-300 text-gray-600" v-if="!item.properties.mask_child">
                <span>兒童口罩: 已售完</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2
                bg-primary text-white" v-else>
                <span>兒童口罩: {{ item.properties.mask_child }}</span>
              </div>
            </div>
            <div class="text-sm text-grey">
              <span>更新時間: {{ !item.properties.updated ? '無' : item.properties.updated }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <VueLeaflet />
  </div>
</template>

<script>
/* eslint-disable arrow-body-style */
import VueLeaflet from './components/VueLeaflet.vue';

export default {
  name: 'App',
  components: {
    VueLeaflet,
  },
  data() {
    return {
      searchText: '',
      isResult: false,
    };
  },
  computed: {
    selectedCity: {
      get() {
        return this.$store.getters.selectedCity;
      },
      set(value) {
        this.$store.commit('SELECTEDCITY', value);
      },
    },
    selectedZone: {
      get() {
        return this.$store.getters.selectedZone;
      },
      set(value) {
        this.$store.commit('SELECTEDZONE', value);
      },
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    county() {
      return this.$store.getters.county;
    },
    towns() {
      return this.$store.getters.towns;
    },
    updateMap() {
      return this.$store.getters.updateMap;
    },
  },
  methods: {
    handleSearch() {
      if (!this.searchText) return;
      const searchData = this.updateMap.filter((value) => {
        return value.properties.address.includes(this.searchText)
                || value.properties.name.includes(this.searchText);
      });
      if (searchData.length > 0) {
        this.isResult = false;
        this.$store.commit('SEARCHDATA', searchData);
      } else {
        this.isResult = true;
      }
    },
    clearSearch() {
      this.searchText = '';
      this.isResult = false;
      this.$store.commit('SEARCHDATA', []);
    },
  },
  mounted() {
    this.$store.dispatch('getPharmacy');
  },
};
</script>
