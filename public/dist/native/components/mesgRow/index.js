// { "framework": "Vue"} 

!function(t){function e(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=449)}({172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mesgRow:{default:function(){return{iconUrl:"",iconName:"",newestMesg:"",time:"",mesgCount:0}}}},methods:{clickIt:function(){this.$emit("callBack")}}}},191:function(t,e){t.exports={"mesg-row-bg":{width:750,backgroundColor:"#ffffff"},"mesg-row-wrap":{marginRight:30,marginLeft:30,width:690},"mesg-row-content-wrap":{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:690,height:140},"tit-wrap":{flexDirection:"row"},"tit-icon":{width:80,height:80},"tit-content-wrap":{marginLeft:50,height:80,justifyContent:"center",alignItems:"flex-start"},"tit-content":{fontSize:32,color:"#434343"},"newest-mesg":{marginTop:10,fontSize:22,color:"#959595"},"mesg-wrap":{justifyContent:"center"},time:{fontSize:20,color:"#959595"},count:{marginTop:20,paddingLeft:10,paddingRight:10,height:26,lineHeight:26,borderRadius:26,fontSize:20,color:"#ffffff",backgroundColor:"#ff5250"},line:{marginLeft:130,width:560,height:1,backgroundColor:"#e5e5e5"}}},208:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["mesg-row-bg"],on:{click:t.clickIt}},[n("div",{staticClass:["mesg-row-wrap"]},[n("div",{staticClass:["mesg-row-content-wrap"]},[n("div",{staticClass:["tit-wrap"]},[n("image",{staticClass:["tit-icon"],attrs:{src:t.mesgRow.iconUrl}}),n("div",{staticClass:["tit-content-wrap"]},[n("text",{staticClass:["tit-content"]},[t._v(t._s(t.mesgRow.iconName))]),t.mesgRow.newestMesg.length>0?n("text",{staticClass:["newest-mesg"]},[t._v(t._s(t.mesgRow.newestMesg))]):t._e()])]),0!=t.mesgRow.mesgCount?n("div",{staticClass:["mesg-wrap"]},[n("text",{staticClass:["time"]},[t._v(t._s(t.mesgRow.time))]),n("text",{staticClass:["count"]},[t._v(t._s(t.mesgRow.mesgCount))])]):t._e()]),n("div",{staticClass:["line"]})])])},staticRenderFns:[]},t.exports.render._withStripped=!0},449:function(t,e,n){var s,o,i=[];i.push(n(191)),s=n(172);var r=n(208);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgRow/index.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-4e9bfc44",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=s,t.exports.el="true",new Vue(t.exports)}});