// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=178)}({111:function(e,t,r){"use strict";e.exports={data:{image:"",link:"",href:""},methods:{ready:function(){this.href=this.link}}}},132:function(e,t){e.exports={"slider-item-container":{width:542,height:360,justifyContent:"center",flexDirection:"row",padding:10},"slider-item-image":{width:542,height:360}}},148:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["slider-item-container"]},[r("image",{staticClass:["slider-item-image"],attrs:{src:e.image}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},178:function(e,t,r){var n,i,o=[];o.push(r(132)),n=r(111);var s=r(148);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-item.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-25626c94",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)}});