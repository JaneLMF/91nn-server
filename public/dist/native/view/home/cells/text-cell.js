// { "framework": "Vue"} 

!function(t){function e(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=285)}({285:function(t,e,r){var i,s,a=[];a.push(r(30)),i=r(29);var n=r(33);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=i=i.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/text-cell.vue",s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._scopeId="data-v-08021b68",s.style=s.style||{},a.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,a),t.exports=i,t.exports.el="true",new Vue(t.exports)},29:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{article:{default:function(){return{headerUrl:"",userName:"",userIsuue:"",articleTime:"",articleContent:"",articleImg:[],comment:"",forward:"",agree:""}}}},data:function(){return{}}}},30:function(t,e){t.exports={"article-box":{backgroundColor:"#ffffff",marginBottom:10},"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:40,paddingRight:40},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:60},"article-time-wrap":{justifyContent:"flex-end",alignItems:"center",height:60},"article-time":{fontSize:24,color:"#959595"},"article-wrap":{marginTop:30,marginBottom:25,justifyContent:"space-around"},"article-content":{fontWeight:"200",fontSize:28,color:"#333333",justifyContent:"space-around"},"article-img-wrap":{marginBottom:25,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"article-img-item":{width:210,height:118,borderRadius:4},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:24,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{width:60,height:60,borderRadius:50},"button-group":{flexDirection:"row",borderTopWidth:2,borderColor:"#e5e5e5",width:750},"button-item":{flexDirection:"row",flex:1,height:73,justifyContent:"center",alignItems:"center"},"button-icon":{width:32,height:32,marginRight:14},"button-content":{fontSize:24,color:"#bbbbbb"}}},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["article-box"]},[r("div",{staticClass:["article-content-wrap"]},[r("div",{staticClass:["user-wrap"]},[r("div",{staticClass:["user-header-wrap"]},[r("image",{staticClass:["user-header"],attrs:{src:t.article.headerUrl}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{staticClass:["user-name"]},[t._v(t._s(t.article.userName))]),r("text",{staticClass:["user-issue"]},[t._v("来自: "+t._s(t.article.userIsuue))])])]),r("div",{staticClass:["article-time-wrap"]},[r("text",{staticClass:["article-time"]},[t._v(t._s(t.article.articleTime))])])]),r("div",{staticClass:["article-wrap"]},[r("text",{staticClass:["article-content"]},[t._v(t._s(t.article.articleContent))])]),t.article.articleImg.length>0?r("div",{staticClass:["article-img-wrap"]},t._l(t.article.articleImg,function(t,e){return r("div",{key:e,staticClass:["article-img-group"]},[r("image",{staticClass:["article-img-item"],attrs:{src:t}})])})):t._e()]),r("div",{staticClass:["button-group"]},[r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/zhuanfa.png"}}),r("text",{staticClass:["button-content"]},[t._v(t._s(t.article.forward))])]),r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/pinglun.png"}}),r("text",{staticClass:["button-content"]},[t._v(t._s(t.article.comment))])]),r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/zan.png"}}),r("text",{staticClass:["button-content"]},[t._v(t._s(t.article.agree))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});