// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=345)}({0:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},1:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},146:function(e,t,n){var r,i,o=[];o.push(n(81)),r=n(70);var a=n(90);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-7f2ec36a",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},184:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=r(i),a=n(6),s=r(a);t.default={data:function(){return{buttonText:"下一步",submitAction:function(){s.default.push(o.default.submitNewPw)}}},components:{mesgVerify:n(146)}}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"}}},247:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("mesg-verify",{attrs:{buttonText:e.buttonText,submitAction:e.submitAction}})},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){d||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":c(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var u in e)if(0===i&&i++,e.hasOwnProperty(u)){l=!1;var f=o(e[u],t,n+1);f.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var d=c(e[u]);s+=u,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function u(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:r,dump:i,testBegin:l,testEnd:u}},345:function(e,t,n){var r,i,o=[];r=n(184);var a=n(247);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/settings/updatePw/verify.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},4:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"iOS"===weex.config.env.platform}function i(){return"Web"===weex.config.env.platform}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.199.161"},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{canVerify:{default:!1},phoneNum:{default:""}},data:function(){return{content:"获取验证码",seconds:10,timer:null}},methods:{sendVerify:function(){var e=this;this.canVerify&&(this.$emit("input",!1),this.canVerify=!1,this.timer=setInterval(function(){e.seconds--,e.content=e.seconds+"秒后重新获取",0==e.seconds&&(clearInterval(e.timer),e.content="重新获取",e.$emit("input",!0),e.seconds=10)},1e3))}}}},56:function(e,t){e.exports={sendMesg:{width:200,height:60,lineHeight:60,textAlign:"center",borderRadius:8,color:"#ffffff",fontSize:28},action:{backgroundColor:"#fc6d3f"},disabled:{backgroundColor:"#bbbbbb"}}},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":u(window))?"?page=../dist/web/":r}function o(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(h.default.web,t)}function a(e,t){w.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){g.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,g.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+f.default.stringify(t):""+i()+e+".js";g.default.log("push "+n),w.push({url:n,animated:"true"},function(e){g.default.log("callback: ",e)})}function l(){w.pop({animated:"true"},function(e){g.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(7),f=r(c),d=n(5),p=r(d),y=n(4),m=r(y),b=n(2),h=r(b),v=n(3),g=r(v),w=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:l}},60:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["sendMesg"],class:[e.canVerify?"action":"disabled"],on:{click:function(t){e.sendVerify()}}},[e._v(e._s(e.content))])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,n){"use strict";var r=n(9),i=n(8),o=n(0);e.exports={formats:o,parse:i,stringify:r}},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{buttonText:{default:""},submitAction:{default:function(){}}},data:function(){return{phoneNum:"",mesgVerify:"",canVerify:!1}},components:{getVerify:n(94)},methods:{inputPhoneNum:function(e){this.phoneNum=e.value,/^1[0-9]{10}$/.test(e.value)&&(this.canVerify=!0)},inputMesgVerify:function(e){this.mesgVerify=e.value},submitForm:function(){this.submitAction()}}}},8:function(e,t,n){"use strict";var r=n(1),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],u=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===u?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,u)),s=t.decoder(l.slice(u+1))),i.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[o]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),u=l?r.slice(0,l.index):r,c=[];if(u){if(!n.plainObjects&&i.call(Object.prototype,u)&&!n.allowPrototypes)return;c.push(u)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+r.slice(l.index)+"]"),s(c,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},u=Object.keys(i),c=0;c<u.length;++c){var f=u[c],d=l(f,i[f],n);s=r.merge(s,d,n)}return r.compact(s)}},81:function(e,t){e.exports={"content-bg":{width:750,backgroundColor:"#ffffff"},"content-wrap":{marginLeft:90,marginRight:90,marginTop:56},inputTel:{width:570,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},"mesgVerify-wrap":{marginTop:56,flexDirection:"row",justifyContent:"space-between"},inputVerify:{width:350,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},submitBtn:{marginTop:80,width:570,height:70,backgroundColor:"#fc6d3f",color:"#ffffff",fontSize:32,lineHeight:70,textAlign:"center",borderRadius:8}}},9:function(e,t,n){"use strict";var r=n(1),i=n(0),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,a,s,l,u,c,f,d,p){var y=t;if("function"==typeof l)y=l(n,y);else if(y instanceof Date)y=f(y);else if(null===y){if(o)return s&&!p?s(n):n;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||r.isBuffer(y)){if(s){return[d(p?n:s(n))+"="+d(s(y))]}return[d(n)+"="+d(String(y))]}var m=[];if(void 0===y)return m;var b;if(Array.isArray(l))b=l;else{var h=Object.keys(y);b=u?h.sort(u):h}for(var v=0;v<b.length;++v){var g=b[v];a&&null===y[g]||(m=Array.isArray(y)?m.concat(e(y[g],i(n,g),i,o,a,s,l,u,c,f,d,p)):m.concat(e(y[g],n+(c?"."+g:"["+g+"]"),i,o,a,s,l,u,c,f,d,p)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,u="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,c="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,y=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,b="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var h,v,g=i.formatters[r.format];"function"==typeof r.filter?(v=r.filter,n=v("",n)):Array.isArray(r.filter)&&(v=r.filter,h=v);var w=[];if("object"!=typeof n||null===n)return"";var _;_=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var x=o[_];h||(h=Object.keys(n)),p&&h.sort(p);for(var j=0;j<h.length;++j){var O=h[j];c&&null===n[O]||(w=w.concat(l(n[O],O,x,u,c,f?d:null,v,p,y,m,g,b)))}return w.join(a)}},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["content-bg"]},[n("div",{staticClass:["content-wrap"]},[n("input",{staticClass:["inputTel"],attrs:{type:"text",placeholder:"请输入手机号码"},on:{input:e.inputPhoneNum}}),n("div",{staticClass:["mesgVerify-wrap"]},[n("input",{staticClass:["inputVerify"],attrs:{type:"text",placeholder:"请输入短信验证码"},on:{input:e.inputMesgVerify}}),n("get-verify",{staticClass:["getMesgVerify"],attrs:{phoneNum:e.phoneNum,canVerify:e.canVerify},on:{input:function(t){return e.canVerify=t}}})],1),n("text",{staticClass:["submitBtn"],on:{click:e.submitForm}},[e._v(e._s(e.buttonText))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},94:function(e,t,n){var r,i,o=[];o.push(n(56)),r=n(51);var a=n(60);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/getMesgVerify.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-20cda974",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r}});