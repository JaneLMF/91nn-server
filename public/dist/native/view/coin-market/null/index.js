// { "framework": "Vue"} 

!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=523)}({191:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},211:function(t,e){t.exports={root:{width:750,alignItems:"center"},"list-head":{width:750,height:64,paddingLeft:30,paddingRight:30,backgroundColor:"#f7f7f7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"list-head-item":{fontSize:24,color:"#959595"},"img-add":{marginTop:260,width:160,height:160},"txt-tip":{marginTop:70,fontSize:25,color:"#959595"}}},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["root"]},[r("div",{staticClass:["list-head"]},t._l(["名称","最新价格","评测等级"],function(e){return r("text",{staticClass:["list-head-item"]},[t._v(t._s(e))])})),r("image",{staticClass:["img-add"],attrs:{src:"/resources/coin-market/add.png"}}),r("text",{staticClass:["txt-tip"]},[t._v("暂无关注币，点击添加")])])},staticRenderFns:[]},t.exports.render._withStripped=!0},523:function(t,e,r){var n,o,i=[];i.push(r(211)),n=r(191);var s=r(229);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/null/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-fcb70fd6",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=n,t.exports.el="true",new Vue(t.exports)}});