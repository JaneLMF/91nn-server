// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=344)}({0:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},152:function(t,e,n){n(212);var r=n(0)(n(168),n(196),"data-v-43c9f5c3",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},168:function(t,e,n){"use strict";t.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:n(73)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}}}}},180:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrapper[data-v-43c9f5c3] {\n  width: 750px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.content[data-v-43c9f5c3] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin-top: 0;\n  margin-bottom: 100px;\n}\n.tabbar[data-v-43c9f5c3] {\n  flex-direction: row;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: 100px;\n}\n",""])},196:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._l(t.tabItems,function(t,e){return n("embed",{key:e,staticClass:"content",style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})}),t._v(" "),n("div",{staticClass:"tabbar",attrs:{append:"tree"}},t._l(t.tabItems,function(e){return n("tabitem",{key:e.index,attrs:{index:e.index,icon:e.icon,title:e.title,titleColor:e.titleColor},on:{tabItemOnClick:t.tabItemOnClick}})}))],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},2:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=f++;r=p||(p=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=l(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,n.push(a)}e?(o=l(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},212:function(t,e,n){var r=n(180);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("0f0e1f14",r,!1)},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],c=i[2],l=i[3],u={id:t+":"+o,css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},344:function(t,e,n){"use strict";var r=n(152);r.el="#root",new Vue(r)},73:function(t,e,n){n(98);var r=n(0)(n(84),n(92),"data-v-324912da",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabitem.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tabitem.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},84:function(t,e,n){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},86:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.container[data-v-324912da] {\n  flex: 1; \n  flex-direction: column; \n  align-items:center; \n  justify-content:center; \n  height: 100;\n}\n.top-line[data-v-324912da] {\n  position: absolute; \n  top: 0; \n  left: 0; \n  right: 0; \n  height: 2;\n}\n.tab-icon[data-v-324912da] {\n  margin-top: 5; \n  width: 40; \n  height: 40\n}\n.tab-text[data-v-324912da] {\n  margin-top: 5; \n  text-align: center;  \n  font-size: 20;\n}\n",""])},92:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[n("image",{staticClass:"top-line",attrs:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}}),t._v(" "),n("image",{staticClass:"tab-icon",attrs:{src:t.icon}}),t._v(" "),n("text",{staticClass:"tab-text",style:{color:t.titleColor}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},98:function(t,e,n){var r=n(86);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("da8ca628",r,!1)}});