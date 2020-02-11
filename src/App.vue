<template>
  <div id="app" class="flex h-screen">
    <Loading :active.sync="isLoading"></Loading>

    <div class="w-3/12 h-screen overflow-y-scroll">
      <div class="bg-light p-4 sticky top-0 z-10">
        <div class="flex items-center mb-4">
          <label for="city" class="mr-4">縣市</label>
          <select id="city" class="block h-10 bg-white flex-auto" v-model="selectedCity">
            <option value="" selected>=== 請選擇城市 ===</option>
            <option :value="item" v-for="(item, index) in area.city" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="flex items-center mb-4">
          <label for="zone" class="mr-4">地區</label>
          <select id="zone" class="block h-10 bg-white flex-auto" v-model="selectedZone">
            <option value="" selected>=== 請選擇行政區 ===</option>
            <option :value="zone" v-for="(zone, index1) in area[selectedCity]" :key="index1">{{zone}}</option>
          </select>
        </div>
        <p class="text-right">
          取得口罩數量的藥局有 <span class="text-primary text-2xl">{{ pharmacyQuantity }}</span> 家
        </p>
      </div>
      <!-- 查詢結果 -->
      <ul>
        <li class="border-b-2 border-gray-200 p-4 hover:bg-blue-100"
          v-for="(item, index) in filterCity" :key="index">
          <a :href="`https://www.google.com.tw/maps/search/${ item.properties.address }`" target="_blank">
            <h1 class="text-xl font-medium mb-2">{{ item.properties.name }}</h1>
            <div class="text-grey mb-2">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>{{ item.properties.address }}</span>
            </div>
            <div class="text-grey mb-2">
              <i class="fas fa-phone-volume mr-2"></i>
              <span>{{ item.properties.phone }}</span>
            </div>
            <div class="flex justify-center mb-2">
              <div class="text-center text-white py-3 rounded-l rounded-r-none border-r w-1/2"
              :class="maskAdultClass(item)">
                <span class="mr-1">成人口罩:</span>
                <span v-if="item.properties.mask_adult === 0">已售完</span>
                <span v-else>{{ item.properties.mask_adult }}</span>
              </div>
              <div class="text-center text-white py-3 rounded-r rounded-l-none w-1/2"
              :class="maskChildClass(item)">
                <span class="mr-1">兒童口罩:</span>
                <span v-if="item.properties.mask_child === 0">已售完</span>
                <span v-else>{{ item.properties.mask_child }}</span>
              </div>
            </div>
            <div class="text-sm text-grey">
              更新時間: {{ item.properties.updated === '' ? '無' : item.properties.updated }}
            </div>
          </a>
        </li>
      </ul>
    </div>
    <VueLeaflet />
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import VueLeaflet from './components/VueLeaflet.vue';

export default {
  name: 'App',
  components: {
    VueLeaflet,
  },
  data() {
    return {
      selectedCity: '',
      selectedZone: '',
      pharmacyQuantity: 0,
      area:
      {
        city: ['基隆市', '台北市', '新北市', '桃園市', '新竹縣', '新竹市', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
        台北市: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        基隆市: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
        新北市: ['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'],
        連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
        宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
        新竹市: ['東區', '北區', '香山區'],
        新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'],
        桃園市: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'],
        苗栗縣: ['苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'],
        臺中市: ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],
        彰化縣: ['彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'],
        南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
        嘉義市: ['東區', '西區'],
        嘉義縣: ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
        雲林縣: ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'],
        臺南市: ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],
        高雄市: ['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'],
        澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
        金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
        屏東縣: ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'],
        臺東縣: ['臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里鄉'],
        花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],
      },
    };
  },
  computed: {
    // 更新 Loading 狀態
    isLoading() {
      return this.$store.state.isLoading;
    },
    pharmacies() { // 健保署資料
      return this.$store.state.pharmacies;
    },
    filterCity() {
      const vm = this;
      let currentCity = [];
      let city = [];
      if (!vm.selectedCity && !vm.selectedZone) {
        currentCity = vm.pharmacies.filter((value) => {
          city = value.properties.address.substr(0, 3);
          return city === '高雄市';
        });
      } else if (vm.selectedCity) { // 選擇縣市
        console.log('縣市', vm.selectedCity);
        currentCity = vm.pharmacies.filter((value) => {
          city = value.properties.address.substr(0, 3);
          return city === vm.selectedCity;
        });
        if (vm.selectedZone) { // 選擇地區
          console.log('地區', vm.selectedZone);
          currentCity = vm.pharmacies.filter((value) => {
            city = value.properties.address.substr(3, 3);
            return city === vm.selectedZone;
          });
        }
      }
      vm.pharmacyQuantity = currentCity.length;
      return currentCity;
    },
  },
  methods: {
    maskAdultClass(item) {
      let maskAdult = {};
      if (item.properties.mask_adult === 0) {
        maskAdult = {
          'bg-gray-300': true,
          'text-gray-500': true,
        };
      } else {
        maskAdult = {
          'bg-primary': true,
          'text-white': true,
        };
      }
      return maskAdult;
    },
    maskChildClass(item) {
      let maskChild = {};
      if (item.properties.mask_child === 0) {
        maskChild = {
          'bg-gray-300': true,
          'text-gray-500': true,
        };
      } else {
        maskChild = {
          'bg-primary': true,
          'text-white': true,
        };
      }
      return maskChild;
    },
  },
  mounted() {
    // 取得健保局資料
    this.$store.dispatch('getPharmacy');
    // 取得目前所在位置經緯度
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      const p = pos.coords;
      this.center = latLng(p.latitude, p.longitude);
    });
  },
};
</script>

<style lang="scss">

</style>
