// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=521)}({215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{buttonStyle:{default:function(){return{size:"m",buttonText:"",unclickColor:"#ff622a",clickedColor:"#eee"}}}},data:function(){return{isClicked:!1}},computed:{btnBackground:function(){return this.isClicked?this.buttonStyle.clickedColor:this.buttonStyle.unclickColor}},methods:{clickIt:function(){this.isClicked=!0,this.$emit("callBack",this.isClicked)}}}},240:function(t,e){t.exports={"button-wrap":{borderRadius:8,justifyContent:"center",alignItems:"center"},"button-text":{color:"#ffffff",textAlign:"center"},"button-wrap-m":{width:570,height:70},"button-text-m":{fontSize:32}}},262:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["button-wrap"],class:["button-wrap-"+t.buttonStyle.size],style:{backgroundColor:t.btnBackground},on:{click:t.clickIt}},[n("text",{staticClass:["button-text"],class:["button-text-"+t.buttonStyle.size]},[t._v(t._s(t.buttonStyle.buttonText))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},521:function(t,e,n){var o,r,i=[];i.push(n(240)),o=n(215);var s=n(262);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/button/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-0fce9538",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)}});