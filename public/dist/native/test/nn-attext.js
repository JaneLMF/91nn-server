// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=602)}({305:function(e,t,n){"use strict";e.exports={mounted:function(){},methods:{getHeight:function(){console.log("height:"+this.$refs.at.getHeight())}}}},408:function(e,t){e.exports={wrapper:{flexDirection:"column"},panel:{width:600,marginLeft:75,borderWidth:2,borderStyle:"solid",borderColor:"#BBBBBB",paddingTop:15,paddingBottom:15,paddingLeft:15,paddingRight:15,marginBottom:30},text:{lines:3,color:"#666666",fontSize:32}}},474:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"],on:{click:e.getHeight}},[n("nn-attext",{ref:"at",staticStyle:{height:"10px",width:"755px"}}),n("text",[e._v("hello")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},602:function(e,t,n){var r,o,i=[];i.push(n(408)),r=n(305);var s=n(474);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/nn-attext.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-5ef66e16",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)}});