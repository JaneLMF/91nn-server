// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=519)}({0:function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var l=a.computed||(a.computed={});Object.keys(o).forEach(function(t){var e=o[t];l[t]=function(){return e}})}return{esModule:r,exports:i,options:a}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return b;o.parentNode.removeChild(o)}if(m){var i=p++;o=f||(f=r()),e=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),e=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,b=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=c(t,e);return o(r),function(e){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,n.push(a)}e?(r=c(t,e),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},248:function(t,e,n){n(304);var o=n(0)(n(265),n(287),"data-v-39956011",null);o.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/tab/tabitem.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tabitem.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},265:function(t,e,n){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},270:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.border[data-v-39956011] {\n  border-width: 1px;\n}\n.container[data-v-39956011] {\n  flex: 1;\n  flex-direction: column;\n  align-items:center;\n  justify-content:center;\n}\n.tab-text[data-v-39956011] {\n  text-align: center;\n}\n.tab-line[data-v-39956011] {\n  justify-content: center;\n  border-top-width: 4px;\n  border-bottom-width: 4px;\n}\n",""])},287:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{height:t.height},on:{click:t.onclickitem}},[n("div",{staticClass:"tab-line",style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[n("text",{staticClass:"tab-text",style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=i[0],a=i[1],l=i[2],c=i[3],u={id:t+":"+r,css:a,media:l,sourceMap:c};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},304:function(t,e,n){var o=n(270);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("749d2572",o,!1)},334:function(t,e,n){n(741);var o=n(0)(n(398),n(681),"data-v-ace436f6",null);o.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/tab/tabbar.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},398:function(t,e,n){"use strict";var o=n(9);!function(t){t&&t.__esModule}(o);t.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:n(248)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.bottomColor=this.bottomSelectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.bottomColor=this.bottomUnSelectedColor,n.visibility="hidden")}},clickOption:function(){this.$emit("clickOption")}}}},519:function(t,e,n){"use strict";var o=n(334);o.el="#root",new Vue(o)},621:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.border[data-v-ace436f6] {\n  border-width: 1px;\n}\n.wrapper[data-v-ace436f6] {\n  width: 750px;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.tab-bar[data-v-ace436f6] {\n  width: 750px;\n  flex-direction: row;\n}\n.tabbase[data-v-ace436f6]{\n  width: 750px;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.tabbase-scroller[data-v-ace436f6]{\n  /*width: 750px;*/\n  flex-direction: row;\n  justify-content: space-around;\n}\n.img-box[data-v-ace436f6] {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n.img-down[data-v-ace436f6] {\n  width: 24px;\n  height: 13px;\n}\n.content[data-v-ace436f6] {\n  width: 750px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n",""])},681:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",style:{top:t.marginTop}},[n("div",{staticClass:"tab-bar",style:{backgroundColor:t.backgroundColor,height:t.tabHeight}},[n("scroller",{staticStyle:{"flex-direction":"row",flex:"8"},style:{height:t.tabHeight},attrs:{append:"tree","show-scrollbar":"false","scroll-direction":"horizontal"}},[n("div",{class:[0==t.scrolleable?"tabbase":"tabbase-scroller"],style:{height:t.tabHeight,backgroundColor:t.backgroundColor}},t._l(t.tabItems,function(e){return n("div",{key:e.index,style:{height:t.tabHeight}},[n("tabitem",{attrs:{index:e.index,title:e.title,height:t.tabHeight,margin:t.tabMargin,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:t.tabItemOnClick}})],1)}))]),t._v(" "),n("div",{staticClass:"img-box",style:{height:t.tabHeight},on:{click:t.clickOption}},[n("image",{staticClass:"img-down",attrs:{resize:"contain",src:"/resources/coin-market/down.png"}})])],1),t._v(" "),t._l(t.tabItems,function(e,o){return n("embed",{key:o,staticClass:"content",style:{visibility:e.visibility,top:t.tabHeight},attrs:{src:e.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},741:function(t,e,n){var o=n(621);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("2390e178",o,!1)},9:function(t,e,n){"use strict";function o(t){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function r(t,e){f||o("["+t+"]  "+i(e))}function i(t,e,n){if(void 0===e&&(e=10),void 0===n&&(n=0),n===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":u(t)))return""+t;for(var o="",r=0;r<n;r++)o+="    ";var s=o+"    ",a="{\n",l=!0;for(var c in t)if(0===r&&r++,t.hasOwnProperty(c)){l=!1;var d=i(t[c],e,n+1);d.indexOf("function"),a+=s,t.hasOwnProperty(c)||(a+="prototype.");var f=u(t[c]);a+=c,a+="["+f,a+="]",a+=" : ",a+=d,a+=" ,\n"}return a+=o+"}",l&&(a="{}"),a}function s(t,e){arguments.length>=2?o("WARN-"+t+"  "+e):(e=t,o("WARN  "+e))}function a(t,e,n,o){if(null===t||void 0===t||!1===t){if(s("assert","\n------------err msg------------\n"+i({expression:t,msg:e,info0:n,info1:o})+"------------create ------------\n"+function(){var t="",e=0,n=arguments.callee;do{if(e>=3&&e<10){t+=""+n}else if(e>=10)break;n=n.arguments.callee.caller,e++}while(n);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function c(t){d._testEnd=(new Date).getTime(),a(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),o(t+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=d||{},f=!1;e.default={log:o,dump:r,testBegin:l,testEnd:c}}});