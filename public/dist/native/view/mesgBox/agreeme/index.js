// { "framework": "Vue"} 

!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=652)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},1:function(e,t,i){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){p||r("["+e+"]  "+o(t))}function o(e,t,i){if(void 0===t&&(t=10),void 0===i&&(i=0),i===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",n=0;n<i;n++)r+="    ";var s=r+"    ",a="{\n",l=!0;for(var c in e)if(0===n&&n++,e.hasOwnProperty(c)){l=!1;var f=o(e[c],t,i+1);f.indexOf("function"),a+=s,e.hasOwnProperty(c)||(a+="prototype.");var p=u(e[c]);a+=c,a+="["+p,a+="]",a+=" : ",a+=f,a+=" ,\n"}return a+=r+"}",l&&(a="{}"),a}function s(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,i,r){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:i,info1:r})+"------------create ------------\n"+function(){var e="",t=0,i=arguments.callee;do{if(t>=3&&t<10){e+=""+i}else if(t>=10)break;i=i.arguments.callee.caller,t++}while(i);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),a(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:r,dump:n,testBegin:l,testEnd:c}},105:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{contentIssue:{default:function(){return{contentImg:"",issue:"",content:""}}}}}},11:function(e,t,i){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},117:function(e,t){e.exports={"comment-issue-wrap":{marginRight:30,marginLeft:30,width:690,flexDirection:"row"},"comment-issue-img":{width:150,height:150},"comment-content-bg":{width:540,height:150,backgroundColor:"#f8f8f8"},"comment-content-wrap":{marginLeft:30,marginRight:30,width:480},"comment-issue":{marginTop:20,fontSize:28,color:"#333333"},"comment-issue-content":{marginTop:15,fontSize:26,lineHeight:35,color:"#888888",lines:2}}},12:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},125:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["comment-issue-wrap"]},[i("image",{staticClass:["comment-issue-img"],attrs:{src:e.contentIssue.contentImg}}),i("div",{staticClass:["comment-content-bg"]},[i("div",{staticClass:["comment-content-wrap"]},[i("text",{staticClass:["comment-issue"]},[e._v("@"+e._s(e.contentIssue.issue))]),i("text",{staticClass:["comment-issue-content"]},[e._v(e._s(e.contentIssue.content))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():i("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?i("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[i("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():i("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?i("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?i("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),i("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},15:function(e,t,i){"use strict";var r=i(5),n=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:i(18)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(n.default.isIOS()){var e=weex.config.env,t=e.scale,i=e.deviceWidth/t;this.height=48e3/i}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},152:function(e,t,i){var r,n,o=[];o.push(i(117)),r=i(105);var s=i(125);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/comment/index.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-c1ac0aa2",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},16:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},17:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"]},[i("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),i("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},18:function(e,t,i){var r,n,o=[];o.push(i(12)),r=i(11);var s=i(13);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-7c73bc08",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},19:function(e,t,i){var r,n,o=[];o.push(i(16)),r=i(15);var s=i(17);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-156f9af6",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},2:function(e,t,i){"use strict";var r=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},20:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},rightItemSrc:{default:""},rightItemClickFn:{defauklt:Function}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void n.default.pop();this.$emit("naviBarLeftItemClick",e)},rightItemClick:function(){this.rightItemClickFn()}},components:{navpage:i(19)}}},21:function(e,t){e.exports={root:{width:750}}},22:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemColor:e.rightItemColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarRightItemClick:e.rightItemClick,naviBarLeftItemClick:e.leftItemClick}},[e.showLine?i("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):e._e(),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},23:function(e,t,i){var r,n,o=[];o.push(i(21)),r=i(20);var s=i(22);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-4fa3807a",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},3:function(e,t,i){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var i=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(i[r]=e[r]);return i},t.merge=function(e,i,n){if(!i)return e;if("object"!=typeof i){if(Array.isArray(e))e.push(i);else{if("object"!=typeof e)return[e,i];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,i))&&(e[i]=!0)}return e}if("object"!=typeof e)return[e].concat(i);var o=e;return Array.isArray(e)&&!Array.isArray(i)&&(o=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(i)?(i.forEach(function(i,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],i,n):e.push(i):e[o]=i}),e):Object.keys(i).reduce(function(e,r){var o=i[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,n):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),i="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=t.charAt(r):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},t.compact=function(e,i){if("object"!=typeof e||null===e)return e;var r=i||[],n=r.indexOf(e);if(-1!==n)return r[n];if(r.push(e),Array.isArray(e)){for(var o=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?o.push(t.compact(e[s],r)):void 0!==e[s]&&o.push(e[s]);return o}return Object.keys(e).forEach(function(i){e[i]=t.compact(e[i],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},30:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""},useType:{default:"normal"}},methods:{clickIt:function(){this.$emit("callBack")}}}},31:function(e,t){e.exports={"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:30,paddingRight:30,marginBottom:15},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"user-header-issue-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"article-time-wrap":{justifyContent:"center",alignItems:"center",height:50},"article-time":{fontSize:24,color:"#959595"},"user-name":{marginRight:20,fontSize:26,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{marginRight:20,width:50,height:50,borderRadius:50}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["article-content-wrap"]},[i("div",{staticClass:["user-wrap"]},[i("div",{staticClass:["user-header-wrap"],on:{click:e.clickIt}},[i("image",{staticClass:["user-header"],attrs:{src:e.headerUrl}}),"agree"==e.useType?i("text",{staticClass:["user-name"]},[e._v(e._s(e.userName)+"刚刚赞了你的评论：")]):"normal"==e.useType?i("div",{staticClass:["user-header-issue-wrap"]},[i("text",{staticClass:["user-name"]},[e._v(e._s(e.userName))]),i("text",{staticClass:["user-issue"]},[e._v("来自: "+e._s(e.userIssue))])]):e._e()]),i("div",{staticClass:["article-time-wrap"]},[i("text",{staticClass:["article-time"]},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},33:function(e,t,i){var r,n,o=[];o.push(i(31)),r=i(30);var s=i(32);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-5da6dbea",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},342:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"赞我的",commentGroup:[{type:0,myComment:"hello world",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",useType:"agree",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:1,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",useType:"agree",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:2,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",repostList:[{name:"王俊凯",content:"T"},{name:"王源",content:"F"},{name:"易烊千玺",content:"Boys"}],article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",useType:"agree",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}}]}},components:{cellUserInfo:i(33),myComment:i(152),backNavpage:i(23)}}},396:function(e,t){e.exports={"myComments-wrap":{width:750,backgroundColor:"#f8f8f8"},"myComments-group":{marginBottom:10,backgroundColor:"#ffffff"},"myComments-content-wrap":{marginLeft:30,marginRight:30,width:690},"myComments-content":{marginBottom:15},"myComments-reply-wrap":{marginTop:15,marginBottom:15},"my-reply-wrap":{flexDirection:"row"},"myComments-repost-wrap":{marginTop:15,marginBottom:15,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},line:{marginTop:10,width:690,height:1,backgroundColor:"#dddddd"},"reply-issue-wrap":{marginTop:10,marginBottom:10,flexDirection:"row"},"repost-list":{flexDirection:"row"},"reply-content":{marginLeft:10},"reply-default":{lineHeight:40,fontSize:26,color:"#434343"},"reply-issue-name":{lineHeight:40,fontSize:26,color:"#fc6d3f"},"my-comment-issue":{paddingBottom:30}}},4:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,i=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(i)r=e.substring(0,e.lastIndexOf("native/")+5);else{var n=d.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(n=o[1]),r="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(y.default.web,t)}function s(e,t){w.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){_.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,_.default.log("getBaseUrl",n());var i=t?""+n()+e.jsPath+".js?"+f.default.stringify(t):""+n()+e+".js";_.default.log("push "+i),w.push({url:i,animated:"true"},function(e){_.default.log("callback: ",e)})}function l(){w.pop({animated:"true"},function(e){_.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=i(6),f=r(u),p=i(9),d=r(p),m=i(5),h=r(m),g=i(0),y=r(g),v=i(1),_=r(v),w=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:n,pushWeb:o,pop:l}},462:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("back-navpage",{attrs:{title:e.title}},[i("list",{staticClass:["myComments-wrap"]},e._l(e.commentGroup,function(t,r){return i("cell",{key:r,staticClass:["myComments-group"],appendAsTree:!0,attrs:{append:"tree"}},[i("cell-user-info",{attrs:{headerUrl:t.article.headerUrl,userName:t.article.userName,userIssue:t.article.userIssue,articleTime:t.article.articleTime,useType:t.article.useType}}),i("div",{staticClass:["myComments-content-wrap"]},[0==t.type?i("div",{staticClass:["myComments-content"]},[i("text",{staticClass:["reply-default"]},[e._v(e._s(t.myComment))])]):1==t.type?i("div",{staticClass:["myComments-reply-wrap"]},[i("div",{staticClass:["my-reply-wrap"]},[i("text",{staticClass:["reply-default"]},[e._v("回复")]),i("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.issueUserName))]),i("text",{staticClass:["reply-default"]},[e._v(":")]),i("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.myComment))])]),i("div",{staticClass:["line"]}),i("div",{staticClass:["reply-issue-wrap"]},[i("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.issueUserName))]),i("text",{staticClass:["reply-default"]},[e._v(":")]),i("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.issueContent))])])]):2==t.type?i("div",{staticClass:["myComments-repost-wrap"]},[i("text",{staticClass:["reply-default"]},[e._v(e._s(t.myComment))]),e._l(t.repostList,function(t,r){return i("div",{key:r,staticClass:["repost-list"]},[i("text",{staticClass:["reply-default"]},[e._v("//")]),i("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.name))]),i("text",{staticClass:["reply-default"]},[e._v(":")]),i("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.content))])])})],2):e._e()]),i("div",[i("my-comment",{staticClass:["my-comment-issue"],attrs:{contentIssue:t.contentIssue}})],1),i("div",{staticStyle:{width:"750px",height:"10px",backgroundColor:"#f8f8f8"}})],1)}))])},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,i){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function n(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:n,getDeviceInfo:o}},6:function(e,t,i){"use strict";var r=i(8),n=i(7),o=i(2);e.exports={formats:o,parse:n,stringify:r}},652:function(e,t,i){var r,n,o=[];o.push(i(396)),r=i(342);var s=i(462);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/mesgBox/agreeme/index.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-4153c9d3",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},7:function(e,t,i){"use strict";var r=i(3),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var i={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var s,a,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(s=t.decoder(l),a=t.strictNullHandling?null:""):(s=t.decoder(l.slice(0,c)),a=t.decoder(l.slice(c+1))),n.call(i,s)?i[s]=[].concat(i[s]).concat(a):i[s]=a}return i},a=function(e,t,i){if(!e.length)return t;var r,n=e.shift();if("[]"===n)r=[],r=r.concat(a(e,t,i));else{r=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,s=parseInt(o,10);!isNaN(s)&&n!==o&&String(s)===o&&s>=0&&i.parseArrays&&s<=i.arrayLimit?(r=[],r[s]=a(e,t,i)):r[o]=a(e,t,i)}return r},l=function(e,t,i){if(e){var r=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!i.plainObjects&&n.call(Object.prototype,c)&&!i.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=s.exec(r))&&f<i.depth;){if(f+=1,!i.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!i.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),a(u,t,i)}};e.exports=function(e,t){var i=t||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:o.delimiter,i.depth="number"==typeof i.depth?i.depth:o.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:o.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:o.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:o.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:o.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:o.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:o.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return i.plainObjects?Object.create(null):{};for(var n="string"==typeof e?s(e,i):e,a=i.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var f=c[u],p=l(f,n[f],i);a=r.merge(a,p,i)}return r.compact(a)}},8:function(e,t,i){"use strict";var r=i(3),n=i(2),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,i,n,o,s,a,l,c,u,f,p,d){var m=t;if("function"==typeof l)m=l(i,m);else if(m instanceof Date)m=f(m);else if(null===m){if(o)return a&&!d?a(i):i;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(a){return[p(d?i:a(i))+"="+p(a(m))]}return[p(i)+"="+p(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(l))g=l;else{var y=Object.keys(m);g=c?y.sort(c):y}for(var v=0;v<g.length;++v){var _=g[v];s&&null===m[_]||(h=Array.isArray(m)?h.concat(e(m[_],n(i,_),n,o,s,a,l,c,u,f,p,d)):h.concat(e(m[_],i+(u?"."+_:"["+_+"]"),n,o,s,a,l,c,u,f,p,d)))}return h};e.exports=function(e,t){var i=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===r.delimiter?a.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:a.skipNulls,f="boolean"==typeof r.encode?r.encode:a.encode,p="function"==typeof r.encoder?r.encoder:a.encoder,d="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:a.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:a.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,v,_=n.formatters[r.format];"function"==typeof r.filter?(v=r.filter,i=v("",i)):Array.isArray(r.filter)&&(v=r.filter,y=v);var w=[];if("object"!=typeof i||null===i)return"";var b;b=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var x=o[b];y||(y=Object.keys(i)),d&&y.sort(d);for(var C=0;C<y.length;++C){var I=y[C];u&&null===i[I]||(w=w.concat(l(i[I],I,x,c,u,f?p:null,v,d,m,h,_,g)))}return w.join(s)}},9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.138"}});