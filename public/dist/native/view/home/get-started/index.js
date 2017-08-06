// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=465)}({0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"}}},1:function(t,e,r){"use strict";var o=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return o.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},100:function(t,e,r){var o,i,n=[];n.push(r(70)),o=r(69);var a=r(74);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabbar.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-3cbe2e3c",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},2:function(t,e,r){"use strict";var o=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},o=0;o<t.length;++o)void 0!==t[o]&&(r[o]=t[o]);return r},e.merge=function(t,r,i){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(i.plainObjects||i.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var n=t;return Array.isArray(t)&&!Array.isArray(r)&&(n=e.arrayToObject(t,i)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,n){o.call(t,n)?t[n]&&"object"==typeof t[n]?t[n]=e.merge(t[n],r,i):t.push(r):t[n]=r}),t):Object.keys(r).reduce(function(t,o){var n=r[o];return Object.prototype.hasOwnProperty.call(t,o)?t[o]=e.merge(t[o],n,i):t[o]=n,t},n)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",o=0;o<e.length;++o){var n=e.charCodeAt(o);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=e.charAt(o):n<128?r+=i[n]:n<2048?r+=i[192|n>>6]+i[128|63&n]:n<55296||n>=57344?r+=i[224|n>>12]+i[128|n>>6&63]+i[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(o)),r+=i[240|n>>18]+i[128|n>>12&63]+i[128|n>>6&63]+i[128|63&n])}return r},e.compact=function(t,r){if("object"!=typeof t||null===t)return t;var o=r||[],i=o.indexOf(t);if(-1!==i)return o[i];if(o.push(t),Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?n.push(e.compact(t[a],o)):void 0!==t[a]&&n.push(t[a]);return n}return Object.keys(t).forEach(function(r){t[r]=e.compact(t[r],o)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},238:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(60),n=o(i),a=r(3),l=o(a);e.default={props:{index:{type:[String,Number,Boolean,Object,Array],default:0}},data:function(){return{tabbarTop:0,title:"新手营",navBarHeight:88,dir:"examples",baseURL:"",subPath:"Web"===weex.config.env.platform?"vue-web/":"",tabItems:[{index:0,title:"新手学堂",titleFontSize:"30px",src:"/school/index.js",visibility:"visible"},{index:1,title:"热链推荐",titleFontSize:"30px",src:"/hot-chain/index.js",visibility:"hidden"},{index:2,title:"热币推荐",titleFontSize:"30px",src:"/hot-coin/index.js",visibility:"hidden"}]}},created:function(){for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=n.default.js(e.src),l.default.log("tabItem.src "+e.src)}},methods:{selectTab:function(t){console.log("select "+t.index),this.index=t.index},tabBarOnClick:function(t){console.log("tabBarOnClick",t.index)}},components:{nTabbar:r(100),backNavpage:r(98)}}},273:function(t,e){t.exports={root:{width:750},border:{borderWidth:1},category:{flexDirection:"row",width:750,height:100,backgroundColor:"#f3f3f3"},category_box:{height:100,justifyContent:"center",borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#f3f3f3"},category_item:{flexDirection:"row",width:250,height:100,alignItems:"center",justifyContent:"center"},category_select:{borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#ff6539"},"tab-active":{color:"#ff6539"}}},3:function(t,e,r){"use strict";function o(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function i(t,e){d||o("["+t+"]  "+n(e))}function n(t,e,r){if(void 0===e&&(e=10),void 0===r&&(r=0),r===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var o="",i=0;i<r;i++)o+="    ";var a=o+"    ",l="{\n",s=!0;for(var c in t)if(0===i&&i++,t.hasOwnProperty(c)){s=!1;var u=n(t[c],e,r+1);u.indexOf("function"),l+=a,t.hasOwnProperty(c)||(l+="prototype.");var d=f(t[c]);l+=c,l+="["+d,l+="]",l+=" : ",l+=u,l+=" ,\n"}return l+=o+"}",s&&(l="{}"),l}function a(t,e){arguments.length>=2?o("WARN-"+t+"  "+e):(e=t,o("WARN  "+e))}function l(t,e,r,o){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+n({expression:t,msg:e,info0:r,info1:o})+"------------create ------------\n"+function(){var t="",e=0,r=arguments.callee;do{if(e>=3&&e<10){t+=""+r}else if(e>=10)break;r=r.arguments.callee.caller,e++}while(r);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function s(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),l(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),o(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},d=!1;e.default={log:o,dump:i,testBegin:s,testEnd:c}},322:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("back-navpage",{attrs:{title:t.title}},[r("n-tabbar",{attrs:{marginTop:t.tabbarTop,backgroundColor:"#f7f7f7",bottomSelectedColor:"#FB633C",bottomUnSelectedColor:"#f7f7f7",tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},34:function(t,e,r){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},4:function(t,e,r){"use strict";function o(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function n(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:o,isWeb:i,getDeviceInfo:n}},40:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},44:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():r("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?r("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[r("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc}})]):t._e(),t.leftItemSrc?t._e():r("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?r("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),r("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},465:function(t,e,r){var o,i,n=[];n.push(r(273)),o=r(238);var a=r(322);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-1d80329e",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o,t.exports.el="true",new Vue(t.exports)},48:function(t,e,r){"use strict";var o=r(4),i=function(t){return t&&t.__esModule?t:{default:t}}(o);t.exports={components:{navbar:r(61)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(i.default.isIOS()){var t=weex.config.env,e=t.scale,r=t.deviceWidth/e;this.height=48e3/r}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},49:function(t,e,r){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},5:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,r=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,o="";if(e)o="file://assets/dist/native/";else if(r)o=t.substring(0,t.lastIndexOf("native/")+5);else{var i=p.default+":8080",n=/\/\/([^\/]+?)\//.exec(t);n&&n.length>=2&&(i=n[1]),o="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":o}function n(t,e){if(h.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,l(y.default.web,e)}function a(t,e){_.push({url:e?t+"?"+u.default.stringify(e):t,animated:"true"},function(t){v.default.log("callback: ",t)})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,v.default.log("getBaseUrl",i());var r=e?""+i()+t.jsPath+".js?"+u.default.stringify(e):""+i()+t+".js";v.default.log("push "+r),_.push({url:r,animated:"true"},function(t){v.default.log("callback: ",t)})}function s(){_.pop({animated:"true"},function(t){v.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=r(7),u=o(f),d=r(6),p=o(d),m=r(4),h=o(m),b=r(0),y=o(b),g=r(3),v=o(g),_=weex.requireModule("navigator");e.default={push:l,pushByUrl:a,getBaseUrl:i,pushWeb:n,pop:s}},51:function(t,e){t.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},52:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},56:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["container"],style:{height:t.height},on:{click:t.onclickitem}},[r("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[r("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},57:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrapper"]},[r("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),r("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.199.161"},60:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={js:function(t){var e=weex.config.bundleUrl;if("undefined"==typeof window){for(e=e.substring(0,e.lastIndexOf("/"));-1!==t.indexOf("../");)t=t.substr(3),e=e.substr(0,e.lastIndexOf("/"));return e+t}var r=new URL(e).origin+"/web/?page=/dist/web"+encodeURI(t);return console.log("webUrl="+r),r},img:function(t){var e=weex.config.bundleUrl;return new URL(e).hostname+"url"}}},61:function(t,e,r){var o,i,n=[];n.push(r(40)),o=r(34);var a=r(44);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-7c73bc08",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},65:function(t,e,r){var o,i,n=[];n.push(r(52)),o=r(48);var a=r(57);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-156f9af6",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},67:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void i.default.pop();this.$emit("naviBarLeftItemClick",t)}},components:{navpage:r(65)}}},69:function(t,e,r){"use strict";t.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:r(81)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var r=this.tabItems[e];e==t?(r.icon=r.selectedImage,r.titleColor=this.selectedColor,r.bottomColor=this.bottomSelectedColor,r.visibility="visible"):(r.icon=r.image,r.titleColor=this.unselectedColor,r.bottomColor=this.bottomUnSelectedColor,r.visibility="hidden")}}}}},7:function(t,e,r){"use strict";var o=r(9),i=r(8),n=r(1);t.exports={formats:n,parse:i,stringify:o}},70:function(t,e){t.exports={border:{borderWidth:1},wrapper:{width:750,position:"absolute",left:0,right:0,bottom:0},tabbase:{width:750,flexDirection:"row",justifyContent:"space-around"},"tabbase-scroller":{flexDirection:"row",justifyContent:"space-around"},content:{width:750,position:"absolute",bottom:0,left:0,right:0}}},71:function(t,e){t.exports={root:{width:750}}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrapper"],style:{top:t.marginTop}},[r("scroller",{staticStyle:{flexDirection:"row"},appendAsTree:!0,attrs:{append:"tree",scrollDirection:"horizontal"}},[r("div",{class:[0==t.scrolleable?"tabbase":"tabbase-scroller"],style:{height:t.tabHeight,backgroundColor:t.backgroundColor}},t._l(t.tabItems,function(e){return r("div",{key:e.index,style:{height:t.tabHeight}},[r("tabitem",{attrs:{index:e.index,title:e.title,height:t.tabHeight,margin:t.tabMargin,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:t.tabItemOnClick}})],1)}))]),t._l(t.tabItems,function(e,o){return r("embed",{key:o,staticClass:["content"],style:{visibility:e.visibility,top:t.tabHeight},attrs:{src:e.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},75:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("navpage",{staticClass:["root"],attrs:{dataRole:t.dataRole,title:t.title,leftItemSrc:t.leftItemSrc},on:{naviBarLeftItemClick:t.leftItemClick}},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},8:function(t,e,r){"use strict";var o=r(2),i=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var r={},o=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),n=0;n<o.length;++n){var a,l,s=o[n],c=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;-1===c?(a=e.decoder(s),l=e.strictNullHandling?null:""):(a=e.decoder(s.slice(0,c)),l=e.decoder(s.slice(c+1))),i.call(r,a)?r[a]=[].concat(r[a]).concat(l):r[a]=l}return r},l=function(t,e,r){if(!t.length)return e;var o,i=t.shift();if("[]"===i)o=[],o=o.concat(l(t,e,r));else{o=r.plainObjects?Object.create(null):{};var n="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(n,10);!isNaN(a)&&i!==n&&String(a)===n&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(o=[],o[a]=l(t,e,r)):o[n]=l(t,e,r)}return o},s=function(t,e,r){if(t){var o=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=n.exec(o),c=s?o.slice(0,s.index):o,f=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;f.push(c)}for(var u=0;null!==(s=a.exec(o))&&u<r.depth;){if(u+=1,!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+o.slice(s.index)+"]"),l(f,e,r)}};t.exports=function(t,e){var r=e||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"==typeof r.depth?r.depth:n.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof t?a(t,r):t,l=r.plainObjects?Object.create(null):{},c=Object.keys(i),f=0;f<c.length;++f){var u=c[f],d=s(u,i[u],r);l=o.merge(l,d,r)}return o.compact(l)}},81:function(t,e,r){var o,i,n=[];n.push(r(51)),o=r(49);var a=r(56);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-0c6e4d3a",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},9:function(t,e,r){"use strict";var o=r(2),i=r(1),n={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},s=function t(e,r,i,n,a,l,s,c,f,u,d,p){var m=e;if("function"==typeof s)m=s(r,m);else if(m instanceof Date)m=u(m);else if(null===m){if(n)return l&&!p?l(r):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||o.isBuffer(m)){if(l){return[d(p?r:l(r))+"="+d(l(m))]}return[d(r)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var b;if(Array.isArray(s))b=s;else{var y=Object.keys(m);b=c?y.sort(c):y}for(var g=0;g<b.length;++g){var v=b[g];a&&null===m[v]||(h=Array.isArray(m)?h.concat(t(m[v],i(r,v),i,n,a,l,s,c,f,u,d,p)):h.concat(t(m[v],r+(f?"."+v:"["+v+"]"),i,n,a,l,s,c,f,u,d,p)))}return h};t.exports=function(t,e){var r=t,o=e||{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===o.delimiter?l.delimiter:o.delimiter,c="boolean"==typeof o.strictNullHandling?o.strictNullHandling:l.strictNullHandling,f="boolean"==typeof o.skipNulls?o.skipNulls:l.skipNulls,u="boolean"==typeof o.encode?o.encode:l.encode,d="function"==typeof o.encoder?o.encoder:l.encoder,p="function"==typeof o.sort?o.sort:null,m=void 0!==o.allowDots&&o.allowDots,h="function"==typeof o.serializeDate?o.serializeDate:l.serializeDate,b="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:l.encodeValuesOnly;if(void 0===o.format)o.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,o.format))throw new TypeError("Unknown format option provided.");var y,g,v=i.formatters[o.format];"function"==typeof o.filter?(g=o.filter,r=g("",r)):Array.isArray(o.filter)&&(g=o.filter,y=g);var _=[];if("object"!=typeof r||null===r)return"";var x;x=o.arrayFormat in n?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var w=n[x];y||(y=Object.keys(r)),p&&y.sort(p);for(var C=0;C<y.length;++C){var I=y[C];f&&null===r[I]||(_=_.concat(s(r[I],I,w,c,f,u?d:null,g,p,m,h,v,b)))}return _.join(a)}},98:function(t,e,r){var o,i,n=[];n.push(r(71)),o=r(67);var a=r(75);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-4fa3807a",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o}});