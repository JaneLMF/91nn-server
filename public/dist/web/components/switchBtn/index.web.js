// { "framework": "Vue"} 

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=205)}({0:function(e,n){e.exports=function(e,n,t,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var n=r[e];c[e]=function(){return n}})}return{esModule:o,exports:i,options:a}}},1:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},2:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=u[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(i(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var s=[],o=0;o<t.parts.length;o++)s.push(i(t.parts[o]));u[t.id]={id:t.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=p++;r=f||(f=o()),n=s.bind(null,r,i,!1),t=s.bind(null,r,i,!0)}else r=o(),n=a.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function s(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function a(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=t(3),u={},l=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){h=t;var o=d(e,n);return r(o),function(n){for(var t=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,t.push(a)}n?(o=d(e,n),r(o)):o=[];for(var i=0;i<t.length;i++){var a=t[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},205:function(e,n,t){"use strict";var r=t(29);r.el="#root",new Vue(r)},29:function(e,n,t){t(48);var r=t(0)(t(33),t(44),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/switchBtn/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},3:function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],s=i[0],a=i[1],c=i[2],d=i[3],u={id:e+":"+o,css:a,media:c,sourceMap:d};r[s]?r[s].parts.push(u):t.push(r[s]={id:s,parts:[u]})}return t}},33:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=weex.requireModule("animation");n.default={name:"u-switch",props:{value:[String,Number,Boolean,Object,Array],trueValue:{type:[String,Number,Boolean,Object,Array],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array],default:!1},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value==this.trueValue}},methods:{change:function(){if(!this.disabled){var e=this.checked?this.falseValue:this.trueValue;r.transition(this.$refs.icon,{styles:{transform:"translateX("+(this.checked?"0":"100%")+")"},duration:300,timingFunction:"ease",delay:0}),this.$emit("input",e),this.$emit("change",e)}}},mounted:function(){var e=this;this.$nextTick(function(){e.checked&&r.transition(e.$refs.icon,{styles:{transform:"translateX(100%)"},duration:0,delay:0})})}}},37:function(e,n,t){n=e.exports=t(1)(),n.push([e.i,"\n.switch {\n    width: 80px;\n    flex-direction: row;\n    align-items: center;\n    background-color: #c9c9c9;\n}\n.sz-small {\n    min-width: 80px;\n    height: 40px;\n    border-radius: 20px;\n}\n.sz-normal {\n    min-width: 120px;\n    height: 60px;\n    border-radius: 30px;\n}\n.sz-large{\n    min-width: 160px;\n    height: 80px;\n    border-radius: 40px;\n}\n.checked {\n    background-color: #fc6d3f;\n}\n.disabled {\n    background-color: #c9c9c9;\n}\n.icon {\n    background-color: #fff;\n    border-style: solid;\n    border-color: #c9c9c9;\n    transform: translateX(0);\n}\n.icon-checked {\n    border-color: #fc6d3f;\n}\n.icon-disabled {\n    border-color: #c9c9c9;\n}\n.isz-small {\n    width: 40px;\n    height: 40px;\n    border-width: 2px;\n    border-radius: 20px;\n}\n.isz-normal {\n    width: 60px;\n    height: 60px;\n    border-width: 4px;\n    border-radius: 30px;\n}\n.isz-large {\n    width: 80px;\n    height: 80px;\n    border-width: 6px;\n    border-radius: 3px;\n}\n.text {\n    color: #c9c9c9;\n    margin-left: 40px;\n}\n.text-disabled {\n    color: #e6ecf2;\n}\n",""])},44:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"switch",class:[e.checked?"checked":"",e.disabled?"disabled":"","sz-"+e.size],on:{click:e.change}},[t("div",{ref:"icon",staticClass:"icon",class:[e.checked?"icon-checked":"",e.disabled?"icon-disabled":"","isz-"+e.size]}),e._v(" "),e.$slots.default?t("text",{staticClass:"text",class:[e.disabled?"text-disabled":""]},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},48:function(e,n,t){var r=t(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(2)("de67c46e",r,!1)}});