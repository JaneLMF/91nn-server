// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=223)}({0:function(e,t){e.exports=function(e,t,n,r){var i,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:s,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},160:function(e,t,n){n(286);var r=n(0)(n(179),n(269),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/hot-coin/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={mounted:function(){},props:{coins:{default:function(){return[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:"1800",usdPrice:"300"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:"1800",usdPrice:"300"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:"1800",usdPrice:"300"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:"1800",usdPrice:"300"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"}]}},bannerData:{default:function(){return[{id:"1",url:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"},{id:"2",url:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"},{id:"3",url:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}]}}},methods:{bannerItemClick:function(e){i.default.log("bannerItemClick "+e)},oncellclick:function(e){i.default.log("oncellclick "+e)}},components:{sliderNeighbor:n(52)}}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(s(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(g){var s=f++;r=p||(p=i()),t=o.bind(null,r,s,!1),n=o.bind(null,r,s,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=u(e,t);return r(i),function(t){for(var n=[],s=0;s<i.length;s++){var o=i[s],a=l[o.id];a.refs--,n.push(a)}t?(i=u(e,t),r(i)):i=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},223:function(e,t,n){"use strict";var r=n(160);r.el="#root",new Vue(r)},251:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root {\n\twidth: 750px;\n\theight: 1334px;\n}\n.border {\n\t/*border-width: 1px;*/\n}\n.item-line {\n\twidth: 750px;\n\theight: 150px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n.item {\n\theight: 148px;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.item-line-top {\n\tborder-width: 1px;\n\tborder-color: #ffffff;\n}\n.item-line-bottom {\n\tborder-width: 1px;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\t/*justify-content: center;*/\n\talign-items: center;\n\ttext-align: left;\n\theight: 60px;\n}\n.user-info-wrap {\n}\n.user-name {\n\tfont-size: 24px;\n\tcolor: #333333;\n}\n.user-issue {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.price-group{\n\tflex-direction: row;\n}\n.price {\n\talign-items: flex-end;\n\t/*justify-content: flex-end;*/\n}\n.price-calm {\n}\n.price-down {\n\tcolor: #ff5452;\n}\n.price-up {\n\tcolor: #21cd3d;\n}\n.increase {\n\tmargin-left: 10px;\n\twidth: 20px;\n\theight: 20px;\n}\n.star-box {\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tmargin-bottom: 10px;\n}\n.star-text {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tbackground-color: #f9b713;\n\tborder-radius: 10px;\n}\n.star {\n\tflex-direction: row;\n}\n\n/* for slider*/\n.slider{\n\twidth: 750px;\n\theight: 290px;\n}\n.slider-indicator {\n\twidth: 750px;\n\theight: 30px;\n\tposition: absolute;\n\tbottom:60px;\n\titem-color: rgba(51, 51, 51, 0.5);\n\titem-selected-color: #fff;\n\titem-size: 15px;\n}\n.img {\n\twidth: 520px;\n\theight: 210px;\n\tborder-radius: 10px;\n}\n.list-head {\n\twidth: 750px;\n\theight: 64px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: #f7f7f7;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.list-head-item {\n\tfont-size: 24px;\n\tcolor: #959595;\n}",""])},269:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list",{staticClass:"root"},[n("cell",[n("slider-neighbor",{staticClass:"slider",attrs:{"neighbor-scale":"1.0","neighbor-space":"40","current-item-scale":"1.0",interval:"3000","neighbor-alpha":"0.8","auto-play":"true"}},[e._l(e.bannerData,function(t){return n("image",{staticClass:"img",attrs:{src:t.url},on:{click:function(n){e.bannerItemClick(t.id)}}})}),e._v(" "),n("indicator",{staticClass:"slider-indicator"})],2)],1),e._v(" "),n("cell",[n("div",{staticClass:"list-head"},e._l(["名称","最新价格"],function(t){return n("text",{staticClass:"list-head-item"},[e._v(e._s(t))])}))]),e._v(" "),e._l(e.coins,function(t){return n("cell",{on:{click:function(n){e.oncellclick(t.id)}}},[n("div",{staticClass:"item-line"},[n("div",{staticClass:"item-line-top"}),e._v(" "),n("div",{staticClass:"item border"},[n("div",{staticClass:"user-info-wrap"},[n("text",{staticClass:"user-name"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"price-group"},[n("text",{staticClass:"user-issue"},[e._v(e._s(t.storeName))]),e._v(" "),0==t.increase?n("text",{staticClass:"price-calm"},[e._v("  "+e._s(t.increase)+"%")]):e._e(),e._v(" "),t.increase>0?n("text",{staticClass:"price-up"},[e._v("  +"+e._s(t.increase)+"%")]):e._e(),e._v(" "),t.increase<0?n("text",{staticClass:"price-down"},[e._v("  "+e._s(t.increase)+"%")]):e._e()])]),e._v(" "),n("div",{staticClass:"price-group"},[n("div",{staticClass:"price border"},[n("text",{staticClass:"border"},[e._v("￥ "+e._s(t.cnyPrice))]),e._v(" "),n("text",{staticClass:"border"},[e._v("$ "+e._s(t.usdPrice))])]),e._v(" "),t.increase>0?n("image",{staticClass:"increase",attrs:{src:"/src/view/home/images/badge-boss.png"}}):e._e(),e._v(" "),t.increase<0?n("image",{staticClass:"increase",attrs:{src:"/src/view/home/images/badge-boss.png"}}):e._e(),e._v(" "),0==t.increase?n("text",{staticClass:"increase"}):e._e()])]),e._v(" "),n("div",{staticClass:"item-line-bottom"})])])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},286:function(e,t,n){var r=n(251);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("a3ac5aaa",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=s[0],a=s[1],c=s[2],u=s[3],l={id:e+":"+i,css:a,media:c,sourceMap:u};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},52:function(e,t,n){n(90);var r=n(0)(n(61),n(81),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-page.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] slider-neighbor-page.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},61:function(e,t,n){"use strict";e.exports={data:{items:[],sliderItems:[]},methods:{ready:function(){this.sliderItems=this.getSliderItems()},getSliderItems:function(){return this.items.map(function(e,t){return e}.bind(this))}}}},72:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.slider-page {\n  width: 720px;\n  height: 420px;\n}\n",""])},8:function(e,t,n){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){p||r("["+e+"]  "+s(t))}function s(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":l(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var o=r+"    ",a="{\n",c=!0;for(var u in e)if(0===i&&i++,e.hasOwnProperty(u)){c=!1;var d=s(e[u],t,n+1);d.indexOf("function"),a+=o,e.hasOwnProperty(u)||(a+="prototype.");var p=l(e[u]);a+=u,a+="["+p,a+="]",a+=" : ",a+=d,a+=" ,\n"}return a+=r+"}",c&&(a="{}"),a}function o(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,n,r){if(null===e||void 0===e||!1===e){if(o("assert","\n------------err msg------------\n"+s({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function u(e){d._testEnd=(new Date).getTime(),a(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},p=!1;t.default={log:r,dump:i,testBegin:c,testEnd:u}},81:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-page"},[n("slider-neighbor-item",{attrs:{repeat:e.sliderItems}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},90:function(e,t,n){var r=n(72);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("33cf8524",r,!1)}});