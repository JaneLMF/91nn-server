// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=492)}({150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{num:{default:""}},computed:{showText:function(){var e=this.num+"";return 1==e.length&&(e="0"+e),e}}}},171:function(e,t){e.exports={player:{width:32,height:32,lineHeight:32,textAlign:"center",borderRadius:4,backgroundColor:"#fc6d3f",color:"#ffffff",fontSize:24}}},185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["player"]},[e._v(e._s(e.showText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},492:function(e,t,r){var n,o,s=[];s.push(r(171)),n=r(150);var u=r(185);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/countDown/player.vue",o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-7e2a813c",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)}});