// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=495)}({245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("app");t.default={data:{message:"",src:""},methods:{take:function(){var e=this;console.log("weex choose"),n.getPhoto(function(t){e.message=JSON.stringify(t),e.src=t.data})}}}},387:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"200px",height:"100px",backgroundColor:"#33bbee",justifyContent:"center",alignItems:"center"},on:{click:e.take}},[r("text",[e._v("Take Photo")])]),r("div",[r("text",[e._v(e._s(e.message))])]),r("image",{staticStyle:{width:"300px",height:"300px",backgroundColor:"gainsboro"},attrs:{src:e.src}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},495:function(e,t,r){var n,o,s=[];n=r(245);var i=r(387);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/test-take-photo.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)}});