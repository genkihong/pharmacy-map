(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pharmacy-map/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("bc3a"),s=r.n(a),o=r("a7fe"),i=r.n(o),c=r("9062"),l=r.n(c),u=r("e11e"),p=(r("e40d"),r("6cc5"),r("def6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex h-screen",attrs:{id:"app"}},[r("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"w-3/12 h-screen overflow-y-scroll"},[r("div",{staticClass:"bg-light p-4 sticky top-0 z-10"},[r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"city"}},[t._v("縣市")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"city"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?r:r[0]},function(e){t.selectedZone=null}]}},[r("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇城市 ===")]),t._l(t.county,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"zone"}},[t._v("地區")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedZone,expression:"selectedZone"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"zone"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedZone=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇行政區 ===")]),t._l(t.towns,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),r("p",{staticClass:"text-right"},[t._v(" 取得口罩數量的藥局有 "),r("span",{staticClass:"text-primary text-2xl"},[t._v(t._s(t.filterData.length))]),t._v(" 家 ")])]),r("ul",t._l(t.filterData,(function(e){return r("li",{key:e.properties.id,staticClass:"border-b-2 border-gray-200 p-4 hover:bg-blue-100"},[r("a",{attrs:{href:"https://www.google.com.tw/maps/search/"+e.properties.address,target:"_blank"}},[r("h1",{staticClass:"text-xl font-medium mb-2"},[t._v(t._s(e.properties.name))]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[t._v(t._s(e.properties.address))])]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[t._v(t._s(e.properties.phone))])]),r("div",{staticClass:"flex justify-center mb-2"},[0===e.properties.mask_adult?r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2",class:t.maskAdultClass()},[r("span",{staticClass:"mr-1"},[t._v("成人口罩:")]),r("span",[t._v("已售完")])]):r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[r("span",{staticClass:"mr-1"},[t._v("成人口罩:")]),r("span",[t._v(t._s(e.properties.mask_adult))])]),0===e.properties.mask_child?r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2",class:t.maskChildClass()},[r("span",{staticClass:"mr-1"},[t._v("兒童口罩:")]),r("span",[t._v("已售完")])]):r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none border-r w-1/2\n              bg-primary text-white"},[r("span",{staticClass:"mr-1"},[t._v("兒童口罩:")]),r("span",[t._v(t._s(e.properties.mask_child))])])]),r("div",{staticClass:"text-sm text-grey"},[t._v(" 更新時間: "+t._s(""===e.properties.updated?"無":e.properties.updated)+" ")])])])})),0)]),r("VueLeaflet",{attrs:{"update-map":t.searchResult}})],1)}),d=[],m=(r("4de4"),r("4160"),r("a630"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-leaflet w-9/12 h-screen"},[r("l-map",{attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),r("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.updateMap,(function(e){return r("l-marker",{key:e.id,attrs:{icon:t.customIcon(e.properties),"lat-lng":t.getGeometry(e.geometry)}},[r("l-popup",[r("h1",{staticClass:"text-xl font-medium mb-2"},[t._v(t._s(e.properties.name))]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[t._v(t._s(e.properties.address))])]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[t._v(t._s(e.properties.phone))])]),r("div",{staticClass:"text-base flex mb-2 justify-center"},[r("div",{staticClass:"text-center text-white bg-primary py-2 rounded-l rounded-r-none border-r w-1/2"},[r("span",{staticClass:"mr-1"},[t._v("成人口罩:")]),r("span",[t._v(t._s(e.properties.mask_adult))])]),r("div",{staticClass:"text-center text-white bg-primary py-2 rounded-r rounded-l-none w-1/2"},[r("span",{staticClass:"mr-1"},[t._v("兒童口罩:")]),r("span",[t._v(t._s(e.properties.mask_child))])])]),e.properties.updated?r("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: "+t._s(e.properties.updated))]):r("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: 無")])])],1)})),1)],1)],1)}),f=[],h=r("2699"),v=r("a40a"),g=r("4e2b"),b=r("f60f"),y=r("ca9f"),_=r.n(y),C={name:"VueLeaflet",props:{updateMap:{type:Array}},components:{LMap:h["a"],LTileLayer:v["a"],LMarker:g["a"],LPopup:b["a"],"v-marker-cluster":_.a},data:function(){return{zoom:12,center:[22.627333,120.318065],bounds:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',iconColor:{grey:this.customIconColor("grey"),blue:this.customIconColor("blue"),gold:this.customIconColor("gold"),green:this.customIconColor("green"),red:this.customIconColor("red")},clusterOptions:{disableClusteringAtZoom:16}}},watch:{updateMap:function(){this.center=[this.updateMap[0].geometry.coordinates[1],this.updateMap[0].geometry.coordinates[0]]}},computed:{pharmacies:function(){return this.$store.state.pharmacies}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},getGeometry:function(t){return[t.coordinates[1],t.coordinates[0]]},customIconColor:function(t){var e=new u["Icon"]({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(t,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return e},customIcon:function(t){var e=t.mask_adult+t.mask_child,r=this.iconColor.blue;return r=e>100?this.iconColor.green:e>50?this.iconColor.gold:e>0?this.iconColor.red:this.iconColor.grey,r}}},w=C,x=r("2877"),k=Object(x["a"])(w,m,f,!1,null,null,null),O=k.exports,L={name:"App",components:{VueLeaflet:O},data:function(){return{selectedCity:"高雄市",selectedZone:"三民區",searchResult:[]}},computed:{isLoading:function(){return this.$store.state.isLoading},pharmacies:function(){return this.$store.state.pharmacies},county:function(){return this.$store.state.county},towns:function(){return this.$store.state.towns},filterData:function(){var t=this,e=t.pharmacies.filter((function(e){return e.properties.county===t.selectedCity}));this.filterTown(e);var r=t.pharmacies.filter((function(e){return e.properties.county===t.selectedCity&&e.properties.town===t.selectedZone}));return t.searchResult=t.selectedZone?r:e,t.selectedZone?r:e}},methods:{getPharmacy:function(){this.$store.dispatch("getPharmacy")},filterTown:function(t){var e=new Set;t.forEach((function(t){e.add(t.properties.town)}));var r=Array.from(e);this.$store.dispatch("towns",r)},maskAdultClass:function(){var t={"bg-gray-300":!0,"text-gray-500":!0};return t},maskChildClass:function(){var t={"bg-gray-300":!0,"text-gray-500":!0};return t}},mounted:function(){var t=this;this.getPharmacy(),navigator.geolocation.getCurrentPosition((function(e){var r=e.coords;t.center=[r.latitude,r.longitude]}))}},A=L,j=(r("5c0b"),Object(x["a"])(A,p,d,!1,null,null,null)),P=j.exports,I=r("2f62");n["a"].use(I["a"]);var M=new I["a"].Store({state:{isLoading:!1,pharmacies:[],county:[],towns:[]},actions:{updateLoading:function(t,e){t.commit("LOADING",e)},getPharmacy:function(t){var e="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";t.commit("LOADING",!0),s.a.get(e).then((function(e){t.commit("PHARMACY",e.data.features),t.commit("COUNTY",e.data.features),t.commit("LOADING",!1)}))},towns:function(t,e){t.commit("TOWNS",e)}},mutations:{LOADING:function(t,e){t.isLoading=e},PHARMACY:function(t,e){t.pharmacies=e},COUNTY:function(t,e){var r=new Set;e.forEach((function(t){t.properties.county&&r.add(t.properties.county)})),t.county=Array.from(r)},TOWNS:function(t,e){t.towns=e}}});n["a"].config.productionTip=!1,n["a"].use(i.a,s.a),n["a"].component("Loading",l.a),delete u["Icon"].Default.prototype._getIconUrl,u["Icon"].Default.mergeOptions({iconRetinaUrl:r("7834"),iconUrl:r("7834"),shadowUrl:r("e2b9")}),new n["a"]({store:M,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7834:function(t,e,r){t.exports=r.p+"img/point.77be2b02.svg"},"9c0c":function(t,e,r){},def6:function(t,e,r){}});
//# sourceMappingURL=app.b82e73cc.js.map