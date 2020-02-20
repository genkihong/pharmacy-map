(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("bc3a"),s=r.n(o),a=r("a7fe"),i=r.n(a),c=r("9062"),l=r.n(c),u=r("e11e"),d=r.n(u),p=r("9d52"),f=r.n(p),m=(r("def6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md:flex h-screen",attrs:{id:"app"}},[r("Loading",{attrs:{active:e.isLoading,opacity:.8,width:60,"background-color":"#000",loader:"bars",color:"#668AFE"},on:{"update:active":function(t){e.isLoading=t}}},[r("template",{slot:"after"},[r("span",{staticClass:"text-white"},[e._v("Loading...")])])],2),r("div",{staticClass:"w-full md:w-3/12 overflow-y-scroll h-screen"},[r("div",{staticClass:"bg-light p-4 sticky top-0 z-10"},[r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"city"}},[e._v("縣市")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCity,expression:"selectedCity"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"city"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCity=t.target.multiple?r:r[0]},function(t){e.handleLoading(),e.selectedZone=""}]}},[r("option",{attrs:{value:"",selected:""}},[e._v("=== 請選擇城市 ===")]),e._l(e.county,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"zone"}},[e._v("地區")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedZone,expression:"selectedZone"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"zone"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedZone=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:""}},[e._v("=== 請選擇行政區 ===")]),e._l(e.towns,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),r("p",{staticClass:"text-right"},[e._v(" 取得口罩數量的藥局有 "),r("span",{staticClass:"text-primary text-2xl"},[e._v(e._s(e.updateMap.length))]),e._v(" 家 ")])]),r("ul",e._l(e.updateMap,(function(t){return r("li",{key:t.properties.id,staticClass:"border-b-2 border-gray-200 p-4 hover:bg-blue-100"},[r("a",{attrs:{href:"https://www.google.com.tw/maps/search/"+t.properties.address,target:"_blank"}},[r("h1",{staticClass:"text-xl font-medium mb-2"},[e._v(e._s(t.properties.name))]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[e._v(e._s(t.properties.address))])]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[e._v(e._s(t.properties.phone))])]),r("div",{staticClass:"flex justify-center mb-2"},[t.properties.mask_adult?r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[r("span",[e._v("成人口罩: "+e._s(t.properties.mask_adult))])]):r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[e._v("成人口罩: 已售完")])]),t.properties.mask_child?r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[r("span",[e._v("兒童口罩: "+e._s(t.properties.mask_child))])]):r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[e._v("兒童口罩: 已售完")])])]),r("div",{staticClass:"text-sm text-grey"},[e._v(" 更新時間: "+e._s(t.properties.updated?t.properties.updated:"無")+" ")])])])})),0)]),r("VueLeaflet")],1)}),h=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hidden md:block md:w-9/12"},[r("l-map",{attrs:{zoom:e.zoom,center:e.center},on:{"update:zoom":e.zoomUpdated,"update:center":e.centerUpdated,"update:bounds":e.boundsUpdated}},[r("l-tile-layer",{attrs:{url:e.url}}),r("v-marker-cluster",{attrs:{options:e.clusterOptions}},e._l(e.updateMap,(function(t){return r("l-marker",{key:t.properties.id,attrs:{icon:e.customIcon(t.properties),"lat-lng":[t.geometry.coordinates[1],t.geometry.coordinates[0]]}},[r("l-popup",[r("h1",{staticClass:"text-xl font-medium mb-2"},[e._v(e._s(t.properties.name))]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[e._v(e._s(t.properties.address))])]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[e._v(e._s(t.properties.phone))])]),r("div",{staticClass:"text-base flex mb-2 justify-center"},[t.properties.mask_adult?r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[r("span",[e._v("成人口罩:"+e._s(t.properties.mask_adult))])]):r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[e._v("成人口罩:0")])]),t.properties.mask_child?r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[r("span",[e._v("兒童口罩:"+e._s(t.properties.mask_child))])]):r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[e._v("兒童口罩:0")])])]),t.properties.updated?r("div",{staticClass:"text-sm text-grey"},[e._v("更新時間: "+e._s(t.properties.updated))]):r("div",{staticClass:"text-sm text-grey"},[e._v("更新時間: 無")])])],1)})),1)],1)],1)},v=[],y=r("2699"),b=r("a40a"),C=r("4e2b"),_=r("f60f"),x=r("ca9f"),w=r.n(x),k={name:"VueLeaflet",components:{LMap:y["a"],LTileLayer:b["a"],LMarker:C["a"],LPopup:_["a"],"v-marker-cluster":w.a},data:function(){return{zoom:12,center:[22.627333,120.318065],bounds:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",iconColor:{grey:this.customIconColor("grey"),blue:this.customIconColor("blue"),gold:this.customIconColor("gold"),green:this.customIconColor("green"),red:this.customIconColor("red")},clusterOptions:{disableClusteringAtZoom:16},icon:d.a.icon.pulse({iconSize:[20,20],color:"#668AFE",fillColor:"#668AFE"})}},watch:{updateMap:function(){this.center=[this.updateMap[0].geometry.coordinates[1],this.updateMap[0].geometry.coordinates[0]]}},computed:{updateMap:function(){return this.$store.getters.updateMap}},methods:{zoomUpdated:function(e){this.zoom=e},centerUpdated:function(e){this.center=e},boundsUpdated:function(e){this.bounds=e},customIconColor:function(e){var t=new d.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(e,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return t},customIcon:function(e){var t,r=e.mask_adult+e.mask_child;return t=r>100?this.icon:r>50?this.iconColor.gold:r>0?this.iconColor.red:this.iconColor.grey,t}},mounted:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.center=[t.coords.latitude,t.coords.longitude]}))}},L=k,E=r("2877"),O=Object(E["a"])(L,g,v,!1,null,null,null),M=O.exports,A={name:"App",components:{VueLeaflet:M},computed:{selectedCity:{get:function(){return this.$store.getters.selectedCity},set:function(e){this.$store.dispatch("selectedCity",e)}},selectedZone:{get:function(){return this.$store.getters.selectedZone},set:function(e){this.$store.dispatch("selectedZone",e)}},isLoading:function(){return this.$store.getters.isLoading},county:function(){return this.$store.getters.county},towns:function(){return this.$store.getters.towns},updateMap:function(){return this.$store.getters.updateMap}},methods:{handleLoading:function(){var e=this.$loading.show({color:"#668AFE",loader:"dots"});setTimeout((function(){e.hide()}),2e3)}},mounted:function(){this.$store.dispatch("getPharmacy")}},j=A,I=(r("5c0b"),Object(E["a"])(j,m,h,!1,null,null,null)),Z=I.exports,P=(r("4de4"),r("4160"),r("a630"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("2f62"));n["a"].use(P["a"]);var S=new P["a"].Store({state:{isLoading:!1,pharmacies:[],updateMap:[],selectedCity:"高雄市",selectedZone:"三民區"},mutations:{LOADING:function(e,t){e.isLoading=t},PHARMACY:function(e,t){e.pharmacies=t},SELECTEDCITY:function(e,t){e.selectedCity=t},SELECTEDZONE:function(e,t){e.selectedZone=t}},actions:{getPharmacy:function(e){var t=e.commit,r="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";t("LOADING",!0),s.a.get(r).then((function(e){t("PHARMACY",e.data.features),t("LOADING",!1)}))},selectedCity:function(e,t){var r=e.commit;r("SELECTEDCITY",t)},selectedZone:function(e,t){var r=e.commit;r("SELECTEDZONE",t)}},getters:{isLoading:function(e){return e.isLoading},selectedCity:function(e){return e.selectedCity},selectedZone:function(e){return e.selectedZone},county:function(e){var t=new Set;return e.pharmacies.forEach((function(e){e.properties.county&&t.add(e.properties.county)})),Array.from(t)},towns:function(e,t){var r=new Set;return t.filterCityData.forEach((function(e){r.add(e.properties.town)})),Array.from(r)},filterCityData:function(e,t){return e.pharmacies.filter((function(e){return e.properties.county===t.selectedCity}))},updateMap:function(e,t){var r=e.pharmacies.filter((function(e){return e.properties.county===t.selectedCity&&e.properties.town===t.selectedZone}));return t.selectedZone?r:t.filterCityData}}});n["a"].config.productionTip=!1,n["a"].use(l.a),n["a"].use(i.a,s.a),n["a"].use(f.a),n["a"].component("Loading",l.a),delete u["Icon"].Default.prototype._getIconUrl,u["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),new n["a"]({store:S,render:function(e){return e(Z)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(e,t,r){},def6:function(e,t,r){}});
//# sourceMappingURL=app.47597b53.js.map