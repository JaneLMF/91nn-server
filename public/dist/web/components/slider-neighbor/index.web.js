// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=597)}({0:function(t,e){t.exports=function(t,e,r,o){var n,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(n=t,i=t.default);var c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r),o){var s=c.computed||(c.computed={});Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}})}return{esModule:n,exports:i,options:c}}},403:function(t,e,r){var o=r(0)(r(477),r(831),null,null);o.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/index.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},477:function(t,e,r){"use strict";t.exports={data:function(){return{log_detail:[],attr_auto_play:!1,btnList2100:[{row:[{value:"false",bgc:"#EEEEEE",index:0},{value:"true",bgc:"#EEEEEE",index:1}]}]}},methods:{update2100:function(t){console.log("update2100");for(var e=this,r=t.target.attr.flagid,o=0;o<e.btnList2100.length;o++)for(var n=e.btnList2100[o],i=n.row,a=0;a<i.length;a++){var c=i[a];if(c.index===r)switch(c.bgc="#B2DFEE",r){case 0:e.attr_auto_play=!1;break;case 1:e.attr_auto_play=!0}else c.bgc="#EEEEEE"}}}}},597:function(t,e,r){"use strict";var o=r(403);o.el="#root",new Vue(o)},831:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"flex-direction":"column","background-color":"#ffffff",width:"750",height:"600","border-width":"0"}},[r("div",{staticStyle:{width:"700px",height:"400px","border-width":"1px","border-style":"solid","border-color":"#000000",margin:"0"}},[r("slider-neighbor",{staticStyle:{width:"700px",height:"400px"},attrs:{"neighbor-scale":"0.8","neighbor-space":"30","current-item-scale":"0.90",interval:"3000","neighbor-alpha":"0.8","auto-play":t.attr_auto_play}},[r("image",{staticStyle:{width:"600px","background-color":"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"}}),t._v(" "),r("image",{staticStyle:{width:"600px","background-color":"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"}}),t._v(" "),r("image",{staticStyle:{width:"600px","background-color":"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}}),t._v(" "),r("image",{staticStyle:{width:"600px","background-color":"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"}}),t._v(" "),r("indicator",{staticStyle:{height:"60px",position:"absolute",bottom:"15px",width:"700px",left:"0px",itemSelectedColor:"#0000FF",itemSize:"20",itemColor:"#FF0000"}})],1)],1),t._v(" "),r("div",{staticStyle:{height:"100px","border-width":"1px",margin:"10px"}},t._l(t.btnList2100,function(e){return r("div",{staticStyle:{"flex-direction":"row","border-width":"1px"}},t._l(e.row,function(e){return r("text",{staticStyle:{width:"310px",height:"50px","text-align":"center","border-width":"1px","border-color":"#696969","border-style":"solid","border-radius":"5px",margin:"10px"},style:{backgroundColor:e.bgc},attrs:{flagid:e.index},on:{click:t.update2100}},[t._v("auto play: "+t._s(e.value))])}))}))])},staticRenderFns:[]},t.exports.render._withStripped=!0}});