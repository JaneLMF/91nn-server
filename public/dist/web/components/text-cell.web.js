// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=498)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var i=p++;r=f||(f=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=l[s.id];a.refs--,n.push(a)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},241:function(e,t,n){n(308);var r=n(0)(n(258),n(291),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/text-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] text-cell.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},258:function(e,t,n){"use strict"},274:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border {\r\n\tborder-width: 1px;\n}\r\n",""])},291:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"background-color":"#FFFFFF","border-width":"1px",padding:"40px"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"space-between"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"center","align-items":"center",height:"121px"}},[n("div",{staticStyle:{"background-color":"#AFDDFF","border-radius":"60px",height:"60px",width:"60px"}}),e._v(" "),n("div",{staticStyle:{"margin-left":"20px"}},[n("text",[e._v("比特xxx")]),e._v(" "),n("text",[e._v("From: ni niu")])])]),e._v(" "),n("div",{staticClass:"border",staticStyle:{"justify-content":"center","align-items":"center",height:"121px"}},[n("text",[e._v("2017-07-15 18:09:35")])])]),e._v(" "),n("div",{staticStyle:{"margin-top":"30px"}},[n("text",[e._v("text ----- - -ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f")])]),e._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},e._l([1,2,3],function(t){return n("div",{staticClass:"border",staticStyle:{flex:"1","margin-top":"30px"}},[n("div",{staticStyle:{"flex-direction":"row",height:"100px","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{width:"50px",height:"50px","background-color":"#0088FB","margin-right":"5px"}}),e._v(" "),n("text",[e._v("5")])])])}))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],c=i[2],u=i[3],l={id:e+":"+o,css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},308:function(e,t,n){var r=n(274);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("4b9a8806",r,!1)},498:function(e,t,n){"use strict";var r=n(241);r.el="#root",new Vue(r)}});