// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=540)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},1:function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},10:function(e,t,r){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},11:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},118:function(e,t,r){var n,i,o=[];o.push(r(79)),n=r(73);var s=r(85);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/comment/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-c1ac0aa2",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():r("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?r("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[r("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():r("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?r("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),r("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},13:function(e,t,r){"use strict";var n=r(3),i=function(e){return e&&e.__esModule?e:{default:e}}(n);e.exports={components:{navbar:r(16)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(i.default.isIOS()){var e=weex.config.env,t=e.scale,r=e.deviceWidth/t;this.height=48e3/r}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},14:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["wrapper"]},[r("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),r("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},16:function(e,t,r){var n,i,o=[];o.push(r(11)),n=r(10);var s=r(12);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-7c73bc08",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},17:function(e,t,r){var n,i,o=[];o.push(r(14)),n=r(13);var s=r(15);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-156f9af6",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},18:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),o=n(i),s=r(420),a=n(s);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemSrc:{default:""}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void a.default.onPageEnd().then(function(e){o.default.pop()}).catch(function(e){o.default.pop()});this.$emit("naviBarLeftItemClick",e)}},components:{navpage:r(17)}}},19:function(e,t){e.exports={root:{width:750}}},2:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,i){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(i.plainObjects||i.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,o){n.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],r,i):e.push(r):e[o]=r}),e):Object.keys(r).reduce(function(e,n){var o=r[n];return Object.prototype.hasOwnProperty.call(e,n)?e[n]=t.merge(e[n],o,i):e[n]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=i[o]:o<2048?r+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?r+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],i=n.indexOf(e);if(-1!==i)return n[i];if(n.push(e),Array.isArray(e)){for(var o=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?o.push(t.compact(e[s],n)):void 0!==e[s]&&o.push(e[s]);return o}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e.showLine?r("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):e._e(),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},21:function(e,t,r){var n,i,o=[];o.push(r(19)),n=r(18);var s=r(20);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-4fa3807a",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},22:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""},useType:{default:"normal"}},methods:{clickIt:function(){this.$emit("callBack")}}}},23:function(e,t){e.exports={"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:30,paddingRight:30,marginBottom:15},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"user-header-issue-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"article-time-wrap":{justifyContent:"center",alignItems:"center",height:50},"article-time":{fontSize:24,color:"#959595"},"user-name":{marginRight:20,fontSize:26,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{marginRight:20,width:50,height:50,borderRadius:50}}},24:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["article-content-wrap"]},[r("div",{staticClass:["user-wrap"]},[r("div",{staticClass:["user-header-wrap"],on:{click:e.clickIt}},[r("image",{staticClass:["user-header"],attrs:{src:e.headerUrl}}),"agree"==e.useType?r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName)+"刚刚赞了你的评论：")]):"normal"==e.useType?r("div",{staticClass:["user-header-issue-wrap"]},[r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName))]),r("text",{staticClass:["user-issue"]},[e._v("来自: "+e._s(e.userIssue))])]):e._e()]),r("div",{staticClass:["article-time-wrap"]},[r("text",{staticClass:["article-time"]},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},25:function(e,t,r){var n,i,o=[];o.push(r(23)),n=r(22);var s=r(24);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-5da6dbea",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"@我的",commentGroup:[{type:0,myComment:"hello world",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:1,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:2,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",repostList:[{name:"王俊凯",content:"T"},{name:"王源",content:"F"},{name:"易烊千玺",content:"Boys"}],article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}}]}},components:{cellUserInfo:r(25),myComment:r(118),backNavpage:r(21)}}},3:function(e,t,r){"use strict";function n(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:n,isWeb:i,getDeviceInfo:o}},332:function(e,t){e.exports={"myComments-wrap":{width:750,backgroundColor:"#f8f8f8"},"myComments-group":{marginBottom:10,backgroundColor:"#ffffff"},"myComments-content-wrap":{marginLeft:30,marginRight:30,width:690},"myComments-content":{marginBottom:15},"myComments-reply-wrap":{marginTop:15,marginBottom:15},"my-reply-wrap":{flexDirection:"row"},"myComments-repost-wrap":{marginTop:15,marginBottom:15,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},line:{marginTop:10,width:690,height:1,backgroundColor:"#dddddd"},"reply-issue-wrap":{marginTop:10,marginBottom:10,flexDirection:"row"},"repost-list":{flexDirection:"row"},"reply-content":{marginLeft:10},"reply-default":{lineHeight:40,fontSize:26,color:"#434343"},"reply-issue-name":{lineHeight:40,fontSize:26,color:"#fc6d3f"},"my-comment-issue":{paddingBottom:30}}},389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("back-navpage",{attrs:{title:e.title}},[r("list",{staticClass:["myComments-wrap"]},e._l(e.commentGroup,function(t,n){return r("cell",{key:n,staticClass:["myComments-group"],appendAsTree:!0,attrs:{append:"tree"}},[r("cell-user-info",{attrs:{headerUrl:t.article.headerUrl,userName:t.article.userName,userIssue:t.article.userIssue,articleTime:t.article.articleTime}}),r("div",{staticClass:["myComments-content-wrap"]},[0==t.type?r("div",{staticClass:["myComments-content"]},[r("text",{staticClass:["reply-default"]},[e._v(e._s(t.myComment))])]):1==t.type?r("div",{staticClass:["myComments-reply-wrap"]},[r("div",{staticClass:["my-reply-wrap"]},[r("text",{staticClass:["reply-default"]},[e._v("回复")]),r("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.issueUserName))]),r("text",{staticClass:["reply-default"]},[e._v(":")]),r("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.myComment))])]),r("div",{staticClass:["line"]}),r("div",{staticClass:["reply-issue-wrap"]},[r("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.issueUserName))]),r("text",{staticClass:["reply-default"]},[e._v(":")]),r("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.issueContent))])])]):2==t.type?r("div",{staticClass:["myComments-repost-wrap"]},[r("text",{staticClass:["reply-default"]},[e._v(e._s(t.myComment))]),e._l(t.repostList,function(t,n){return r("div",{key:n,staticClass:["repost-list"]},[r("text",{staticClass:["reply-default"]},[e._v("//")]),r("text",{staticClass:["reply-issue-name"]},[e._v("@"+e._s(t.name))]),r("text",{staticClass:["reply-default"]},[e._v(":")]),r("text",{staticClass:["reply-default","reply-content"]},[e._v(e._s(t.content))])])})],2):e._e()]),r("div",[r("my-comment",{staticClass:["my-comment-issue"],attrs:{contentIssue:t.contentIssue}})],1),r("div",{staticStyle:{width:"750px",height:"10px",backgroundColor:"#f8f8f8"}})],1)}))])},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,r=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,n="";if(t)n="file://assets/dist/native/";else if(r)n=e.substring(0,e.lastIndexOf("native/")+5);else{var i=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),n="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":n}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(g.default.web,t)}function s(e,t){b.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){_.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,_.default.log("getBaseUrl",i());var r=t?""+i()+e.jsPath+".js?"+f.default.stringify(t):""+i()+e+".js";_.default.log("push "+r),b.push({url:r,animated:"true"},function(e){_.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){_.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(6),f=n(u),d=r(7),p=n(d),m=r(3),h=n(m),y=r(0),g=n(y),v=r(5),_=n(v),b=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:i,pushWeb:o,pop:l}},420:function(e,t,r){"use strict";function n(e){return new Promise(function(t,r){if(!e)return void r("pageName is invalue !!!");s&&o.onPageEnd(s),o.onPageStart(e),s=e,t()})}function i(){return console.log("onPageEnd "+s),new Promise(function(e,t){if(!s)return void t("lastPageName is invalue !!!");o.onPageEnd(s),s="",e()})}Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("wtj"),s="";t.default={onPageStart:n,onPageEnd:i}},5:function(e,t,r){"use strict";function n(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){d||n("["+e+"]  "+o(t))}function o(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var n="",i=0;i<r;i++)n+="    ";var s=n+"    ",a="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var f=o(e[c],t,r+1);f.indexOf("function"),a+=s,e.hasOwnProperty(c)||(a+="prototype.");var d=u(e[c]);a+=c,a+="["+d,a+="]",a+=" : ",a+=f,a+=" ,\n"}return a+=n+"}",l&&(a="{}"),a}function s(e,t){arguments.length>=2?n("WARN-"+e+"  "+t):(t=e,n("WARN  "+t))}function a(e,t,r,n){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:r,info1:n})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),a(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),n(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:n,dump:i,testBegin:l,testEnd:c}},540:function(e,t,r){var n,i,o=[];o.push(r(332)),n=r(277);var s=r(389);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/mesgBox/atme/index.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-560b4072",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},6:function(e,t,r){"use strict";var n=r(9),i=r(8),o=r(1);e.exports={formats:o,parse:i,stringify:n}},7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{contentIssue:{default:function(){return{contentImg:"",issue:"",content:""}}}}}},79:function(e,t){e.exports={"comment-issue-wrap":{marginRight:30,marginLeft:30,width:690,flexDirection:"row"},"comment-issue-img":{width:150,height:150},"comment-content-bg":{width:540,height:150,backgroundColor:"#f8f8f8"},"comment-content-wrap":{marginLeft:30,marginRight:30,width:480},"comment-issue":{marginTop:20,fontSize:28,color:"#333333"},"comment-issue-content":{marginTop:15,fontSize:26,lineHeight:35,color:"#888888",lines:2}}},8:function(e,t,r){"use strict";var n=r(2),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<n.length;++o){var s,a,l=n[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(s=t.decoder(l),a=t.strictNullHandling?null:""):(s=t.decoder(l.slice(0,c)),a=t.decoder(l.slice(c+1))),i.call(r,s)?r[s]=[].concat(r[s]).concat(a):r[s]=a}return r},a=function(e,t,r){if(!e.length)return t;var n,i=e.shift();if("[]"===i)n=[],n=n.concat(a(e,t,r));else{n=r.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(o,10);!isNaN(s)&&i!==o&&String(s)===o&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(n=[],n[s]=a(e,t,r)):n[o]=a(e,t,r)}return n},l=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=o.exec(n),c=l?n.slice(0,l.index):n,u=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=s.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+n.slice(l.index)+"]"),a(u,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof e?s(e,r):e,a=r.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var f=c[u],d=l(f,i[f],r);a=n.merge(a,d,r)}return n.compact(a)}},85:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["comment-issue-wrap"]},[r("image",{staticClass:["comment-issue-img"],attrs:{src:e.contentIssue.contentImg}}),r("div",{staticClass:["comment-content-bg"]},[r("div",{staticClass:["comment-content-wrap"]},[r("text",{staticClass:["comment-issue"]},[e._v("@"+e._s(e.contentIssue.issue))]),r("text",{staticClass:["comment-issue-content"]},[e._v(e._s(e.contentIssue.content))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,r){"use strict";var n=r(2),i=r(1),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,i,o,s,a,l,c,u,f,d,p){var m=t;if("function"==typeof l)m=l(r,m);else if(m instanceof Date)m=f(m);else if(null===m){if(o)return a&&!p?a(r):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m)){if(a){return[d(p?r:a(r))+"="+d(a(m))]}return[d(r)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var y;if(Array.isArray(l))y=l;else{var g=Object.keys(m);y=c?g.sort(c):g}for(var v=0;v<y.length;++v){var _=y[v];s&&null===m[_]||(h=Array.isArray(m)?h.concat(e(m[_],i(r,_),i,o,s,a,l,c,u,f,d,p)):h.concat(e(m[_],r+(u?"."+_:"["+_+"]"),i,o,s,a,l,c,u,f,d,p)))}return h};e.exports=function(e,t){var r=e,n=t||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===n.delimiter?a.delimiter:n.delimiter,c="boolean"==typeof n.strictNullHandling?n.strictNullHandling:a.strictNullHandling,u="boolean"==typeof n.skipNulls?n.skipNulls:a.skipNulls,f="boolean"==typeof n.encode?n.encode:a.encode,d="function"==typeof n.encoder?n.encoder:a.encoder,p="function"==typeof n.sort?n.sort:null,m=void 0!==n.allowDots&&n.allowDots,h="function"==typeof n.serializeDate?n.serializeDate:a.serializeDate,y="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:a.encodeValuesOnly;if(void 0===n.format)n.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,n.format))throw new TypeError("Unknown format option provided.");var g,v,_=i.formatters[n.format];"function"==typeof n.filter?(v=n.filter,r=v("",r)):Array.isArray(n.filter)&&(v=n.filter,g=v);var b=[];if("object"!=typeof r||null===r)return"";var w;w=n.arrayFormat in o?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var x=o[w];g||(g=Object.keys(r)),p&&g.sort(p);for(var C=0;C<g.length;++C){var I=g[C];u&&null===r[I]||(b=b.concat(l(r[I],I,x,c,u,f?d:null,v,p,m,h,_,y)))}return b.join(s)}}});