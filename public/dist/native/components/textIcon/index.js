// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=460)}({173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{size:{default:"s"},iconDirection:{default:"row"},textDirection:{default:"right"},hasClick:{default:!1},iconUrl:{default:""},text:{default:""},textColor:{default:"#bbbbbb"}},methods:{clickIt:function(){this.$emit("callBack",!this.hasClick)}}}},187:function(t,e){t.exports={"icon-wrap-row":{flexDirection:"row",justifyContent:"center",alignItems:"center"},"icon-wrap-column":{flexDirection:"column",justifyContent:"center",alignItems:"center"},"icon-s":{width:24,height:24},"icon-m":{width:32,height:32},"icon-l":{width:48,height:48},"text-s":{fontSize:20},"text-m":{fontSize:24},"text-l":{fontSize:28},"text-top":{marginBottom:10},"text-right":{marginLeft:10},"text-bottom":{marginTop:10},"text-left":{marginRight:10}}},202:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["icon-wrap-"+t.iconDirection],on:{click:t.clickIt}},["bottom"==t.textDirection||"right"==t.textDirection?n("image",{class:["icon-"+t.size],attrs:{src:t.iconUrl}}):t._e(),t.text.length>0?n("text",{class:["text-"+t.size,"text-"+t.textDirection],style:{color:t.textColor}},[t._v(t._s(t.text))]):t._e(),"top"==t.textDirection||"left"==t.textDirection?n("image",{class:["icon-"+t.size],attrs:{src:t.iconUrl}}):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},460:function(t,e,n){var o,r,i=[];i.push(n(187)),o=n(173);var c=n(202);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/index.vue",r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-5cc54d8c",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)}});