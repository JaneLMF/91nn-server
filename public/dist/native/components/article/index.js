// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=420)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},1:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},102:function(e,t){e.exports={"article-wrap":{width:750,justifyContent:"center",alignItems:"center"},"repost-wrap":{backgroundColor:"#f8f8f8"},"fresh-wrap":{backgroundColor:"#ffffff"}}},110:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["article-wrap"],class:["repost"==e.userType?"repost-wrap":"fresh-wrap"]},["news"==e.articleType?n("n-news",{attrs:{news:e.news},on:{viewIt:e.viewNewsDetails}}):"dynamic"==e.articleType?n("n-dynamic",{attrs:{dynamic:e.dynamic},on:{viewIt:e.viewNewsDetails}}):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},116:function(e,t,n){var r,i,o=[];o.push(n(82)),r=n(71);var s=n(88);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/dynamic/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-e027e294",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},117:function(e,t,n){var r,i,o=[];o.push(n(81)),r=n(72);var s=n(87);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/news/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-da81dcdc",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},2:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?o.push(t.compact(e[s],r)):void 0!==e[s]&&o.push(e[s]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},3:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=d.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(y.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(v.default.web,t)}function s(e,t){b.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){g.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,g.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+f.default.stringify(t):""+i()+e+".js";g.default.log("push "+n),b.push({url:n,animated:"true"},function(e){g.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){g.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(6),f=r(u),p=n(7),d=r(p),m=n(3),y=r(m),w=n(0),v=r(w),h=n(5),g=r(h),b=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:i,pushWeb:o,pop:l}},420:function(e,t,n){var r,i,o=[];o.push(n(102)),r=n(92);var s=n(110);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/article/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-2b766ef4",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},5:function(e,t,n){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){p||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var s=r+"    ",a="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var f=o(e[c],t,n+1);f.indexOf("function"),a+=s,e.hasOwnProperty(c)||(a+="prototype.");var p=u(e[c]);a+=c,a+="["+p,a+="]",a+=" : ",a+=f,a+=" ,\n"}return a+=r+"}",l&&(a="{}"),a}function s(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,n,r){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),a(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:r,dump:i,testBegin:l,testEnd:c}},6:function(e,t,n){"use strict";var r=n(9),i=n(8),o=n(1);e.exports={formats:o,parse:i,stringify:r}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.130"},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{dynamic:{default:function(){return{userName:"",content:""}}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{news:{default:function(){return{articleID:"",tit:"",intro:"",imgUrl:"",issue:"",comment:"",agree:"",time:""}}}},methods:{viewDetails:function(){this.$emit("viewIt",this.articleID)}}}},8:function(e,t,n){"use strict";var r=n(2),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var s,a,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(s=t.decoder(l),a=t.strictNullHandling?null:""):(s=t.decoder(l.slice(0,c)),a=t.decoder(l.slice(c+1))),i.call(n,s)?n[s]=[].concat(n[s]).concat(a):n[s]=a}return n},a=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(a(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(o,10);!isNaN(s)&&i!==o&&String(s)===o&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(r=[],r[s]=a(e,t,n)):r[o]=a(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=s.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),a(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?s(e,n):e,a=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var f=c[u],p=l(f,i[f],n);a=r.merge(a,p,n)}return r.compact(a)}},81:function(e,t){e.exports={"news-wrap":{flexDirection:"row",width:690,marginTop:20,marginBottom:20},"news-content-wrap":{position:"relative"},"news-content-wrap-hasImg":{width:450,height:140,alignContent:"space-between"},"news-content-wrap-noImg":{width:690,height:190,alignContent:"space-between"},"news-content-tit":{fontSize:32,color:"#333333",fontWeight:"bold",lines:2},"news-content":{fontSize:26,color:"#707070",lines:2},"news-issue-wrap":{position:"absolute",left:0,bottom:0,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"news-issue-wrap-hasImg":{width:450},"news-issue-wrap-noImg":{width:690},"news-info-wrap":{flexDirection:"row"},"news-submit-tit":{fontSize:24,color:"#bbbbbb"},fenge:{marginLeft:10,marginRight:10},"news-img-wrap":{width:210,height:140,marginLeft:30,overflow:"hidden"},"news-img":{width:210,height:210}}},82:function(e,t){e.exports={"mesg-wrap":{width:690,marginTop:20,marginBottom:20},user:{fontSize:26,color:"#333333"},content:{marginTop:10,fontSize:26,color:"#707070"}}},87:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["news-wrap"],on:{click:e.viewDetails}},[n("div",{staticClass:["news-content-wrap"],class:[e.news.imgUrl.length>0?"news-content-wrap-hasImg":"news-content-wrap-noImg"]},[n("text",{staticClass:["news-content-tit"]},[e._v(e._s(e.news.tit))]),e.news.imgUrl.length<=0?n("text",{staticClass:["news-content"]},[e._v(e._s(e.news.intro))]):e._e(),n("div",{staticClass:["news-issue-wrap"],class:[e.news.imgUrl.length>0?"news-issue-wrap-hasImg":"news-issue-wrap-noImg"]},[n("div",{staticClass:["news-info-wrap"]},[n("text",{staticClass:["news-submit-tit"]},[e._v(e._s(e.news.issue))]),n("text",{staticClass:["fenge"]},[e._v("·")]),n("text",{staticClass:["news-submit-tit"]},[e._v("评论"+e._s(e.news.comment))]),n("text",{staticClass:["fenge"]},[e._v("·")]),n("text",{staticClass:["news-submit-tit"]},[e._v("赞"+e._s(e.news.agree))])]),n("text",{staticClass:["news-submit-tit"]},[e._v(e._s(e.news.time))])])]),n("div",{staticClass:["news-img-wrap"]},[e.news.imgUrl.length>0?n("image",{staticClass:["news-img"],attrs:{src:e.news.imgUrl}}):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},88:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["mesg-wrap"],on:{click:e.viewDetails}},[n("text",{staticClass:["user"]},[e._v("@"+e._s(e.dynamic.userName)+":")]),n("text",{staticClass:["content"]},[e._v(e._s(e.dynamic.content))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){"use strict";var r=n(2),i=n(1),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,s,a,l,c,u,f,p,d){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=f(m);else if(null===m){if(o)return a&&!d?a(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(a){return[p(d?n:a(n))+"="+p(a(m))]}return[p(n)+"="+p(String(m))]}var y=[];if(void 0===m)return y;var w;if(Array.isArray(l))w=l;else{var v=Object.keys(m);w=c?v.sort(c):v}for(var h=0;h<w.length;++h){var g=w[h];s&&null===m[g]||(y=Array.isArray(m)?y.concat(e(m[g],i(n,g),i,o,s,a,l,c,u,f,p,d)):y.concat(e(m[g],n+(u?"."+g:"["+g+"]"),i,o,s,a,l,c,u,f,p,d)))}return y};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===r.delimiter?a.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:a.skipNulls,f="boolean"==typeof r.encode?r.encode:a.encode,p="function"==typeof r.encoder?r.encoder:a.encoder,d="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,y="function"==typeof r.serializeDate?r.serializeDate:a.serializeDate,w="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:a.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var v,h,g=i.formatters[r.format];"function"==typeof r.filter?(h=r.filter,n=h("",n)):Array.isArray(r.filter)&&(h=r.filter,v=h);var b=[];if("object"!=typeof n||null===n)return"";var _;_=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var x=o[_];v||(v=Object.keys(n)),d&&v.sort(d);for(var j=0;j<v.length;++j){var O=v[j];u&&null===n[O]||(b=b.concat(l(n[O],O,x,c,u,f?p:null,h,d,m,y,g,w)))}return b.join(s)}},92:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=r(i),s=n(4),a=r(s);t.default={props:{userType:{default:"repost"},articleType:{default:"news"},news:{default:function(){return{articleID:"",tit:"",intro:"",imgUrl:"",issue:"",comment:"",agree:"",time:""}}},dynamic:{default:function(){return{userName:"",content:""}}}},methods:{viewNewsDetails:function(){a.default.push(o.default.repostPage)}},components:{nNews:n(117),nDynamic:n(116)}}}});