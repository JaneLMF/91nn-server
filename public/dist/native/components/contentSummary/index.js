// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=540)}({168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{proIntroContent:{default:""}},data:function(){return{isSummary:!0}},methods:{viewDetail:function(){return this.isSummary=!this.isSummary}}}},178:function(t,e){t.exports={"content-wrap":{marginLeft:30,marginRight:30,paddingTop:30,paddingBottom:30},content:{fontSize:28,color:"#434343",lineHeight:40},"detail-btn":{fontSize:28,color:"#959595"}}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["content-wrap"]},[t.isSummary?n("text",{staticClass:["content"]},[t._v(t._s(t.proIntroContent))]):n("text",{staticClass:["content"]},[t._v("比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的...初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特")]),n("text",{staticClass:["detail-btn"],on:{click:t.viewDetail}},[t._v("阅读全文")])])},staticRenderFns:[]},t.exports.render._withStripped=!0},540:function(t,e,n){var r,o,i=[];i.push(n(178)),r=n(168);var s=n(195);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/contentSummary/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-00f0e633",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)}});