// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=502)}({0:function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=f++;r=d||(d=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),l={},p=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],u=o[2],c=o[3],l={id:t+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},322:function(t,e,n){n(706);var r=n(0)(n(386),n(644),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/test/rich-demo.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] rich-demo.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},386:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=weex.requireModule("storage"),i=weex.requireModule("navigator");e.default={methods:{writeNoTitle:function(){var t={title:"",html:""};r.setItem("richEditorContent",JSON.stringify(t),function(){i.push({url:"http://192.168.2.22:8080/dist/native/test/rich-editor.js"},function(){})})},editNoTitle:function(){var t="<p>赋予一个村庄动感的，是风。</p>";t+="<p>描绘乡村的景物画，草木绝不可少。草木又极少静立的样子，树柳披风，风吹草斜，画面便有了动感，有了活力。</p>",t+="<p>不光是在图画中，在真实的乡村里，目光所及，无不是风的踪影。</p>",t+="<p>鸡鸭低头啄食，翅膀上有一两根羽毛被风吹动翻卷，那是穿堂而过的风。屋檐下的蜘蛛网也颤动起来，如果不是露珠，就算有风吹过也难让人发现。一只全身红亮羽毛的公鸡抖动着大红冠子从院子外面大踏脚步而来，裹挟了一阵风。鸭子们嘎嘎叫着撤了几步，伸长脖子仍贪恋着吃食，母鸡们倒是噶噶噶地跑开了几只，却是一只母鸡咕咕咕地低了头，脯子贴了地，短短的尾巴翘起，那只公鸡高踏着脚，翅膀扑扇，扬起地上的仆仆风尘。 </p>",t+="<p>依着院墙搭起的架子上，葡萄和丝瓜的叶子被一阵风吹得晃动，鸡鸭再次聚拢，杨树的叶子一阵哗哗的响起。风走得高了，空中的鸟雀迎风飞起，像一下一下地攒着劲儿，一蹿一蹿，隐进树枝摇动的巢里。</p>",t+="<p>这农家小院的风景，透着宁静，祥和，自然。风里传递着安稳，质朴和踏实。</p>",t+="<img src='http://upload-images.jianshu.io/upload_images/1465367-62181998442aaa83.gif?imageMogr2/auto-orient/strip'/><br/>";var e={title:"title",html:t};r.setItem("richEditorContent",JSON.stringify(e),function(){i.push({url:"http://192.168.2.22:8080/dist/native/test/rich-editor.js"},function(){})})},writeHasTitle:function(){var t={title:"",html:"",showTitle:!0};r.setItem("richEditorContent",JSON.stringify(t),function(){i.push({url:"http://192.168.2.22:8080/dist/native/test/rich-editor.js"},function(){})})},editHasTitle:function(){var t="<p>赋予一个村庄动感的，是风。</p>";t+="<p>描绘乡村的景物画，草木绝不可少。草木又极少静立的样子，树柳披风，风吹草斜，画面便有了动感，有了活力。</p>",t+="<p>不光是在图画中，在真实的乡村里，目光所及，无不是风的踪影。</p>",t+="<p>鸡鸭低头啄食，翅膀上有一两根羽毛被风吹动翻卷，那是穿堂而过的风。屋檐下的蜘蛛网也颤动起来，如果不是露珠，就算有风吹过也难让人发现。一只全身红亮羽毛的公鸡抖动着大红冠子从院子外面大踏脚步而来，裹挟了一阵风。鸭子们嘎嘎叫着撤了几步，伸长脖子仍贪恋着吃食，母鸡们倒是噶噶噶地跑开了几只，却是一只母鸡咕咕咕地低了头，脯子贴了地，短短的尾巴翘起，那只公鸡高踏着脚，翅膀扑扇，扬起地上的仆仆风尘。 </p>",t+="<p>依着院墙搭起的架子上，葡萄和丝瓜的叶子被一阵风吹得晃动，鸡鸭再次聚拢，杨树的叶子一阵哗哗的响起。风走得高了，空中的鸟雀迎风飞起，像一下一下地攒着劲儿，一蹿一蹿，隐进树枝摇动的巢里。</p>",t+="<p>这农家小院的风景，透着宁静，祥和，自然。风里传递着安稳，质朴和踏实。</p>",t+="<img src='http://upload-images.jianshu.io/upload_images/1465367-62181998442aaa83.gif?imageMogr2/auto-orient/strip'/><br/>";var e={title:"平凡",html:t,showTitle:!0};r.setItem("richEditorContent",JSON.stringify(e),function(){i.push({url:"http://192.168.2.22:8080/dist/native/test/rich-editor.js"},function(){})})},viewappear:function(){r.getItem("richEditorContent",function(t){if(t.data){var e=JSON.parse(t.data);e.isEdited&&console.log("编辑内容为:"+JSON.stringify(e))}})}}}},502:function(t,e,n){"use strict";var r=n(322);r.el="#root",new Vue(r)},586:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.btn {\n    margin-top: 10px;\n    height:100px;\n    justify-content:center;\n    align-items:center;\n    background-color: #888888;\n}\n.btn-text {\n    color: #ffffff;\n}\n",""])},644:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{viewappear:t.viewappear}},[n("div",{staticClass:"btn",on:{click:t.writeNoTitle}},[n("text",{staticClass:"btn-text"},[t._v("writeNoTitle")])]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.editNoTitle}},[n("text",{staticClass:"btn-text"},[t._v("editNoTitle")])]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.writeHasTitle}},[n("text",{staticClass:"btn-text"},[t._v("writeHasTitle")])]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.editHasTitle}},[n("text",{staticClass:"btn-text"},[t._v("editHasTitle")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},706:function(t,e,n){var r=n(586);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("c6a5f22c",r,!1)}});