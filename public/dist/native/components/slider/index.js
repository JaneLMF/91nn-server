// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=307)}({108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{bannerData:{default:function(){}}}}},126:function(e,t){e.exports={"slider-wrap":{position:"relative",width:750,height:400},"slider-group":{width:750,height:400},"slider-item":{width:750,height:350},indicator:{width:750,height:30,position:"absolute",bottom:0,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:10}}},143:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("slider",{staticClass:["slider-wrap"]},[e._l(e.bannerData,function(e,t){return r("div",{key:t,staticClass:["slider-group"]},[r("image",{staticClass:["slider-item"],attrs:{src:e.imageUrl}})])}),r("indicator",{staticClass:["indicator"]})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},307:function(e,t,r){var n,i,o=[];o.push(r(126)),n=r(108);var s=r(143);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-4bb1d827",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)}});