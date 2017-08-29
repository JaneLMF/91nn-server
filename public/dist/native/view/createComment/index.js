// { "framework": "Vue"} 

!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=625)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},1:function(e,t,i){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){d||r("["+e+"]  "+o(t))}function o(e,t,i){if(void 0===t&&(t=10),void 0===i&&(i=0),i===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",n=0;n<i;n++)r+="    ";var a=r+"    ",s="{\n",c=!0;for(var l in e)if(0===n&&n++,e.hasOwnProperty(l)){c=!1;var f=o(e[l],t,i+1);f.indexOf("function"),s+=a,e.hasOwnProperty(l)||(s+="prototype.");var d=u(e[l]);s+=l,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,i,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:i,info1:r})+"------------create ------------\n"+function(){var e="",t=0,i=arguments.callee;do{if(t>=3&&t<10){e+=""+i}else if(t>=10)break;i=i.arguments.callee.caller,t++}while(i);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function l(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:r,dump:n,testBegin:c,testEnd:l}},10:function(e,t,i){var r,n,o=[];o.push(i(27)),r=i(26);var a=i(28);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-5cc54d8c",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},11:function(e,t,i){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},110:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{size:{default:"xm"},iconUrl:{default:"/resources/repostMesgBox/at-btn.png"},text:{default:""},textColor:{default:"#bbbbbb"}}},components:{textIcon:i(10)},methods:{clickIt:function(){this.$emit("callBack")}}}},114:function(e,t){e.exports={}},12:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},122:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:e.text,textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.clickIt}})},staticRenderFns:[]},e.exports.render._withStripped=!0},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():i("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?i("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[i("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():i("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?i("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?i("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),i("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},14:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(24),n=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e,t,i){var r={code:e,phone:t,password:i};return n.default.post("api/sendIdentifyCode",r)},a=function(e,t){var i={phone:e,password:t};return n.default.post("api/login",i)},s=function(e){var t={phone:e};return n.default.post("api/requestIdentifyCode",t)},c=function(e,t,i){var r={id:e,sex:t,nick:i};return n.default.put("api/userProfile",r)},l=function(e,t){var i={userId:e,concernedId:t};return n.default.get("api/concernUser",i)},u=function(e,t,i){var r={userId:e,maxLength:t,isFirstTime:i};return n.default.get("api/homePage",r)},f=function(e,t,i){var r={targetType:"article",targetId:e,author:t,content:i};return n.default.post("api/comment",r)},d=function(e,t,i){var r={targetType:"article",targetId:e,author:t,comment:i};return n.default.post("api/transmit",r)},p=function(e,t){var i={author:e,title:"",content:t};return n.default.post("api/article",i)},h=function(e,t,i){var r={author:e,title:t,content:i};return n.default.post("api/article",r)},m=function(e,t,i){var r={targetType:e,targetId:t,userId:i};return n.default.post("api/upvote",r)},g=function(e,t,i){var r={targetType:e,targetId:t,userId:i};return n.default.del("api/upvote",r)},y=function(e){var t={id:"598953513dcfac3d6714d90b"};return n.default.get("api/article",t)};t.default={register:o,login:a,getMesgVerify:s,updateUserNickSex:c,concernUser:l,getArticleInHome:u,commentArticle:f,repostArticle:d,createNews:p,createArticles:h,upvote:m,delUpvote:g,getArticleByID:y}},15:function(e,t,i){"use strict";var r=i(5),n=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:i(18)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(n.default.isIOS()){var e=weex.config.env,t=e.scale,i=e.deviceWidth/t;this.height=48e3/i}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},157:function(e,t,i){var r,n,o=[];o.push(i(114)),r=i(110);var a=i(122);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/at/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-62460da8",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},16:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},17:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"]},[i("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),i("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},18:function(e,t,i){var r,n,o=[];o.push(i(12)),r=i(11);var a=i(13);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-7c73bc08",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},19:function(e,t,i){var r,n,o=[];o.push(i(16)),r=i(15);var a=i(17);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-156f9af6",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},2:function(e,t,i){"use strict";var r=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},20:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},rightItemSrc:{default:""},rightItemClickFn:{defauklt:Function}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void n.default.pop();this.$emit("naviBarLeftItemClick",e)},rightItemClick:function(){this.rightItemClickFn()}},components:{navpage:i(19)}}},21:function(e,t){e.exports={root:{width:750}}},22:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemColor:e.rightItemColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarRightItemClick:e.rightItemClick,naviBarLeftItemClick:e.leftItemClick}},[e.showLine?i("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):e._e(),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},23:function(e,t,i){var r,n,o=[];o.push(i(21)),r=i(20);var a=i(22);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-4fa3807a",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},24:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return new Promise(function(i,r){console.log("request:",p+e+"?"+l.default.stringify(t)),d.fetch({method:"GET",url:p+e+"?"+l.default.stringify(t),type:"json"},function(e){e.ok&&e.data&&0===e.data.errCode?i(e.data):r(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function o(e,t){return new Promise(function(i,r){d.fetch({method:"POST",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?i(e.data):r(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function a(e,t){return new Promise(function(i,r){d.fetch({method:"DELETE",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?i(e.data):r(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function s(e,t){return new Promise(function(i,r){d.fetch({method:"PUT",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?i(e.data):r(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=i(6),l=r(c),u=i(1),f=r(u),d=weex.requireModule("stream"),p="http://115.159.67.22:60800/";t.default={get:n,post:o,del:a,put:s}},26:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"s"},iconDirection:{default:"row"},textDirection:{default:"right"},hasClick:{default:!1},iconUrl:{default:""},text:{default:""},textColor:{default:"#bbbbbb"}},methods:{clickIt:function(){this.$emit("callBack",!this.hasClick)}}}},27:function(e,t){e.exports={"icon-wrap-row":{flexDirection:"row",justifyContent:"center",alignItems:"center"},"icon-wrap-column":{flexDirection:"column",justifyContent:"center",alignItems:"center"},"icon-s":{width:24,height:24},"icon-m":{width:32,height:32},"icon-xm":{width:40,height:40},"icon-l":{width:48,height:48},"text-s":{fontSize:20},"text-m":{fontSize:24},"text-xm":{fontSize:26},"text-l":{fontSize:28},"text-top":{marginBottom:10},"text-right":{marginLeft:10},"text-bottom":{marginTop:10},"text-left":{marginRight:10}}},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["icon-wrap-"+e.iconDirection],on:{click:e.clickIt}},["bottom"==e.textDirection||"right"==e.textDirection?i("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e(),e.text.length>0?i("text",{class:["text-"+e.size,"text-"+e.textDirection],style:{color:e.textColor}},[e._v(e._s(e.text))]):e._e(),"top"==e.textDirection||"left"==e.textDirection?i("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,i){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var i=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(i[r]=e[r]);return i},t.merge=function(e,i,n){if(!i)return e;if("object"!=typeof i){if(Array.isArray(e))e.push(i);else{if("object"!=typeof e)return[e,i];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,i))&&(e[i]=!0)}return e}if("object"!=typeof e)return[e].concat(i);var o=e;return Array.isArray(e)&&!Array.isArray(i)&&(o=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(i)?(i.forEach(function(i,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],i,n):e.push(i):e[o]=i}),e):Object.keys(i).reduce(function(e,r){var o=i[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,n):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),i="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=t.charAt(r):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},t.compact=function(e,i){if("object"!=typeof e||null===e)return e;var r=i||[],n=r.indexOf(e);if(-1!==n)return r[n];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(i){e[i]=t.compact(e[i],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},319:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=r(n),a=i(4),s=r(a),c=i(1),l=r(c),u=i(14),f=r(u),d=weex.requireModule("storage"),p=weex.requireModule("nnWebView"),h=weex.requireModule("modal");t.default={data:function(){return{title:"评论",rightItemTitle:"发布",ischecked:!1,checkBoxName:"同时评论",atSize:"xm",atIconUrl:"/resources/repostMesgBox/at-btn.png",userId:"",articleId:""}},components:{backNavpage:i(23),nCheckBox:i(99),nAt:i(157)},mounted:function(){var e=this;d.getItem("bossInfo",function(t){if(h.toast({message:t.data,duration:1}),t.data){var i=JSON.parse(t.data);e.userId=i._id}}),d.getItem("articleId",function(t){h.toast({message:t.data,duration:1}),t.data&&(e.articleId=t.data)})},methods:{checkBoxCallBack:function(e){this.ischecked=e},atUser:function(){s.default.push(o.default.userList)},finsh:function(){d.getItem("richEditorContent",function(e){e.data})},submitArticle:function(){var e=this;p.evaluateJavascript(this.$refs.web,"window.html()",function(t){var i=JSON.parse(t);console.log("adsamsfbciwebfknbzhmabhclamlhjvks ,mcnioadc,mq l"),f.default.commentArticle(e.articleId,e.userId,i.html).then(function(e){l.default.dump("success",e),h.toast({message:e.result,duration:1}),s.default.pop()}).catch(function(e){l.default.dump("Failed",e)})})}}}},391:function(e,t){e.exports={"repost-mesg-input":{paddingTop:30,paddingLeft:30,paddingRight:30,paddingBottom:30,width:750,height:1080,rows:10,fontSize:28},"repost-action-bar-bg":{position:"fixed",left:0,bottom:0,width:750,height:98,borderTopWidth:1,borderColor:"#dddddd"},"repost-action-bar-wrap":{marginLeft:30,marginRight:30,width:690,height:98,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"at-icon":{width:40,height:40}}},4:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,i=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(i)r=e.substring(0,e.lastIndexOf("native/")+5);else{var n=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(n=o[1]),r="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":r}function o(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){x.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){b.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,b.default.log("getBaseUrl",n());var i=t?""+n()+e.jsPath+".js?"+f.default.stringify(t):""+n()+e+".js";b.default.log("push "+i),x.push({url:i,animated:"true"},function(e){b.default.log("callback: ",e)})}function c(){x.pop({animated:"true"},function(e){b.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=i(6),f=r(u),d=i(9),p=r(d),h=i(5),m=r(h),g=i(0),y=r(g),v=i(1),b=r(v),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:n,pushWeb:o,pop:c}},457:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("back-navpage",{attrs:{title:e.title,rightItemTitle:e.rightItemTitle,rightItemClickFn:e.submitArticle,rightItemColor:"#fff"}},[i("div",{staticClass:["repost-mesg-wrap"]},[i("nn-web",{ref:"web",staticClass:["web","repost-mesg-input"],attrs:{src:"http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/rich-editor.html"},on:{change:e.finsh}}),i("div",{staticClass:["repost-action-bar-bg"]},[i("div",{staticClass:["repost-action-bar-wrap"]},[i("n-check-box",{attrs:{ischecked:e.ischecked,name:e.checkBoxName},on:{callBack:function(t){e.checkBoxCallBack(e.v)}}}),i("image",{staticClass:["at-icon"],attrs:{src:"/resources/repostMesgBox/at-btn.png"},on:{click:e.atUser}})],1)])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,i){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function n(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:n,getDeviceInfo:o}},6:function(e,t,i){"use strict";var r=i(8),n=i(7),o=i(2);e.exports={formats:o,parse:n,stringify:r}},625:function(e,t,i){var r,n,o=[];o.push(i(391)),r=i(319);var a=i(457);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/createComment/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-3336cb3c",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},68:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{ischecked:{default:null},name:{default:""},value:{default:""}},data:function(){return{checked:"/resources/checkBox/checked.png",unchecked:"/resources/checkBox/unchecked.png"}},methods:{checkIt:function(){this.$emit("callBack",this.ischecked)}}}},7:function(e,t,i){"use strict";var r=i(3),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var i={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,c=r[o],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),n.call(i,a)?i[a]=[].concat(i[a]).concat(s):i[a]=s}return i},s=function(e,t,i){if(!e.length)return t;var r,n=e.shift();if("[]"===n)r=[],r=r.concat(s(e,t,i));else{r=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,a=parseInt(o,10);!isNaN(a)&&n!==o&&String(a)===o&&a>=0&&i.parseArrays&&a<=i.arrayLimit?(r=[],r[a]=s(e,t,i)):r[o]=s(e,t,i)}return r},c=function(e,t,i){if(e){var r=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=o.exec(r),l=c?r.slice(0,c.index):r,u=[];if(l){if(!i.plainObjects&&n.call(Object.prototype,l)&&!i.allowPrototypes)return;u.push(l)}for(var f=0;null!==(c=a.exec(r))&&f<i.depth;){if(f+=1,!i.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!i.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+r.slice(c.index)+"]"),s(u,t,i)}};e.exports=function(e,t){var i=t||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:o.delimiter,i.depth="number"==typeof i.depth?i.depth:o.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:o.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:o.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:o.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:o.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:o.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:o.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return i.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a(e,i):e,s=i.plainObjects?Object.create(null):{},l=Object.keys(n),u=0;u<l.length;++u){var f=l[u],d=c(f,n[f],i);s=r.merge(s,d,i)}return r.compact(s)}},74:function(e,t){e.exports={"check-box-wrap":{flexDirection:"row"},"check-box-icon":{width:28,height:28},"check-box-name":{marginLeft:12,fontSize:24,color:"#434343",lineHeight:28}}},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["check-box-wrap"],on:{click:e.checkIt}},[e.ischecked?i("image",{staticClass:["check-box-icon"],attrs:{src:e.checked}}):i("image",{staticClass:["check-box-icon"],attrs:{src:e.unchecked}}),i("text",{staticClass:["check-box-name"]},[e._v(e._s(e.name))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,i){"use strict";var r=i(3),n=i(2),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,i,n,o,a,s,c,l,u,f,d,p){var h=t;if("function"==typeof c)h=c(i,h);else if(h instanceof Date)h=f(h);else if(null===h){if(o)return s&&!p?s(i):i;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[d(p?i:s(i))+"="+d(s(h))]}return[d(i)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(c))g=c;else{var y=Object.keys(h);g=l?y.sort(l):y}for(var v=0;v<g.length;++v){var b=g[v];a&&null===h[b]||(m=Array.isArray(h)?m.concat(e(h[b],n(i,b),n,o,a,s,c,l,u,f,d,p)):m.concat(e(h[b],i+(u?"."+b:"["+b+"]"),n,o,a,s,c,l,u,f,d,p)))}return m};e.exports=function(e,t){var i=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,l="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,v,b=n.formatters[r.format];"function"==typeof r.filter?(v=r.filter,i=v("",i)):Array.isArray(r.filter)&&(v=r.filter,y=v);var x=[];if("object"!=typeof i||null===i)return"";var _;_=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var w=o[_];y||(y=Object.keys(i)),p&&y.sort(p);for(var I=0;I<y.length;++I){var k=y[I];u&&null===i[k]||(x=x.concat(c(i[k],k,w,l,u,f?d:null,v,p,h,m,b,g)))}return x.join(a)}},9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.138"},99:function(e,t,i){var r,n,o=[];o.push(i(74)),r=i(68);var a=i(78);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/checkBox/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-c5a56cae",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r}});