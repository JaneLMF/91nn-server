// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=495)}({266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{place:["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","内蒙古","广西","西藏","宁夏","新疆","香港","澳门","台湾"]}},methods:{}}},272:function(e,t){e.exports={"place-wrap":{marginLeft:30,marginRight:30},place:{width:690,height:86,lineHeight:86,fontSize:28,color:"#434343",borderBottomWidth:1,borderColor:"#e5e5e5"}}},321:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("list",{staticClass:["place-wrap"]},e._l(e.place,function(t,n){return r("cell",{key:n,appendAsTree:!0,attrs:{append:"tree"}},[r("text",{staticClass:["place"]},[e._v(e._s(t))])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},495:function(e,t,r){var n,o,s=[];s.push(r(272)),n=r(266);var i=r(321);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/settings/updateInfo/updateFrom.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-1a25d8ac",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)}});