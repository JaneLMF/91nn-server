// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=512)}({0:function(e,t,n){"use strict";var i=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},1:function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(n[i]=e[i]);return n},t.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(r.plainObjects||r.allowPrototypes||!i.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){i.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,r):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,i){var o=n[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],o,r):e[i]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",i=0;i<t.length;++i){var o=t.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(i):o<128?n+=r[o]:o<2048?n+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?n+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),n+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var i=n||[],r=i.indexOf(e);if(-1!==r)return i[r];if(i.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],i)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},10:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},11:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?n("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[n("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():n("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?n("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),n("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},13:function(e,t,n){"use strict";var i=n(3),r=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports={components:{navbar:n(16)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(r.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},14:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),n("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},16:function(e,t,n){var i,r,o=[];o.push(n(11)),i=n(10);var a=n(12);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7c73bc08",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mesgRow:{default:function(){return{iconUrl:"",iconName:"",newestMesg:"",time:"",mesgCount:0}}}},methods:{clickIt:function(){this.$emit("callBack")}}}},17:function(e,t,n){var i,r,o=[];o.push(n(14)),i=n(13);var a=n(15);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-156f9af6",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void r.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:n(17)}}},185:function(e,t){e.exports={"mesg-row-bg":{width:750,backgroundColor:"#ffffff"},"mesg-row-wrap":{marginRight:30,marginLeft:30,width:690},"mesg-row-content-wrap":{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:690,height:140},"tit-wrap":{flexDirection:"row"},"tit-icon":{width:80,height:80},"tit-content-wrap":{marginLeft:50,height:80,justifyContent:"center",alignItems:"flex-start"},"tit-content":{fontSize:32,color:"#434343"},"newest-mesg":{marginTop:10,fontSize:22,color:"#959595"},"mesg-wrap":{justifyContent:"center"},time:{fontSize:20,color:"#959595"},count:{marginTop:20,paddingLeft:10,paddingRight:10,height:26,lineHeight:26,borderRadius:26,fontSize:20,color:"#ffffff",backgroundColor:"#ff5250"},line:{marginLeft:130,width:560,height:1,backgroundColor:"#e5e5e5"}}},19:function(e,t){e.exports={root:{width:750}}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"}}},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,leftItemSrc:e.leftItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["mesg-row-bg"],on:{click:e.clickIt}},[n("div",{staticClass:["mesg-row-wrap"]},[n("div",{staticClass:["mesg-row-content-wrap"]},[n("div",{staticClass:["tit-wrap"]},[n("image",{staticClass:["tit-icon"],attrs:{src:e.mesgRow.iconUrl}}),n("div",{staticClass:["tit-content-wrap"]},[n("text",{staticClass:["tit-content"]},[e._v(e._s(e.mesgRow.iconName))]),e.mesgRow.newestMesg.length>0?n("text",{staticClass:["newest-mesg"]},[e._v(e._s(e.mesgRow.newestMesg))]):e._e()])]),0!=e.mesgRow.mesgCount?n("div",{staticClass:["mesg-wrap"]},[n("text",{staticClass:["time"]},[e._v(e._s(e.mesgRow.time))]),n("text",{staticClass:["count"]},[e._v(e._s(e.mesgRow.mesgCount))])]):e._e()]),n("div",{staticClass:["line"]})])])},staticRenderFns:[]},e.exports.render._withStripped=!0},21:function(e,t,n){var i,r,o=[];o.push(n(19)),i=n(18);var a=n(20);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4fa3807a",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i},264:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=i(r),a=n(4),s=i(a);t.default={data:function(){return{title:"消息",mesgRow:[{iconUrl:"/resources/mesgBox/comment.png",iconName:"评论我",newestMesg:"",time:"05/23",mesgCount:0},{iconUrl:"/resources/mesgBox/at.png",iconName:"@我",newestMesg:"",time:"05/23",mesgCount:20},{iconUrl:"/resources/mesgBox/agree.png",iconName:"赞",newestMesg:"",time:"05/23",mesgCount:20},{iconUrl:"/resources/mesgBox/mesg.png",iconName:"私信",newestMesg:"比特时代给你留言",time:"05/23",mesgCount:5},{iconUrl:"/resources/mesgBox/service.png",iconName:"小秘书",newestMesg:"你好！欢迎使用链链。如果在使用过程中...",time:"05/23",mesgCount:5}]}},components:{mesgRow:n(428),backNavpage:n(21)},methods:{callBack0:function(){s.default.push(o.default.commentMe)},callBack1:function(){s.default.push(o.default.atMe)},callBack2:function(){s.default.push(o.default.agreeMe)}}}},286:function(e,t){e.exports={}},3:function(e,t,n){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:r,getDeviceInfo:o}},340:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("back-navpage",{attrs:{title:e.title}},[n("div",[n("mesg-row",{attrs:{mesgRow:e.mesgRow[0]},on:{callBack:e.callBack0}}),n("mesg-row",{attrs:{mesgRow:e.mesgRow[1]},on:{callBack:e.callBack1}}),n("mesg-row",{attrs:{mesgRow:e.mesgRow[2]},on:{callBack:e.callBack2}}),n("mesg-row",{attrs:{mesgRow:e.mesgRow[3]},on:{callBack:e.callBack3}}),n("mesg-row",{attrs:{mesgRow:e.mesgRow[4]},on:{callBack:e.callBack4}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(n)i=e.substring(0,e.lastIndexOf("native/")+5);else{var r=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(r=o[1]),i="http://"+r+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":i}function o(e,t){if(g.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){b.push({url:t?e+"?"+u.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,w.default.log("getBaseUrl",r());var n=t?""+r()+e.jsPath+".js?"+u.default.stringify(t):""+r()+e+".js";w.default.log("push "+n),b.push({url:n,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(7),u=i(f),d=n(6),p=i(d),m=n(3),g=i(m),h=n(2),y=i(h),v=n(5),w=i(v),b=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:r,pushWeb:o,pop:l}},428:function(e,t,n){var i,r,o=[];o.push(n(185)),i=n(167);var a=n(200);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgRow/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4e9bfc44",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i},5:function(e,t,n){"use strict";function i(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function r(e,t){d||i("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":f(e)))return""+e;for(var i="",r=0;r<n;r++)i+="    ";var a=i+"    ",s="{\n",l=!0;for(var c in e)if(0===r&&r++,e.hasOwnProperty(c)){l=!1;var u=o(e[c],t,n+1);u.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var d=f(e[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=u,s+=" ,\n"}return s+=i+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function s(e,t,n,i){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:i})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(e){u._testEnd=(new Date).getTime(),s(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=u||{},d=!1;t.default={log:i,dump:r,testBegin:l,testEnd:c}},512:function(e,t,n){var i,r,o=[];o.push(n(286)),i=n(264);var a=n(340);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/mesgBox/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-0e38f8de",r.style=r.style||{},o.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),e.exports=i,e.exports.el="true",new Vue(e.exports)},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.1.106"},7:function(e,t,n){"use strict";var i=n(9),r=n(8),o=n(0);e.exports={formats:o,parse:r,stringify:i}},8:function(e,t,n){"use strict";var i=n(1),r=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<i.length;++o){var a,s,l=i[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),r.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var i,r=e.shift();if("[]"===r)i=[],i=i.concat(s(e,t,n));else{i=n.plainObjects?Object.create(null):{};var o="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,a=parseInt(o,10);!isNaN(a)&&r!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(i=[],i[a]=s(e,t,n)):i[o]=s(e,t,n)}return i},l=function(e,t,n){if(e){var i=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(i),c=l?i.slice(0,l.index):i,f=[];if(c){if(!n.plainObjects&&r.call(Object.prototype,c)&&!n.allowPrototypes)return;f.push(c)}for(var u=0;null!==(l=a.exec(i))&&u<n.depth;){if(u+=1,!n.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+i.slice(l.index)+"]"),s(f,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||i.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var r="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(r),f=0;f<c.length;++f){var u=c[f],d=l(u,r[u],n);s=i.merge(s,d,n)}return i.compact(s)}},9:function(e,t,n){"use strict";var i=n(1),r=n(0),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,r,o,a,s,l,c,f,u,d,p){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=u(m);else if(null===m){if(o)return s&&!p?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(s){return[d(p?n:s(n))+"="+d(s(m))]}return[d(n)+"="+d(String(m))]}var g=[];if(void 0===m)return g;var h;if(Array.isArray(l))h=l;else{var y=Object.keys(m);h=c?y.sort(c):y}for(var v=0;v<h.length;++v){var w=h[v];a&&null===m[w]||(g=Array.isArray(m)?g.concat(e(m[w],r(n,w),r,o,a,s,l,c,f,u,d,p)):g.concat(e(m[w],n+(f?"."+w:"["+w+"]"),r,o,a,s,l,c,f,u,d,p)))}return g};e.exports=function(e,t){var n=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?s.delimiter:i.delimiter,c="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,u="boolean"==typeof i.encode?i.encode:s.encode,d="function"==typeof i.encoder?i.encoder:s.encoder,p="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,g="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,h="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,w=r.formatters[i.format];"function"==typeof i.filter?(v=i.filter,n=v("",n)):Array.isArray(i.filter)&&(v=i.filter,y=v);var b=[];if("object"!=typeof n||null===n)return"";var _;_=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=o[_];y||(y=Object.keys(n)),p&&y.sort(p);for(var j=0;j<y.length;++j){var I=y[j];f&&null===n[I]||(b=b.concat(l(n[I],I,x,c,f,u?d:null,v,p,m,g,w,h)))}return b.join(a)}}});