// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=487)}({108:function(e,t){e.exports={"commentFooter-bg":{width:750,height:100,backgroundColor:"#ffffff",borderTopWidth:1,borderColor:"#dddddd"},"commentFooter-wrap":{width:690,height:100,marginRight:30,marginLeft:30,flexDirection:"row",alignItems:"center",justifyContent:"center"},"commentFooter-input":{width:612,height:56,borderWidth:1,borderColor:"#eeeeee",borderRadius:56,backgroundColor:"#f8f8f8",fontSize:26,paddingLeft:30,placeholderColor:"#bbbbbb"},"follow-btn-wrap":{width:78,height:56,justifyContent:"center",alignItems:"flex-end"},"follow-btn":{width:49,height:44}}},116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["commentFooter-bg"]},[o("div",{staticClass:["commentFooter-wrap"]},[o("input",{staticClass:["commentFooter-input"],attrs:{type:"text",placeholder:e.commentFooter.placeholderText}}),o("div",{staticClass:["follow-btn-wrap"]},[e.follow?o("image",{staticClass:["follow-btn"],attrs:{src:"/src/components/commentFooter/images/follow.png"},on:{click:e.changeFollow}}):o("image",{staticClass:["follow-btn"],attrs:{src:"/src/components/commentFooter/images/unfollow.png"},on:{click:e.changeFollow}})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},487:function(e,t,o){var n,r,i=[];i.push(o(108)),n=o(98);var s=o(116);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/commentFooter/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-c93220ac",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},98:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{commentFooter:{default:function(){return{placeholderText:"",isFollow:!1}}}},data:function(){return{follow:this.isFollow}},methods:{changeFollow:function(){this.follow=!this.follow}}}}});