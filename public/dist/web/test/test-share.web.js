// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=631)}({0:function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var c=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},413:function(e,t,r){var n=r(0)(r(487),r(835),null,null);n.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/test-share.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] test-share.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("app");t.default={data:{message:"",src:""},methods:{share:function(){var e=this;n.share({title:"title",summary:"summary",url:"http://www.ihaiwai.com",image:"http://static.ihaiwai.com/img/20170715/d3c32ea7ccb941f38a86f39ae955f661.jpg"},function(t){e.message=JSON.stringify(t)})}}}},631:function(e,t,r){"use strict";var n=r(413);n.el="#root",new Vue(n)},835:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"200px",height:"100px","background-color":"#33bbee","justify-content":"center","align-items":"center"},on:{click:e.share}},[r("text",[e._v("Share")])]),e._v(" "),r("div",[r("text",[e._v(e._s(e.message))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});