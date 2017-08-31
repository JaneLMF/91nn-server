// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=552)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var r=n(12),o=n(11),i=n(6);e.exports={formats:i,parse:o,stringify:r}},11:function(e,t,n){"use strict";var r=n(7),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var a,s,l=r[i],u=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===u?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,u)),s=t.decoder(l.slice(u+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[i]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(r),u=l?r.slice(0,l.index):r,c=[];if(u){if(!n.plainObjects&&o.call(Object.prototype,u)&&!n.allowPrototypes)return;c.push(u)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+r.slice(l.index)+"]"),s(c,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},u=Object.keys(o),c=0;c<u.length;++c){var f=u[c],p=l(f,o[f],n);s=r.merge(s,p,n)}return r.compact(s)}},12:function(e,t,n){"use strict";var r=n(7),o=n(6),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,o,i,a,s,l,u,c,f,p,d){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(i)return s&&!d?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[p(d?n:s(n))+"="+p(s(h))]}return[p(n)+"="+p(String(h))]}var y=[];if(void 0===h)return y;var v;if(Array.isArray(l))v=l;else{var m=Object.keys(h);v=u?m.sort(u):m}for(var g=0;g<v.length;++g){var w=v[g];a&&null===h[w]||(y=Array.isArray(h)?y.concat(e(h[w],o(n,w),o,i,a,s,l,u,c,f,p,d)):y.concat(e(h[w],n+(c?"."+w:"["+w+"]"),o,i,a,s,l,u,c,f,p,d)))}return y};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,u="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,c="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,p="function"==typeof r.encoder?r.encoder:s.encoder,d="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,y="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var m,g,w=o.formatters[r.format];"function"==typeof r.filter?(g=r.filter,n=g("",n)):Array.isArray(r.filter)&&(g=r.filter,m=g);var x=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=i[b];m||(m=Object.keys(n)),d&&m.sort(d);for(var P=0;P<m.length;++P){var O=m[P];c&&null===n[O]||(x=x.concat(l(n[O],O,j,u,c,f?p:null,g,d,h,y,w,v)))}return x.join(a)}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return y;r.parentNode.removeChild(r)}if(v){var i=d++;r=p||(p=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),c={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,y=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=c[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+o,css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},37:function(e,t,n){n(65);var r=n(0)(n(62),n(64),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/followTarget/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},402:function(e,t,n){n(861);var r=n(0)(n(476),n(789),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/link/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{newsDetails:{default:function(){return{article:{headerUrl:"",userName:"",userIssue:"",articleTime:"",comment:"",forward:"",agree:""},followType:"",followClass:"",followTarget:"",coinPriceCNY:"",coinPriceUS:"",rise:"",riseStatus:""}}}},data:function(){return{footerType:0}},components:{followTarget:n(37)},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},5:function(e,t,n){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){p||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":c(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var u in e)if(0===o&&o++,e.hasOwnProperty(u)){l=!1;var f=i(e[u],t,n+1);f.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var p=c(e[u]);s+=u,s+="["+p,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function u(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:r,dump:o,testBegin:l,testEnd:u}},552:function(e,t,n){"use strict";var r=n(402);r.el="#root",new Vue(r)},6:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(8),s=r(a);t.default={props:{followType:{default:""},followText:{default:""},followID:{default:""}},computed:{},methods:{clickIt:function(){"coin"==this.followType?s.default.push(i.default.appDetails):"chain"==this.followType?s.default.push(i.default.wikiDetails):"user"==this.followType?s.default.push(i.default.userHome):"app"==this.followType?s.default.push(i.default.appDetails):"ico"==this.followType&&s.default.push(i.default.coinDetails)}}}},63:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.followTarget {\n    font-size: 32px;\n    color: #5583ff;\n}\n",""])},64:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:"followTarget",on:{click:e.clickIt}},[e._v(e._s(e.followText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},65:function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f8b81de6",r,!1)},7:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],r)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},721:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.follow-text-wrap {\n\tflex-direction: row;\n\tmargin-left: 30px;\n\tmargin-right: 30px;\n\twidth: 690px;\n\theight: 60px;\n\tjustify-content: flex-start;\n}\n.follow-text {\n\tfont-size: 26px;\n\tcolor: #434343;\n}",""])},789:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"follow-text-wrap",on:{click:e.viewDetails}},[n("text",{staticClass:"follow-text"},[e._v("我刚刚关注了")]),e._v(" "),n("follow-target",{attrs:{followType:e.newsDetails.followType,followClass:e.newsDetails.followClass,followTarget:e.newsDetails.followTarget}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=d.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":u(window))?"?page=../dist/web/":r}function i(e,t){if(y.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(m.default.web,t)}function a(e,t){x.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,w.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+f.default.stringify(t):""+o()+e+".js";w.default.log("push "+n),x.push({url:n,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(10),f=r(c),p=n(13),d=r(p),h=n(9),y=r(h),v=n(4),m=r(v),g=n(5),w=r(g),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:l}},861:function(e,t,n){var r=n(721);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("4c08c59a",r,!1)},9:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}}});