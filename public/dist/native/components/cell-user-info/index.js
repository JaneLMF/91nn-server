// { "framework": "Vue"} 

!function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=519)}({30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""},useType:{default:"normal"}},methods:{clickIt:function(){this.$emit("callBack")}}}},31:function(e,t){e.exports={"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:30,paddingRight:30,marginBottom:15},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"user-header-issue-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"article-time-wrap":{justifyContent:"center",alignItems:"center",height:50},"article-time":{fontSize:24,color:"#959595"},"user-name":{marginRight:20,fontSize:26,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{marginRight:20,width:50,height:50,borderRadius:50}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["article-content-wrap"]},[r("div",{staticClass:["user-wrap"]},[r("div",{staticClass:["user-header-wrap"],on:{click:e.clickIt}},[r("image",{staticClass:["user-header"],attrs:{src:e.headerUrl}}),"agree"==e.useType?r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName)+"刚刚赞了你的评论：")]):"normal"==e.useType?r("div",{staticClass:["user-header-issue-wrap"]},[r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName))]),r("text",{staticClass:["user-issue"]},[e._v("来自: "+e._s(e.userIssue))])]):e._e()]),r("div",{staticClass:["article-time-wrap"]},[r("text",{staticClass:["article-time"]},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},519:function(e,t,r){var s,n,i=[];i.push(r(31)),s=r(30);var a=r(32);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=s=s.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-5da6dbea",n.style=n.style||{},i.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),e.exports=s,e.exports.el="true",new Vue(e.exports)}});