// { "framework": "Vue"} 

!function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=511)}({511:function(t,e,n){var s,i,r=[];r.push(n(88)),s=n(78);var o=n(95);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=s=s.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/news/index.vue",i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-da81dcdc",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=s,t.exports.el="true",new Vue(t.exports)},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},summary:{default:""},author:{default:function(){return{}}},commentCount:{default:""},upvoteCount:{default:""},createAt:{default:""},images:{default:function(){return[]}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},88:function(t,e){t.exports={"news-wrap":{flexDirection:"row",width:690,marginTop:20},"news-content-wrap":{position:"relative"},"news-content-wrap-hasImg":{width:450,height:140,alignContent:"space-between"},"news-content-wrap-noImg":{width:690,height:190,alignContent:"space-between"},"news-content-tit":{fontSize:32,lineHeight:45,color:"#000000",fontWeight:"bold",lines:2},"news-content":{fontSize:26,color:"#707070",lines:2},"news-issue-wrap":{position:"absolute",left:0,bottom:0,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"news-issue-wrap-hasImg":{width:450},"news-issue-wrap-noImg":{width:690},"news-info-wrap":{flexDirection:"row"},"news-submit-tit":{fontSize:24,color:"#bbbbbb"},fenge:{marginLeft:10,marginRight:10,color:"#bbbbbb"},"news-img-wrap":{width:210,height:140,marginLeft:30,overflow:"hidden"},"news-img":{width:210,height:210}}},95:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["news-wrap"],on:{click:t.viewDetails}},[n("div",{staticClass:["news-content-wrap"],class:[t.images.length>0?"news-content-wrap-hasImg":"news-content-wrap-noImg"]},[n("text",{staticClass:["news-content-tit"]},[t._v(t._s(t.title))]),t.images.length<=0?n("text",{staticClass:["news-content"]},[t._v(t._s(t.summary))]):t._e(),n("div",{staticClass:["news-issue-wrap"],class:[t.images.length>0?"news-issue-wrap-hasImg":"news-issue-wrap-noImg"]},[n("div",{staticClass:["news-info-wrap"]},[n("text",{staticClass:["news-submit-tit"]},[t._v(t._s(t.author.nick))]),n("text",{staticClass:["fenge"]},[t._v("·")]),n("text",{staticClass:["news-submit-tit"]},[t._v("评论"+t._s(t.commentCount))]),n("text",{staticClass:["fenge"]},[t._v("·")]),n("text",{staticClass:["news-submit-tit"]},[t._v("赞"+t._s(t.upvoteCount))])]),n("text",{staticClass:["news-submit-tit"]},[t._v(t._s(t.createAt))])])]),n("div",{staticClass:["news-img-wrap"]},[t.images.length>0?n("image",{staticClass:["news-img"],attrs:{src:t.images[0].url}}):t._e()])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});