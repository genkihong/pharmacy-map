<template>
  <div class="vue-leaflet w-9/12 h-screen">
    <l-map
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <v-marker-cluster :options="clusterOptions">
        <l-marker v-for="item in updateMap"
          :key="item.id"
          :icon="customIcon(item.properties)"
          :lat-lng="getGeometry(item.geometry)"
        >
          <l-popup>
            <h1 class="text-xl font-medium mb-2">{{item.properties.name}}</h1>
            <div class="text-base text-grey flex items-center mb-2">
              <i class="map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"></i>
              <span>{{item.properties.address}}</span>
            </div>
            <div class="text-base text-grey flex items-center mb-2">
              <i class="phone-icon mr-2 block h-4 w-4 bg-no-repeat"></i>
              <span>{{item.properties.phone}}</span>
            </div>
            <div class="text-base flex mb-2 justify-center">
              <div class="text-center text-white bg-primary py-2 rounded-l rounded-r-none border-r w-1/2">
                <span class="mr-1">成人口罩:</span>
                <span>{{item.properties.mask_adult}}</span>
              </div>
              <div class="text-center text-white bg-primary py-2 rounded-r rounded-l-none w-1/2">
                <span class="mr-1">兒童口罩:</span>
                <span>{{item.properties.mask_child}}</span>
              </div>
            </div>
            <div class="text-sm text-grey"
              v-if="item.properties.updated">更新時間: {{item.properties.updated}}</div>
            <div class="text-sm text-grey" v-else>更新時間: 無</div>
          </l-popup>
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
import { Icon } from 'leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';


export default {
  name: 'VueLeaflet',
  props: {
    updateMap: {
      type: Array,
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      zoom: 12,
      // center: latLng(22.627333, 120.318065),
      center: [22.627333, 120.318065],
      bounds: null,
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
  watch: {
    updateMap() {
      // console.log('緯度', this.updateMap[0].geometry.coordinates[1]);
      // console.log('經度', this.updateMap[0].geometry.coordinates[0]);
      this.center = [this.updateMap[0].geometry.coordinates[1], this.updateMap[0].geometry.coordinates[0]];
    },
  },
  computed: {
    // 更新口罩數量
    pharmacies() {
      return this.$store.state.pharmacies;
    },
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    // 座標經緯度
    getGeometry(geo) {
      // return latLng(geo.coordinates[1], geo.coordinates[0]); // latLng(緯度，經度)
      return [geo.coordinates[1], geo.coordinates[0]]; // latLng(緯度，經度)
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
