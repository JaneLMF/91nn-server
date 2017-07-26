// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=199)}({112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{default:0}},components:{textCell:r(190),imageCell:r(169)}}},131:function(e,t){e.exports={}},147:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0==e.type?r("text-cell"):e._e(),1==e.type?r("image-cell"):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},169:function(e,t,r){var n,i,o=[];o.push(r(81)),n=r(65);var s=r(93);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/image-cell.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-5d8fa757",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},190:function(e,t,r){var n,i,o=[];o.push(r(85)),n=r(70);var s=r(97);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/text-cell.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-7467e3e2",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},199:function(e,t,r){var n,i,o=[];o.push(r(131)),n=r(112);var s=r(147);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/warp-cell.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-240c9714",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},65:function(e,t,r){"use strict"},70:function(e,t,r){"use strict"},81:function(e,t){e.exports={border:{borderWidth:1},image:{marginRight:10,height:320,width:214,backgroundColor:"#AFDDFF"}}},85:function(e,t){e.exports={border:{borderWidth:1}}},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{backgroundColor:"#FFFFFF",borderWidth:"1px",padding:"40px"}},[e._m(0),e._m(1),r("div",{staticStyle:{flexDirection:"row",justifyContent:"flex-start",marginTop:"10px"}},e._l([1,2,3],function(e){return r("div",{staticClass:["image"]})})),r("div",{staticStyle:{flexDirection:"row"}},e._l([1,2,3],function(t){return r("div",{staticClass:["border"],staticStyle:{flex:"1",marginTop:"30px"}},[e._m(2,!0)])}))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["border"],staticStyle:{flexDirection:"row",justifyContent:"space-between"}},[r("div",{staticClass:["border"],staticStyle:{flexDirection:"row",justifyContent:"center",alignItems:"center",height:"121px"}},[r("div",{staticStyle:{backgroundColor:"#AFDDFF",borderRadius:"60px",height:"60px",width:"60px"}}),r("div",{staticStyle:{marginLeft:"20px"}},[r("text",[e._v("比特xxx")]),r("text",[e._v("From: ni niu")])])]),r("div",{staticClass:["border"],staticStyle:{justifyContent:"center",alignItems:"center",height:"121px"}},[r("text",[e._v("2017-07-15 18:09:35")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{marginTop:"30px"}},[r("text",[e._v("image ----- ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{flexDirection:"row",height:"100px",justifyContent:"center",alignItems:"center"}},[r("div",{staticStyle:{width:"50px",height:"50px",backgroundColor:"#0088FB",marginRight:"5px"}}),r("text",[e._v("5")])])}]},e.exports.render._withStripped=!0},97:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{backgroundColor:"#FFFFFF",borderWidth:"1px",padding:"40px"}},[e._m(0),e._m(1),r("div",{staticStyle:{flexDirection:"row"}},e._l([1,2,3],function(t){return r("div",{staticClass:["border"],staticStyle:{flex:"1",marginTop:"30px"}},[e._m(2,!0)])}))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["border"],staticStyle:{flexDirection:"row",justifyContent:"space-between"}},[r("div",{staticClass:["border"],staticStyle:{flexDirection:"row",justifyContent:"center",alignItems:"center",height:"121px"}},[r("div",{staticStyle:{backgroundColor:"#AFDDFF",borderRadius:"60px",height:"60px",width:"60px"}}),r("div",{staticStyle:{marginLeft:"20px"}},[r("text",[e._v("比特xxx")]),r("text",[e._v("From: ni niu")])])]),r("div",{staticClass:["border"],staticStyle:{justifyContent:"center",alignItems:"center",height:"121px"}},[r("text",[e._v("2017-07-15 18:09:35")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{marginTop:"30px"}},[r("text",[e._v("text ----- - -ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{flexDirection:"row",height:"100px",justifyContent:"center",alignItems:"center"}},[r("div",{staticStyle:{width:"50px",height:"50px",backgroundColor:"#0088FB",marginRight:"5px"}}),r("text",[e._v("5")])])}]},e.exports.render._withStripped=!0}});