// { "framework": "Vue"} 

!function(e){function t(n){if(c[n])return c[n].exports;var r=c[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var c={};t.m=e,t.c=c,t.i=function(e){return e},t.d=function(e,c,n){t.o(e,c)||Object.defineProperty(e,c,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=433)}({169:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{ischecked:{default:!1},name:{default:""},value:{default:""}},data:function(){return{checked:"/resources/checkBox/checked.png",unchecked:"/resources/checkBox/unchecked.png"}},methods:{checkIt:function(){this.ischecked=!this.ischecked,this.$emit("callBack",this.ischecked)}}}},200:function(e,t){e.exports={"check-box-wrap":{flexDirection:"row"},"check-box-icon":{width:28,height:28},"check-box-name":{marginLeft:12,fontSize:24,color:"#434343",lineHeight:28}}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:["check-box-wrap"],on:{click:e.checkIt}},[e.ischecked?c("image",{staticClass:["check-box-icon"],attrs:{src:e.checked}}):c("image",{staticClass:["check-box-icon"],attrs:{src:e.unchecked}}),c("text",{staticClass:["check-box-name"]},[e._v(e._s(e.name))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},433:function(e,t,c){var n,r,o=[];o.push(c(200)),n=c(169);var s=c(217);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/checkBox/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-c5a56cae",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)}});