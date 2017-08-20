// { "framework": "Vue"} 

!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=577)}({0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},1:function(t,e,o){"use strict";var i=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return i.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},10:function(t,e,o){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},100:function(t,e,o){"use strict";t.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:o(121)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var o=this.tabItems[e];e==t?(o.icon=o.selectedImage,o.titleColor=this.selectedColor,o.bottomColor=this.bottomSelectedColor,o.visibility="visible"):(o.icon=o.image,o.titleColor=this.unselectedColor,o.bottomColor=this.bottomUnSelectedColor,o.visibility="hidden")}}}}},103:function(t,e){t.exports={border:{borderWidth:1},wrapper:{width:750,position:"absolute",left:0,right:0,bottom:0},tabbase:{width:750,flexDirection:"row",justifyContent:"space-around"},"tabbase-scroller":{flexDirection:"row",justifyContent:"space-around"},content:{width:750,position:"absolute",bottom:0,left:0,right:0}}},11:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"],style:{top:t.marginTop}},[o("scroller",{staticStyle:{flexDirection:"row"},appendAsTree:!0,attrs:{append:"tree",scrollDirection:"horizontal"}},[o("div",{class:[0==t.scrolleable?"tabbase":"tabbase-scroller"],style:{height:t.tabHeight,backgroundColor:t.backgroundColor}},t._l(t.tabItems,function(e){return o("div",{key:e.index,style:{height:t.tabHeight}},[o("tabitem",{attrs:{index:e.index,title:e.title,height:t.tabHeight,margin:t.tabMargin,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:function(o){t.tabItemOnClick(e)}}})],1)}))]),t._l(t.tabItems,function(e,i){return o("embed",{key:i,staticClass:["content"],style:{visibility:e.visibility,top:t.tabHeight},attrs:{src:e.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():o("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?o("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[o("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc}})]):t._e(),t.leftItemSrc?t._e():o("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?o("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?o("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),o("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},121:function(t,e,o){var i,r,n=[];n.push(o(79)),i=o(78);var a=o(84);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-0c6e4d3a",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},13:function(t,e,o){"use strict";var i=o(4),r=function(t){return t&&t.__esModule?t:{default:t}}(i);t.exports={components:{navbar:o(16)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(r.default.isIOS()){var t=weex.config.env,e=t.scale,o=t.deviceWidth/e;this.height=48e3/o}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},14:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},144:function(t,e,o){var i,r,n=[];n.push(o(103)),i=o(100);var a=o(111);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-3cbe2e3c",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"]},[o("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),o("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},16:function(t,e,o){var i,r,n=[];n.push(o(11)),i=o(10);var a=o(12);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7c73bc08",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},17:function(t,e,o){var i,r,n=[];n.push(o(14)),i=o(13);var a=o(15);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-156f9af6",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},18:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemSrc:{default:""}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void r.default.pop();this.$emit("naviBarLeftItemClick",t)}},components:{navpage:o(17)}}},19:function(t,e){t.exports={root:{width:750}}},2:function(t,e,o){"use strict";var i=Object.prototype.hasOwnProperty,r=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var o=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)void 0!==t[i]&&(o[i]=t[i]);return o},e.merge=function(t,o,r){if(!o)return t;if("object"!=typeof o){if(Array.isArray(t))t.push(o);else{if("object"!=typeof t)return[t,o];(r.plainObjects||r.allowPrototypes||!i.call(Object.prototype,o))&&(t[o]=!0)}return t}if("object"!=typeof t)return[t].concat(o);var n=t;return Array.isArray(t)&&!Array.isArray(o)&&(n=e.arrayToObject(t,r)),Array.isArray(t)&&Array.isArray(o)?(o.forEach(function(o,n){i.call(t,n)?t[n]&&"object"==typeof t[n]?t[n]=e.merge(t[n],o,r):t.push(o):t[n]=o}),t):Object.keys(o).reduce(function(t,i){var n=o[i];return Object.prototype.hasOwnProperty.call(t,i)?t[i]=e.merge(t[i],n,r):t[i]=n,t},n)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),o="",i=0;i<e.length;++i){var n=e.charCodeAt(i);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?o+=e.charAt(i):n<128?o+=r[n]:n<2048?o+=r[192|n>>6]+r[128|63&n]:n<55296||n>=57344?o+=r[224|n>>12]+r[128|n>>6&63]+r[128|63&n]:(i+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(i)),o+=r[240|n>>18]+r[128|n>>12&63]+r[128|n>>6&63]+r[128|63&n])}return o},e.compact=function(t,o){if("object"!=typeof t||null===t)return t;var i=o||[],r=i.indexOf(t);if(-1!==r)return i[r];if(i.push(t),Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?n.push(e.compact(t[a],i)):void 0!==t[a]&&n.push(t[a]);return n}return Object.keys(t).forEach(function(o){t[o]=e.compact(t[o],i)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},20:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("navpage",{staticClass:["root"],attrs:{dataRole:t.dataRole,title:t.title,titleColor:t.titleColor,backgroundColor:t.backgroundColor,rightItemTitle:t.rightItemTitle,leftItemSrc:t.leftItemSrc,rightItemSrc:t.rightItemSrc},on:{naviBarLeftItemClick:t.leftItemClick}},[t.showLine?o("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):t._e(),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},21:function(t,e,o){var i,r,n=[];n.push(o(19)),i=o(18);var a=o(20);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4fa3807a",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},291:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(89),n=i(r),a=o(5),l=i(a),s=o(462),c=i(s);e.default={props:{index:{type:[String,Number,Boolean,Object,Array],default:0}},data:function(){return{tabbarTop:0,title:"新手营",navBarHeight:88,dir:"examples",baseURL:"",subPath:"Web"===weex.config.env.platform?"vue-web/":"",tabItems:[{index:0,name:"school",title:"新手学堂",titleFontSize:"30px",src:"/school/index.js",visibility:"visible"},{index:1,name:"hot-chain",title:"热链推荐",titleFontSize:"30px",src:"/hot-chain/index.js",visibility:"hidden"},{index:2,name:"hot-coin",title:"热币推荐",titleFontSize:"30px",src:"/hot-coin/index.js",visibility:"hidden"}]}},created:function(){for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=n.default.js(e.src),l.default.log("tabItem.src "+e.src)}},methods:{selectTab:function(t){console.log("select "+t.index),this.index=t.index},tabBarOnClick:function(t){l.default.log("tabBarOnClick "+t.index),c.default.onPageStart(t.name)}},components:{nTabbar:o(144),backNavpage:o(21)}}},3:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,o=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,i="";if(e)i="file://assets/dist/native/";else if(o)i=t.substring(0,t.lastIndexOf("native/")+5);else{var r=p.default+":8080",n=/\/\/([^\/]+?)\//.exec(t);n&&n.length>=2&&(r=n[1]),i="http://"+r+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":i}function n(t,e){if(h.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,l(g.default.web,e)}function a(t,e){_.push({url:e?t+"?"+u.default.stringify(e):t,animated:"true"},function(t){v.default.log("callback: ",t)})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,e.pageName=t.pageName,v.default.log("getBaseUrl",r());var o=e?""+r()+t.jsPath+".js?"+u.default.stringify(e):""+r()+t+".js";v.default.log("push "+o),_.push({url:o,animated:"true"},function(t){v.default.log("callback: ",t)})}function s(){_.pop({animated:"true"},function(t){v.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=o(6),u=i(f),d=o(7),p=i(d),m=o(4),h=i(m),b=o(0),g=i(b),y=o(5),v=i(y),_=weex.requireModule("navigator");e.default={push:l,pushByUrl:a,getBaseUrl:r,pushWeb:n,pop:s}},338:function(t,e){t.exports={root:{width:750},border:{borderWidth:1},category:{flexDirection:"row",width:750,height:100,backgroundColor:"#f3f3f3"},category_box:{height:100,justifyContent:"center",borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#f3f3f3"},category_item:{flexDirection:"row",width:250,height:100,alignItems:"center",justifyContent:"center"},category_select:{borderTopColor:"#f3f3f3",borderTopWidth:4,borderBottomWidth:4,borderBottomColor:"#ff6539"},"tab-active":{color:"#ff6539"}}},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("back-navpage",{attrs:{title:t.title}},[o("n-tabbar",{attrs:{marginTop:t.tabbarTop,backgroundColor:"#f7f7f7",bottomSelectedColor:"#FB633C",bottomUnSelectedColor:"#f7f7f7",tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},4:function(t,e,o){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function n(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:i,isWeb:r,getDeviceInfo:n}},462:function(t,e,o){"use strict";function i(t){return new Promise(function(e,o){if(!t)return void o("pageName is invalue !!!");n.onPageStart(t),e()})}function r(t){return new Promise(function(e,o){if(!t)return void o("pageName is invalue !!!");n.onPageEnd(t),e()})}Object.defineProperty(e,"__esModule",{value:!0});var n=weex.requireModule("wtj");e.default={onPageStart:i,onPageEnd:r}},5:function(t,e,o){"use strict";function i(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function r(t,e){d||i("["+t+"]  "+n(e))}function n(t,e,o){if(void 0===e&&(e=10),void 0===o&&(o=0),o===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var i="",r=0;r<o;r++)i+="    ";var a=i+"    ",l="{\n",s=!0;for(var c in t)if(0===r&&r++,t.hasOwnProperty(c)){s=!1;var u=n(t[c],e,o+1);u.indexOf("function"),l+=a,t.hasOwnProperty(c)||(l+="prototype.");var d=f(t[c]);l+=c,l+="["+d,l+="]",l+=" : ",l+=u,l+=" ,\n"}return l+=i+"}",s&&(l="{}"),l}function a(t,e){arguments.length>=2?i("WARN-"+t+"  "+e):(e=t,i("WARN  "+e))}function l(t,e,o,i){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+n({expression:t,msg:e,info0:o,info1:i})+"------------create ------------\n"+function(){var t="",e=0,o=arguments.callee;do{if(e>=3&&e<10){t+=""+o}else if(e>=10)break;o=o.arguments.callee.caller,e++}while(o);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function s(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),l(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),i(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},d=!1;e.default={log:i,dump:r,testBegin:s,testEnd:c}},577:function(t,e,o){var i,r,n=[];n.push(o(338)),i=o(291);var a=o(399);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-1d80329e",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i,t.exports.el="true",new Vue(t.exports)},6:function(t,e,o){"use strict";var i=o(9),r=o(8),n=o(1);t.exports={formats:n,parse:r,stringify:i}},7:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.0.153"},78:function(t,e,o){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},79:function(t,e){t.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},8:function(t,e,o){"use strict";var i=o(2),r=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var o={},i=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),n=0;n<i.length;++n){var a,l,s=i[n],c=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;-1===c?(a=e.decoder(s),l=e.strictNullHandling?null:""):(a=e.decoder(s.slice(0,c)),l=e.decoder(s.slice(c+1))),r.call(o,a)?o[a]=[].concat(o[a]).concat(l):o[a]=l}return o},l=function(t,e,o){if(!t.length)return e;var i,r=t.shift();if("[]"===r)i=[],i=i.concat(l(t,e,o));else{i=o.plainObjects?Object.create(null):{};var n="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,a=parseInt(n,10);!isNaN(a)&&r!==n&&String(a)===n&&a>=0&&o.parseArrays&&a<=o.arrayLimit?(i=[],i[a]=l(t,e,o)):i[n]=l(t,e,o)}return i},s=function(t,e,o){if(t){var i=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=n.exec(i),c=s?i.slice(0,s.index):i,f=[];if(c){if(!o.plainObjects&&r.call(Object.prototype,c)&&!o.allowPrototypes)return;f.push(c)}for(var u=0;null!==(s=a.exec(i))&&u<o.depth;){if(u+=1,!o.plainObjects&&r.call(Object.prototype,s[1].slice(1,-1))&&!o.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+i.slice(s.index)+"]"),l(f,e,o)}};t.exports=function(t,e){var o=e||{};if(null!==o.decoder&&void 0!==o.decoder&&"function"!=typeof o.decoder)throw new TypeError("Decoder has to be a function.");if(o.delimiter="string"==typeof o.delimiter||i.isRegExp(o.delimiter)?o.delimiter:n.delimiter,o.depth="number"==typeof o.depth?o.depth:n.depth,o.arrayLimit="number"==typeof o.arrayLimit?o.arrayLimit:n.arrayLimit,o.parseArrays=!1!==o.parseArrays,o.decoder="function"==typeof o.decoder?o.decoder:n.decoder,o.allowDots="boolean"==typeof o.allowDots?o.allowDots:n.allowDots,o.plainObjects="boolean"==typeof o.plainObjects?o.plainObjects:n.plainObjects,o.allowPrototypes="boolean"==typeof o.allowPrototypes?o.allowPrototypes:n.allowPrototypes,o.parameterLimit="number"==typeof o.parameterLimit?o.parameterLimit:n.parameterLimit,o.strictNullHandling="boolean"==typeof o.strictNullHandling?o.strictNullHandling:n.strictNullHandling,""===t||null===t||void 0===t)return o.plainObjects?Object.create(null):{};for(var r="string"==typeof t?a(t,o):t,l=o.plainObjects?Object.create(null):{},c=Object.keys(r),f=0;f<c.length;++f){var u=c[f],d=s(u,r[u],o);l=i.merge(l,d,o)}return i.compact(l)}},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{height:t.height},on:{click:t.onclickitem}},[o("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[o("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},89:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={js:function(t){var e=weex.config.bundleUrl;if("undefined"==typeof window){for(e=e.substring(0,e.lastIndexOf("/"));-1!==t.indexOf("../");)t=t.substr(3),e=e.substr(0,e.lastIndexOf("/"));return e+t}var o=new URL(e).origin+"/web/?page=/dist/web"+encodeURI(t);return console.log("webUrl="+o),o},img:function(t){var e=weex.config.bundleUrl;return new URL(e).hostname+"url"}}},9:function(t,e,o){"use strict";var i=o(2),r=o(1),n={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},s=function t(e,o,r,n,a,l,s,c,f,u,d,p){var m=e;if("function"==typeof s)m=s(o,m);else if(m instanceof Date)m=u(m);else if(null===m){if(n)return l&&!p?l(o):o;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(l){return[d(p?o:l(o))+"="+d(l(m))]}return[d(o)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var b;if(Array.isArray(s))b=s;else{var g=Object.keys(m);b=c?g.sort(c):g}for(var y=0;y<b.length;++y){var v=b[y];a&&null===m[v]||(h=Array.isArray(m)?h.concat(t(m[v],r(o,v),r,n,a,l,s,c,f,u,d,p)):h.concat(t(m[v],o+(f?"."+v:"["+v+"]"),r,n,a,l,s,c,f,u,d,p)))}return h};t.exports=function(t,e){var o=t,i=e||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?l.delimiter:i.delimiter,c="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,u="boolean"==typeof i.encode?i.encode:l.encode,d="function"==typeof i.encoder?i.encoder:l.encoder,p="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,b="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,y,v=r.formatters[i.format];"function"==typeof i.filter?(y=i.filter,o=y("",o)):Array.isArray(i.filter)&&(y=i.filter,g=y);var _=[];if("object"!=typeof o||null===o)return"";var x;x=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var w=n[x];g||(g=Object.keys(o)),p&&g.sort(p);for(var I=0;I<g.length;++I){var C=g[I];f&&null===o[C]||(_=_.concat(s(o[C],C,w,c,f,u?d:null,y,p,m,h,v,b)))}return _.join(a)}}});