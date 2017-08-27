// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=545)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:i,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var r=n(12),i=n(11),o=n(5);e.exports={formats:o,parse:i,stringify:r}},11:function(e,t,n){"use strict";var r=n(6),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),i.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[o]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var f=c[u],p=l(f,i[f],n);s=r.merge(s,p,n)}return r.compact(s)}},12:function(e,t,n){"use strict";var r=n(6),i=n(5),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,a,s,l,c,u,f,p,d){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(o)return s&&!d?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[p(d?n:s(n))+"="+p(s(h))]}return[p(n)+"="+p(String(h))]}var v=[];if(void 0===h)return v;var m;if(Array.isArray(l))m=l;else{var y=Object.keys(h);m=c?y.sort(c):y}for(var g=0;g<m.length;++g){var w=m[g];a&&null===h[w]||(v=Array.isArray(h)?v.concat(e(h[w],i(n,w),i,o,a,s,l,c,u,f,p,d)):v.concat(e(h[w],n+(u?"."+w:"["+w+"]"),i,o,a,s,l,c,u,f,p,d)))}return v};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,p="function"==typeof r.encoder?r.encoder:s.encoder,d="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,v="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,m="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,g,w=i.formatters[r.format];"function"==typeof r.filter?(g=r.filter,n=g("",n)):Array.isArray(r.filter)&&(g=r.filter,y=g);var x=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=o[b];y||(y=Object.keys(n)),d&&y.sort(d);for(var P=0;P<y.length;++P){var _=y[P];u&&null===n[_]||(x=x.concat(l(n[_],_,j,c,u,f?p:null,g,d,h,v,w,m)))}return x.join(a)}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=d++;r=p||(p=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},35:function(e,t,n){n(63);var r=n(0)(n(60),n(62),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/followTarget/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"}}},401:function(e,t,n){n(835);var r=n(0)(n(473),n(765),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/coin/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{newsDetails:{default:function(){return{article:{headerUrl:"",userName:"",userIssue:"",articleTime:"",comment:"",forward:"",agree:""},followType:"",followClass:"",followTarget:"",coinPriceCNY:"",coinPriceUS:"",rise:"",riseStatus:""}}}},data:function(){return{footerType:1}},components:{followTarget:n(35)},computed:{risePercent:function(){return"up"==this.newsDetails.riseStatus?"+"+this.newsDetails.rise:"-"+this.newsDetails.rise}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},5:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},545:function(e,t,n){"use strict";var r=n(401);r.el="#root",new Vue(r)},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},60:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),a=n(7),s=r(a);t.default={props:{followType:{default:""},followText:{default:""},followID:{default:""}},computed:{},methods:{clickIt:function(){"coin"==this.followType?s.default.push(o.default.appDetails):"chain"==this.followType?s.default.push(o.default.wikiDetails):"user"==this.followType?s.default.push(o.default.userHome):"app"==this.followType?s.default.push(o.default.appDetails):"ico"==this.followType&&s.default.push(o.default.coinDetails)}}}},61:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.followTarget {\n    font-size: 32px;\n    color: #5583ff;\n}\n",""])},62:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:"followTarget",on:{click:e.clickIt}},[e._v(e._s(e.followText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},63:function(e,t,n){var r=n(61);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f8b81de6",r,!1)},699:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.follow-text-wrap {\n\tflex-direction: row;\n\tmargin-left: 30px;\n\tmargin-right: 30px;\n\twidth: 690px;\n\theight: 60px;\n\tjustify-content: flex-start;\n}\n.follow-text {\n\tfont-size: 26px;\n\tcolor: #434343;\n}\n.cell-coin-bg {\n\twidth: 750px;\n\theight: 120px;\n\tbackground-color: #f8f7f7;\n}\n.cell-coin-wrap {\n\tmargin-left: 30px;\n\tmargin-right: 30px;\n\twidth: 690px;\n\theight: 120px;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: flex-start;\n}\n.coin-rise-bg {\n\theight: 80px;\n\tborder-radius: 8px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.coin-rise-bg-up {\n\tbackground-color: #11d33f;\n}\n.coin-rise-bg-down {\n\tbackground-color: #ff6d6b;\n}\n.coin-rise-wrap {\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n\talign-items: flex-end;\n}\n.coin-prise-CNY {\n\tfont-size: 32px;\n\tcolor: #fff;\n}\n.coin-prise-US {\n\tmargin-top: 5px;\n\tfont-size: 20px;\n\tcolor: #fff;\n}\n.coin-info-wrap {\n\tmargin-left: 30px;\n}\n.coin-name-wrap {\n\tflex-direction: row;\n}\n.coin-name-text {\n\tfont-size: 32px;\n\tcolor: #434343;\n}\n.coin-rise-text {\n\tfont-size: 20px;\n\tcolor: #959595;\n}",""])},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=d.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(v.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){x.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,w.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+f.default.stringify(t):""+i()+e+".js";w.default.log("push "+n),x.push({url:n,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(10),f=r(u),p=n(13),d=r(p),h=n(8),v=r(h),m=n(4),y=r(m),g=n(9),w=r(g),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:l}},765:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:e.viewDetails}},[n("div",{staticClass:"follow-text-wrap"},[n("text",{staticClass:"follow-text"},[e._v("我刚刚关注了")]),e._v(" "),n("follow-target",{attrs:{followType:e.newsDetails.followType,followClass:e.newsDetails.followClass,followTarget:e.newsDetails.followTarget}}),e._v(" "),n("text",{staticClass:"follow-text"},[e._v("当前价格")]),e._v(" "),n("text",{staticClass:"follow-text"},[e._v("¥"+e._s(e.newsDetails.coinPriceCNY))])],1),e._v(" "),n("div",{staticClass:"cell-coin-bg"},[n("div",{staticClass:"cell-coin-wrap"},[n("div",{staticClass:"coin-rise-bg",class:["up"==e.newsDetails.riseStatus?"coin-rise-bg-up":"coin-rise-bg-down"]},[n("div",{staticClass:"coin-rise-wrap"},[n("text",{staticClass:"coin-prise-CNY"},[e._v("¥"+e._s(e.newsDetails.coinPriceCNY))]),e._v(" "),n("text",{staticClass:"coin-prise-US"},[e._v("$"+e._s(e.newsDetails.coinPriceUS))])])]),e._v(" "),n("div",{staticClass:"coin-info-wrap"},[n("div",{staticClass:"coin-name-wrap"},[n("text",{staticClass:"coin-name-text"},[e._v(e._s(e.newsDetails.followClass))]),e._v(" "),n("text",{staticClass:"coin-name-text"},[e._v("/")]),e._v(" "),n("text",{staticClass:"coin-name-text"},[e._v(e._s(e.newsDetails.followTarget))])]),e._v(" "),n("text",{staticClass:"coin-rise-text"},[e._v(e._s(e.risePercent))])])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},835:function(e,t,n){var r=n(699);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("93012bdc",r,!1)},9:function(e,t,n){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){p||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var f=o(e[c],t,n+1);f.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var p=u(e[c]);s+=c,s+="["+p,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:r,dump:i,testBegin:l,testEnd:c}}});