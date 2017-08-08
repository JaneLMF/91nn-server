// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=545)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},1:function(t,e,n){"use strict";var i=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return i.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},10:function(t,e,n){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},101:function(t,e){t.exports={sendMesg:{width:200,height:60,lineHeight:60,textAlign:"center",borderRadius:8,color:"#ffffff",fontSize:28},action:{backgroundColor:"#fc6d3f"},disabled:{backgroundColor:"#bbbbbb"}}},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["sendMesg"],class:[t.canVerify?"action":"disabled"],on:{click:function(e){t.sendVerify()}}},[t._v(t._s(t.content))])},staticRenderFns:[]},t.exports.render._withStripped=!0},11:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():n("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?n("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[n("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc}})]):t._e(),t.leftItemSrc?t._e():n("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?n("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),n("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},13:function(t,e,n){"use strict";var i=n(3),r=function(t){return t&&t.__esModule?t:{default:t}}(i);t.exports={components:{navbar:n(16)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(r.default.isIOS()){var t=weex.config.env,e=t.scale,n=t.deviceWidth/e;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{buttonText:{default:""},submitAction:{default:function(){}}},data:function(){return{phoneNum:"",mesgVerify:"",canVerify:!1}},components:{getVerify:n(166)},methods:{inputPhoneNum:function(t){this.phoneNum=t.value,/^1[0-9]{10}$/.test(t.value)&&(this.canVerify=!0)},inputMesgVerify:function(t){this.mesgVerify=t.value},submitForm:function(){this.submitAction()}}}},14:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},147:function(t,e){t.exports={"content-bg":{width:750,backgroundColor:"#ffffff"},"content-wrap":{marginLeft:90,marginRight:90,marginTop:56},inputTel:{width:570,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},"mesgVerify-wrap":{marginTop:56,flexDirection:"row",justifyContent:"space-between"},inputVerify:{width:350,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},submitBtn:{marginTop:80,width:570,height:70,backgroundColor:"#fc6d3f",color:"#ffffff",fontSize:32,lineHeight:70,textAlign:"center",borderRadius:8}}},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),n("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},16:function(t,e,n){var i,r,o=[];o.push(n(11)),i=n(10);var a=n(12);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7c73bc08",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["content-bg"]},[n("div",{staticClass:["content-wrap"]},[n("input",{staticClass:["inputTel"],attrs:{type:"text",placeholder:"请输入手机号码"},on:{input:t.inputPhoneNum}}),n("div",{staticClass:["mesgVerify-wrap"]},[n("input",{staticClass:["inputVerify"],attrs:{type:"text",placeholder:"请输入短信验证码"},on:{input:t.inputMesgVerify}}),n("get-verify",{staticClass:["getMesgVerify"],attrs:{phoneNum:t.phoneNum,canVerify:t.canVerify},on:{input:function(e){return t.canVerify=e}}})],1),n("text",{staticClass:["submitBtn"],on:{click:t.submitForm}},[t._v(t._s(t.buttonText))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},166:function(t,e,n){var i,r,o=[];o.push(n(101)),i=n(96);var a=n(109);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/getMesgVerify.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-20cda974",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i},17:function(t,e,n){var i,r,o=[];o.push(n(14)),i=n(13);var a=n(15);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-156f9af6",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void r.default.pop();this.$emit("naviBarLeftItemClick",t)}},components:{navpage:n(17)}}},19:function(t,e){t.exports={root:{width:750}}},2:function(t,e,n){"use strict";var i=Object.prototype.hasOwnProperty,r=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)void 0!==t[i]&&(n[i]=t[i]);return n},e.merge=function(t,n,r){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(r.plainObjects||r.allowPrototypes||!i.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var o=t;return Array.isArray(t)&&!Array.isArray(n)&&(o=e.arrayToObject(t,r)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(n,o){i.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e.merge(t[o],n,r):t.push(n):t[o]=n}),t):Object.keys(n).reduce(function(t,i){var o=n[i];return Object.prototype.hasOwnProperty.call(t,i)?t[i]=e.merge(t[i],o,r):t[i]=o,t},o)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),n="",i=0;i<e.length;++i){var o=e.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=e.charAt(i):o<128?n+=r[o]:o<2048?n+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?n+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(i)),n+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return n},e.compact=function(t,n){if("object"!=typeof t||null===t)return t;var i=n||[],r=i.indexOf(t);if(-1!==r)return i[r];if(i.push(t),Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?o.push(e.compact(t[a],i)):void 0!==t[a]&&o.push(t[a]);return o}return Object.keys(t).forEach(function(n){t[n]=e.compact(t[n],i)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},20:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("navpage",{staticClass:["root"],attrs:{dataRole:t.dataRole,title:t.title,leftItemSrc:t.leftItemSrc},on:{naviBarLeftItemClick:t.leftItemClick}},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},21:function(t,e,n){var i,r,o=[];o.push(n(19)),i=n(18);var a=n(20);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4fa3807a",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i},227:function(t,e,n){var i,r,o=[];o.push(n(147)),i=n(130);var a=n(160);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7f2ec36a",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i},284:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=i(r),a=n(4),s=i(a);e.default={data:function(){return{title:"绑定手机号",buttonText:"完成绑定",submitAction:function(){s.default.push(o.default.submitNewPw)}}},components:{mesgVerify:n(227),backNavpage:n(21)}}},3:function(t,e,n){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function o(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:i,isWeb:r,getDeviceInfo:o}},391:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("back-navpage",{attrs:{title:t.title}},[n("div",[n("mesg-verify",{attrs:{buttonText:t.buttonText,submitAction:t.submitAction}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},4:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,n=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,i="";if(e)i="file://assets/dist/native/";else if(n)i=t.substring(0,t.lastIndexOf("native/")+5);else{var r=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(t);o&&o.length>=2&&(r=o[1]),i="http://"+r+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":i}function o(t,e){if(h.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,s(g.default.web,e)}function a(t,e){_.push({url:e?t+"?"+u.default.stringify(e):t,animated:"true"},function(t){b.default.log("callback: ",t)})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,b.default.log("getBaseUrl",r());var n=e?""+r()+t.jsPath+".js?"+u.default.stringify(e):""+r()+t+".js";b.default.log("push "+n),_.push({url:n,animated:"true"},function(t){b.default.log("callback: ",t)})}function l(){_.pop({animated:"true"},function(t){b.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=n(7),u=i(f),d=n(6),p=i(d),m=n(3),h=i(m),y=n(0),g=i(y),v=n(5),b=i(v),_=weex.requireModule("navigator");e.default={push:s,pushByUrl:a,getBaseUrl:r,pushWeb:o,pop:l}},5:function(t,e,n){"use strict";function i(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function r(t,e){d||i("["+t+"]  "+o(e))}function o(t,e,n){if(void 0===e&&(e=10),void 0===n&&(n=0),n===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var i="",r=0;r<n;r++)i+="    ";var a=i+"    ",s="{\n",l=!0;for(var c in t)if(0===r&&r++,t.hasOwnProperty(c)){l=!1;var u=o(t[c],e,n+1);u.indexOf("function"),s+=a,t.hasOwnProperty(c)||(s+="prototype.");var d=f(t[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=u,s+=" ,\n"}return s+=i+"}",l&&(s="{}"),s}function a(t,e){arguments.length>=2?i("WARN-"+t+"  "+e):(e=t,i("WARN  "+e))}function s(t,e,n,i){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+o({expression:t,msg:e,info0:n,info1:i})+"------------create ------------\n"+function(){var t="",e=0,n=arguments.callee;do{if(e>=3&&e<10){t+=""+n}else if(e>=10)break;n=n.arguments.callee.caller,e++}while(n);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),s(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),i(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},d=!1;e.default={log:i,dump:r,testBegin:l,testEnd:c}},545:function(t,e,n){var i,r,o=[];i=n(284);var a=n(391);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/settings/bindAccount/updateAccount.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i,t.exports.el="true",new Vue(t.exports)},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.1.106"},7:function(t,e,n){"use strict";var i=n(9),r=n(8),o=n(1);t.exports={formats:o,parse:r,stringify:i}},8:function(t,e,n){"use strict";var i=n(2),r=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var n={},i=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),o=0;o<i.length;++o){var a,s,l=i[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=e.decoder(l),s=e.strictNullHandling?null:""):(a=e.decoder(l.slice(0,c)),s=e.decoder(l.slice(c+1))),r.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(t,e,n){if(!t.length)return e;var i,r=t.shift();if("[]"===r)i=[],i=i.concat(s(t,e,n));else{i=n.plainObjects?Object.create(null):{};var o="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,a=parseInt(o,10);!isNaN(a)&&r!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(i=[],i[a]=s(t,e,n)):i[o]=s(t,e,n)}return i},l=function(t,e,n){if(t){var i=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(i),c=l?i.slice(0,l.index):i,f=[];if(c){if(!n.plainObjects&&r.call(Object.prototype,c)&&!n.allowPrototypes)return;f.push(c)}for(var u=0;null!==(l=a.exec(i))&&u<n.depth;){if(u+=1,!n.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+i.slice(l.index)+"]"),s(f,e,n)}};t.exports=function(t,e){var n=e||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||i.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===t||null===t||void 0===t)return n.plainObjects?Object.create(null):{};for(var r="string"==typeof t?a(t,n):t,s=n.plainObjects?Object.create(null):{},c=Object.keys(r),f=0;f<c.length;++f){var u=c[f],d=l(u,r[u],n);s=i.merge(s,d,n)}return i.compact(s)}},9:function(t,e,n){"use strict";var i=n(2),r=n(1),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,n,r,o,a,s,l,c,f,u,d,p){var m=e;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=u(m);else if(null===m){if(o)return s&&!p?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(s){return[d(p?n:s(n))+"="+d(s(m))]}return[d(n)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var y;if(Array.isArray(l))y=l;else{var g=Object.keys(m);y=c?g.sort(c):g}for(var v=0;v<y.length;++v){var b=y[v];a&&null===m[b]||(h=Array.isArray(m)?h.concat(t(m[b],r(n,b),r,o,a,s,l,c,f,u,d,p)):h.concat(t(m[b],n+(f?"."+b:"["+b+"]"),r,o,a,s,l,c,f,u,d,p)))}return h};t.exports=function(t,e){var n=t,i=e||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?s.delimiter:i.delimiter,c="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,u="boolean"==typeof i.encode?i.encode:s.encode,d="function"==typeof i.encoder?i.encoder:s.encoder,p="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,v,b=r.formatters[i.format];"function"==typeof i.filter?(v=i.filter,n=v("",n)):Array.isArray(i.filter)&&(v=i.filter,g=v);var _=[];if("object"!=typeof n||null===n)return"";var x;x=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var w=o[x];g||(g=Object.keys(n)),p&&g.sort(p);for(var j=0;j<g.length;++j){var I=g[j];f&&null===n[I]||(_=_.concat(l(n[I],I,w,c,f,u?d:null,v,p,m,h,b,y)))}return _.join(a)}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{canVerify:{default:!1},phoneNum:{default:""}},data:function(){return{content:"获取验证码",seconds:10,timer:null}},methods:{sendVerify:function(){var t=this;this.canVerify&&(this.$emit("input",!1),this.canVerify=!1,this.timer=setInterval(function(){t.seconds--,t.content=t.seconds+"秒后重新获取",0==t.seconds&&(clearInterval(t.timer),t.content="重新获取",t.$emit("input",!0),t.seconds=10)},1e3))}}}}});