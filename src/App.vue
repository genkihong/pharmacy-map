<template>
  <div id="app" class="lg:flex h-screen">
    <Loading :active.sync="isLoading"></Loading>

    <div class="w-full lg:w-3/12 overflow-y-scroll">
      <div class="bg-light p-4 sticky top-0 z-10">
        <div class="flex items-center mb-4">
          <label for="city" class="mr-4">縣市</label>
          <select id="city" class="block h-10 bg-white flex-auto"
            v-model="selectedCity" @change="selectedZone = ''">
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
          取得口罩數量的藥局有 <span class="text-primary text-2xl">{{ updateMap.length }}</span> 家
        </p>
      </div>
      <ul>
        <li class="border-b-2 border-gray-200 p-4 hover:bg-blue-100"
          v-for="item in updateMap" :key="item.properties.id">
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
              更新時間: {{ !item.properties.updated ? '無' : item.properties.updated }}
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
      selectedCity: '高雄市',
      selectedZone: '三民區',
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    pharmacies() {
      return this.$store.state.pharmacies;
    },
    county() {
      return this.$store.state.county;
    },
    towns() {
      return this.$store.state.towns;
    },
    updateMap() {
      const vm = this;
      const filterCityData = vm.pharmacies.filter((value) => {
        return value.properties.county === vm.selectedCity;
      });
      vm.filterTown(filterCityData);
      const filterData = vm.pharmacies.filter((value) => {
        return value.properties.county === vm.selectedCity
                && value.properties.town === vm.selectedZone;
      });
      const updateMap = vm.selectedZone ? filterData : filterCityData;
      this.$store.dispatch('updateMap', updateMap);
      return this.$store.state.updateMap;
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
  },
  mounted() {
    this.getPharmacy();
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
