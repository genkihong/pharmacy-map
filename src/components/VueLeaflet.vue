<template>
  <div class="hidden md:block md:w-9/12">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <v-marker-cluster :options="clusterOptions">
        <l-marker v-for="item in updateMap"
          :key="item.properties.id"
          :icon="customIcon(item.properties)"
          :lat-lng="[item.geometry.coordinates[1],
                      item.geometry.coordinates[0]]"
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
              <div class="text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2
                bg-gray-300 text-gray-600" v-if="!item.properties.mask_adult">
                <span>成人口罩:0</span>
              </div>
              <div class="text-center py-3 rounded-l rounded-r-none border-r w-1/2
                bg-primary text-white" v-else>
                <span>成人口罩:{{ item.properties.mask_adult }}</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2
                bg-gray-300 text-gray-600" v-if="!item.properties.mask_child">
                <span>兒童口罩:0</span>
              </div>
              <div class="text-center py-3 rounded-r rounded-l-none w-1/2
                bg-primary text-white" v-else>
                <span>兒童口罩:{{ item.properties.mask_child }}</span>
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
import L from 'leaflet';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
} from 'vue2-leaflet';
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
      zoom: 12,
      center: [22.627333, 120.318065],
      bounds: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
      icon: L.icon.pulse({
        iconSize: [20, 20],
        color: '#668AFE',
        fillColor: '#668AFE',
      }),
    };
  },
  watch: {
    updateMap() {
      this.center = [this.updateMap[0].geometry.coordinates[1],
        this.updateMap[0].geometry.coordinates[0]];
    },
  },
  computed: {
    updateMap() {
      return this.$store.getters.updateMap;
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
    customIconColor(color) {
      const iconColor = new L.Icon({
        iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      return iconColor;
    },
    customIcon(prop) {
      const quantity = prop.mask_adult + prop.mask_child;
      let marker;
      if (quantity > 100) {
        marker = this.icon;
      } else if (quantity > 50) {
        marker = this.iconColor.gold;
      } else if (quantity > 0) {
        marker = this.iconColor.red;
      } else {
        marker = this.iconColor.grey;
      }
      return marker;
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.center = [pos.coords.latitude, pos.coords.longitude];
    });
  },
};
</script>
