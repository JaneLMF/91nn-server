// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=440)}({227:function(t,e,r){"use strict";t.exports={data:function(){return{log_detail:[],attr_auto_play:!1,btnList2100:[{row:[{value:"false",bgc:"#EEEEEE",index:0},{value:"true",bgc:"#EEEEEE",index:1}]}]}},methods:{update2100:function(t){console.log("update2100");for(var e=this,r=t.target.attr.flagid,o=0;o<e.btnList2100.length;o++)for(var i=e.btnList2100[o],n=i.row,a=0;a<n.length;a++){var s=n[a];if(s.index===r)switch(s.bgc="#B2DFEE",r){case 0:e.attr_auto_play=!1;break;case 1:e.attr_auto_play=!0}else s.bgc="#EEEEEE"}}}}},388:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{flexDirection:"column",backgroundColor:"#ffffff",width:"750",height:"600",borderWidth:"0"}},[r("div",{staticStyle:{width:"700px",height:"400px",borderWidth:"1px",borderStyle:"solid",borderColor:"#000000",margin:"0"}},[r("slider-neighbor",{staticStyle:{width:"700px",height:"400px"},attrs:{neighborScale:"0.8",neighborSpace:"30",currentItemScale:"0.90",interval:"3000",neighborAlpha:"0.8",autoPlay:t.attr_auto_play}},[r("image",{staticStyle:{width:"600px",backgroundColor:"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"}}),r("image",{staticStyle:{width:"600px",backgroundColor:"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"}}),r("image",{staticStyle:{width:"600px",backgroundColor:"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}}),r("image",{staticStyle:{width:"600px",backgroundColor:"#FFFFDF",height:"400px"},attrs:{src:"https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"}}),r("indicator",{staticStyle:{height:"60px",position:"absolute",bottom:"15px",width:"700px",left:"0px",itemSelectedColor:"#0000FF",itemSize:"20",itemColor:"#FF0000"}})])],1),r("div",{staticStyle:{height:"100px",borderWidth:"1px",margin:"10px"}},t._l(t.btnList2100,function(e){return r("div",{staticStyle:{flexDirection:"row",borderWidth:"1px"}},t._l(e.row,function(e){return r("text",{staticStyle:{width:"310px",height:"50px",textAlign:"center",borderWidth:"1px",borderColor:"#696969",borderStyle:"solid",borderRadius:"5px",margin:"10px"},style:{backgroundColor:e.bgc},attrs:{flagid:e.index},on:{click:t.update2100}},[t._v("auto play: "+t._s(e.value))])}))}))])},staticRenderFns:[]},t.exports.render._withStripped=!0},440:function(t,e,r){var o,i,n=[];o=r(227);var a=r(388);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o,t.exports.el="true",new Vue(t.exports)}});