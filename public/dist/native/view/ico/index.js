// { "framework": "Vue"} 

!function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=643)}({0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},1:function(t,e,i){"use strict";function r(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function o(t,e){d||r("["+t+"]  "+n(e))}function n(t,e,i){if(void 0===e&&(e=10),void 0===i&&(i=0),i===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":f(t)))return""+t;for(var r="",o=0;o<i;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in t)if(0===o&&o++,t.hasOwnProperty(c)){l=!1;var u=n(t[c],e,i+1);u.indexOf("function"),s+=a,t.hasOwnProperty(c)||(s+="prototype.");var d=f(t[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=u,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(t,e){arguments.length>=2?r("WARN-"+t+"  "+e):(e=t,r("WARN  "+e))}function s(t,e,i,r){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+n({expression:t,msg:e,info0:i,info1:r})+"------------create ------------\n"+function(){var t="",e=0,i=arguments.callee;do{if(e>=3&&e<10){t+=""+i}else if(e>=10)break;i=i.arguments.callee.caller,e++}while(i);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),s(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),r(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},d=!1;e.default={log:r,dump:o,testBegin:l,testEnd:c}},109:function(t,e,i){"use strict";t.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:i(131)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var i=this.tabItems[e];e==t?(i.icon=i.selectedImage,i.titleColor=this.selectedColor,i.bottomColor=this.bottomSelectedColor,i.visibility="visible"):(i.icon=i.image,i.titleColor=this.unselectedColor,i.bottomColor=this.bottomUnSelectedColor,i.visibility="hidden")}}}}},11:function(t,e,i){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},113:function(t,e){t.exports={border:{borderWidth:1},wrapper:{width:750,position:"absolute",left:0,right:0,bottom:0},tabbase:{width:750,flexDirection:"row",justifyContent:"space-around"},"tabbase-scroller":{flexDirection:"row",justifyContent:"space-around"},content:{width:750,position:"absolute",bottom:0,left:0,right:0}}},12:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["wrapper"],style:{top:t.marginTop}},[i("scroller",{staticStyle:{flexDirection:"row"},appendAsTree:!0,attrs:{append:"tree",scrollDirection:"horizontal"}},[i("div",{class:[0==t.scrolleable?"tabbase":"tabbase-scroller"],style:{height:t.tabHeight,backgroundColor:t.backgroundColor}},t._l(t.tabItems,function(e){return i("div",{key:e.index,style:{height:t.tabHeight}},[i("tabitem",{attrs:{index:e.index,title:e.title,height:t.tabHeight,margin:t.tabMargin,titleFontSize:e.titleFontSize,titleColor:e.titleColor,bottomColor:e.bottomColor,backgroundColor:t.backgroundColor},on:{tabItemOnClick:function(i){t.tabItemOnClick(e)}}})],1)}))]),t._l(t.tabItems,function(e,r){return i("embed",{key:r,staticClass:["content"],style:{visibility:e.visibility,top:t.tabHeight},attrs:{src:e.src,type:"weex"}})})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():i("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?i("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[i("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc}})]):t._e(),t.leftItemSrc?t._e():i("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?i("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?i("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),i("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},131:function(t,e,i){var r,o,n=[];n.push(i(85)),r=i(84);var a=i(91);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-0c6e4d3a",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},15:function(t,e,i){"use strict";var r=i(5),o=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports={components:{navbar:i(18)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var t=weex.config.env,e=t.scale,i=t.deviceWidth/e;this.height=48e3/i}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},156:function(t,e,i){var r,o,n=[];n.push(i(113)),r=i(109);var a=i(121);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3cbe2e3c",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},16:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["wrapper"]},[i("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),i("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},18:function(t,e,i){var r,o,n=[];n.push(i(12)),r=i(11);var a=i(13);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7c73bc08",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},19:function(t,e,i){var r,o,n=[];n.push(i(16)),r=i(15);var a=i(17);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-156f9af6",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},2:function(t,e,i){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},rightItemSrc:{default:""},rightItemClickFn:{defauklt:Function}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",t)},rightItemClick:function(){this.rightItemClickFn()}},components:{navpage:i(19)}}},21:function(t,e){t.exports={root:{width:750}}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("navpage",{staticClass:["root"],attrs:{dataRole:t.dataRole,title:t.title,titleColor:t.titleColor,backgroundColor:t.backgroundColor,rightItemColor:t.rightItemColor,rightItemTitle:t.rightItemTitle,leftItemSrc:t.leftItemSrc,rightItemSrc:t.rightItemSrc},on:{naviBarRightItemClick:t.rightItemClick,naviBarLeftItemClick:t.leftItemClick}},[t.showLine?i("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):t._e(),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},23:function(t,e,i){var r,o,n=[];n.push(i(21)),r=i(20);var a=i(22);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-4fa3807a",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},3:function(t,e,i){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var i=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(i[r]=t[r]);return i},e.merge=function(t,i,o){if(!i)return t;if("object"!=typeof i){if(Array.isArray(t))t.push(i);else{if("object"!=typeof t)return[t,i];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,i))&&(t[i]=!0)}return t}if("object"!=typeof t)return[t].concat(i);var n=t;return Array.isArray(t)&&!Array.isArray(i)&&(n=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(i)?(i.forEach(function(i,n){r.call(t,n)?t[n]&&"object"==typeof t[n]?t[n]=e.merge(t[n],i,o):t.push(i):t[n]=i}),t):Object.keys(i).reduce(function(t,r){var n=i[r];return Object.prototype.hasOwnProperty.call(t,r)?t[r]=e.merge(t[r],n,o):t[r]=n,t},n)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),i="",r=0;r<e.length;++r){var n=e.charCodeAt(r);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?i+=e.charAt(r):n<128?i+=o[n]:n<2048?i+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?i+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(r+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(r)),i+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return i},e.compact=function(t,i){if("object"!=typeof t||null===t)return t;var r=i||[],o=r.indexOf(t);if(-1!==o)return r[o];if(r.push(t),Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?n.push(e.compact(t[a],r)):void 0!==t[a]&&n.push(t[a]);return n}return Object.keys(t).forEach(function(i){t[i]=e.compact(t[i],r)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},331:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(97),n=r(o),a=i(1),s=r(a),l=i(5),c=r(l);e.default={data:function(){return{title:"ICO爆料",tabbarTop:580,tabItems:[{index:0,title:"即将开始",titleFontSize:"30px",src:"/icoLevel.js",visibility:"visible"},{index:1,title:"进行中",titleFontSize:"30px",src:"/icoLevel.js",visibility:"hidden"},{index:2,title:"已完成",titleFontSize:"30px",src:"/icoLevel.js",visibility:"hidden"}],badgeLinkData:[{iconStyle:{url:"/src/view/knowMore/images/ico.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"YOYOW"}},{iconStyle:{url:"/src/view/knowMore/images/link-wiki.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"Taas"}},{iconStyle:{url:"/src/view/knowMore/images/link-app.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"ipfs"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}}]}},components:{nTabbar:i(156),badge:i(56),backNavpage:i(23)},methods:{tabBarOnClick:function(t){console.log("tabBarOnClick",t.index)}},created:function(){for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=n.default.js(e.src),s.default.log("src "+e.src)}if(c.default.isIOS()){var i=weex.config.env,r=i.scale,o=i.deviceWidth/r;this.navBarHeight=48e3/o}}}},4:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,i=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,r="";if(e)r="file://assets/dist/native/";else if(i)r=t.substring(0,t.lastIndexOf("native/")+5);else{var o=p.default+":8080",n=/\/\/([^\/]+?)\//.exec(t);n&&n.length>=2&&(o=n[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function n(t,e){if(h.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,s(b.default.web,e)}function a(t,e){w.push({url:e?t+"?"+u.default.stringify(e):t,animated:"true"},function(t){v.default.log("callback: ",t)})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,e.pageName=t.pageName,v.default.log("getBaseUrl",o());var i=e?""+o()+t.jsPath+".js?"+u.default.stringify(e):""+o()+t+".js";v.default.log("push "+i),w.push({url:i,animated:"true"},function(t){v.default.log("callback: ",t)})}function l(){w.pop({animated:"true"},function(t){v.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=i(6),u=r(f),d=i(9),p=r(d),m=i(5),h=r(m),g=i(0),b=r(g),y=i(1),v=r(y),w=weex.requireModule("navigator");e.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:n,pop:l}},416:function(t,e){t.exports={"ico-wrap":{width:750,flex:1,backgroundColor:"#f8f8f8"},"hot-ico-bg":{width:750,backgroundColor:"#ffffff"},"hot-ico-wrap":{width:720,marginLeft:30},"my-follow-ico-wrap":{marginTop:10},"hot-ico-tit":{marginTop:30,marginBottom:30,paddingLeft:10,fontSize:28,color:"#333333",borderLeftWidth:4,borderColor:"#fc6d3f"},"hot-ico-group":{marginBottom:40,flexDirection:"row",width:720,height:150}}},486:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("back-navpage",{attrs:{title:t.title}},[i("div",{staticClass:["ico-wrap"]},[i("div",{staticClass:["hot-ico-bg"]},[i("div",{staticClass:["hot-ico-wrap"]},[i("text",{staticClass:["hot-ico-tit"]},[t._v("热门ICO")]),i("scroller",{staticClass:["hot-ico-group"],attrs:{showScrollbar:"false",scrollDirection:"horizontal"}},t._l(t.badgeLinkData,function(e,r){return i("div",{key:r,staticStyle:{justifyContent:"space-around",alignItems:"center",marginRight:"40px"}},[i("badge",{attrs:{iconStyle:e.iconStyle,superScriptState:e.superScriptState,iconName:e.iconName},on:{badge:t.test}})],1)}))])]),i("div",{staticClass:["hot-ico-bg","my-follow-ico-wrap"]},[i("div",{staticClass:["hot-ico-wrap"]},[i("text",{staticClass:["hot-ico-tit"]},[t._v("关注的ICO")]),i("scroller",{staticClass:["hot-ico-group"],attrs:{showScrollbar:"false",scrollDirection:"horizontal"}},t._l(t.badgeLinkData,function(e,r){return i("div",{key:r,staticStyle:{justifyContent:"space-around",alignItems:"center",marginRight:"40px"}},[i("badge",{attrs:{iconStyle:e.iconStyle,superScriptState:e.superScriptState,iconName:e.iconName},on:{badge:t.test}})],1)}))])]),i("n-tabbar",{attrs:{marginTop:t.tabbarTop,backgroundColor:"#f7f7f7",bottomSelectedColor:"#FB633C",bottomUnSelectedColor:"#f7f7f7",tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},5:function(t,e,i){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function n(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:r,isWeb:o,getDeviceInfo:n}},56:function(t,e,i){var r,o,n=[];n.push(i(58)),r=i(57);var a=i(59);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-6e6f5c33",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r},57:function(t,e,i){"use strict";t.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},58:function(t,e){t.exports={"badge-wrap":{flexDirection:"column",alignItems:"center"},"badgeIcon-wrap-m":{position:"relative",width:90,height:90},"badgeImg-wrap-m":{position:"absolute",bottom:0,left:0,width:90,height:90},"icon-wrap-m":{width:90,height:90,borderRadius:50},"superScript-hot":{position:"absolute",top:0,right:0,display:"inline-block",width:40,height:20,lineHeight:20,textAlign:"center",backgroundColor:"#ff6a3c",color:"#ffffff",fontSize:12,borderRadius:20,borderWidth:1,borderColor:"#ffffff"},"badgeTit-wrap-m":{fontSize:24,color:"#333333",fontWeight:"200",marginTop:18},"badgeIcon-wrap-s":{position:"relative",width:60,height:60},"badgeImg-wrap-s":{position:"absolute",bottom:0,left:0,width:40,height:40},"icon-wrap-s":{width:40,height:40,borderRadius:50},"superScript-mesg":{position:"absolute",top:0,right:2,display:"block",width:34,height:22,lineHeight:20,textAlign:"center",backgroundColor:"#ffffff",color:"#ff6a3c",fontSize:18,borderRadius:16,borderWidth:2,borderColor:"#ff6a3c"},"badgeIcon-wrap-xm":{width:100,height:100},"badgeImg-wrap-xm":{width:100,height:100},"icon-wrap-xm":{width:100,height:100,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-xm":{fontSize:24,color:"#434343",fontWeight:"200",marginTop:20},"badgeIcon-wrap-l":{width:120,height:120},"badgeImg-wrap-l":{width:90,height:90},"icon-wrap-l":{width:120,height:120,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-l":{fontSize:36,color:"#434343",fontWeight:"200",marginTop:20}}},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["badge-wrap"],on:{click:t.clickIcon}},[i("div",{class:["badgeIcon-wrap-"+t.iconStyle.size]},[i("div",{class:["icon-wrap-"+t.iconStyle.size]},[i("image",{class:["badgeImg-wrap-"+t.iconStyle.size],attrs:{src:t.iconStyle.url}})]),t.superScriptState.hasSuperScript?i("text",{class:["1"==t.superScriptState.state?"superScript-hot":"superScript-mesg"]},[t._v(t._s(t.superScriptState.content))]):t._e()]),t.iconName.hasName?i("text",{class:["badgeTit-wrap-"+t.iconStyle.size]},[t._v(t._s(t.iconName.name))]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},6:function(t,e,i){"use strict";var r=i(8),o=i(7),n=i(2);t.exports={formats:n,parse:o,stringify:r}},643:function(t,e,i){var r,o,n=[];n.push(i(416)),r=i(331);var a=i(486);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/ico/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-6e74c5b4",o.style=o.style||{},n.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),t.exports=r,t.exports.el="true",new Vue(t.exports)},7:function(t,e,i){"use strict";var r=i(3),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var i={},r=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),n=0;n<r.length;++n){var a,s,l=r[n],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=e.decoder(l),s=e.strictNullHandling?null:""):(a=e.decoder(l.slice(0,c)),s=e.decoder(l.slice(c+1))),o.call(i,a)?i[a]=[].concat(i[a]).concat(s):i[a]=s}return i},s=function(t,e,i){if(!t.length)return e;var r,o=t.shift();if("[]"===o)r=[],r=r.concat(s(t,e,i));else{r=i.plainObjects?Object.create(null):{};var n="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(n,10);!isNaN(a)&&o!==n&&String(a)===n&&a>=0&&i.parseArrays&&a<=i.arrayLimit?(r=[],r[a]=s(t,e,i)):r[n]=s(t,e,i)}return r},l=function(t,e,i){if(t){var r=i.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=n.exec(r),c=l?r.slice(0,l.index):r,f=[];if(c){if(!i.plainObjects&&o.call(Object.prototype,c)&&!i.allowPrototypes)return;f.push(c)}for(var u=0;null!==(l=a.exec(r))&&u<i.depth;){if(u+=1,!i.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!i.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),s(f,e,i)}};t.exports=function(t,e){var i=e||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:n.delimiter,i.depth="number"==typeof i.depth?i.depth:n.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:n.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:n.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:n.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:n.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:n.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:n.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:n.strictNullHandling,""===t||null===t||void 0===t)return i.plainObjects?Object.create(null):{};for(var o="string"==typeof t?a(t,i):t,s=i.plainObjects?Object.create(null):{},c=Object.keys(o),f=0;f<c.length;++f){var u=c[f],d=l(u,o[u],i);s=r.merge(s,d,i)}return r.compact(s)}},8:function(t,e,i){"use strict";var r=i(3),o=i(2),n={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,i,o,n,a,s,l,c,f,u,d,p){var m=e;if("function"==typeof l)m=l(i,m);else if(m instanceof Date)m=u(m);else if(null===m){if(n)return s&&!p?s(i):i;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(s){return[d(p?i:s(i))+"="+d(s(m))]}return[d(i)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(l))g=l;else{var b=Object.keys(m);g=c?b.sort(c):b}for(var y=0;y<g.length;++y){var v=g[y];a&&null===m[v]||(h=Array.isArray(m)?h.concat(t(m[v],o(i,v),o,n,a,s,l,c,f,u,d,p)):h.concat(t(m[v],i+(f?"."+v:"["+v+"]"),o,n,a,s,l,c,f,u,d,p)))}return h};t.exports=function(t,e){var i=t,r=e||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,f="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,u="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var b,y,v=o.formatters[r.format];"function"==typeof r.filter?(y=r.filter,i=y("",i)):Array.isArray(r.filter)&&(y=r.filter,b=y);var w=[];if("object"!=typeof i||null===i)return"";var x;x=r.arrayFormat in n?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=n[x];b||(b=Object.keys(i)),p&&b.sort(p);for(var S=0;S<b.length;++S){var I=b[S];f&&null===i[I]||(w=w.concat(l(i[I],I,_,c,f,u?d:null,y,p,m,h,v,g)))}return w.join(a)}},84:function(t,e,i){"use strict";t.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},85:function(t,e){t.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.16.87"},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"],style:{height:t.height},on:{click:t.onclickitem}},[i("div",{staticClass:["tab-line"],style:{borderTopColor:t.backgroundColor,borderBottomColor:t.bottomColor,height:t.height,marginLeft:t.margin,marginRight:t.margin}},[i("text",{staticClass:["tab-text"],style:{color:t.titleColor,fontSize:t.titleFontSize}},[t._v(t._s(t.title))])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},97:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={js:function(t){var e=weex.config.bundleUrl;if("undefined"==typeof window){for(e=e.substring(0,e.lastIndexOf("/"));-1!==t.indexOf("../");)t=t.substr(3),e=e.substr(0,e.lastIndexOf("/"));return e+t}var i=new URL(e).origin+"/web/?page=/dist/web"+encodeURI(t);return console.log("webUrl="+i),i},img:function(t){var e=weex.config.bundleUrl;return new URL(e).hostname+"url"}}}});