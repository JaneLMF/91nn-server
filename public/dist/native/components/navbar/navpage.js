// { "framework": "Vue"} 

!function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=345)}({0:function(t,e,i){"use strict";var r=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},1:function(t,e,i){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var i=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(i[r]=t[r]);return i},e.merge=function(t,i,n){if(!i)return t;if("object"!=typeof i){if(Array.isArray(t))t.push(i);else{if("object"!=typeof t)return[t,i];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,i))&&(t[i]=!0)}return t}if("object"!=typeof t)return[t].concat(i);var o=t;return Array.isArray(t)&&!Array.isArray(i)&&(o=e.arrayToObject(t,n)),Array.isArray(t)&&Array.isArray(i)?(i.forEach(function(i,o){r.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e.merge(t[o],i,n):t.push(i):t[o]=i}),t):Object.keys(i).reduce(function(t,r){var o=i[r];return Object.prototype.hasOwnProperty.call(t,r)?t[r]=e.merge(t[r],o,n):t[r]=o,t},o)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),i="",r=0;r<e.length;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=e.charAt(r):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},e.compact=function(t,i){if("object"!=typeof t||null===t)return t;var r=i||[],n=r.indexOf(t);if(-1!==n)return r[n];if(r.push(t),Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?o.push(e.compact(t[a],r)):void 0!==t[a]&&o.push(t[a]);return o}return Object.keys(t).forEach(function(i){t[i]=e.compact(t[i],r)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["wrapper"]},[i("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.leftItemClick}}),i("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},118:function(t,e,i){var r,n,o=[];o.push(i(75)),r=i(69);var a=i(80);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-7c73bc08",n.style=n.style||{},o.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),t.exports=r},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"}}},3:function(t,e,i){"use strict";function r(t){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function n(t,e){p||r("["+t+"]  "+o(e))}function o(t,e,i){if(void 0===e&&(e=10),void 0===i&&(i=0),i===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var r="",n=0;n<i;n++)r+="    ";var a=r+"    ",l="{\n",s=!0;for(var c in t)if(0===n&&n++,t.hasOwnProperty(c)){s=!1;var u=o(t[c],e,i+1);u.indexOf("function"),l+=a,t.hasOwnProperty(c)||(l+="prototype.");var p=f(t[c]);l+=c,l+="["+p,l+="]",l+=" : ",l+=u,l+=" ,\n"}return l+=r+"}",s&&(l="{}"),l}function a(t,e){arguments.length>=2?r("WARN-"+t+"  "+e):(e=t,r("WARN  "+e))}function l(t,e,i,r){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+o({expression:t,msg:e,info0:i,info1:r})+"------------create ------------\n"+function(){var t="",e=0,i=arguments.callee;do{if(e>=3&&e<10){t+=""+i}else if(e>=10)break;i=i.arguments.callee.caller,e++}while(i);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function s(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),l(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),r(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},p=!1;e.default={log:r,dump:n,testBegin:s,testEnd:c}},345:function(t,e,i){var r,n,o=[];o.push(i(99)),r=i(94);var a=i(109);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-156f9af6",n.style=n.style||{},o.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},4:function(t,e,i){"use strict";function r(){return!!weex.config.env&&"iOS"===weex.config.env.platform}function n(){return"Web"===weex.config.env.platform}function o(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:r,isWeb:n,getDeviceInfo:o}},5:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,i=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,r="";if(e)r="file://assets/dist/native/";else if(i)r=t.substring(0,t.lastIndexOf("native/")+5);else{var n=d.default+":8080",o=/\/\/([^\/]+?)\//.exec(t);o&&o.length>=2&&(n=o[1]),r="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(t,e){if(h.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,l(g.default.web,e)}function a(t,e){w.push({url:e?t+"?"+u.default.stringify(e):t,animated:"true"},function(t){b.default.log("callback: ",t)})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,b.default.log("getBaseUrl",n());var i=e?""+n()+t.jsPath+".js?"+u.default.stringify(e):""+n()+t+".js";b.default.log("push "+i),w.push({url:i,animated:"true"},function(t){b.default.log("callback: ",t)})}function s(){w.pop({animated:"true"},function(t){b.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=i(7),u=r(f),p=i(6),d=r(p),m=i(4),h=r(m),y=i(2),g=r(y),v=i(3),b=r(v),w=weex.requireModule("navigator");e.default={push:l,pushByUrl:a,getBaseUrl:n,pushWeb:o,pop:s}},6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.199.161"},69:function(t,e,i){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},7:function(t,e,i){"use strict";var r=i(9),n=i(8),o=i(0);t.exports={formats:o,parse:n,stringify:r}},75:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},8:function(t,e,i){"use strict";var r=i(1),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var i={},r=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),o=0;o<r.length;++o){var a,l,s=r[o],c=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;-1===c?(a=e.decoder(s),l=e.strictNullHandling?null:""):(a=e.decoder(s.slice(0,c)),l=e.decoder(s.slice(c+1))),n.call(i,a)?i[a]=[].concat(i[a]).concat(l):i[a]=l}return i},l=function(t,e,i){if(!t.length)return e;var r,n=t.shift();if("[]"===n)r=[],r=r.concat(l(t,e,i));else{r=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,a=parseInt(o,10);!isNaN(a)&&n!==o&&String(a)===o&&a>=0&&i.parseArrays&&a<=i.arrayLimit?(r=[],r[a]=l(t,e,i)):r[o]=l(t,e,i)}return r},s=function(t,e,i){if(t){var r=i.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=o.exec(r),c=s?r.slice(0,s.index):r,f=[];if(c){if(!i.plainObjects&&n.call(Object.prototype,c)&&!i.allowPrototypes)return;f.push(c)}for(var u=0;null!==(s=a.exec(r))&&u<i.depth;){if(u+=1,!i.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!i.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+r.slice(s.index)+"]"),l(f,e,i)}};t.exports=function(t,e){var i=e||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:o.delimiter,i.depth="number"==typeof i.depth?i.depth:o.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:o.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:o.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:o.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:o.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:o.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:o.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,""===t||null===t||void 0===t)return i.plainObjects?Object.create(null):{};for(var n="string"==typeof t?a(t,i):t,l=i.plainObjects?Object.create(null):{},c=Object.keys(n),f=0;f<c.length;++f){var u=c[f],p=s(u,n[u],i);l=r.merge(l,p,i)}return r.compact(l)}},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():i("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?i("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:t.rightItemSrc},on:{click:t.onclickrightitem}}):t._e(),t.leftItemSrc?t._e():i("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?i("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?i("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),i("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},9:function(t,e,i){"use strict";var r=i(1),n=i(0),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},s=function t(e,i,n,o,a,l,s,c,f,u,p,d){var m=e;if("function"==typeof s)m=s(i,m);else if(m instanceof Date)m=u(m);else if(null===m){if(o)return l&&!d?l(i):i;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(l){return[p(d?i:l(i))+"="+p(l(m))]}return[p(i)+"="+p(String(m))]}var h=[];if(void 0===m)return h;var y;if(Array.isArray(s))y=s;else{var g=Object.keys(m);y=c?g.sort(c):g}for(var v=0;v<y.length;++v){var b=y[v];a&&null===m[b]||(h=Array.isArray(m)?h.concat(t(m[b],n(i,b),n,o,a,l,s,c,f,u,p,d)):h.concat(t(m[b],i+(f?"."+b:"["+b+"]"),n,o,a,l,s,c,f,u,p,d)))}return h};t.exports=function(t,e){var i=t,r=e||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?l.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:l.strictNullHandling,f="boolean"==typeof r.skipNulls?r.skipNulls:l.skipNulls,u="boolean"==typeof r.encode?r.encode:l.encode,p="function"==typeof r.encoder?r.encoder:l.encoder,d="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:l.serializeDate,y="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:l.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,v,b=n.formatters[r.format];"function"==typeof r.filter?(v=r.filter,i=v("",i)):Array.isArray(r.filter)&&(v=r.filter,g=v);var w=[];if("object"!=typeof i||null===i)return"";var x;x=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=o[x];g||(g=Object.keys(i)),d&&g.sort(d);for(var _=0;_<g.length;++_){var I=g[_];f&&null===i[I]||(w=w.concat(s(i[I],I,j,c,f,u?p:null,v,d,m,h,b,y)))}return w.join(a)}},94:function(t,e,i){"use strict";var r=i(5),n=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports={components:{navbar:i(118)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if("iOS"===weex.config.env.platform){var t=weex.config.env,e=t.scale,i=t.deviceWidth/e;this.height=48e3/i}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void n.default.pop();this.$emit("naviBarLeftItemClick",t)}}}},99:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}}});