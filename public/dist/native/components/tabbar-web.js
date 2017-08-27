// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=574)}({135:function(t,e,n){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},142:function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:100},"top-line":{position:"absolute",top:0,left:0,right:0,height:2},"tab-icon":{marginTop:5,width:40,height:40},"tab-text":{marginTop:5,textAlign:"center",fontSize:20}}},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["container"],style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[n("image",{staticClass:["tab-icon"],attrs:{src:t.icon}}),n("text",{staticClass:["tab-text"],style:{color:t.titleColor}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},159:function(t,e,n){var i,o,r=[];r.push(n(142)),i=n(135);var s=n(149);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabitem.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-7d587275",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i},225:function(t,e,n){"use strict";t.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:n(159)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}}}}},241:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:100},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:100}}},263:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[t._l(t.tabItems,function(t,e){return n("div",{staticClass:["content"],style:{display:"visible"==t.visibility?"":"none"}},[n("embed",{key:e,staticStyle:{width:"100%",height:"100%"},attrs:{src:t.src}})],1)}),n("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},t._l(t.tabItems,function(e){return n("tabitem",{key:e.index,attrs:{index:e.index,icon:e.icon,title:e.title,titleColor:e.titleColor},on:{tabItemOnClick:t.tabItemOnClick}})}))],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},574:function(t,e,n){var i,o,r=[];r.push(n(241)),i=n(225);var s=n(263);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar-web.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-2aa9a4b0",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)}});