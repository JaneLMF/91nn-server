// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=569)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var o=p++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var i=u(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}t?(i=u(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},273:function(e,t,n){n(352);var r=n(0)(n(293),n(332),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/rich-editor-navigator.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] rich-editor-navigator.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){this.iOS="iOS"==weex.config.env.platform},methods:{data:{iOS:!1},leftItemClick:function(){this.$emit("leftItemClick")},rightItemClick:function(){this.$emit("rightItemClick")}}}},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],u=o[3],f={id:e+":"+i,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},312:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.navigator {\n    height:88px;\n    flex-direction: row;\n    justify-content:space-between;\n    background-color:#F96E48 ;\n}\n.navigator-item-ios-height {\n    height:40px;\n    background-color:#F96E48 ;\n}\n.navigator-item {\n    flex:1;\n    justify-content:center;\n    padding-left:30px;\n    padding-right: 30px;\n}\n.navigator-item-left {\n    align-items: flex-start;\n}\n.navigator-item-center {\n    align-items: center;\n}\n.navigator-item-right {\n    align-items: flex-end;\n}\n.navigator-item-back {\n    width:35px;\n    height:40px;\n}\n",""])},332:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.iOS?n("div",{staticClass:"navigator-item-ios-height"}):e._e(),e._v(" "),n("div",{staticClass:"navigator"},[n("div",{staticClass:"navigator-item navigator-item-left",on:{click:e.leftItemClick}},[n("image",{staticClass:"navigator-item-back",attrs:{src:"http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/back.png"}})]),e._v(" "),n("div",{staticClass:"navigator-item navigator-item-center"},[n("text",{staticStyle:{color:"#ffffff"}},[e._v("文章")])]),e._v(" "),n("div",{staticClass:"navigator-item navigator-item-right",on:{click:e.rightItemClick}},[n("text",{staticStyle:{color:"#ffffff"}},[e._v("发布")])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},352:function(e,t,n){var r=n(312);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("3f9a6636",r,!1)},569:function(e,t,n){"use strict";var r=n(273);r.el="#root",new Vue(r)}});