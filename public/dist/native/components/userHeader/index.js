// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=196)}({11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.article.headerStyle+"-header-wrap"]},[r("image",{class:[e.article.headerStyle+"-header"],attrs:{src:e.article.headerUrl}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{class:[e.article.headerStyle+"-name"]},[e._v(e._s(e.article.userName))]),r("text",{staticClass:["user-issue"]},[e._v(e._s(e.article.subTitle))]),e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},196:function(e,t,r){var n,s,i=[];i.push(r(9)),n=r(6);var o=r(11);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userHeader/index.vue",s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-4836b184",s.style=s.style||{},i.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",subTitle:"",headerStyle:""}}}}}},9:function(e,t){e.exports={"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:70},"user-wiki-details-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:100},"user-header":{width:70,height:70,borderRadius:50},"user-wiki-details-header":{width:100,height:100,borderRadius:50},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:28,color:"#434343"},"user-wiki-details-name":{fontSize:36,color:"#434343"},"user-issue":{fontSize:22,color:"#959595"}}}});