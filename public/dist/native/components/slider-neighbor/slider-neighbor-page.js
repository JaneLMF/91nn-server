// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=442)}({130:function(e,t,r){"use strict";e.exports={data:{items:[],sliderItems:[]},methods:{ready:function(){this.sliderItems=this.getSliderItems()},getSliderItems:function(){return this.items.map(function(e,t){return e}.bind(this))}}}},137:function(e,t){e.exports={"slider-page":{width:720,height:420}}},150:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["slider-page"]},[r("slider-neighbor-item",{attrs:{repeat:e.sliderItems}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},442:function(e,t,r){var n,s,i=[];i.push(r(137)),n=r(130);var o=r(150);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-page.vue",s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-4b4cd99c",s.style=s.style||{},i.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)}});