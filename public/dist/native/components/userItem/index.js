// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=546)}({206:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{userInfo:{default:function(){return{header:"",name:"",intro:""}}}},methods:{clickIt:function(){this.$emit("callBack")}}}},213:function(e,t){e.exports={"user-item-wrap":{marginLeft:30,marginRight:30,width:690},"user-item-group":{width:690,height:165,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},"user-header":{width:90,height:90,borderRadius:90},"user-info-wrap":{marginLeft:30,height:165,justifyContent:"center",alignItems:"flex-start"},"user-name":{fontSize:28,color:"#434343"},"user-intro":{marginTop:15,fontSize:24,color:"#959595"},line:{marginLeft:120,width:570,height:1,backgroundColor:"#e5e5e5"}}},233:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["user-item-wrap"],on:{click:e.clickIt}},[r("div",{staticClass:["user-item-group"]},[r("image",{staticClass:["user-header"],attrs:{src:e.userInfo.header}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{staticClass:["user-name"]},[e._v(e._s(e.userInfo.name))]),r("text",{staticClass:["user-intro"]},[e._v(e._s(e.userInfo.intro))])])]),r("div",{staticClass:["line"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0},546:function(e,t,r){var n,s,i=[];i.push(r(213)),n=r(206);var o=r(233);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userItem/index.vue",s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-0df54dc4",s.style=s.style||{},i.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)}});