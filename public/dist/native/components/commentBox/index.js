// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=453)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},1:function(e,t,n){"use strict";var i=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},109:function(e,t){e.exports={"check-box-wrap":{flexDirection:"row"},"check-box-icon":{width:28,height:28},"check-box-name":{marginLeft:12,fontSize:24,color:"#434343",lineHeight:28}}},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["check-box-wrap"],on:{click:e.checkIt}},[e.ischecked?n("image",{staticClass:["check-box-icon"],attrs:{src:e.checked}}):n("image",{staticClass:["check-box-icon"],attrs:{src:e.unchecked}}),n("text",{staticClass:["check-box-name"]},[e._v(e._s(e.name))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},172:function(e,t,n){var i,o,r=[];r.push(n(109)),i=n(96);var a=n(118);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/checkBox/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-c5a56cae",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i},176:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=i(o),a=n(4),s=i(a);t.default={data:function(){return{commentFlag:!1,ischecked:!1,checkBoxName:"同时评论",atSize:"xm",atIconUrl:"/resources/repostMesgBox/at-btn.png",canSubmit:!1}},components:{nCheckBox:n(172)},methods:{checkBoxCallBack:function(e){this.ischecked=!e},isInputed:function(e){console.log(e.value),e.value.length>0?this.canSubmit=!0:this.canSubmit=!1},atUser:function(){s.default.push(r.default.userList)},closeIt:function(){this.$emit("callBack",this.commentFlag)}}}},2:function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(n[i]=e[i]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!i.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var r=e;return Array.isArray(e)&&!Array.isArray(n)&&(r=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,r){i.call(e,r)?e[r]&&"object"==typeof e[r]?e[r]=t.merge(e[r],n,o):e.push(n):e[r]=n}),e):Object.keys(n).reduce(function(e,i){var r=n[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],r,o):e[i]=r,e},r)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",i=0;i<t.length;++i){var r=t.charCodeAt(i);45===r||46===r||95===r||126===r||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122?n+=t.charAt(i):r<128?n+=o[r]:r<2048?n+=o[192|r>>6]+o[128|63&r]:r<55296||r>=57344?n+=o[224|r>>12]+o[128|r>>6&63]+o[128|63&r]:(i+=1,r=65536+((1023&r)<<10|1023&t.charCodeAt(i)),n+=o[240|r>>18]+o[128|r>>12&63]+o[128|r>>6&63]+o[128|63&r])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var i=n||[],o=i.indexOf(e);if(-1!==o)return i[o];if(i.push(e),Array.isArray(e)){for(var r=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?r.push(t.compact(e[a],i)):void 0!==e[a]&&r.push(e[a]);return r}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},210:function(e,t){e.exports={"comment-box":{position:"relative",width:750,height:1440,backgroundColor:"rgba(0,0,0,0.5)"},"comment-wrap-bg":{position:"absolute",left:0,bottom:0,width:750,backgroundColor:"#ffffff"},"comment-wrap":{paddingTop:30,paddingRight:30,paddingBottom:30,paddingLeft:30},"comment-input":{paddingLeft:15,width:690,height:110,borderRadius:8,backgroundColor:"#f8f8f8",placeholderColor:"#333333",fontSize:26,lineHeight:40},"comment-action-row-wrap":{marginTop:20,height:50,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"comment-action-row":{height:50,flexDirection:"row",justifyContent:"center",alignItems:"center"},"at-icon":{marginLeft:40,width:40,height:40},"submit-comment":{width:138,height:50,lineHeight:50,textAlign:"center",fontSize:24,color:"#ffffff",backgroundColor:"#bbbbbb",borderRadius:8},"can-submit-comment":{backgroundColor:"#fc6d3f"}}},228:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"fixed",bottom:"0",left:"0"}},[n("div",{staticClass:["comment-box"],on:{click:e.closeIt}},[n("div",{staticClass:["comment-wrap-bg"]},[n("div",{staticClass:["comment-wrap"]},[n("textarea",{staticClass:["comment-input"],attrs:{placeholder:"我的想法是",rows:"3"},on:{input:e.isInputed}}),n("div",{staticClass:["comment-action-row-wrap"]},[n("div",{staticClass:["comment-action-row"]},[n("n-check-box",{attrs:{ischecked:e.ischecked,name:e.checkBoxName},on:{callBack:function(t){return e.ischecked=!t}}}),n("image",{staticClass:["at-icon"],attrs:{src:"/resources/repostMesgBox/at-btn.png"},on:{click:e.atUser}})],1),n("text",{staticClass:["submit-comment"],class:[e.canSubmit?"can-submit-comment":""]},[e._v("发表评论")])])],1)])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,n){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function r(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:o,getDeviceInfo:r}},4:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(n)i=e.substring(0,e.lastIndexOf("native/")+5);else{var o=p.default+":8080",r=/\/\/([^\/]+?)\//.exec(e);r&&r.length>=2&&(o=r[1]),i="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":i}function r(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(g.default.web,t)}function a(e,t){w.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){b.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,b.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+f.default.stringify(t):""+o()+e+".js";b.default.log("push "+n),w.push({url:n,animated:"true"},function(e){b.default.log("callback: ",e)})}function c(){w.pop({animated:"true"},function(e){b.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(6),f=i(u),d=n(7),p=i(d),m=n(3),h=i(m),y=n(0),g=i(y),v=n(5),b=i(v),w=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:r,pop:c}},453:function(e,t,n){var i,o,r=[];r.push(n(210)),i=n(176);var a=n(228);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/commentBox/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-f89f321c",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i,e.exports.el="true",new Vue(e.exports)},5:function(e,t,n){"use strict";function i(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||i("["+e+"]  "+r(t))}function r(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var i="",o=0;o<n;o++)i+="    ";var a=i+"    ",s="{\n",c=!0;for(var l in e)if(0===o&&o++,e.hasOwnProperty(l)){c=!1;var f=r(e[l],t,n+1);f.indexOf("function"),s+=a,e.hasOwnProperty(l)||(s+="prototype.");var d=u(e[l]);s+=l,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=i+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function s(e,t,n,i){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+r({expression:e,msg:t,info0:n,info1:i})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function l(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:i,dump:o,testBegin:c,testEnd:l}},6:function(e,t,n){"use strict";var i=n(9),o=n(8),r=n(1);e.exports={formats:r,parse:o,stringify:i}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},8:function(e,t,n){"use strict";var i=n(2),o=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),r=0;r<i.length;++r){var a,s,c=i[r],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var i,o=e.shift();if("[]"===o)i=[],i=i.concat(s(e,t,n));else{i=n.plainObjects?Object.create(null):{};var r="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(r,10);!isNaN(a)&&o!==r&&String(a)===r&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(i=[],i[a]=s(e,t,n)):i[r]=s(e,t,n)}return i},c=function(e,t,n){if(e){var i=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,r=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=r.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!n.plainObjects&&o.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}for(var f=0;null!==(c=a.exec(i))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||i.isRegExp(n.delimiter)?n.delimiter:r.delimiter,n.depth="number"==typeof n.depth?n.depth:r.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:r.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:r.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:r.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:r.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:r.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:r.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:r.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},l=Object.keys(o),u=0;u<l.length;++u){var f=l[u],d=c(f,o[f],n);s=i.merge(s,d,n)}return i.compact(s)}},9:function(e,t,n){"use strict";var i=n(2),o=n(1),r={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,n,o,r,a,s,c,l,u,f,d,p){var m=t;if("function"==typeof c)m=c(n,m);else if(m instanceof Date)m=f(m);else if(null===m){if(r)return s&&!p?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(s){return[d(p?n:s(n))+"="+d(s(m))]}return[d(n)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var y;if(Array.isArray(c))y=c;else{var g=Object.keys(m);y=l?g.sort(l):g}for(var v=0;v<y.length;++v){var b=y[v];a&&null===m[b]||(h=Array.isArray(m)?h.concat(e(m[b],o(n,b),o,r,a,s,c,l,u,f,d,p)):h.concat(e(m[b],n+(u?"."+b:"["+b+"]"),o,r,a,s,c,l,u,f,d,p)))}return h};e.exports=function(e,t){var n=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?s.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,f="boolean"==typeof i.encode?i.encode:s.encode,d="function"==typeof i.encoder?i.encoder:s.encoder,p="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,v,b=o.formatters[i.format];"function"==typeof i.filter?(v=i.filter,n=v("",n)):Array.isArray(i.filter)&&(v=i.filter,g=v);var w=[];if("object"!=typeof n||null===n)return"";var x;x=i.arrayFormat in r?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=r[x];g||(g=Object.keys(n)),p&&g.sort(p);for(var _=0;_<g.length;++_){var k=g[_];u&&null===n[k]||(w=w.concat(c(n[k],k,j,l,u,f?d:null,v,p,m,h,b,y)))}return w.join(a)}},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{ischecked:{default:null},name:{default:""},value:{default:""}},data:function(){return{checked:"/resources/checkBox/checked.png",unchecked:"/resources/checkBox/unchecked.png"}},methods:{checkIt:function(){this.$emit("callBack",this.ischecked)}}}}});