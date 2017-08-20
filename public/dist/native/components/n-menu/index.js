// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=509)}({156:function(e,t,n){"use strict";e.exports={props:{opacity:{type:Number,default:0},backgroundColor:{type:String,default:"#f7f7f7"}},methods:{_click:function(){this.$emit("click")}}}},165:function(e,t){e.exports={root:{position:"fixed",left:0,right:0,top:0,bottom:0}}},179:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.opacity>0?n("div",{staticClass:["root"],style:{opacity:e.opacity,backgroundColor:e.backgroundColor},on:{click:e._click}}):n("div",{staticClass:["root"],on:{click:e._click}})},staticRenderFns:[]},e.exports.render._withStripped=!0},198:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=o(r),s=n(4),c=o(s);t.default={props:{show:{type:Boolean,default:!1}},data:function(){return{height:88,left:"0px",top:"0px"}},computed:{computeTop:function(){if(c.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{open:function(){this.show=!0},close:function(){this.show=!1},layoutClick:function(){i.default.log("layoutClick"),this.close()}},components:{nMask:n(261)}}},217:function(e,t){e.exports={root:{backgroundColor:"#f9b713"},border:{borderWidth:1},bg:{position:"fixed",right:30},box:{position:"fixed",right:30},content:{position:"relative",flexDirection:"column",left:0,top:0,right:0,bottom:0}}},237:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:["root"]},[n("n-mask",{on:{click:e.layoutClick}}),n("div",{staticClass:["bg"],style:{top:e.computeTop}},[e._t("backgroud")],2),n("div",{ref:"box",staticClass:["box"],style:{top:e.computeTop}},[n("div",{staticClass:["content"]},[e._t("default")],2)])],1):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0},261:function(e,t,n){var o,r,i=[];i.push(n(165)),o=n(156);var s=n(179);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/n-mask/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-4784d09e",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},4:function(e,t,n){"use strict";function o(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:o,isWeb:r,getDeviceInfo:i}},5:function(e,t,n){"use strict";function o(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function r(e,t){d||o("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":l(e)))return""+e;for(var o="",r=0;r<n;r++)o+="    ";var s=o+"    ",c="{\n",u=!0;for(var f in e)if(0===r&&r++,e.hasOwnProperty(f)){u=!1;var a=i(e[f],t,n+1);a.indexOf("function"),c+=s,e.hasOwnProperty(f)||(c+="prototype.");var d=l(e[f]);c+=f,c+="["+d,c+="]",c+=" : ",c+=a,c+=" ,\n"}return c+=o+"}",u&&(c="{}"),c}function s(e,t){arguments.length>=2?o("WARN-"+e+"  "+t):(t=e,o("WARN  "+t))}function c(e,t,n,o){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:o})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function u(){a._testbegin=(new Date).getTime(),a._testIsBegin=!0}function f(e){a._testEnd=(new Date).getTime(),c(!0===a._testIsBegin,"nn.Debug._testIsBegin need"),o(e+" "+a._testEnd+" - "+a._testbegin+" : "+(a._testEnd-a._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=a||{},d=!1;t.default={log:o,dump:r,testBegin:u,testEnd:f}},509:function(e,t,n){var o,r,i=[];i.push(n(217)),o=n(198);var s=n(237);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/n-menu/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-40c07264",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)}});