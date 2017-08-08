// { "framework": "Vue"} 

!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=430)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},1:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},105:function(e,t){e.exports={"repost-mesg-wrap":{marginBottom:10},"repost-mesg":{fontSize:28,color:"#333333"},"repost-at-target-wrap":{flexDirection:"row"},"repost-at-fenge":{fontSize:28,color:"#5583ff"},"repost-at-target":{marginRight:10}}},113:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["repost-mesg-wrap"]},["text"==e.type?r("text",{staticClass:["repost-mesg"]},[e._v(e._s(e.repostInfo))]):"user"==e.type?r("div",{staticClass:["repost-at-target-wrap"]},[r("text",{staticClass:["repost-at-fenge"]},[e._v("//")]),r("follow-target",{staticClass:["repost-at-target"],attrs:{followType:e.followType,followClass:e.followClass,followTarget:e.followTarget,followID:e.followID}})],1):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,i){o.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],r,n):e.push(r):e[i]=r}),e):Object.keys(r).reduce(function(e,o){var i=r[o];return Object.prototype.hasOwnProperty.call(e,o)?e[o]=t.merge(e[o],i,n):e[o]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var i=t.charCodeAt(o);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(o):i<128?r+=n[i]:i<2048?r+=n[192|i>>6]+n[128|63&i]:i<55296||i>=57344?r+=n[224|i>>12]+n[128|i>>6&63]+n[128|63&i]:(o+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(o)),r+=n[240|i>>18]+n[128|i>>12&63]+n[128|i>>6&63]+n[128|63&i])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var o=r||[],n=o.indexOf(e);if(-1!==n)return o[n];if(o.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],o)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],o)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},3:function(e,t,r){"use strict";function o(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function n(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:o,isWeb:n,getDeviceInfo:i}},34:function(e,t,r){var o,n,i=[];i.push(r(36)),o=r(35);var a=r(37);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/followTarget/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-2e989330",n.style=n.style||{},i.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),e.exports=o},35:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=o(n),a=r(4),s=o(a);t.default={props:{followType:{default:""},followClass:{default:""},followTarget:{default:""},followID:{default:""}},computed:{followText:function(){var e="",t=this.followType,r=this.followClass,o=this.followTarget;return"coin"==t?e="$"+r+"/"+o+"$":"link"==t?e="$"+r+"·"+o+"$":"user"==t&&(e="@"+o),e}},methods:{clickIt:function(){"coin"==this.followType?s.default.push(i.default.appDetails):"link"==this.followType?s.default.push(i.default.userHome):"user"==this.followType&&s.default.push(i.default.userHome)}}}},36:function(e,t){e.exports={followTarget:{fontSize:28,color:"#5583ff"}}},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["followTarget"],on:{click:e.clickIt}},[e._v(e._s(e.followText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,r=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,o="";if(t)o="file://assets/dist/native/";else if(r)o=e.substring(0,e.lastIndexOf("native/")+5);else{var n=d.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(n=i[1]),o="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":u(window))?"?page=../dist/web/":o}function i(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(h.default.web,t)}function a(e,t){b.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,w.default.log("getBaseUrl",n());var r=t?""+n()+e.jsPath+".js?"+f.default.stringify(t):""+n()+e+".js";w.default.log("push "+r),b.push({url:r,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=r(7),f=o(c),p=r(6),d=o(p),y=r(3),m=o(y),v=r(0),h=o(v),g=r(5),w=o(g),b=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:n,pushWeb:i,pop:l}},430:function(e,t,r){var o,n,i=[];i.push(r(105)),o=r(95);var a=r(113);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/repostMesg.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-6ce40b60",n.style=n.style||{},i.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},5:function(e,t,r){"use strict";function o(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){p||o("["+e+"]  "+i(t))}function i(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":c(e)))return""+e;for(var o="",n=0;n<r;n++)o+="    ";var a=o+"    ",s="{\n",l=!0;for(var u in e)if(0===n&&n++,e.hasOwnProperty(u)){l=!1;var f=i(e[u],t,r+1);f.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var p=c(e[u]);s+=u,s+="["+p,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=o+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?o("WARN-"+e+"  "+t):(t=e,o("WARN  "+t))}function s(e,t,r,o){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:r,info1:o})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function u(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),o(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:o,dump:n,testBegin:l,testEnd:u}},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.1.106"},7:function(e,t,r){"use strict";var o=r(9),n=r(8),i=r(1);e.exports={formats:i,parse:n,stringify:o}},8:function(e,t,r){"use strict";var o=r(2),n=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},o=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<o.length;++i){var a,s,l=o[i],u=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===u?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,u)),s=t.decoder(l.slice(u+1))),n.call(r,a)?r[a]=[].concat(r[a]).concat(s):r[a]=s}return r},s=function(e,t,r){if(!e.length)return t;var o,n=e.shift();if("[]"===n)o=[],o=o.concat(s(e,t,r));else{o=r.plainObjects?Object.create(null):{};var i="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,a=parseInt(i,10);!isNaN(a)&&n!==i&&String(a)===i&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(o=[],o[a]=s(e,t,r)):o[i]=s(e,t,r)}return o},l=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(o),u=l?o.slice(0,l.index):o,c=[];if(u){if(!r.plainObjects&&n.call(Object.prototype,u)&&!r.allowPrototypes)return;c.push(u)}for(var f=0;null!==(l=a.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+o.slice(l.index)+"]"),s(c,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},u=Object.keys(n),c=0;c<u.length;++c){var f=u[c],p=l(f,n[f],r);s=o.merge(s,p,r)}return o.compact(s)}},9:function(e,t,r){"use strict";var o=r(2),n=r(1),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,n,i,a,s,l,u,c,f,p,d){var y=t;if("function"==typeof l)y=l(r,y);else if(y instanceof Date)y=f(y);else if(null===y){if(i)return s&&!d?s(r):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||o.isBuffer(y)){if(s){return[p(d?r:s(r))+"="+p(s(y))]}return[p(r)+"="+p(String(y))]}var m=[];if(void 0===y)return m;var v;if(Array.isArray(l))v=l;else{var h=Object.keys(y);v=u?h.sort(u):h}for(var g=0;g<v.length;++g){var w=v[g];a&&null===y[w]||(m=Array.isArray(y)?m.concat(e(y[w],n(r,w),n,i,a,s,l,u,c,f,p,d)):m.concat(e(y[w],r+(c?"."+w:"["+w+"]"),n,i,a,s,l,u,c,f,p,d)))}return m};e.exports=function(e,t){var r=e,o=t||{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===o.delimiter?s.delimiter:o.delimiter,u="boolean"==typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,c="boolean"==typeof o.skipNulls?o.skipNulls:s.skipNulls,f="boolean"==typeof o.encode?o.encode:s.encode,p="function"==typeof o.encoder?o.encoder:s.encoder,d="function"==typeof o.sort?o.sort:null,y=void 0!==o.allowDots&&o.allowDots,m="function"==typeof o.serializeDate?o.serializeDate:s.serializeDate,v="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if(void 0===o.format)o.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,o.format))throw new TypeError("Unknown format option provided.");var h,g,w=n.formatters[o.format];"function"==typeof o.filter?(g=o.filter,r=g("",r)):Array.isArray(o.filter)&&(g=o.filter,h=g);var b=[];if("object"!=typeof r||null===r)return"";var x;x=o.arrayFormat in i?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var j=i[x];h||(h=Object.keys(r)),d&&h.sort(d);for(var _=0;_<h.length;++_){var O=h[_];c&&null===r[O]||(b=b.concat(l(r[O],O,j,u,c,f?p:null,g,d,y,m,w,v)))}return b.join(a)}},95:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{default:""},repostInfo:{default:""},followType:{default:""},followClass:{default:""},followTarget:{default:""},followID:{default:""}},components:{followTarget:r(34)}}}});