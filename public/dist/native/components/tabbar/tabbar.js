// { "framework": "Vue"} 

!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=316)}({316:function(t,e,o){var r,n,i=[];i.push(o(78)),r=o(75);var s=o(88);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabbar.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-3cbe2e3c",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},53:function(t,e,o){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},55:function(t,e){t.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{height:t.height},on:{click:t.onclickitem}},[o("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[o("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},75:function(t,e,o){"use strict";t.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:o(99)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var o=this.tabItems[e];e==t?(o.icon=o.selectedImage,o.titleColor=this.selectedColor,o.bottomColor=this.bottomSelectedColor,o.visibility="visible"):(o.icon=o.image,o.titleColor=this.unselectedColor,o.bottomColor=this.bottomUnSelectedColor,o.visibility="hidden")}}}}},78:function(t,e){t.exports={border:{borderWidth:1},wrapper:{width:750,position:"absolute",left:0,right:0,bottom:0},tabbase:{width:750,flexDirection:"row",justifyContent:"space-around"},"tabbase-scroller":{flexDirection:"row",justifyContent:"space-around"},content:{width:750,position:"absolute",bottom:0,left:0,right:0}}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"],style:{top:t.marginTop}},[o("scroller",{staticStyle:{flexDirection:"row"},appendAsTree:!0,attrs:{append:"tree",scrollDirection:"horizontal"}},[o("div",{class:[0==t.scrolleable?"tabbase":"tabbase-scroller"],style:{height:t.tabHeight,backgroundColor:t.backgroundColor}},t._l(t.tabItems,function(e){return o("div",{key:e.index,style:{height:t.tabHeight}},[o("tabitem",{attrs:{index:e.index,title:e.title,height:t.tabHeight,margin:t.tabMargin,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:t.tabItemOnClick}})],1)}))]),t._l(t.tabItems,function(e,r){return o("embed",{key:r,staticClass:["content"],style:{visibility:e.visibility,top:t.tabHeight},attrs:{src:e.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},99:function(t,e,o){var r,n,i=[];i.push(o(55)),r=o(53);var s=o(59);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-0c6e4d3a",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=r}});