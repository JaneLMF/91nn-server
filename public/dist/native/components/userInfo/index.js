// { "framework": "Vue"} 

!function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=278)}({112:function(e,t){e.exports={"userIcon-wrap":{justifyContent:"center",alignItems:"center"},"userHeader-wrap":{position:"relative",width:132,height:132},userHeader:{width:130,height:130,borderRadius:130,borderWidth:2,borderColor:"#f8997a"},userVIP:{position:"absolute",bottom:0,right:20,width:24,height:24},"userInfo-wrap":{position:"relative",flexDirection:"row",justifyContent:"center",alignItems:"center",paddingLeft:30,paddingRight:30},"userInfo-name":{marginTop:20,marginBottom:20,fontSize:34,color:"#ffffff"},"userInfo-sex":{position:"absolute",top:28,right:0,width:24,height:24},"user-intro":{fontSize:26,color:"#ffffff"}}},126:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["userIcon-wrap"]},[r("div",{staticClass:["userHeader-wrap"]},[r("div",{staticClass:["userHeader-bg"]},[r("image",{staticClass:["userHeader"],attrs:{src:e.userInfo.userHeader}})]),e.userInfo.isVIP?r("image",{staticClass:["userVIP"],attrs:{src:"/src/components/userInfo/images/vip.png"}}):e._e()]),r("div",{staticClass:["userInfo-wrap"]},[r("text",{staticClass:["userInfo-name"]},[e._v(e._s(e.userInfo.userName))]),r("image",{staticClass:["userInfo-sex"],attrs:{src:"/src/components/userInfo/images/sex-m.png"}})]),r("text",{staticClass:["user-intro"]},[e._v(e._s(e.userInfo.userIntro))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},278:function(e,t,r){var s,n,o=[];o.push(r(112)),s=r(97);var i=r(126);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=s=s.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userInfo/index.vue",n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-af439cc2",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=s,e.exports.el="true",new Vue(e.exports)},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{userInfo:{default:function(){return{userHeader:"",isVIP:!1,userName:"",userSex:"",userIntro:""}}}}}}});