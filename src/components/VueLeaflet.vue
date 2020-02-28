<template>
  <div class="hidden md:block md:w-9/12">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :options="zoomControl"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control-zoom position="topright"></l-control-zoom>
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
              <img class="mr-2" src="../assets/images/location.svg" width="14" alt="">
              <span>{{item.properties.address}}</span>
            </div>
            <div class="text-base text-grey flex items-center mb-2">
              <img class="mr-2" src="../assets/images/phone.svg" width="16" alt="">
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
  LControlZoom,
  LMarker,
  LPopup,
} from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

export default {
  name: 'VueLeaflet',
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      zoom: 12,
      center: [22.627333, 120.318065],
      zoomControl: { zoomControl: false },
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
      const geo = this.updateMap[0].geometry.coordinates;
      this.$refs.map.mapObject.flyTo([geo[1], geo[0]], 14);
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
      const maskAadult = prop.mask_adult;
      const maskChild = prop.mask_child;
      const quantity = maskAadult + maskChild;
      let marker;
      if (maskAadult >= 200 && maskChild >= 200) {
        marker = this.icon;
      } else if (maskAadult > 100) {
        marker = this.iconColor.green;
      } else if (maskAadult > 50) {
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
