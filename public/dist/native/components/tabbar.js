// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=188)}({188:function(t,e,n){var i,o,r=[];r.push(n(83)),i=n(68);var s=n(96);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-69acf5a1",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},22:function(t,e,n){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},26:function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:100},"top-line":{position:"absolute",top:0,left:0,right:0,height:2},"tab-icon":{marginTop:5,width:40,height:40},"tab-text":{marginTop:5,textAlign:"center",fontSize:20}}},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["container"],style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[n("image",{staticClass:["top-line"],attrs:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}}),n("image",{staticClass:["tab-icon"],attrs:{src:t.icon}}),n("text",{staticClass:["tab-text"],style:{color:t.titleColor}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},37:function(t,e,n){var i,o,r=[];r.push(n(26)),i=n(22);var s=n(30);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabitem.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-7d587275",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i},68:function(t,e,n){"use strict";t.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:n(37)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}}}}},83:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:100},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:100}}},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[t._l(t.tabItems,function(t,e){return n("embed",{key:e,staticClass:["content"],style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})}),n("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},t._l(t.tabItems,function(e){return n("tabitem",{key:e.index,attrs:{index:e.index,icon:e.icon,title:e.title,titleColor:e.titleColor},on:{tabItemOnClick:t.tabItemOnClick}})}))],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}});