// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=329)}({123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{contentIssue:{default:function(){return{contentImg:"",issue:"",content:""}}}}}},151:function(t,e){t.exports={"comment-issue-wrap":{marginRight:30,marginLeft:30,width:690,flexDirection:"row"},"comment-issue-img":{width:150,height:150},"comment-content-bg":{width:540,height:150,backgroundColor:"#f8f8f8"},"comment-content-wrap":{marginLeft:30,marginRight:30,width:480},"comment-issue":{height:60,lineHeight:60,fontSize:26,color:"#333333"},"comment-issue-content":{marginTop:15,fontSize:24,color:"#888888",lines:2}}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["comment-issue-wrap"]},[n("image",{staticClass:["comment-issue-img"],attrs:{src:t.contentIssue.contentImg}}),n("div",{staticClass:["comment-content-bg"]},[n("div",{staticClass:["comment-content-wrap"]},[n("text",{staticClass:["comment-issue"]},[t._v("@"+t._s(t.contentIssue.issue))]),n("text",{staticClass:["comment-issue-content"]},[t._v(t._s(t.contentIssue.content))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},329:function(t,e,n){var o,s,r=[];r.push(n(151)),o=n(123);var i=n(167);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=o=o.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/comment/index.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-c1ac0aa2",s.style=s.style||{},r.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)}});