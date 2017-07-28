// { "framework": "Vue"} 

!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=268)}({106:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:90,marginBottom:0},tabbar:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,bottom:0,height:90}}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},t._l(t.tabItems,function(e){return o("tabitem",{key:e.index,attrs:{index:e.index,title:e.title,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:t.tabItemOnClick}})})),t._l(t.tabItems,function(t,e){return o("embed",{key:e,staticClass:["content"],style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},123:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={js:function(t){var e=weex.config.bundleUrl;if("undefined"==typeof window){for(e=e.substring(0,e.lastIndexOf("/"));-1!==t.indexOf("../");)t=t.substr(3),e=e.substr(0,e.lastIndexOf("/"));return e+t}var o=new URL(e).origin+"/web/?page=/dist/web"+encodeURI(t);return console.log("webUrl="+o),o},img:function(t){var e=weex.config.bundleUrl;return new URL(e).hostname+"url"}}},132:function(t,e,o){var n,r,i=[];i.push(o(68)),n=o(62);var s=o(77);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/tab/tabitem.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-6da94366",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=n},141:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(123),i=n(r),s=o(3);n(s);e.default={props:{index:{type:[String,Number,Boolean,Object,Array],default:0}},data:function(){return{tabItems:[{index:0,title:"新手学堂",titleFontSize:"30px",src:"/school/index.js",visibility:"visible"},{index:1,title:"热链推荐",titleFontSize:"30px",src:"/hot-chain/index.js",visibility:"hidden"},{index:2,title:"热币推荐",titleFontSize:"30px",src:"/hot-coin/index.js",visibility:"hidden"}]}},created:function(){for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=i.default.js(e.src)}},methods:{selectTab:function(t){console.log("select "+t.index),this.index=t.index},tabBarOnClick:function(t){console.log("tabBarOnClick",t.index)}},components:{oscTabbar:o(270)}}},162:function(t,e){t.exports={root:{width:750,height:1334},border:{borderWidth:1},category:{flexDirection:"row",width:750,height:100,backgroundColor:"#f3f3f3"},category_box:{height:100,justifyContent:"center",borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#f3f3f3"},category_item:{flexDirection:"row",width:250,height:100,alignItems:"center",justifyContent:"center"},category_select:{borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#ff6539"},"tab-active":{color:"#ff6539"}}},188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["root"]},[o("osc-tabbar",{attrs:{backgroundColor:"#f7f7f7",bottomSelectedColor:"#FB633C",bottomUnSelectedColor:"#f7f7f7",tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},268:function(t,e,o){var n,r,i=[];i.push(o(162)),n=o(141);var s=o(188);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-1d80329e",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=n,t.exports.el="true",new Vue(t.exports)},270:function(t,e,o){var n,r,i=[];i.push(o(106)),n=o(96);var s=o(119);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/tab/tabbar.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-74612ec9",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=n},3:function(t,e,o){"use strict";function n(t){u||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function r(t,e){u||n("["+t+"]  "+i(e))}function i(t,e,o){if(void 0===e&&(e=10),void 0===o&&(o=0),o===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var n="",r=0;r<o;r++)n+="    ";var s=n+"    ",l="{\n",c=!0;for(var a in t)if(0===r&&r++,t.hasOwnProperty(a)){c=!1;var d=i(t[a],e,o+1);d.indexOf("function"),l+=s,t.hasOwnProperty(a)||(l+="prototype.");var u=f(t[a]);l+=a,l+="["+u,l+="]",l+=" : ",l+=d,l+=" ,\n"}return l+=n+"}",c&&(l="{}"),l}function s(t,e){arguments.length>=2?n("WARN-"+t+"  "+e):(e=t,n("WARN  "+e))}function l(t,e,o,n){if(null===t||void 0===t||!1===t){if(s("assert","\n------------err msg------------\n"+i({expression:t,msg:e,info0:o,info1:n})+"------------create ------------\n"+function(){var t="",e=0,o=arguments.callee;do{if(e>=3&&e<10){t+=""+o}else if(e>=10)break;o=o.arguments.callee.caller,e++}while(o);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function a(t){d._testEnd=(new Date).getTime(),l(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),n(t+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=d||{},u=!1;e.default={log:n,dump:r,testBegin:c,testEnd:a}},62:function(t,e,o){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},68:function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:90},"tab-text":{textAlign:"center",fontSize:20},"tab-line":{height:90,justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},77:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[o("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor}},[o("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},96:function(t,e,o){"use strict";t.exports={props:{tabItems:{default:[]},backgroundColor:{default:"#ffffee"},selectedColor:{default:"#ff0000"},unselectedColor:{default:"#000000"},bottomSelectedColor:{default:"#ff0000"},bottomUnSelectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:o(132)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var o=this.tabItems[e];e==t?(o.icon=o.selectedImage,o.titleColor=this.selectedColor,o.bottomColor=this.bottomSelectedColor,o.visibility="visible"):(o.icon=o.image,o.titleColor=this.unselectedColor,o.bottomColor=this.bottomUnSelectedColor,o.visibility="hidden")}}}}}});