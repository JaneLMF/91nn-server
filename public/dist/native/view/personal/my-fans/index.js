// { "framework": "Vue"} 

!function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=657)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"}}},1:function(e,t,r){"use strict";var i=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},11:function(e,t,r){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},12:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():r("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?r("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[r("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():r("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?r("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),r("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},14:function(e,t,r){"use strict";var i=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports={components:{navbar:r(17)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var e=weex.config.env,t=e.scale,r=e.deviceWidth/t;this.height=48e3/r}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},15:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},16:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["wrapper"]},[r("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),r("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{followers:{default:function(){return{article:{headerUrl:"",userName:"",subTitle:"",headerStyle:"follow"},isFollow:!1}}}},components:{userHeader:r(53)},methods:{followIt:function(){this.$emit("follow",!this.followers.isFollow)}}}},17:function(e,t,r){var i,o,n=[];n.push(r(12)),i=r(11);var a=r(13);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7c73bc08",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i},18:function(e,t,r){var i,o,n=[];n.push(r(15)),i=r(14);var a=r(16);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-156f9af6",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i},186:function(e,t){e.exports={"follow-wrap":{marginRight:30,marginLeft:30,width:690},"follow-content-wrap":{width:690,height:138,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"follow-btn":{width:100,height:42,lineHeight:42,textAlign:"center",borderWidth:1,borderColor:"#fc6d3f",borderRadius:8,fontSize:24,color:"#fc6d3f"},"has-follow":{borderColor:"#959595",color:"#959595"},line:{marginLeft:100,width:590,height:1,backgroundColor:"#e5e5e5"}}},19:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},rightItemSrc:{default:""},rightItemClickFn:{defauklt:Function}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",e)},rightItemClick:function(){this.rightItemClickFn()}},components:{navpage:r(18)}}},2:function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(r[i]=e[i]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!i.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,n){i.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t.merge(e[n],r,o):e.push(r):e[n]=r}),e):Object.keys(r).reduce(function(e,i){var n=r[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],n,o):e[i]=n,e},n)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",i=0;i<t.length;++i){var n=t.charCodeAt(i);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=t.charAt(i):n<128?r+=o[n]:n<2048?r+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?r+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(i+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(i)),r+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var i=r||[],o=i.indexOf(e);if(-1!==o)return i[o];if(i.push(e),Array.isArray(e)){for(var n=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?n.push(t.compact(e[a],i)):void 0!==e[a]&&n.push(e[a]);return n}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},20:function(e,t){e.exports={root:{width:750}}},203:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["follow-wrap"]},[r("div",{staticClass:["follow-content-wrap"]},[r("user-header",{staticClass:["follower-header"],attrs:{article:e.followers.article}}),r("text",{staticClass:["follow-btn"],class:[e.followers.isFollow?"has-follow":""],on:{click:e.followIt}},[e._v(e._s(e.followers.isFollow?"已关注":"+关注"))])],1),r("div",{staticClass:["line"]})])},staticRenderFns:[]},e.exports.render._withStripped=!0},21:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemColor:e.rightItemColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarRightItemClick:e.rightItemClick,naviBarLeftItemClick:e.leftItemClick}},[e.showLine?r("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):e._e(),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},22:function(e,t,r){var i,o,n=[];n.push(r(20)),i=r(19);var a=r(21);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-4fa3807a",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i},290:function(e,t,r){var i,o,n=[];n.push(r(186)),i=r(169);var a=r(203);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/follows/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-56e6bf72",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i},3:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,r=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(r)i=e.substring(0,e.lastIndexOf("native/")+5);else{var o=p.default+":8080",n=/\/\/([^\/]+?)\//.exec(e);n&&n.length>=2&&(o=n[1]),i="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":i}function n(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,l(y.default.web,t)}function a(e,t){b.push({url:t?e+"?"+u.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,w.default.log("getBaseUrl",o());var r=t?""+o()+e.jsPath+".js?"+u.default.stringify(t):""+o()+e+".js";w.default.log("push "+r),b.push({url:r,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(){b.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=r(6),u=i(f),d=r(9),p=i(d),h=r(4),m=i(h),g=r(0),y=i(g),v=r(5),w=i(v),b=weex.requireModule("navigator");t.default={push:l,pushByUrl:a,getBaseUrl:o,pushWeb:n,pop:s}},349:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"我的粉丝",followList:[{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!1},{article:{headerUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2949599068,3391309327&fm=58&u_exp_0=2382565453,3058003917&fm_exp_0=86&bpow=502&bpoh=502",userName:"王俊凯",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!1},{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876",userName:"王源",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!1},{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=179813241,910224211&fm=58&u_exp_0=3907746922,576918801&fm_exp_0=86&bpow=1600&bpoh=2000",userName:"易烊千玺",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!1}]}},components:{follows:r(290),backNavpage:r(22)}}},392:function(e,t){e.exports={"nofile-wrap":{width:750,height:1024,justifyContent:"center",alignItems:"center"},nofile:{width:304,height:230},"nofile-tit":{marginTop:50,fontSize:26,color:"#bbbbbb"}}},4:function(e,t,r){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function n(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:o,getDeviceInfo:n}},457:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("back-navpage",{attrs:{title:e.title}},[r("div",[0==e.followList.length?r("div",{staticClass:["nofile-wrap"]},[r("image",{staticClass:["nofile"],attrs:{src:"/src/view/personal/my-news/images/nofile.png"}}),r("text",{staticClass:["nofile-tit"]},[e._v("还没有人关注你，快去发条帖吧！")])]):e._l(e.followList,function(e,t){return r("div",{key:t},[r("follows",{attrs:{followers:e},on:{follow:function(t){return e.isFollow=t}}})],1)})],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,r){"use strict";function i(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||i("["+e+"]  "+n(t))}function n(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":f(e)))return""+e;for(var i="",o=0;o<r;o++)i+="    ";var a=i+"    ",l="{\n",s=!0;for(var c in e)if(0===o&&o++,e.hasOwnProperty(c)){s=!1;var u=n(e[c],t,r+1);u.indexOf("function"),l+=a,e.hasOwnProperty(c)||(l+="prototype.");var d=f(e[c]);l+=c,l+="["+d,l+="]",l+=" : ",l+=u,l+=" ,\n"}return l+=i+"}",s&&(l="{}"),l}function a(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function l(e,t,r,i){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+n({expression:e,msg:t,info0:r,info1:i})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function s(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(e){u._testEnd=(new Date).getTime(),l(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=u||{},d=!1;t.default={log:i,dump:o,testBegin:s,testEnd:c}},50:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",subTitle:"",headerStyle:""}}}}}},51:function(e,t){e.exports={"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:70},"user-wiki-details-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:100},"follow-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:80},"user-header":{width:70,height:70,borderRadius:70},"user-wiki-details-header":{width:100,height:100,borderRadius:100},"follow-header":{width:80,height:80,borderRadius:80},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:28,color:"#000000"},"user-wiki-details-name":{fontSize:36,color:"#434343"},"follow-name":{fontSize:28,color:"#434343"},"user-issue":{fontSize:22,color:"#959595"},"user-wiki-details-issue":{fontSize:22,color:"#959595"},"follow-issue":{marginTop:15,fontSize:24,color:"#959595"}}},52:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.article.headerStyle+"-header-wrap"]},[r("image",{class:[e.article.headerStyle+"-header"],attrs:{src:e.article.headerUrl}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{class:[e.article.headerStyle+"-name"]},[e._v(e._s(e.article.userName))]),r("text",{class:[e.article.headerStyle+"-issue"]},[e._v(e._s(e.article.subTitle))]),e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},53:function(e,t,r){var i,o,n=[];n.push(r(51)),i=r(50);var a=r(52);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userHeader/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-4836b184",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i},6:function(e,t,r){"use strict";var i=r(8),o=r(7),n=r(1);e.exports={formats:n,parse:o,stringify:i}},657:function(e,t,r){var i,o,n=[];n.push(r(392)),i=r(349);var a=r(457);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/my-fans/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3f9f4b49",o.style=o.style||{},n.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,n),e.exports=i,e.exports.el="true",new Vue(e.exports)},7:function(e,t,r){"use strict";var i=r(2),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),n=0;n<i.length;++n){var a,l,s=i[n],c=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;-1===c?(a=t.decoder(s),l=t.strictNullHandling?null:""):(a=t.decoder(s.slice(0,c)),l=t.decoder(s.slice(c+1))),o.call(r,a)?r[a]=[].concat(r[a]).concat(l):r[a]=l}return r},l=function(e,t,r){if(!e.length)return t;var i,o=e.shift();if("[]"===o)i=[],i=i.concat(l(e,t,r));else{i=r.plainObjects?Object.create(null):{};var n="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(n,10);!isNaN(a)&&o!==n&&String(a)===n&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(i=[],i[a]=l(e,t,r)):i[n]=l(e,t,r)}return i},s=function(e,t,r){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=n.exec(i),c=s?i.slice(0,s.index):i,f=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;f.push(c)}for(var u=0;null!==(s=a.exec(i))&&u<r.depth;){if(u+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+i.slice(s.index)+"]"),l(f,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||i.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"==typeof r.depth?r.depth:n.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(o),f=0;f<c.length;++f){var u=c[f],d=s(u,o[u],r);l=i.merge(l,d,r)}return i.compact(l)}},8:function(e,t,r){"use strict";var i=r(2),o=r(1),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,o,n,a,l,s,c,f,u,d,p){var h=t;if("function"==typeof s)h=s(r,h);else if(h instanceof Date)h=u(h);else if(null===h){if(n)return l&&!p?l(r):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||i.isBuffer(h)){if(l){return[d(p?r:l(r))+"="+d(l(h))]}return[d(r)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(s))g=s;else{var y=Object.keys(h);g=c?y.sort(c):y}for(var v=0;v<g.length;++v){var w=g[v];a&&null===h[w]||(m=Array.isArray(h)?m.concat(e(h[w],o(r,w),o,n,a,l,s,c,f,u,d,p)):m.concat(e(h[w],r+(f?"."+w:"["+w+"]"),o,n,a,l,s,c,f,u,d,p)))}return m};e.exports=function(e,t){var r=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?l.delimiter:i.delimiter,c="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,u="boolean"==typeof i.encode?i.encode:l.encode,d="function"==typeof i.encoder?i.encoder:l.encoder,p="function"==typeof i.sort?i.sort:null,h=void 0!==i.allowDots&&i.allowDots,m="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,g="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,v,w=o.formatters[i.format];"function"==typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,y=v);var b=[];if("object"!=typeof r||null===r)return"";var _;_=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=n[_];y||(y=Object.keys(r)),p&&y.sort(p);for(var I=0;I<y.length;++I){var j=y[I];f&&null===r[j]||(b=b.concat(s(r[j],j,x,c,f,u?d:null,v,p,h,m,w,g)))}return b.join(a)}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"}});