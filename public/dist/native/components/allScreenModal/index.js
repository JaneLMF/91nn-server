// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=235)}({103:function(e,t){e.exports={"modal-wrap":{width:750,height:1080,backgroundColor:"rgba(255,255,255,0.5)",justifyContent:"center",alignItems:"center"}}},117:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:["modal-wrap"],on:{click:e.openModal}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},235:function(e,t,n){var r,o,s=[];s.push(n(103)),r=n(86);var i=n(117);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/allScreenModal/index.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-22d256c6",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=r,e.exports.el="true",new Vue(e.exports)},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("modal");t.default={props:{flag:{default:!1}},methods:{openModal:function(){this.$emit("openIt",!this.flag),r.toast({message:this.flag,duration:.3})}}}}});