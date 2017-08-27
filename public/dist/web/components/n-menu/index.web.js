// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=587)}({0:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var c=u.computed||(u.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:u}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(g){var i=d++;o=p||(p=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=u.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(3),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=a(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],u=f[s.id];u.refs--,n.push(u)}t?(r=a(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var u=n[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},217:function(e,t,n){n(275);var o=n(0)(n(234),n(258),null,null);o.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/n-mask/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},234:function(e,t,n){"use strict";e.exports={props:{opacity:{type:Number,default:0},backgroundColor:{type:String,default:"#f7f7f7"}},methods:{_click:function(){this.$emit("click")}}}},241:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root{\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    top: 0px;\n    bottom: 0px;\n}\n",""])},258:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.opacity>0?n("div",{staticClass:"root",style:{opacity:e.opacity,backgroundColor:e.backgroundColor},on:{click:e._click}}):n("div",{staticClass:"root",on:{click:e._click}})},staticRenderFns:[]},e.exports.render._withStripped=!0},275:function(e,t,n){var o=n(241);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("22259068",o,!1)},298:function(e,t,n){n(393);var o=n(0)(n(320),n(371),null,null);o.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/n-menu/index.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],u=i[1],c=i[2],a=i[3],f={id:e+":"+r,css:u,media:c,sourceMap:a};o[s]?o[s].parts.push(f):n.push(o[s]={id:s,parts:[f]})}return n}},320:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=o(r),s=n(8),u=o(s);t.default={props:{show:{type:Boolean,default:!1}},data:function(){return{height:88,left:"0px",top:"0px"}},computed:{computeTop:function(){if(u.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{open:function(){this.show=!0},close:function(){this.show=!1},layoutClick:function(){i.default.log("layoutClick"),this.close()}},components:{nMask:n(217)}}},349:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root {\n    /*position: fixed;*/\n    /*left: 30px;*/\n    /*right: 30px;*/\n    /*top: 0px;*/\n    /*bottom: 0px;*/\n\n    background-color: #f9b713;\n    /*position: fixed;*/\n    /*opacity: 0;*/\n    /*transform: scale(0.9, 0.9);*/\n}\n.border {\n    border-width: 1px;\n}\n.bg {\n    position: fixed;\n    right: 30px;\n}\n.box {\n    position: fixed;\n    right: 30px;\n}\n.content {\n    position: relative;\n    flex-direction: column;\n    left: 0px;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n}\n\n\n",""])},371:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"root"},[n("n-mask",{on:{click:e.layoutClick}}),e._v(" "),n("div",{staticClass:"bg",style:{top:e.computeTop}},[e._t("backgroud")],2),e._v(" "),n("div",{ref:"box",staticClass:"box",style:{top:e.computeTop}},[n("div",{staticClass:"content"},[e._t("default")],2)])],1):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0},393:function(e,t,n){var o=n(349);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("c2605a52",o,!1)},587:function(e,t,n){"use strict";var o=n(298);o.el="#root",new Vue(o)},8:function(e,t,n){"use strict";function o(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:o,isWeb:r,getDeviceInfo:i}},9:function(e,t,n){"use strict";function o(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function r(e,t){p||o("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":f(e)))return""+e;for(var o="",r=0;r<n;r++)o+="    ";var s=o+"    ",u="{\n",c=!0;for(var a in e)if(0===r&&r++,e.hasOwnProperty(a)){c=!1;var l=i(e[a],t,n+1);l.indexOf("function"),u+=s,e.hasOwnProperty(a)||(u+="prototype.");var p=f(e[a]);u+=a,u+="["+p,u+="]",u+=" : ",u+=l,u+=" ,\n"}return u+=o+"}",c&&(u="{}"),u}function s(e,t){arguments.length>=2?o("WARN-"+e+"  "+t):(t=e,o("WARN  "+t))}function u(e,t,n,o){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:o})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){l._testbegin=(new Date).getTime(),l._testIsBegin=!0}function a(e){l._testEnd=(new Date).getTime(),u(!0===l._testIsBegin,"nn.Debug._testIsBegin need"),o(e+" "+l._testEnd+" - "+l._testbegin+" : "+(l._testEnd-l._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=l||{},p=!1;t.default={log:o,dump:r,testBegin:c,testEnd:a}}});