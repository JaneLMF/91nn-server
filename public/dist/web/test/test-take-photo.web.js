// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=506)}({0:function(e,t){e.exports=function(e,t,o,n){var r,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(r=e,s=e.default);var i="function"==typeof s?s.options:s;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),o&&(i._scopeId=o),n){var c=i.computed||(i.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:r,exports:s,options:i}}},325:function(e,t,o){var n=o(0)(o(389),o(666),null,null);n.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/test-take-photo.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] test-take-photo.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},389:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("app");t.default={data:{message:"",src:""},methods:{take:function(){var e=this;console.log("weex choose"),n.getPhoto(function(t){e.message=JSON.stringify(t),e.src=t.data})}}}},506:function(e,t,o){"use strict";var n=o(325);n.el="#root",new Vue(n)},666:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticStyle:{width:"200px",height:"100px","background-color":"#33bbee","justify-content":"center","align-items":"center"},on:{click:e.take}},[o("text",[e._v("Take Photo")])]),e._v(" "),o("div",[o("text",[e._v(e._s(e.message))])]),e._v(" "),o("image",{staticStyle:{width:"300px",height:"300px","background-color":"gainsboro"},attrs:{src:e.src}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});