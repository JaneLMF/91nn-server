// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=474)}({474:function(t,e,r){var o,n,i=[];i.push(r(60)),o=r(59);var s=r(63);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-0c6e4d3a",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},59:function(t,e,r){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},60:function(t,e){t.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},63:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["container"],style:{height:t.height},on:{click:t.onclickitem}},[r("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[r("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});