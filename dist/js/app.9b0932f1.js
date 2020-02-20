(function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("bc3a"),s=r.n(o),a=r("a7fe"),i=r.n(a),c=r("9062"),l=r.n(c),u=r("e11e"),d=r.n(u),p=r("9d52"),f=r.n(p),m=(r("def6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:flex h-screen",attrs:{id:"app"}},[r("Loading",{attrs:{active:t.isLoading,opacity:t.opacity,"background-color":t.bgColor,width:60,loader:"bars",color:"#668AFE"},on:{"update:active":function(e){t.isLoading=e}}},[r("template",{slot:"after"},[r("span",{staticClass:"text-white"},[t._v("Loading...")])])],2),r("div",{staticClass:"w-full lg:w-3/12 overflow-y-scroll"},[r("div",{staticClass:"bg-light p-4 sticky top-0 z-10"},[r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"city"}},[t._v("縣市")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"city"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?r:r[0]},function(e){t.handleLoading(),t.selectedZone=""}]}},[r("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇城市 ===")]),t._l(t.county,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),r("div",{staticClass:"flex items-center mb-4"},[r("label",{staticClass:"mr-4",attrs:{for:"zone"}},[t._v("地區")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedZone,expression:"selectedZone"}],staticClass:"block h-10 bg-white flex-auto",attrs:{id:"zone"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedZone=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇行政區 ===")]),t._l(t.towns,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),r("p",{staticClass:"text-right"},[t._v(" 取得口罩數量的藥局有 "),r("span",{staticClass:"text-primary text-2xl"},[t._v(t._s(t.updateMap.length))]),t._v(" 家 ")])]),r("ul",t._l(t.updateMap,(function(e){return r("li",{key:e.properties.id,staticClass:"border-b-2 border-gray-200 p-4 hover:bg-blue-100"},[r("a",{attrs:{href:"https://www.google.com.tw/maps/search/"+e.properties.address,target:"_blank"}},[r("h1",{staticClass:"text-xl font-medium mb-2"},[t._v(t._s(e.properties.name))]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[t._v(t._s(e.properties.address))])]),r("div",{staticClass:"text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[t._v(t._s(e.properties.phone))])]),r("div",{staticClass:"flex justify-center mb-2"},[e.properties.mask_adult?r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[r("span",[t._v("成人口罩: "+t._s(e.properties.mask_adult))])]):r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[t._v("成人口罩: 已售完")])]),e.properties.mask_child?r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[r("span",[t._v("兒童口罩: "+t._s(e.properties.mask_child))])]):r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[t._v("兒童口罩: 已售完")])])]),r("div",{staticClass:"text-sm text-grey"},[t._v(" 更新時間: "+t._s(e.properties.updated?e.properties.updated:"無")+" ")])])])})),0)]),r("VueLeaflet")],1)}),g=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hidden lg:block lg:w-9/12"},[r("l-map",{attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[r("l-tile-layer",{attrs:{url:t.url}}),r("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.updateMap,(function(e){return r("l-marker",{key:e.properties.id,attrs:{icon:t.customIcon(e.properties),"lat-lng":[e.geometry.coordinates[1],e.geometry.coordinates[0]]}},[r("l-popup",[r("h1",{staticClass:"text-xl font-medium mb-2"},[t._v(t._s(e.properties.name))]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"map-icon mr-2 block h-4 w-4 bg-no-repeat bg-contain"}),r("span",[t._v(t._s(e.properties.address))])]),r("div",{staticClass:"text-base text-grey flex items-center mb-2"},[r("i",{staticClass:"phone-icon mr-2 block h-4 w-4 bg-no-repeat"}),r("span",[t._v(t._s(e.properties.phone))])]),r("div",{staticClass:"text-base flex mb-2 justify-center"},[e.properties.mask_adult?r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[r("span",[t._v("成人口罩:"+t._s(e.properties.mask_adult))])]):r("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[t._v("成人口罩:0")])]),e.properties.mask_child?r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[r("span",[t._v("兒童口罩:"+t._s(e.properties.mask_child))])]):r("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[r("span",[t._v("兒童口罩:0")])])]),e.properties.updated?r("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: "+t._s(e.properties.updated))]):r("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: 無")])])],1)})),1)],1)],1)},v=[],y=r("2699"),b=r("a40a"),C=r("4e2b"),_=r("f60f"),x=r("ca9f"),w=r.n(x),k={name:"VueLeaflet",components:{LMap:y["a"],LTileLayer:b["a"],LMarker:C["a"],LPopup:_["a"],"v-marker-cluster":w.a},data:function(){return{zoom:12,center:[22.627333,120.318065],bounds:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",iconColor:{grey:this.customIconColor("grey"),blue:this.customIconColor("blue"),gold:this.customIconColor("gold"),green:this.customIconColor("green"),red:this.customIconColor("red")},clusterOptions:{disableClusteringAtZoom:16},icon:d.a.icon.pulse({iconSize:[20,20],color:"#668AFE",fillColor:"#668AFE"})}},watch:{updateMap:function(){this.center=[this.updateMap[0].geometry.coordinates[1],this.updateMap[0].geometry.coordinates[0]]}},computed:{updateMap:function(){return this.$store.getters.updateMap}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},customIconColor:function(t){var e=new d.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(t,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return e},customIcon:function(t){var e,r=t.mask_adult+t.mask_child;return e=r>100?this.icon:r>50?this.iconColor.gold:r>0?this.iconColor.red:this.iconColor.grey,e}},mounted:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center=[e.coords.latitude,e.coords.longitude]}))}},L=k,E=r("2877"),O=Object(E["a"])(L,h,v,!1,null,null,null),M=O.exports,A={name:"App",components:{VueLeaflet:M},data:function(){return{opacity:.8,bgColor:"#000"}},computed:{selectedCity:{get:function(){return this.$store.getters.selectedCity},set:function(t){this.$store.dispatch("selectedCity",t)}},selectedZone:{get:function(){return this.$store.getters.selectedZone},set:function(t){this.$store.dispatch("selectedZone",t)}},isLoading:function(){return this.$store.getters.isLoading},county:function(){return this.$store.getters.county},towns:function(){return this.$store.getters.towns},updateMap:function(){return this.$store.getters.updateMap}},methods:{handleLoading:function(){var t=this.$loading.show({color:"#668AFE",loader:"dots"});setTimeout((function(){t.hide()}),2e3)}},mounted:function(){this.$store.dispatch("getPharmacy")}},j=A,I=(r("5c0b"),Object(E["a"])(j,m,g,!1,null,null,null)),Z=I.exports,P=(r("4de4"),r("4160"),r("a630"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("2f62"));n["a"].use(P["a"]);var S=new P["a"].Store({state:{isLoading:!1,pharmacies:[],updateMap:[],selectedCity:"高雄市",selectedZone:"三民區"},mutations:{LOADING:function(t,e){t.isLoading=e},PHARMACY:function(t,e){t.pharmacies=e},SELECTEDCITY:function(t,e){t.selectedCity=e},SELECTEDZONE:function(t,e){t.selectedZone=e}},actions:{getPharmacy:function(t){var e=t.commit,r="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";e("LOADING",!0),s.a.get(r).then((function(t){e("PHARMACY",t.data.features),e("LOADING",!1)}))},selectedCity:function(t,e){var r=t.commit;r("SELECTEDCITY",e)},selectedZone:function(t,e){var r=t.commit;r("SELECTEDZONE",e)}},getters:{isLoading:function(t){return t.isLoading},selectedCity:function(t){return t.selectedCity},selectedZone:function(t){return t.selectedZone},county:function(t){var e=new Set;return t.pharmacies.forEach((function(t){t.properties.county&&e.add(t.properties.county)})),Array.from(e)},towns:function(t,e){var r=new Set;return e.filterCityData.forEach((function(t){r.add(t.properties.town)})),Array.from(r)},filterCityData:function(t,e){return t.pharmacies.filter((function(t){return t.properties.county===e.selectedCity}))},updateMap:function(t,e){var r=t.pharmacies.filter((function(t){return t.properties.county===e.selectedCity&&t.properties.town===e.selectedZone}));return e.selectedZone?r:e.filterCityData}}});n["a"].config.productionTip=!1,n["a"].use(l.a),n["a"].use(i.a,s.a),n["a"].use(f.a),n["a"].component("Loading",l.a),delete u["Icon"].Default.prototype._getIconUrl,u["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),new n["a"]({store:S,render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(t,e,r){},def6:function(t,e,r){}});
//# sourceMappingURL=app.9b0932f1.js.map