// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=317)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:o,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},143:function(e,t,n){n(210);var r=n(0)(n(160),n(193),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/image-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] image-cell.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},160:function(e,t,n){"use strict"},176:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border {\n\tborder-width: 1;\n}\n.image{\n\tmargin-right:10px;\n\theight: 320px; \n\twidth: 214px;\n\tbackground-color: #AFDDFF;\n}\n",""])},193:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"background-color":"#FFFFFF","border-width":"1px",padding:"40px"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"space-between"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"center","align-items":"center",height:"121px"}},[n("div",{staticStyle:{"background-color":"#AFDDFF","border-radius":"60px",height:"60px",width:"60px"}}),e._v(" "),n("div",{staticStyle:{"margin-left":"20px"}},[n("text",[e._v("比特xxx")]),e._v(" "),n("text",[e._v("From: ni niu")])])]),e._v(" "),n("div",{staticClass:"border",staticStyle:{"justify-content":"center","align-items":"center",height:"121px"}},[n("text",[e._v("2017-07-15 18:09:35")])])]),e._v(" "),n("div",{staticStyle:{"margin-top":"30px"}},[n("text",[e._v("image ----- ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f")])]),e._v(" "),n("div",{staticStyle:{"flex-direction":"row","justify-content":"flex-start","margin-top":"10px"}},e._l([1,2,3],function(e){return n("div",{staticClass:"image"})})),e._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},e._l([1,2,3],function(t){return n("div",{staticClass:"border",staticStyle:{flex:"1","margin-top":"30px"}},[n("div",{staticStyle:{"flex-direction":"row",height:"100px","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{width:"50px",height:"50px","background-color":"#0088FB","margin-right":"5px"}}),e._v(" "),n("text",[e._v("5")])])])}))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var o=p++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var i=u(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}t?(i=u(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},210:function(e,t,n){var r=n(176);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("994c9d82",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],c=o[2],u=o[3],l={id:e+":"+i,css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},317:function(e,t,n){"use strict";var r=n(143);r.el="#root",new Vue(r)}});