// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=550)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:i,exports:o,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},106:function(e,t,n){n(134);var r=n(0)(n(111),n(128),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/dynamic/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{default:""},summary:{default:""},author:{default:function(){return{}}},images:{default:function(){return[]}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},122:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.mesg-wrap {\n    width: 690px;\n}\n.user {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 32px;\n    color: #0066cc;\n}\n.title {\n    font-size: 32px;\n    font-weight: 600;\n    color: #222;\n    lines: 2;\n    margin-bottom: 10px;\n    line-height: 45px;\n}\n.article-content {\n    font-size: 32px;\n    color: #222;\n    lines: 4;\n    line-height: 45px;\n}\n.article-content-notit {\n    font-size: 32px;\n    line-height: 45px;\n    color: #222;\n}\n.article-img-wrap {\n    margin-bottom: 25px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.article-img-group {\n}\n.article-img-box {\n    width: 220px;\n    height: 220px;\n    overflow: hidden;\n}\n.article-img-item {\n    width: 220px;\n    height: 220px;\n}",""])},128:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mesg-wrap",on:{click:e.viewDetails}},[n("text",{staticClass:"user"},[e._v("@"+e._s(e.author.nick)+":")]),e._v(" "),n("text",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("text",{staticClass:"article-content",class:[0==e.title.length?"article-content-notit":""]},[e._v(e._s(e.summary))]),e._v(" "),e.images.length>0?n("div",{staticClass:"article-img-wrap"},e._l(e.images,function(e,t){return n("div",{key:t,staticClass:"article-img-group"},[n("div",{staticClass:"article-img-box"},[n("image",{staticClass:"article-img-item",attrs:{src:e.url}})])])})):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},134:function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("920fae1a",r,!1)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=d++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),l={},p=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],c=o[3],l={id:e+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},550:function(e,t,n){"use strict";var r=n(106);r.el="#root",new Vue(r)}});