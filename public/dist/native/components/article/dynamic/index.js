// { "framework": "Vue"} 

!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=508)}({508:function(t,e,i){var n,r,o=[];o.push(i(89)),n=i(77);var s=i(96);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/dynamic/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-e027e294",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=n,t.exports.el="true",new Vue(t.exports)},77:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},summary:{default:""},author:{default:function(){return{}}},images:{default:function(){return[]}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},89:function(t,e){t.exports={"mesg-wrap":{width:690},user:{marginTop:20,marginBottom:20,fontSize:32,color:"#0066cc"},title:{fontSize:32,fontWeight:"600",color:"#222222",lines:2,marginBottom:10,lineHeight:45},"article-content":{fontSize:32,color:"#222222",lines:4,lineHeight:45},"article-content-notit":{fontSize:32,lineHeight:45,color:"#222222"},"article-img-wrap":{marginBottom:25,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"article-img-box":{width:220,height:220,overflow:"hidden"},"article-img-item":{width:220,height:220}}},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["mesg-wrap"],on:{click:t.viewDetails}},[i("text",{staticClass:["user"]},[t._v("@"+t._s(t.author.nick)+":")]),i("text",{staticClass:["title"]},[t._v(t._s(t.title))]),i("text",{staticClass:["article-content"],class:[0==t.title.length?"article-content-notit":""]},[t._v(t._s(t.summary))]),t.images.length>0?i("div",{staticClass:["article-img-wrap"]},t._l(t.images,function(t,e){return i("div",{key:e,staticClass:["article-img-group"]},[i("div",{staticClass:["article-img-box"]},[i("image",{staticClass:["article-img-item"],attrs:{src:t.url}})])])})):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}});