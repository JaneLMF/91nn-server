// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=494)}({244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("app");t.default={data:{message:"",src:""},methods:{share:function(){var e=this;n.share({title:"title",summary:"summary",url:"http://www.ihaiwai.com",image:"http://static.ihaiwai.com/img/20170715/d3c32ea7ccb941f38a86f39ae955f661.jpg"},function(t){e.message=JSON.stringify(t)})}}}},400:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"200px",height:"100px",backgroundColor:"#33bbee",justifyContent:"center",alignItems:"center"},on:{click:e.share}},[r("text",[e._v("Share")])]),r("div",[r("text",[e._v(e._s(e.message))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},494:function(e,t,r){var n,s,o=[];n=r(244);var i=r(400);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/test-share.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s.style=s.style||{},o.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)}});