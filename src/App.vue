<template>
  <div id="app" class="lg:flex h-screen">
    <Loading :active.sync="isLoading"></Loading>

    <div class="w-full lg:w-3/12 overflow-y-scroll">
      <div class="bg-light p-4 sticky top-0 z-10">
        <div class="flex items-center mb-4">
          <label for="city" class="mr-4">縣市</label>
          <select id="city" class="block h-10 bg-white flex-auto"
            v-model="selectedCity" @change="selectedZone = null">
            <option value="" selected>=== 請選擇城市 ===</option>
            <option :value="item" v-for="item in county" :key="item">{{item}}</option>
          </select>
        </div>
        <div class="flex items-center mb-4">
          <label for="zone" class="mr-4">地區</label>
          <select id="zone" class="block h-10 bg-white flex-auto"
            v-model="selectedZone">
            <option value="" selected>=== 請選擇行政區 ===</option>
            <option :value="item" v-for="item in towns" :key="item">{{item}}</option>
          </select>
        </div>
        <p class="text-right">
          取得口罩數量的藥局有 <span class="text-primary text-2xl">{{ filterData.length }}</span> 家
        </p>
      </div>
      <!-- 查詢結果 -->
      <ul>
        <li class="border-b-2 border-gray-200 p-4 hover:bg-blue-100"
          v-for="item in filterData" :key="item.properties.id">
          <a :href="`https://www.google.com.tw/maps/search/${ item.properties.address }`" target="_blank">
            <h1 class="text-xl font-medium mb-2">{{ item.properties.name }}</h1>
            <div class="text-grey flex items-center mb-2">
              <i class="map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"></i>
              <span>{{ item.properties.address }}</span>
            </div>
            <div class="text-grey flex items-center mb-2">
              <i class="phone-icon mr-2 block h-4 w-4 bg-no-repeat"></i>
              <span>{{ item.properties.phone }}</span>
            </div>
            <div class="flex justify-center mb-2">
              <div class="text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2"
                :class="maskAdultClass()"
                v-if="!item.properties.mask_adult">
                <span class="mr-1">成人口罩:</span>
                <span>已售完</span>
              </div>
              <div class="text-center py-3 rounded-l rounded-r-none border-r w-1/2
                bg-primary text-white" v-else>
                <span class="mr-1">成人口罩:</span>
                <span>{{ item.properties.mask_adult }}</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2"
                :class="maskChildClass()"
                v-if="!item.properties.mask_child">
                <span class="mr-1">兒童口罩:</span>
                <span>已售完</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2
                bg-primary text-white" v-else>
                <span class="mr-1">兒童口罩:</span>
                <span>{{ item.properties.mask_child }}</span>
              </div>
            </div>
            <div class="text-sm text-grey">
              更新時間: {{ !item.properties.updated ? '無' : item.properties.updated }}
            </div>
          </a>
        </li>
      </ul>
    </div>
    <VueLeaflet :update-map="updateMap" />
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
      selectedCity: '高雄市',
      selectedZone: '三民區',
      updateMap: [],
    };
  },
  computed: {
    isLoading() { // 更新 Loading 狀態
      return this.$store.state.isLoading;
    },
    pharmacies() { // 健保署資料
      return this.$store.state.pharmacies;
    },
    county() { // 縣市
      return this.$store.state.county;
    },
    towns() { // 縣市的地區
      return this.$store.state.towns;
    },
    filterData() {
      const vm = this;
      const filterCityData = vm.pharmacies.filter((value) => {
        return value.properties.county === vm.selectedCity;
      });
      vm.filterTown(filterCityData);
      const filterData = vm.pharmacies.filter((value) => {
        return value.properties.county === vm.selectedCity
                && value.properties.town === vm.selectedZone;
      });
      vm.updateMap = vm.selectedZone ? filterData : filterCityData;
      return vm.selectedZone ? filterData : filterCityData;
    },
  },
  methods: {
    getPharmacy() {
      this.$store.dispatch('getPharmacy');
    },
    filterTown(data) {
      const zone = new Set();
      data.forEach((value) => {
        zone.add(value.properties.town);
      });
      const zones = Array.from(zone);
      this.$store.dispatch('towns', zones);
    },
    maskAdultClass() {
      const maskAdult = {
        'bg-gray-300': true,
        'text-gray-500': true,
      };
      return maskAdult;
    },
    maskChildClass() {
      const maskChild = {
        'bg-gray-300': true,
        'text-gray-500': true,
      };
      return maskChild;
    },
  },
  mounted() {
    // 取得藥局資料
    this.getPharmacy();
    // 取得目前所在位置經緯度
    navigator.geolocation.getCurrentPosition((pos) => {
      const p = pos.coords;
      this.center = [p.latitude, p.longitude];
    });
  },
};
</script>

<style lang="scss">
  .map-icon {
    background-image: url('./assets/images/location.svg');
  }
  .phone-icon {
    background-image: url('./assets/images/phone.svg');
  }
</style>
