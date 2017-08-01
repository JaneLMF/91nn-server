// { "framework": "Vue"} 

!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=352)}({100:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[o("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor}},[o("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},120:function(t,e,o){"use strict";t.exports={props:{tabItems:{default:[]},backgroundColor:{default:"#ffffee"},selectedColor:{default:"#ff0000"},unselectedColor:{default:"#000000"},bottomSelectedColor:{default:"#ff0000"},bottomUnSelectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:o(161)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var o=this.tabItems[e];e==t?(o.icon=o.selectedImage,o.titleColor=this.selectedColor,o.bottomColor=this.bottomSelectedColor,o.visibility="visible"):(o.icon=o.image,o.titleColor=this.unselectedColor,o.bottomColor=this.bottomUnSelectedColor,o.visibility="hidden")}}}}},129:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:90,left:0,right:0,bottom:0},content:{position:"absolute",top:90,left:0,right:0,bottom:0,marginBottom:0,flex:1,backgroundColor:"#21cd3d",borderWidth:1},tabbar:{flexDirection:"row",height:90}}},145:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},t._l(t.tabItems,function(e){return o("tabitem",{key:e.index,attrs:{index:e.index,title:e.title,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:t.tabItemOnClick}})})),o("text",[t._v("Hello")]),t._l(t.tabItems,function(t,e){return o("embed",{key:e,staticClass:["content"],style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})}),o("text",[t._v("hehehe")])],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},161:function(t,e,o){var r,n,i=[];i.push(o(92)),r=o(84);var s=o(100);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/tab/tabitem.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-db8b2d1a",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=r},352:function(t,e,o){var r,n,i=[];i.push(o(129)),r=o(120);var s=o(145);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/tab/tabbar.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-495126e3",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},84:function(t,e,o){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},92:function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:90},"tab-text":{textAlign:"center",fontSize:20},"tab-line":{height:90,justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}}});