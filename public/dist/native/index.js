// { "framework": "Vue"} 

!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=494)}({106:function(e,t){e.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:100},"top-line":{position:"absolute",top:0,left:0,right:0,height:2},"tab-icon":{marginTop:5,width:40,height:40},"tab-text":{marginTop:5,textAlign:"center",fontSize:20}}},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["container"],style:{backgroundColor:e.backgroundColor},on:{click:e.onclickitem}},[i("image",{staticClass:["top-line"],attrs:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}}),i("image",{staticClass:["tab-icon"],attrs:{src:e.icon}}),i("text",{staticClass:["tab-text"],style:{color:e.titleColor}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},122:function(e,t,i){var n,o,s=[];s.push(i(106)),n=i(98);var r=i(114);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabitem.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-7d587275",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},178:function(e,t,i){"use strict";e.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:i(122)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(e){this.selectedIndex=e.index,this.select(e.index),this.$emit("tabBarOnClick",e)},select:function(e){for(var t=0;t<this.tabItems.length;t++){var i=this.tabItems[t];t==e?(i.icon=i.selectedImage,i.titleColor=this.selectedColor,i.visibility="visible"):(i.icon=i.image,i.titleColor=this.unselectedColor,i.visibility="hidden")}}}}},179:function(e,t,i){"use strict";e.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:i(122)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(e){this.selectedIndex=e.index,this.select(e.index),this.$emit("tabBarOnClick",e)},select:function(e){for(var t=0;t<this.tabItems.length;t++){var i=this.tabItems[t];t==e?(i.icon=i.selectedImage,i.titleColor=this.selectedColor,i.visibility="visible"):(i.icon=i.image,i.titleColor=this.unselectedColor,i.visibility="hidden")}}}}},190:function(e,t){e.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:100},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:100}}},199:function(e,t){e.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:100},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:100}}},207:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"]},[e._l(e.tabItems,function(e,t){return i("div",{staticClass:["content"],style:{display:"visible"==e.visibility?"":"none"}},[i("embed",{key:t,staticStyle:{width:"100%",height:"100%"},attrs:{src:e.src}})],1)}),i("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},e._l(e.tabItems,function(t){return i("tabitem",{key:t.index,attrs:{index:t.index,icon:t.icon,title:t.title,titleColor:t.titleColor},on:{tabItemOnClick:e.tabItemOnClick}})}))],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"]},[e._l(e.tabItems,function(e,t){return i("embed",{key:t,staticClass:["content"],style:{visibility:e.visibility},attrs:{src:e.src,type:"weex"}})}),i("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},e._l(e.tabItems,function(t){return i("tabitem",{key:t.index,attrs:{index:t.index,icon:t.icon,title:t.title,titleColor:t.titleColor},on:{tabItemOnClick:e.tabItemOnClick}})}))],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},245:function(e,t,i){"use strict";var n=i(66),o=function(e){return e&&e.__esModule?e:{default:e}}(n);e.exports={data:function(){return{dir:"examples",tabItems:[{index:0,title:"首页",titleColor:"#888888",icon:"",image:"/src/view/home/images/homePage.png",selectedImage:"/src/view/home/images/homePage-active.png",src:"/view/home/index.js",visibility:"visible"},{index:1,title:"百科",titleColor:"#888888",icon:"",image:"/src/view/home/images/baike.png",selectedImage:"/src/view/home/images/baike-active.png",src:"/view/knowMore/index.js",visibility:"hidden"},{index:2,title:"币行情",titleColor:"#888888",icon:"",image:"/src/view/home/images/coin.png",selectedImage:"/src/view/home/images/coin-active.png",src:"/view/coin-market/index.js",visibility:"hidden"},{index:3,title:"个人",titleColor:"#888888",icon:"",image:"/src/view/home/images/user.png",selectedImage:"/src/view/home/images/user-active.png",src:"/view/personal/index.js",visibility:"hidden"}]}},components:{oscTabbar:i("undefined"==typeof window?476:474)},created:function(){for(var e=0;e<this.tabItems.length;e++){var t=this.tabItems[e];t.src=o.default.js(t.src),console.log(t.src)}},methods:{tabBarOnClick:function(e){console.log("tabBarOnClick",e.index)}}}},398:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{flexDirection:"column"}},[i("osc-tabbar",{attrs:{tabItems:e.tabItems},on:{tabBarOnClick:e.tabBarOnClick}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},474:function(e,t,i){var n,o,s=[];s.push(i(190)),n=i(178);var r=i(207);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar-web.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-2aa9a4b0",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},476:function(e,t,i){var n,o,s=[];s.push(i(199)),n=i(179);var r=i(216);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-69acf5a1",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},494:function(e,t,i){var n,o,s=[];n=i(245);var r=i(398);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/index.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)},66:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={js:function(e){var t=weex.config.bundleUrl;if("undefined"==typeof window){for(t=t.substring(0,t.lastIndexOf("/"));-1!==e.indexOf("../");)e=e.substr(3),t=t.substr(0,t.lastIndexOf("/"));return t+e}var i=new URL(t).origin+"/web/?page=/dist/web"+encodeURI(e);return console.log("webUrl="+i),i},img:function(e){var t=weex.config.bundleUrl;return new URL(t).hostname+"url"}}},98:function(e,t,i){"use strict";e.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(e){var t={index:this.index};this.$emit("tabItemOnClick",t)}}}}});