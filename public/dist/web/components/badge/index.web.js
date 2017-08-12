// { "framework": "Vue"} 

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=452)}({0:function(n,e){n.exports=function(n,e,t,r){var o,i=n=n||{},s=typeof n.default;"object"!==s&&"function"!==s||(o=n,i=n.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),t&&(a._scopeId=t),r){var p=a.computed||(a.computed={});Object.keys(r).forEach(function(n){var e=r[n];p[n]=function(){return e}})}return{esModule:o,exports:i,options:a}}},1:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},2:function(n,e,t){function r(n){for(var e=0;e<n.length;e++){var t=n[e],r=u[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(i(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var s=[],o=0;o<t.parts.length;o++)s.push(i(t.parts[o]));u[t.id]={id:t.id,refs:1,parts:s}}}}function o(){var n=document.createElement("style");return n.type="text/css",d.appendChild(n),n}function i(n){var e,t,r=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(x){var i=f++;r=l||(l=o()),e=s.bind(null,r,i,!1),t=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),t=function(){r.parentNode.removeChild(r)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else t()}}function s(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function a(n,e){var t=e.css,r=e.media,o=e.sourceMap;if(r&&n.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!p)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(3),u={},d=p&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,h=!1,g=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,e,t){h=t;var o=c(n,e);return r(o),function(e){for(var t=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,t.push(a)}e?(o=c(n,e),r(o)):o=[];for(var i=0;i<t.length;i++){var a=t[i];if(0===a.refs){for(var p=0;p<a.parts.length;p++)a.parts[p]();delete u[a.id]}}}};var m=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},3:function(n,e){n.exports=function(n,e){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],p=i[2],c=i[3],u={id:n+":"+o,css:a,media:p,sourceMap:c};r[s]?r[s].parts.push(u):t.push(r[s]={id:s,parts:[u]})}return t}},45:function(n,e,t){t(53);var r=t(0)(t(46),t(51),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",r.esModule&&Object.keys(r.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),n.exports=r.exports},452:function(n,e,t){"use strict";var r=t(45);r.el="#root",new Vue(r)},46:function(n,e,t){"use strict";n.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},49:function(n,e,t){e=n.exports=t(1)(),e.push([n.i,"\n.badge-wrap {\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 0;\n}\n.badgeIcon-wrap-m {\n    position: relative;\n    width: 90px;\n    height: 90px;\n}\n.badgeImg-wrap-m {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-m {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}\n.superScript-hot {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: inline-block;\n    width: 40px;\n    height: 20px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #ff6a3c;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 20px;\n    border-width: 1px;\n    border-color: #fff;\n}\n.badgeTit-wrap-m {\n    font-size: 24px;\n    color: #333;\n    font-weight: 200;\n    margin-top: 18px;\n}\n\n/*---------------------------------------------*/\n.badgeIcon-wrap-s {\n    position: relative;\n    width: 60px;\n    height: 60px;\n}\n.badgeImg-wrap-s {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n}\n.icon-wrap-s {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.superScript-mesg {\n    position: absolute;\n    top: 0;\n    right: 2px;\n    display: block;\n    width: 34px;\n    height: 22px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #fff;\n    color: #ff6a3c;\n    font-size: 18px;\n    border-radius: 16px;\n    border-width: 2px;\n    border-color: #ff6a3c;\n}\n\n/*-------------------------------------*/\n.badgeIcon-wrap-xm {\n    width: 100px;\n    height: 100px;\n}\n.badgeImg-wrap-xm {\n    width: 100px;\n    height: 100px;\n}\n.icon-wrap-xm {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n    background-color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n.badgeTit-wrap-xm {\n    font-size: 24px;\n    color: #434343;\n    font-weight: 200;\n    margin-top: 20px;\n}\n\n/*-------------------------------------*/\n.badgeIcon-wrap-l {\n    width: 120px;\n    height: 120px;\n}\n.badgeImg-wrap-l {\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-l {\n    width: 120px;\n    height: 120px;\n    border-radius: 100%;\n    background-color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n.badgeTit-wrap-l {\n    font-size: 36px;\n    color: #434343;\n    font-weight: 200;\n    margin-top: 20px;\n}\n",""])},51:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"badge-wrap",on:{click:n.clickIcon}},[t("div",{class:["badgeIcon-wrap-"+n.iconStyle.size]},[t("div",{class:["icon-wrap-"+n.iconStyle.size]},[t("image",{class:["badgeImg-wrap-"+n.iconStyle.size],attrs:{src:n.iconStyle.url}})]),n._v(" "),n.superScriptState.hasSuperScript?t("text",{class:["1"==n.superScriptState.state?"superScript-hot":"superScript-mesg"]},[n._v(n._s(n.superScriptState.content))]):n._e()]),n._v(" "),n.iconName.hasName?t("text",{class:["badgeTit-wrap-"+n.iconStyle.size]},[n._v(n._s(n.iconName.name))]):n._e()])},staticRenderFns:[]},n.exports.render._withStripped=!0},53:function(n,e,t){var r=t(49);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(2)("ab7d544e",r,!1)}});