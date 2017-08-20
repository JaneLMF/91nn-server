// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=586)}({0:function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(m)return v;r.parentNode.removeChild(r)}if(g){var o=f++;r=d||(d=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},p=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,m=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var i=l(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=u[s.id];a.refs--,n.push(a)}e?(i=l(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},277:function(t,e,n){n(339);var r=n(0)(n(297),n(319),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/image-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] image-cell.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},297:function(t,e,n){"use strict"},299:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.border {\n\tborder-width: 1;\n}\n.image{\n\tmargin-right:10px;\n\theight: 320px;\n\twidth: 214px;\n\tbackground-color: #AFDDFF;\n}\n",""])},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],c=o[2],l=o[3],u={id:t+":"+i,css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},319:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"background-color":"#FFFFFF","border-width":"1px",padding:"40px"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"space-between"}},[n("div",{staticClass:"border",staticStyle:{"flex-direction":"row","justify-content":"center","align-items":"center",height:"121px"}},[n("div",{staticStyle:{"background-color":"#AFDDFF","border-radius":"60px",height:"60px",width:"60px"}}),t._v(" "),n("div",{staticStyle:{"margin-left":"20px"}},[n("text",[t._v("比特xxx")]),t._v(" "),n("text",[t._v("From: ni niu")])])]),t._v(" "),n("div",{staticClass:"border",staticStyle:{"justify-content":"center","align-items":"center",height:"121px"}},[n("text",[t._v("2017-07-15 18:09:35")])])]),t._v(" "),n("div",{staticStyle:{"margin-top":"30px"}},[n("text",[t._v("image ----- ex-start：是默认值，所有的 flex 成员项都排列在容器的前部；flex-end：则意味着成员项排列在容器的后部；center：即中间对齐，成员项排列在容器中间、两边留白； space-between：表示两端对齐，空白均匀地填充到 f")])]),t._v(" "),n("div",{staticStyle:{"flex-direction":"row","justify-content":"flex-start","margin-top":"10px"}},t._l([1,2,3],function(t){return n("image",{staticClass:"image",attrs:{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1520201660,3722836383&fm=80&w=179&h=119&img.JPEG"}})})),t._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},t._l([1,2,3],function(e){return n("div",{staticClass:"border",staticStyle:{flex:"1","margin-top":"30px"}},[n("div",{staticStyle:{"flex-direction":"row",height:"100px","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{width:"50px",height:"50px","background-color":"#0088FB","margin-right":"5px"}}),t._v(" "),n("text",[t._v("5")])])])}))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},339:function(t,e,n){var r=n(299);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("05e5e375",r,!1)},380:function(t,e,n){n(819);var r=n(0)(n(448),n(758),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/warp-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] warp-cell.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},448:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:0}},data:function(){return{article:{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg","https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"}}},components:{textCell:n(86),imageCell:n(277)}}},586:function(t,e,n){"use strict";var r=n(380);r.el="#root",new Vue(r)},691:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},758:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0==t.type?n("text-cell",{attrs:{article:t.article}}):t._e(),t._v(" "),1==t.type?n("image-cell"):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},819:function(t,e,n){var r=n(691);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("6a474756",r,!1)},86:function(t,e,n){n(95);var r=n(0)(n(89),n(93),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/text-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] text-cell.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{article:{default:function(){return{headerUrl:"",userName:"",userIsuue:"",articleTime:"",articleContent:"",articleImg:[],comment:"",forward:"",agree:""}}}},data:function(){return{}}}},90:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.article-box {\n\tbackground-color: #fff;\n\tmargin-bottom: 10px;\n}\n.article-content-wrap {\n\tbackground-color: #fff;\n\tpadding-left: 40px;\n\tpadding-right: 40px;\n}\n.user-wrap {\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tmargin-top: 30px;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 60px;\n}\n.article-time-wrap {\n\tjustify-content: flex-end;\n\talign-items: center;\n\theight: 60px;\n}\n.article-time {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.article-wrap {\n\tmargin-top: 30px;\n\tmargin-bottom: 25px;\n\tjustify-content: space-around;\n\ttext-align: justify;\n}\n.article-content {\n\tfont-weight: 200;\n\tfont-size: 28px;\n\tcolor: #333333;\n\tjustify-content: space-around;\n}\n.article-img-wrap {\n\tmargin-bottom: 25px;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.article-img-group {\n}\n.article-img-item {\n\twidth: 210px;\n\theight: 118px;\n\tborder-radius: 4px;\n}\n.user-info-wrap {\n\tmargin-left: 20px;\n}\n.user-name {\n\tfont-size: 24px;\n\tcolor: #333333;\n}\n.user-issue {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.user-header {\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n}\n.button-group {\n\tflex-direction: row;\n\tborder-top-width: 2px;\n\tborder-color: #e5e5e5;\n\twidth: 750px;\n}\n.button-item {\n\tflex-direction: row;\n\tflex:1;\n\theight: 73px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.button-icon {\n\twidth: 32px;\n\theight: 32px;\n\tmargin-right: 14px;\n}\n.button-content {\n\tfont-size: 24px;\n\tcolor: #bbbbbb;\n}\n",""])},93:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-box"},[n("div",{staticClass:"article-content-wrap"},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-header-wrap"},[n("image",{staticClass:"user-header",attrs:{src:t.article.headerUrl}}),t._v(" "),n("div",{staticClass:"user-info-wrap"},[n("text",{staticClass:"user-name"},[t._v(t._s(t.article.userName))]),t._v(" "),n("text",{staticClass:"user-issue"},[t._v("来自: "+t._s(t.article.userIsuue))])])]),t._v(" "),n("div",{staticClass:"article-time-wrap"},[n("text",{staticClass:"article-time"},[t._v(t._s(t.article.articleTime))])])]),t._v(" "),n("div",{staticClass:"article-wrap"},[n("text",{staticClass:"article-content"},[t._v(t._s(t.article.articleContent))])]),t._v(" "),t.article.articleImg.length>0?n("div",{staticClass:"article-img-wrap"},t._l(t.article.articleImg,function(t,e){return n("div",{key:e,staticClass:"article-img-group"},[n("image",{staticClass:"article-img-item",attrs:{src:t}})])})):t._e()]),t._v(" "),n("div",{staticClass:"button-group"},[n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/zhuanfa.png"}}),t._v(" "),n("text",{staticClass:"button-content"},[t._v(t._s(t.article.forward))])]),t._v(" "),n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/pinglun.png"}}),t._v(" "),n("text",{staticClass:"button-content"},[t._v(t._s(t.article.comment))])]),t._v(" "),n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/zan.png"}}),t._v(" "),n("text",{staticClass:"button-content"},[t._v(t._s(t.article.agree))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},95:function(t,e,n){var r=n(90);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("336083f6",r,!1)}});