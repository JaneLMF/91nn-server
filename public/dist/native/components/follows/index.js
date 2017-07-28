// { "framework": "Vue"} 

!function(e){function t(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=228)}({13:function(e,t,r){var o,s,n=[];n.push(r(5)),o=r(4);var i=r(6);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=o=o.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userHeader/index.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4836b184",s.style=s.style||{},n.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,n),e.exports=o},228:function(e,t,r){var o,s,n=[];n.push(r(66)),o=r(58);var i=r(75);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=o=o.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/follows/index.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-56e6bf72",s.style=s.style||{},n.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,n),e.exports=o,e.exports.el="true",new Vue(e.exports)},4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",subTitle:"",headerStyle:""}}}}}},5:function(e,t){e.exports={"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:70},"user-wiki-details-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:100},"follow-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:80},"user-header":{width:70,height:70,borderRadius:70},"user-wiki-details-header":{width:100,height:100,borderRadius:100},"follow-header":{width:80,height:80,borderRadius:80},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:28,color:"#434343"},"user-wiki-details-name":{fontSize:36,color:"#434343"},"follow-name":{fontSize:28,color:"#434343"},"user-issue":{fontSize:22,color:"#959595"},"user-wiki-details-issue":{fontSize:22,color:"#959595"},"follow-issue":{marginTop:15,fontSize:24,color:"#959595"}}},58:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{followers:{default:function(){return{article:{headerUrl:"",userName:"",subTitle:"",headerStyle:"follow"},isFollow:!1}}}},components:{userHeader:r(13)},methods:{followIt:function(){this.$emit("follow",!this.followers.isFollow)}}}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.article.headerStyle+"-header-wrap"]},[r("image",{class:[e.article.headerStyle+"-header"],attrs:{src:e.article.headerUrl}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{class:[e.article.headerStyle+"-name"]},[e._v(e._s(e.article.userName))]),r("text",{class:[e.article.headerStyle+"-issue"]},[e._v(e._s(e.article.subTitle))]),e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},66:function(e,t){e.exports={"follow-wrap":{marginRight:30,marginLeft:30,width:690},"follow-content-wrap":{width:690,height:138,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"follow-btn":{width:100,height:42,lineHeight:42,textAlign:"center",borderWidth:1,borderColor:"#fc6d3f",borderRadius:8,fontSize:24,color:"#fc6d3f"},"has-follow":{borderColor:"#959595",color:"#959595"},line:{marginLeft:100,width:590,height:1,backgroundColor:"#e5e5e5"}}},75:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["follow-wrap"]},[r("div",{staticClass:["follow-content-wrap"]},[r("user-header",{staticClass:["follower-header"],attrs:{article:e.followers.article}}),r("text",{staticClass:["follow-btn"],class:[e.followers.isFollow?"has-follow":""],on:{click:e.followIt}},[e._v(e._s(e.followers.isFollow?"已关注":"+关注"))])],1),r("div",{staticClass:["line"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});