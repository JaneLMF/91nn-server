// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=342)}({0:function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,u=e.default);var i="function"==typeof u?u.options:u;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var a=i.computed||(i.computed={});Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}})}return{esModule:o,exports:u,options:i}}},31:function(e,t,n){var r=n(0)(n(34),n(37),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tab/tabItem.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tabItem.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"u-tab",props:{label:{type:String,required:!0},value:{type:[String,Number,Boolean,Object,Array],required:!0}},data:function(){return{$parent:null}},computed:{actived:function(){return this.$parent&&this.$parent.value===this.value}},beforeDestroy:function(){this.$parent&&this.$parent.removeTab(this)}}},342:function(e,t,n){"use strict";var r=n(31);r.el="#root",new Vue(r)},37:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.actived?n("scroller",[e._t("default")],2):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0}});