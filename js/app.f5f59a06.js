(function(t){function e(e){for(var s,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3589:function(t,e,r){t.exports=r.p+"img/location.799a7977.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=r("bc3a"),o=r.n(n),a=r("a7fe"),i=r.n(a),c=r("9062"),l=r.n(c),u=r("e11e"),d=r.n(u),p=r("9d52"),m=r.n(p),f=(r("def6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:flex h-screen",attrs:{id:"app"}},[s("Loading",{attrs:{active:t.isLoading,opacity:.8,width:60,"background-color":"#000",loader:"bars",color:"#668AFE"},on:{"update:active":function(e){t.isLoading=e}}},[s("template",{slot:"after"},[s("span",{staticClass:"text-white"},[t._v("Loading...")])])],2),s("div",{staticClass:"w-full md:w-3/12 overflow-y-scroll h-screen"},[s("div",{staticClass:"bg-light p-4 sticky top-0 z-10"},[s("div",{staticClass:"flex items-center mb-4"},[s("label",{staticClass:"mr-5",attrs:{for:"city"}},[t._v("縣市")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],staticClass:"h-10 bg-white flex-auto",attrs:{id:"city"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCity=e.target.multiple?r:r[0]},function(e){t.selectedZone=""}]}},[s("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇城市 ===")]),t._l(t.county,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"flex items-center mb-4"},[s("label",{staticClass:"mr-5",attrs:{for:"zone"}},[t._v("地區")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedZone,expression:"selectedZone"}],staticClass:"h-10 bg-white flex-auto",attrs:{id:"zone"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedZone=e.target.multiple?r:r[0]}}},[s("option",{attrs:{value:"",selected:""}},[t._v("=== 請選擇行政區 ===")]),t._l(t.towns,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"flex rounded border border-primary mb-4"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchText,expression:"searchText",modifiers:{trim:!0}}],staticClass:"flex-auto rounded-l pl-4",attrs:{type:"text",placeholder:"進階搜尋藥局"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)},input:function(e){e.target.composing||(t.searchText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("button",{staticClass:"bg-primary hover:bg-darken text-white py-2 px-4 cursor-pointer",on:{click:t.handleSearch}},[s("i",{staticClass:"fas fa-search fa-lg"})]),s("button",{staticClass:"bg-transparent hover:bg-primary text-primary font-semibold hover:text-white\n          hover:border-transparent cursor-pointer py-2 px-4",on:{click:t.clearSearch}},[s("i",{staticClass:"fas fa-sync-alt fa-lg"})])]),t.isResult?s("p",{staticClass:"text-right"},[t._v(" 取得口罩數量的藥局有 "),s("span",{staticClass:"text-primary text-2xl"},[t._v("0")]),t._v(" 家 ")]):s("p",{staticClass:"text-right"},[t._v(" 取得口罩數量的藥局有 "),s("span",{staticClass:"text-primary text-2xl"},[t._v(t._s(t.updateMap.length))]),t._v(" 家 ")])]),t.isResult?s("div",{staticClass:"border-b-2 border-gray-200 p-8"},[s("h2",{staticClass:"text-3xl text-center"},[t._v("查無資料…")])]):s("ul",t._l(t.updateMap,(function(e){return s("li",{key:e.properties.id,staticClass:"border-b-2 border-gray-200 p-4 hover:bg-blue-100"},[s("a",{attrs:{href:"https://www.google.com.tw/maps/search/"+e.properties.address,target:"_blank"}},[s("h2",{staticClass:"text-xl font-medium mb-4"},[t._v(t._s(e.properties.name))]),s("div",{staticClass:"text-grey flex items-center mb-3"},[s("img",{staticClass:"mr-2",attrs:{src:r("3589"),width:"14",alt:""}}),s("span",[t._v(t._s(e.properties.address))])]),s("div",{staticClass:"text-grey flex items-center mb-3"},[s("img",{staticClass:"mr-2",attrs:{src:r("cf63"),width:"16",alt:""}}),s("span",[t._v(t._s(e.properties.phone))])]),"-"!==e.properties.note?s("div",{staticClass:"text-grey flex items-baseline mb-3"},[s("i",{staticClass:"fas fa-exclamation-circle mr-2"}),s("p",[t._v(t._s(e.properties.note))])]):t._e(),""!==e.properties.custom_note?s("div",{staticClass:"text-grey flex items-baseline mb-3"},[s("i",{staticClass:"fas fa-exclamation-circle mr-2"}),s("p",[t._v(t._s(e.properties.custom_note))])]):t._e(),s("div",{staticClass:"flex justify-center mb-2"},[e.properties.mask_adult?s("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[s("span",[t._v("成人口罩: "+t._s(e.properties.mask_adult))])]):s("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[s("span",[t._v("成人口罩: 已售完")])]),e.properties.mask_child?s("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[s("span",[t._v("兒童口罩: "+t._s(e.properties.mask_child))])]):s("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[s("span",[t._v("兒童口罩: 已售完")])])]),s("div",{staticClass:"text-sm text-grey"},[s("span",[t._v("更新時間: "+t._s(e.properties.updated?e.properties.updated:"無"))])])])])})),0)]),s("VueLeaflet")],1)}),h=[],g=(r("4de4"),r("caad"),r("b0c0"),r("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden md:block md:w-9/12"},[s("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.center,options:t.zoomControl},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[s("l-tile-layer",{attrs:{url:t.url}}),s("l-control-zoom",{attrs:{position:"topright"}}),s("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.updateMap,(function(e){return s("l-marker",{key:e.properties.id,attrs:{icon:t.customIcon(e.properties),"lat-lng":[e.geometry.coordinates[1],e.geometry.coordinates[0]]}},[s("l-popup",[s("h1",{staticClass:"text-xl font-medium mb-2"},[t._v(t._s(e.properties.name))]),s("div",{staticClass:"text-base text-grey flex items-center mb-2"},[s("img",{staticClass:"mr-2",attrs:{src:r("3589"),width:"14",alt:""}}),s("span",[t._v(t._s(e.properties.address))])]),s("div",{staticClass:"text-base text-grey flex items-center mb-2"},[s("img",{staticClass:"mr-2",attrs:{src:r("cf63"),width:"16",alt:""}}),s("span",[t._v(t._s(e.properties.phone))])]),s("div",{staticClass:"text-base flex mb-2 justify-center"},[e.properties.mask_adult?s("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r w-1/2\n              bg-primary text-white"},[s("span",[t._v("成人口罩:"+t._s(e.properties.mask_adult))])]):s("div",{staticClass:"text-center py-3 rounded-l rounded-r-none border-r border-white w-1/2\n              bg-gray-300 text-gray-600"},[s("span",[t._v("成人口罩:0")])]),e.properties.mask_child?s("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-primary text-white"},[s("span",[t._v("兒童口罩:"+t._s(e.properties.mask_child))])]):s("div",{staticClass:"text-center py-3 rounded-r rounded-l-none w-1/2\n              bg-gray-300 text-gray-600"},[s("span",[t._v("兒童口罩:0")])])]),e.properties.updated?s("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: "+t._s(e.properties.updated))]):s("div",{staticClass:"text-sm text-grey"},[t._v("更新時間: 無")])])],1)})),1)],1)],1)}),v=[],y=(r("d81d"),r("2699")),b=r("a40a"),x=r("c8b6"),C=r("4e2b"),_=r("f60f"),w=r("ca9f"),k=r.n(w),A={name:"VueLeaflet",components:{LMap:y["a"],LTileLayer:b["a"],LControlZoom:x["a"],LMarker:C["a"],LPopup:_["a"],"v-marker-cluster":k.a},data:function(){return{zoom:12,center:[22.627333,120.318065],zoomControl:{zoomControl:!1},bounds:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",iconColor:{grey:this.customIconColor("grey"),blue:this.customIconColor("blue"),gold:this.customIconColor("gold"),green:this.customIconColor("green"),red:this.customIconColor("red")},clusterOptions:{disableClusteringAtZoom:16},icon:d.a.icon.pulse({iconSize:[20,20],color:"#668AFE",fillColor:"#668AFE"})}},watch:{updateMap:function(){var t=this.updateMap[0].geometry.coordinates;this.$refs.map.mapObject.flyTo([t[1],t[0]],14)}},computed:{updateMap:function(){return this.$store.getters.updateMap}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},customIconColor:function(t){var e=new d.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-".concat(t,".png"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});return e},customIcon:function(t){var e,r=t.mask_adult,s=t.mask_child,n=r+s;return e=r>=200&&s>=200?this.icon:r>100?this.iconColor.green:r>50?this.iconColor.gold:n>0?this.iconColor.red:this.iconColor.grey,e}},mounted:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center=[e.coords.latitude,e.coords.longitude]}))}},L=A,E=r("2877"),T=Object(E["a"])(L,g,v,!1,null,null,null),O=T.exports,S={name:"App",components:{VueLeaflet:O},data:function(){return{searchText:"",isResult:!1}},computed:{selectedCity:{get:function(){return this.$store.getters.selectedCity},set:function(t){this.$store.commit("SELECTEDCITY",t)}},selectedZone:{get:function(){return this.$store.getters.selectedZone},set:function(t){this.$store.commit("SELECTEDZONE",t)}},isLoading:function(){return this.$store.getters.isLoading},county:function(){return this.$store.getters.county},towns:function(){return this.$store.getters.towns},updateMap:function(){return this.$store.getters.updateMap}},methods:{handleSearch:function(){var t=this;if(this.searchText){var e=this.updateMap.filter((function(e){return e.properties.address.includes(t.searchText)||e.properties.name.includes(t.searchText)}));e.length>0?(this.isResult=!1,this.$store.commit("SEARCHDATA",e)):this.isResult=!0}},clearSearch:function(){this.searchText="",this.isResult=!1,this.$store.commit("SEARCHDATA",[])}},mounted:function(){this.$store.dispatch("getPharmacy")}},D=S,M=Object(E["a"])(D,f,h,!1,null,null,null),j=M.exports,z=(r("4160"),r("a630"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("2f62"));s["a"].use(z["a"]);var I=new z["a"].Store({state:{isLoading:!1,pharmacies:[],searchData:[],selectedCity:"高雄市",selectedZone:""},mutations:{LOADING:function(t,e){t.isLoading=e},PHARMACY:function(t,e){t.pharmacies=e},SELECTEDCITY:function(t,e){t.selectedCity=e},SELECTEDZONE:function(t,e){t.selectedZone=e},SEARCHDATA:function(t,e){t.searchData=e}},actions:{getPharmacy:function(t){var e=t.commit,r="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";e("LOADING",!0),o.a.get(r).then((function(t){e("PHARMACY",t.data.features),e("LOADING",!1)}))}},getters:{isLoading:function(t){return t.isLoading},selectedCity:function(t){return t.selectedCity},selectedZone:function(t){return t.selectedZone},county:function(t){var e=new Set;return t.pharmacies.forEach((function(t){t.properties.county&&e.add(t.properties.county)})),Array.from(e)},towns:function(t,e){var r=new Set;return e.filterCityData.forEach((function(t){r.add(t.properties.town)})),Array.from(r)},filterCityData:function(t,e){return t.pharmacies.filter((function(t){return t.properties.county===e.selectedCity}))},filterTownData:function(t,e){return e.filterCityData.filter((function(t){return t.properties.town===e.selectedZone}))},updateMap:function(t,e){var r=[];return t.searchData.length>0?r=t.searchData:e.selectedZone?r=e.filterTownData:e.selectedCity&&(r=e.filterCityData),r}}});s["a"].config.productionTip=!1,s["a"].use(l.a),s["a"].use(i.a,o.a),s["a"].use(m.a),s["a"].component("Loading",l.a),delete u["Icon"].Default.prototype._getIconUrl,u["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),new s["a"]({store:I,render:function(t){return t(j)}}).$mount("#app")},cf63:function(t,e,r){t.exports=r.p+"img/phone.ed1dfd6b.svg"},def6:function(t,e,r){}});
//# sourceMappingURL=app.f5f59a06.js.map