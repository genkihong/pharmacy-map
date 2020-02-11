<template>
  <div class="vue-leaflet w-9/12 h-screen">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <v-marker-cluster :options="clusterOptions">
        <l-marker v-for="item in pharmacies"
          :key="item.id"
          :icon="customIcon(item.properties)"
          :lat-lng="getGeometry(item.geometry)"
        >
          <l-popup :content="getInfo(item.properties)"></l-popup>
        </l-marker>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
} from 'vue2-leaflet';
import { latLng, Icon } from 'leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';


export default {
  name: 'VueLeaflet',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      zoom: 14,
      center: latLng(22.627333, 120.318065),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      iconColor: {
        grey: this.customIconColor('grey'),
        blue: this.customIconColor('blue'),
        gold: this.customIconColor('gold'),
        green: this.customIconColor('green'),
        red: this.customIconColor('red'),
      },
      clusterOptions: {
        disableClusteringAtZoom: 16,
      },
    };
  },
  computed: {
    // 更新口罩數量
    pharmacies() {
      return this.$store.state.pharmacies;
    },
  },
  methods: {
    // 座標經緯度
    getGeometry(geo) {
      return latLng(geo.coordinates[1], geo.coordinates[0]); // latLng(緯度，經度)
    },
    // 座標彈出視窗
    getInfo(prop) {
      // const phone = `(${prop.phone.substr(0, 2)})-${prop.phone.substr(4)}`;
      const updated = prop.updated === '' ? '無' : prop.updated;
      return `
        <h1 class="text-xl font-medium mb-2">${prop.name}</h1>
        <div class="text-base text-grey mb-2">
          <i class="fas fa-map-marker-alt mr-1"></i>
          <span>${prop.address}</span>
        </div>
        <div class="text-base text-grey mb-2">
          <i class="fas fa-phone-volume mr-1"></i>
          <span>${prop.phone}</span>
        </div>
        <div class="text-base flex mb-2 justify-center">
          <div class="text-center text-white bg-primary py-3 rounded-l rounded-r-none border-r w-1/2">
            <span class="mr-1">成人口罩:</span>
            <span>${prop.mask_adult}</span>
          </div>
          <div class="text-center text-white bg-primary py-3 rounded-r rounded-l-none w-1/2">
            <span class="mr-1">兒童口罩:</span>
            <span>${prop.mask_child}</span>
          </div>
        </div>
        <div class="text-sm text-grey">更新時間: ${updated}</div>
      `;
    },
    // 座標顏色
    customIconColor(color) {
      // leaflet-color-markers
      const iconColor = new Icon({
        iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      return iconColor;
    },
    // 依口罩數量(成人+兒童)區分座標顏色
    customIcon(prop) {
      const quantity = prop.mask_adult + prop.mask_child;
      let icon = this.iconColor.blue;
      if (quantity > 100) {
        icon = this.iconColor.green;
      } else if (quantity > 50) {
        icon = this.iconColor.gold;
      } else if (quantity > 0) {
        icon = this.iconColor.red;
      } else {
        icon = this.iconColor.grey;
      }
      return icon;
    },
  },
};
</script>

<style scoped>
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
