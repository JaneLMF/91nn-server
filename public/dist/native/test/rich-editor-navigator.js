// { "framework": "Vue"} 

!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=510)}({189:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.iOS="iOS"==weex.config.env.platform},methods:{data:{iOS:!1},leftItemClick:function(){this.$emit("leftItemClick")},rightItemClick:function(){this.$emit("rightItemClick")}}}},207:function(t,e){t.exports={navigator:{height:88,flexDirection:"row",justifyContent:"space-between",backgroundColor:"#F96E48"},"navigator-item-ios-height":{height:40,backgroundColor:"#F96E48"},"navigator-item":{flex:1,justifyContent:"center",paddingLeft:30,paddingRight:30},"navigator-item-left":{alignItems:"flex-start"},"navigator-item-center":{alignItems:"center"},"navigator-item-right":{alignItems:"flex-end"},"navigator-item-back":{width:35,height:40}}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.iOS?i("div",{staticClass:["navigator-item-ios-height"]}):t._e(),i("div",{staticClass:["navigator"]},[i("div",{staticClass:["navigator-item","navigator-item-left"],on:{click:t.leftItemClick}},[i("image",{staticClass:["navigator-item-back"],attrs:{src:"http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/back.png"}})]),t._m(0),i("div",{staticClass:["navigator-item","navigator-item-right"],on:{click:t.rightItemClick}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("发布")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["navigator-item","navigator-item-center"]},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("文章")])])}]},t.exports.render._withStripped=!0},510:function(t,e,i){var n,r,o=[];o.push(i(207)),n=i(189);var a=i(225);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/rich-editor-navigator.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-8f3c655e",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=n,t.exports.el="true",new Vue(t.exports)}});