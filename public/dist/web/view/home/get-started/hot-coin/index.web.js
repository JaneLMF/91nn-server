// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=588)}({0:function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var c=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}})}return{esModule:r,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var i=n(13),r=n(12),o=n(5);e.exports={formats:o,parse:r,stringify:i}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},12:function(e,t,n){"use strict";var i=n(6),r=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<i.length;++o){var a,s,c=i[o],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),r.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var i,r=e.shift();if("[]"===r)i=[],i=i.concat(s(e,t,n));else{i=n.plainObjects?Object.create(null):{};var o="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,a=parseInt(o,10);!isNaN(a)&&r!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(i=[],i[a]=s(e,t,n)):i[o]=s(e,t,n)}return i},c=function(e,t,n){if(e){var i=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=o.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!n.plainObjects&&r.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}for(var d=0;null!==(c=a.exec(i))&&d<n.depth;){if(d+=1,!n.plainObjects&&r.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||i.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var r="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},l=Object.keys(r),u=0;u<l.length;++u){var d=l[u],p=c(d,r[d],n);s=i.merge(s,p,n)}return i.compact(s)}},13:function(e,t,n){"use strict";var i=n(6),r=n(5),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,n,r,o,a,s,c,l,u,d,p,f){var m=t;if("function"==typeof c)m=c(n,m);else if(m instanceof Date)m=d(m);else if(null===m){if(o)return s&&!f?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(s){return[p(f?n:s(n))+"="+p(s(m))]}return[p(n)+"="+p(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(c))g=c;else{var y=Object.keys(m);g=l?y.sort(l):y}for(var v=0;v<g.length;++v){var x=g[v];a&&null===m[x]||(h=Array.isArray(m)?h.concat(e(m[x],r(n,x),r,o,a,s,c,l,u,d,p,f)):h.concat(e(m[x],n+(u?"."+x:"["+x+"]"),r,o,a,s,c,l,u,d,p,f)))}return h};e.exports=function(e,t){var n=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?s.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,d="boolean"==typeof i.encode?i.encode:s.encode,p="function"==typeof i.encoder?i.encoder:s.encoder,f="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,g="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,x=r.formatters[i.format];"function"==typeof i.filter?(v=i.filter,n=v("",n)):Array.isArray(i.filter)&&(v=i.filter,y=v);var b=[];if("object"!=typeof n||null===n)return"";var w;w=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=o[w];y||(y=Object.keys(n)),f&&y.sort(f);for(var P=0;P<y.length;++P){var _=y[P];u&&null===n[_]||(b=b.concat(c(n[_],_,j,l,u,d?p:null,v,f,m,h,x,g)))}return b.join(a)}},199:function(e,t,n){n(257);var i=n(0)(n(213),n(243),null,null);i.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-page.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] slider-neighbor-page.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},2:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(m)return h;i.parentNode.removeChild(i)}if(g){var o=f++;i=p||(p=r()),t=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function a(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var r=l(e,t);return i(r),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=u[a.id];s.refs--,n.push(s)}t?(r=l(e,t),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},201:function(e,t,n){n(244);var i=n(0)(n(215),n(230),null,null);i.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/market/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},213:function(e,t,n){"use strict";e.exports={data:{items:[],sliderItems:[]},methods:{ready:function(){this.sliderItems=this.getSliderItems()},getSliderItems:function(){return this.items.map(function(e,t){return e}.bind(this))}}}},215:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=i(r),a=n(7),s=i(a);t.default={props:{coins:{default:function(){return[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800.62",usdPrice:"300"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:1800.333,usdPrice:"300"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:1800.1234,usdPrice:"300"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:1800.12,usdPrice:"300"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:1800.12,usdPrice:"300"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.39,usdPrice:"300"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.12,usdPrice:"300"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.34,usdPrice:"300"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.12,usdPrice:"300"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.1398,usdPrice:"300"}]}}},methods:{oncellclick:function(e){s.default.push(o.default.coinDetails,{id:e})}}}},216:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root {\n\twidth: 750px;\n\tflex: 1;\n}\n.border {\n\t/*border-width: 1px;*/\n}\n.item-line {\n\t/*width: 750px;*/\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n.item {\n\theight: 148px;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.item-line-top {\n\tborder-width: 1px;\n\tborder-color: #ffffff;\n}\n.item-line-bottom {\n\tborder-width: 1px;\n\tborder-color: #f8f8f8;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\t/*justify-content: center;*/\n\talign-items: center;\n\ttext-align: left;\n\theight: 60px;\n}\n.user-info-wrap {\n}\n.user-name {\n\tfont-size: 34px;\n\tcolor: #434343;\n}\n.user-issue {\n\tmargin-top: 10px;\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.div-increase {\n\twidth: 140px;\n\theight: 65px;\n\tborder-radius: 10px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.bg-price-down {\n\tbackground-color: #ff5452;\n}\n.bg-price-up {\n\tbackground-color: #21cd3d;\n}\n.price {\n\twidth: 250px;\n\talign-items: flex-end;\n\t/*justify-content: flex-end;*/\n}\n.price-usd {\n\tmargin-top: 3px;\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.price-calm {\n\tcolor: white;\n\tfont-size: 32px;\n}\n.increase {\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n\twidth: 18px;\n\theight: 18px;\n}\n.star-box {\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tmargin-bottom: 10px;\n}\n.star-text {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tbackground-color: #f9b713;\n\tborder-radius: 10px;\n}\n.star {\n\tflex-direction: row;\n}\n\n/* for slider*/\n.slider{\n\twidth: 750px;\n\theight: 290px;\n}\n.slider-indicator {\n\twidth: 750px;\n\theight: 30px;\n\tposition: absolute;\n\tbottom:60px;\n\titem-color: rgba(51, 51, 51, 0.5);\n\titem-selected-color: #fff;\n\titem-size: 15px;\n}\n.img {\n\twidth: 520px;\n\theight: 210px;\n\tborder-radius: 10px;\n}\n.list-head {\n\twidth: 750px;\n\theight: 64px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: #f7f7f7;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.list-head-item {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.list-head-item-price {\n\twidth: 250px;\n\ttext-align: right;\n}",""])},229:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.slider-page {\n  width: 720px;\n  height: 420px;\n}\n",""])},230:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{staticClass:"list-head"},[n("text",{staticClass:"list-head-item"},[e._v("名称")]),e._v(" "),n("text",{staticClass:"list-head-item list-head-item-price"},[e._v("最新价格")]),e._v(" "),n("text",{staticClass:"list-head-item"},[e._v("涨跌幅")])]),e._v(" "),n("list",{staticClass:"border"},e._l(e.coins,function(t){return n("cell",{on:{click:function(n){e.oncellclick(t.id)}}},[n("div",{staticClass:"item-line"},[n("div",{staticClass:"item-line-top"}),e._v(" "),n("div",{staticClass:"item border"},[n("div",{staticClass:"user-info-wrap"},[n("text",{staticClass:"user-name"},[e._v(e._s(t.name))]),e._v(" "),n("text",{staticClass:"user-issue"},[e._v(e._s(t.storeName))])]),e._v(" "),n("div",{staticClass:"price"},[n("text",{staticClass:"user-name"},[e._v("￥ "+e._s(t.cnyPrice))]),e._v(" "),n("text",{staticClass:"price-usd"},[e._v("$ "+e._s(t.usdPrice))])]),e._v(" "),n("div",{staticClass:"div-increase",class:[t.increase>0?"bg-price-up":"bg-price-down"]},[0==t.increase?n("text",{staticClass:"price-calm"},[e._v(e._s(t.increase)+"%")]):e._e(),e._v(" "),t.increase>0?n("text",{staticClass:"price-calm"},[e._v("+"+e._s(t.increase)+"%")]):e._e(),e._v(" "),t.increase<0?n("text",{staticClass:"price-calm"},[e._v(e._s(t.increase)+"%")]):e._e()])]),e._v(" "),n("div",{staticClass:"item-line-bottom"})])])}))],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},243:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-page"},[n("slider-neighbor-item",{attrs:{repeat:e.sliderItems}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},244:function(e,t,n){var i=n(216);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("2ba9a998",i,!1)},257:function(e,t,n){var i=n(229);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("33cf8524",i,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=o[0],s=o[1],c=o[2],l=o[3],u={id:e+":"+r,css:s,media:c,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},382:function(e,t,n){n(812);var i=n(0)(n(450),n(748),null,null);i.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/hot-coin/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},450:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=i(r),a=n(4),s=(i(a),n(7));i(s);t.default={beforeCreate:function(){o.default.log(this.name+" beforeCreate")},created:function(){o.default.log(this.name+" created")},beforeMount:function(){o.default.log(this.name+" beforeMount")},mounted:function(){o.default.log(this.name+" mounted")},beforeDestroy:function(){o.default.log(this.name+" beforeDestory")},destroyed:function(){o.default.log(this.name+" destroyed")},data:function(){return{name:"hot-coin",coins:[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:"1800",usdPrice:"300"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:"1800",usdPrice:"300"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:"1800",usdPrice:"300"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:"1800",usdPrice:"300"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"}],bannerData:[{id:"1",url:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"},{id:"2",url:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"},{id:"3",url:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}]}},methods:{bannerItemClick:function(e){o.default.log("bannerItemClick "+e)}},components:{sliderNeighbor:n(199),nMarket:n(201)}}},5:function(e,t,n){"use strict";var i=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},588:function(e,t,n){"use strict";var i=n(382);i.el="#root",new Vue(i)},6:function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(n[i]=e[i]);return n},t.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(r.plainObjects||r.allowPrototypes||!i.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){i.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,r):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,i){var o=n[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],o,r):e[i]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",i=0;i<t.length;++i){var o=t.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(i):o<128?n+=r[o]:o<2048?n+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?n+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),n+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var i=n||[],r=i.indexOf(e);if(-1!==r)return i[r];if(i.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],i)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},684:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root {\n\twidth: 750px;\n\tflex: 1;\n}\n.border {\n\tborder-width: 1px;\n}\n.item-line {\n\twidth: 750px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n.item {\n\theight: 148px;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.item-line-top {\n\tborder-width: 1px;\n\tborder-color: #ffffff;\n}\n.item-line-bottom {\n\tborder-width: 1px;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\t/*justify-content: center;*/\n\talign-items: center;\n\ttext-align: left;\n\theight: 60px;\n}\n.user-info-wrap {\n}\n.user-name {\n\tfont-size: 32px;\n\tcolor: #434343;\n}\n.user-issue {\n\tfont-size: 20px;\n\tcolor: #959595;\n}\n.price-group{\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-start;\n}\n.price {\n\talign-items: flex-end;\n\t/*justify-content: flex-end;*/\n}\n.price-calm {\n\tfont-size: 20px;\n}\n.price-down {\n\tcolor: #ff5452;\n}\n.price-up {\n\tcolor: #21cd3d;\n}\n.increase {\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n\twidth: 18px;\n\theight: 18px;\n}\n.star-box {\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tmargin-bottom: 10px;\n}\n.star-text {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tbackground-color: #f9b713;\n\tborder-radius: 10px;\n}\n.star {\n\tflex-direction: row;\n}\n\n/* for slider*/\n.slider{\n\twidth: 750px;\n\theight: 290px;\n}\n.slider-indicator {\n\twidth: 750px;\n\theight: 30px;\n\tposition: absolute;\n\tbottom:60px;\n\titem-color: rgba(51, 51, 51, 0.5);\n\titem-selected-color: #fff;\n\titem-size: 15px;\n}\n.img {\n\twidth: 520px;\n\theight: 210px;\n\tborder-radius: 10px;\n}\n.list-head {\n\twidth: 750px;\n\theight: 64px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: #f7f7f7;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.list-head-item {\n\tfont-size: 24px;\n\tcolor: #959595;\n}",""])},7:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(n)i=e.substring(0,e.lastIndexOf("native/")+5);else{var r=f.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(r=o[1]),i="http://"+r+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":i}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){b.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){x.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,x.default.log("getBaseUrl",r());var n=t?""+r()+e.jsPath+".js?"+d.default.stringify(t):""+r()+e+".js";x.default.log("push "+n),b.push({url:n,animated:"true"},function(e){x.default.log("callback: ",e)})}function c(){b.pop({animated:"true"},function(e){x.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(10),d=i(u),p=n(11),f=i(p),m=n(8),h=i(m),g=n(4),y=i(g),v=n(9),x=i(v),b=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:r,pushWeb:o,pop:c}},748:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("slider-neighbor",{staticClass:"slider",attrs:{"neighbor-scale":"1.0","neighbor-space":"40","current-item-scale":"1.0",interval:"3000","neighbor-alpha":"0.8","auto-play":"true"}},[e._l(e.bannerData,function(t){return n("image",{staticClass:"img",attrs:{src:t.url},on:{click:function(n){e.bannerItemClick(t.id)}}})}),e._v(" "),n("indicator",{staticClass:"slider-indicator"})],2),e._v(" "),n("n-market",{attrs:{coins:e.coins}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:r,getDeviceInfo:o}},812:function(e,t,n){var i=n(684);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("a3ac5aaa",i,!1)},9:function(e,t,n){"use strict";function i(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function r(e,t){p||i("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var i="",r=0;r<n;r++)i+="    ";var a=i+"    ",s="{\n",c=!0;for(var l in e)if(0===r&&r++,e.hasOwnProperty(l)){c=!1;var d=o(e[l],t,n+1);d.indexOf("function"),s+=a,e.hasOwnProperty(l)||(s+="prototype.");var p=u(e[l]);s+=l,s+="["+p,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=i+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function s(e,t,n,i){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:i})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function l(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},p=!1;t.default={log:i,dump:r,testBegin:c,testEnd:l}}});