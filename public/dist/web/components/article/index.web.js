// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=463)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:i,exports:o,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},10:function(e,t,n){"use strict";var r=n(13),i=n(12),o=n(5);e.exports={formats:o,parse:i,stringify:r}},100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{news:{default:function(){return{articleID:"",tit:"",intro:"",imgUrl:"",issue:"",comment:"",agree:"",time:""}}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},108:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.news-wrap {\n    flex-direction: row;\n    width: 690px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.news-content-wrap {\n    position: relative;\n}\n.news-content-wrap-hasImg {\n    width: 450px;\n    height: 140px;\n    align-content: space-between;\n}\n.news-content-wrap-noImg {\n    width: 690px;\n    height: 190px;\n    align-content: space-between;\n}\n.news-content-tit {\n    font-size: 32px;\n    line-height: 45px;\n    color: #000;\n    font-weight: bold;\n    lines: 2;\n}\n.news-content {\n    font-size: 26px;\n    color: #707070;\n    lines: 2;\n}\n.news-issue-wrap {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.news-issue-wrap-hasImg {\n    width: 450px;\n}\n.news-issue-wrap-noImg {\n    width: 690px;\n}\n.news-info-wrap {\n    flex-direction: row;\n}\n.news-submit-tit {\n    font-size: 24px;\n    color: #bbbbbb;\n}\n.fenge {\n    margin-left: 10px;\n    margin-right: 10px;\n    color: #bbbbbb;\n}\n.news-img-wrap {\n    width: 210px;\n    height: 140px;\n    margin-left: 30px;\n    overflow: hidden;\n}\n.news-img {\n    width: 210px;\n    height: 210px;\n}",""])},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},110:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.mesg-wrap {\n    width: 690px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.user {\n    font-size: 32px;\n    color: #555;\n}\n.content {\n    margin-top: 10px;\n    font-size: 32px;\n    color: #555;\n}",""])},114:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"news-wrap",on:{click:e.viewDetails}},[n("div",{staticClass:"news-content-wrap",class:[e.news.imgUrl.length>0?"news-content-wrap-hasImg":"news-content-wrap-noImg"]},[n("text",{staticClass:"news-content-tit"},[e._v(e._s(e.news.tit))]),e._v(" "),e.news.imgUrl.length<=0?n("text",{staticClass:"news-content"},[e._v(e._s(e.news.intro))]):e._e(),e._v(" "),n("div",{staticClass:"news-issue-wrap",class:[e.news.imgUrl.length>0?"news-issue-wrap-hasImg":"news-issue-wrap-noImg"]},[n("div",{staticClass:"news-info-wrap"},[n("text",{staticClass:"news-submit-tit"},[e._v(e._s(e.news.issue))]),e._v(" "),n("text",{staticClass:"fenge"},[e._v("·")]),e._v(" "),n("text",{staticClass:"news-submit-tit"},[e._v("评论"+e._s(e.news.comment))]),e._v(" "),n("text",{staticClass:"fenge"},[e._v("·")]),e._v(" "),n("text",{staticClass:"news-submit-tit"},[e._v("赞"+e._s(e.news.agree))])]),e._v(" "),n("text",{staticClass:"news-submit-tit"},[e._v(e._s(e.news.time))])])]),e._v(" "),n("div",{staticClass:"news-img-wrap"},[e.news.imgUrl.length>0?n("image",{staticClass:"news-img",attrs:{src:e.news.imgUrl}}):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},116:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mesg-wrap",on:{click:e.viewDetails}},[n("text",{staticClass:"user"},[e._v("@"+e._s(e.dynamic.userName)+":")]),e._v(" "),n("text",{staticClass:"content"},[e._v(e._s(e.dynamic.content))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},12:function(e,t,n){"use strict";var r=n(6),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var s,a,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(s=t.decoder(l),a=t.strictNullHandling?null:""):(s=t.decoder(l.slice(0,c)),a=t.decoder(l.slice(c+1))),i.call(n,s)?n[s]=[].concat(n[s]).concat(a):n[s]=a}return n},a=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(a(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(o,10);!isNaN(s)&&i!==o&&String(s)===o&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(r=[],r[s]=a(e,t,n)):r[o]=a(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var p=0;null!==(l=s.exec(r))&&p<n.depth;){if(p+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),a(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?s(e,n):e,a=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var p=c[u],f=l(p,i[p],n);a=r.merge(a,f,n)}return r.compact(a)}},120:function(e,t,n){var r=n(108);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("5ee7cc0e",r,!1)},122:function(e,t,n){var r=n(110);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("920fae1a",r,!1)},124:function(e,t,n){n(167);var r=n(0)(n(132),n(158),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},13:function(e,t,n){"use strict";var r=n(6),i=n(5),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,s,a,l,c,u,p,f,d){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=p(m);else if(null===m){if(o)return a&&!d?a(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(a){return[f(d?n:a(n))+"="+f(a(m))]}return[f(n)+"="+f(String(m))]}var h=[];if(void 0===m)return h;var v;if(Array.isArray(l))v=l;else{var w=Object.keys(m);v=c?w.sort(c):w}for(var y=0;y<v.length;++y){var g=v[y];s&&null===m[g]||(h=Array.isArray(m)?h.concat(e(m[g],i(n,g),i,o,s,a,l,c,u,p,f,d)):h.concat(e(m[g],n+(u?"."+g:"["+g+"]"),i,o,s,a,l,c,u,p,f,d)))}return h};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===r.delimiter?a.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:a.skipNulls,p="boolean"==typeof r.encode?r.encode:a.encode,f="function"==typeof r.encoder?r.encoder:a.encoder,d="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:a.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:a.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var w,y,g=i.formatters[r.format];"function"==typeof r.filter?(y=r.filter,n=y("",n)):Array.isArray(r.filter)&&(y=r.filter,w=y);var x=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=o[b];w||(w=Object.keys(n)),d&&w.sort(d);for(var _=0;_<w.length;++_){var O=w[_];u&&null===n[O]||(x=x.concat(l(n[O],O,j,c,u,p?f:null,y,d,m,h,g,v)))}return x.join(s)}},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),s=n(8),a=r(s);t.default={props:{userType:{default:"repost"},articleType:{default:"news"},news:{default:function(){return{articleID:"",tit:"",intro:"",imgUrl:"",issue:"",comment:"",agree:"",time:""}}},dynamic:{default:function(){return{userName:"",content:""}}}},methods:{viewNewsDetails:function(){a.default.push(o.default.repostPage)}},components:{nNews:n(94),nDynamic:n(93)}}},149:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-wrap {\n\twidth: 750px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.repost-wrap {\n\tbackground-color: #f8f8f8;\n}\n.fresh-wrap {\n\tbackground-color: #fff;\n}",""])},158:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-wrap",class:["repost"==e.userType?"repost-wrap":"fresh-wrap"]},["news"==e.articleType?n("n-news",{attrs:{news:e.news},on:{viewIt:e.viewNewsDetails}}):"dynamic"==e.articleType?n("n-dynamic",{attrs:{dynamic:e.dynamic},on:{viewIt:e.viewNewsDetails}}):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},167:function(e,t,n){var r=n(149);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f57cddf6",r,!1)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(v){var o=d++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=u[s.id];a.refs--,n.push(a)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},463:function(e,t,n){"use strict";var r=n(124);r.el="#root",new Vue(r)},5:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?o.push(t.compact(e[s],r)):void 0!==e[s]&&o.push(e[s]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=d.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(w.default.web,t)}function s(e,t){x.push({url:t?e+"?"+p.default.stringify(t):e,animated:"true"},function(e){g.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,g.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+p.default.stringify(t):""+i()+e+".js";g.default.log("push "+n),x.push({url:n,animated:"true"},function(e){g.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){g.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(10),p=r(u),f=n(11),d=r(f),m=n(7),h=r(m),v=n(4),w=r(v),y=n(9),g=r(y),x=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:i,pushWeb:o,pop:l}},9:function(e,t,n){"use strict";function r(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){f||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var s=r+"    ",a="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var p=o(e[c],t,n+1);p.indexOf("function"),a+=s,e.hasOwnProperty(c)||(a+="prototype.");var f=u(e[c]);a+=c,a+="["+f,a+="]",a+=" : ",a+=p,a+=" ,\n"}return a+=r+"}",l&&(a="{}"),a}function s(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,n,r){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){p._testbegin=(new Date).getTime(),p._testIsBegin=!0}function c(e){p._testEnd=(new Date).getTime(),a(!0===p._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+p._testEnd+" - "+p._testbegin+" : "+(p._testEnd-p._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=p||{},f=!1;t.default={log:r,dump:i,testBegin:l,testEnd:c}},93:function(e,t,n){n(122);var r=n(0)(n(99),n(116),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/dynamic/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},94:function(e,t,n){n(120);var r=n(0)(n(100),n(114),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/news/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{dynamic:{default:function(){return{userName:"",content:""}}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}}});