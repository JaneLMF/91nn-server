// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=659)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},1:function(t,e,n){"use strict";function r(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function o(t,e){d||r("["+t+"]  "+i(e))}function i(t,e,n){if(void 0===e&&(e=10),void 0===n&&(n=0),n===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":u(t)))return""+t;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in t)if(0===o&&o++,t.hasOwnProperty(c)){l=!1;var f=i(t[c],e,n+1);f.indexOf("function"),s+=a,t.hasOwnProperty(c)||(s+="prototype.");var d=u(t[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(t,e){arguments.length>=2?r("WARN-"+t+"  "+e):(e=t,r("WARN  "+e))}function s(t,e,n,r){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+i({expression:t,msg:e,info0:n,info1:r})+"------------create ------------\n"+function(){var t="",e=0,n=arguments.callee;do{if(e>=3&&e<10){t+=""+n}else if(e>=10)break;n=n.arguments.callee.caller,e++}while(n);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(t){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(t+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=f||{},d=!1;e.default={log:r,dump:o,testBegin:l,testEnd:c}},11:function(t,e,n){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},12:function(t,e){t.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():n("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?n("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[n("image",{staticClass:["right-image"],attrs:{src:t.rightItemSrc}})]):t._e(),t.leftItemSrc?t._e():n("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t.leftItemSrc?n("div",{staticClass:["left-image-box"],on:{click:t.onclickleftitem}}):t._e(),n("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{inputType:{default:"text"},iconUrl:{default:""},placeHolderText:{default:""}},methods:{inputIt:function(t){this.$emit("callBack",t.value)}}}},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(t,e,n){var r={code:t,phone:e,password:n};return o.default.post("api/sendIdentifyCode",r)},a=function(t,e){var n={phone:t,password:e};return o.default.post("api/login",n)},s=function(t){var e={phone:t};return o.default.post("api/requestIdentifyCode",e)},l=function(t,e,n){var r={id:t,sex:e,nick:n};return o.default.put("api/userProfile",r)},c=function(t,e){var n={userId:t,concernedId:e};return o.default.get("api/concernUser",n)},u=function(t,e,n){var r={userId:t,maxLength:e,isFirstTime:n};return o.default.get("api/homePage",r)},f=function(t,e,n){var r={targetType:"article",targetId:t,author:e,content:n};return o.default.post("api/comment",r)},d=function(t,e,n){var r={targetType:"article",targetId:t,author:e,comment:n};return o.default.post("api/transmit",r)},p=function(t,e){var n={author:t,title:"",content:e};return o.default.post("api/article",n)},h=function(t,e,n){var r={author:t,title:e,content:n};return o.default.post("api/article",r)},m=function(t,e,n){var r={targetType:t,targetId:e,userId:n};return o.default.post("api/upvote",r)},g=function(t,e,n){var r={targetType:t,targetId:e,userId:n};return o.default.del("api/upvote",r)},y=function(t){var e={id:"598953513dcfac3d6714d90b"};return o.default.get("api/article",e)};e.default={register:i,login:a,getMesgVerify:s,updateUserNickSex:l,concernUser:c,getArticleInHome:u,commentArticle:f,repostArticle:d,createNews:p,createArticles:h,upvote:m,delUpvote:g,getArticleByID:y}},141:function(t,e){t.exports={"input-row":{marginBottom:20,flexDirection:"row"},"input-icon":{width:26,height:32},"input-text":{paddingLeft:20,width:524,height:32,lineHeight:32,fontSize:26,placeholderColor:"#bbbbbb"},line:{width:570,height:1,backgroundColor:"#dddddd"}}},147:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:["input-row"]},[n("image",{staticClass:["input-icon"],attrs:{src:t.iconUrl}}),"text"==t.inputType?n("input",{staticClass:["input-text"],attrs:{type:"text",placeholder:t.placeHolderText},on:{input:t.inputIt}}):"password"==t.inputType?n("input",{staticClass:["input-text"],attrs:{type:"password",placeholder:t.placeHolderText},on:{input:t.inputIt}}):t._e()]),n("div",{staticClass:["line"]})])},staticRenderFns:[]},t.exports.render._withStripped=!0},15:function(t,e,n){"use strict";var r=n(5),o=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports={components:{navbar:n(18)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var t=weex.config.env,e=t.scale,n=t.deviceWidth/e;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},159:function(t,e,n){var r,o,i=[];i.push(n(141)),r=n(135);var a=n(147);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/iconInput/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-37068b61",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},16:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),n("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},18:function(t,e,n){var r,o,i=[];i.push(n(12)),r=n(11);var a=n(13);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7c73bc08",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},19:function(t,e,n){var r,o,i=[];i.push(n(16)),r=n(15);var a=n(17);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-156f9af6",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},2:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},20:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemColor:{default:"#fff"},rightItemSrc:{default:""},rightItemClickFn:{defauklt:Function}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",t)},rightItemClick:function(){this.rightItemClickFn()}},components:{navpage:n(19)}}},21:function(t,e){t.exports={root:{width:750}}},215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{buttonStyle:{default:function(){return{size:"m",buttonText:"",unclickColor:"#ff622a",clickedColor:"#eee"}}}},data:function(){return{isClicked:!1}},computed:{btnBackground:function(){return this.isClicked?this.buttonStyle.clickedColor:this.buttonStyle.unclickColor}},methods:{clickIt:function(){this.isClicked=!0,this.$emit("callBack",this.isClicked)}}}},219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},data:function(){return{inputType:"text",iconUrl:"/resources/inputIcon/phoneNum.png",placeHolderText:"请输入手机号码"}},components:{iconInput:n(159)},methods:{callBack:function(t){console.log(t),this.$emit("callBack",t)}}}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navpage",{staticClass:["root"],attrs:{dataRole:t.dataRole,title:t.title,titleColor:t.titleColor,backgroundColor:t.backgroundColor,rightItemColor:t.rightItemColor,rightItemTitle:t.rightItemTitle,leftItemSrc:t.leftItemSrc,rightItemSrc:t.rightItemSrc},on:{naviBarRightItemClick:t.rightItemClick,naviBarLeftItemClick:t.leftItemClick}},[t.showLine?n("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):t._e(),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},220:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{},data:function(){return{inputType:"password",iconUrl:"/resources/inputIcon/password.png",placeHolderText:"请输入密码"}},components:{iconInput:n(159)},methods:{callBack:function(t){console.log(t),this.$emit("callBack",t)}}}},228:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{txtBtnStyle:{default:function(){return{fontSize:"",btnColor:"",btnText:""}}}},methods:{clickIt:function(){this.$emit("callBack")}}}},23:function(t,e,n){var r,o,i=[];i.push(n(21)),r=n(20);var a=n(22);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-4fa3807a",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},239:function(t,e){t.exports={}},24:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return new Promise(function(n,r){console.log("request:",p+t+"?"+c.default.stringify(e)),d.fetch({method:"GET",url:p+t+"?"+c.default.stringify(e),type:"json"},function(t){t.ok&&t.data&&0===t.data.errCode?n(t.data):r(t.data)},function(t){f.default.log("get in progress:"+t.length)})})}function i(t,e){return new Promise(function(n,r){d.fetch({method:"POST",url:p+t,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},function(t){t.ok&&t.data&&0===t.data.errCode?n(t.data):r(t.data)},function(t){f.default.log("get in progress:"+t.length)})})}function a(t,e){return new Promise(function(n,r){d.fetch({method:"DELETE",url:p+t,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},function(t){t.ok&&t.data&&0===t.data.errCode?n(t.data):r(t.data)},function(t){f.default.log("get in progress:"+t.length)})})}function s(t,e){return new Promise(function(n,r){d.fetch({method:"PUT",url:p+t,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},function(t){t.ok&&t.data&&0===t.data.errCode?n(t.data):r(t.data)},function(t){f.default.log("get in progress:"+t.length)})})}Object.defineProperty(e,"__esModule",{value:!0});var l=n(6),c=r(l),u=n(1),f=r(u),d=weex.requireModule("stream"),p="http://115.159.67.22:60800/";e.default={get:o,post:i,del:a,put:s}},240:function(t,e){t.exports={"button-wrap":{borderRadius:8,justifyContent:"center",alignItems:"center"},"button-text":{color:"#ffffff",textAlign:"center"},"button-wrap-m":{width:570,height:70},"button-text-m":{fontSize:32}}},243:function(t,e){t.exports={}},244:function(t,e){t.exports={}},261:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("icon-input",{attrs:{iconUrl:t.iconUrl,placeHolderText:t.placeHolderText,inputType:t.inputType},on:{callBack:t.callBack}})},staticRenderFns:[]},t.exports.render._withStripped=!0},262:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["button-wrap"],class:["button-wrap-"+t.buttonStyle.size],style:{backgroundColor:t.btnBackground},on:{click:t.clickIt}},[n("text",{staticClass:["button-text"],class:["button-text-"+t.buttonStyle.size]},[t._v(t._s(t.buttonStyle.buttonText))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{style:{fontSize:t.txtBtnStyle.fontSize,color:t.txtBtnStyle.btnColor},on:{click:t.clickIt}},[t._v(t._s(t.txtBtnStyle.btnText))])},staticRenderFns:[]},t.exports.render._withStripped=!0},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("icon-input",{attrs:{iconUrl:t.iconUrl,placeHolderText:t.placeHolderText,inputType:t.inputType},on:{callBack:t.callBack}})},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(n[r]=t[r]);return n},e.merge=function(t,n,o){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var i=t;return Array.isArray(t)&&!Array.isArray(n)&&(i=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e.merge(t[i],n,o):t.push(n):t[i]=n}),t):Object.keys(n).reduce(function(t,r){var i=n[r];return Object.prototype.hasOwnProperty.call(t,r)?t[r]=e.merge(t[r],i,o):t[r]=i,t},i)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),n="",r=0;r<e.length;++r){var i=e.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=e.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},e.compact=function(t,n){if("object"!=typeof t||null===t)return t;var r=n||[],o=r.indexOf(t);if(-1!==o)return r[o];if(r.push(t),Array.isArray(t)){for(var i=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?i.push(e.compact(t[a],r)):void 0!==t[a]&&i.push(t[a]);return i}return Object.keys(t).forEach(function(n){t[n]=e.compact(t[n],r)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},348:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(4),s=r(a),l=n(14),c=r(l),u=n(1),f=r(u),d=weex.requireModule("storage"),p=weex.requireModule("modal");e.default={data:function(){return{title:"登录",userPhone:"",userPassword:"",buttonStyle:{size:"m",buttonText:"登录",unclickColor:"#ff622a",clickedColor:"#eee"},txtBtnStyle:[{fontSize:"26px",btnColor:"#ff622a",btnText:"立即注册"},{fontSize:"26px",btnColor:"#434343",btnText:"找回密码"}]}},components:{backNavpage:n(23),inputPhone:n(548),inputPw:n(550),nnButton:n(517),textButton:n(585)},methods:{login:function(){console.log("tologin"),console.log(this.userPhone,this.userPassword),""!=this.userPhone&&""!=this.userPassword?c.default.login(this.userPhone,this.userPassword).then(function(t){f.default.dump("success",t),d.setItem("bossInfo",JSON.stringify(t.result),function(){s.default.pop()})}).catch(function(t){f.default.dump("Failed",t),console.log(789),p.toast({message:t.err,duration:1})}):p.toast({message:"请确认以上信息填写无误",duration:1})},regist:function(){console.log("register"),s.default.push(i.default.register)},forgetPw:function(){console.log("forgetPw")},getPhone:function(t){this.userPhone=t},getPw:function(t){this.userPassword=t}}}},4:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,n=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,r="";if(e)r="file://assets/dist/native/";else if(n)r=t.substring(0,t.lastIndexOf("native/")+5);else{var o=p.default+":8080",i=/\/\/([^\/]+?)\//.exec(t);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function i(t,e){if(m.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,s(y.default.web,e)}function a(t,e){b.push({url:e?t+"?"+f.default.stringify(e):t,animated:"true"},function(t){_.default.log("callback: ",t)})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,e.pageName=t.pageName,_.default.log("getBaseUrl",o());var n=e?""+o()+t.jsPath+".js?"+f.default.stringify(e):""+o()+t+".js";_.default.log("push "+n),b.push({url:n,animated:"true"},function(t){_.default.log("callback: ",t)})}function l(){b.pop({animated:"true"},function(t){_.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=n(6),f=r(u),d=n(9),p=r(d),h=n(5),m=r(h),g=n(0),y=r(g),v=n(1),_=r(v),b=weex.requireModule("navigator");e.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:l}},427:function(t,e){t.exports={"content-bg":{width:750,backgroundColor:"#ffffff"},"content-wrap":{width:570,marginLeft:90,marginRight:90},"input-group":{marginTop:80},"txtBtn-wrap":{marginTop:40,width:570,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}},499:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("back-navpage",{attrs:{title:t.title}},[n("div",{staticClass:["content-bg"]},[n("div",{staticClass:["content-wrap"]},[n("input-phone",{staticClass:["input-group"],on:{callBack:t.getPhone}}),n("input-pw",{staticClass:["input-group"],on:{callBack:t.getPw}}),n("nn-button",{staticClass:["input-group"],attrs:{buttonStyle:t.buttonStyle},on:{callBack:t.login}}),n("div",{staticClass:["txtBtn-wrap"]},[n("text-button",{attrs:{txtBtnStyle:t.txtBtnStyle[0]},on:{callBack:t.regist}}),n("text-button",{attrs:{txtBtnStyle:t.txtBtnStyle[1]},on:{callBack:t.forgetPw}})],1)],1)])])},staticRenderFns:[]},t.exports.render._withStripped=!0},5:function(t,e,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:r,isWeb:o,getDeviceInfo:i}},517:function(t,e,n){var r,o,i=[];i.push(n(240)),r=n(215);var a=n(262);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/button/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-0fce9538",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},548:function(t,e,n){var r,o,i=[];i.push(n(239)),r=n(219);var a=n(261);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/iconInput/inputPhone/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-0e346c88",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},550:function(t,e,n){var r,o,i=[];i.push(n(244)),r=n(220);var a=n(266);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/iconInput/inputPw/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3eefb17a",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},585:function(t,e,n){var r,o,i=[];i.push(n(243)),r=n(228);var a=n(265);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textButton/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-332f11f6",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},6:function(t,e,n){"use strict";var r=n(8),o=n(7),i=n(2);t.exports={formats:i,parse:o,stringify:r}},659:function(t,e,n){var r,o,i=[];i.push(n(427)),r=n(348);var a=n(499);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/login/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-db938e9e",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},7:function(t,e,n){"use strict";var r=n(3),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var n={},r=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),i=0;i<r.length;++i){var a,s,l=r[i],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=e.decoder(l),s=e.strictNullHandling?null:""):(a=e.decoder(l.slice(0,c)),s=e.decoder(l.slice(c+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(t,e,n){if(!t.length)return e;var r,o=t.shift();if("[]"===o)r=[],r=r.concat(s(t,e,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(t,e,n)):r[i]=s(t,e,n)}return r},l=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,e,n)}};t.exports=function(t,e){var n=e||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===t||null===t||void 0===t)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof t?a(t,n):t,s=n.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var f=c[u],d=l(f,o[f],n);s=r.merge(s,d,n)}return r.compact(s)}},8:function(t,e,n){"use strict";var r=n(3),o=n(2),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,n,o,i,a,s,l,c,u,f,d,p){var h=e;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(i)return s&&!p?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[d(p?n:s(n))+"="+d(s(h))]}return[d(n)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(l))g=l;else{var y=Object.keys(h);g=c?y.sort(c):y}for(var v=0;v<g.length;++v){var _=g[v];a&&null===h[_]||(m=Array.isArray(h)?m.concat(t(h[_],o(n,_),o,i,a,s,l,c,u,f,d,p)):m.concat(t(h[_],n+(u?"."+_:"["+_+"]"),o,i,a,s,l,c,u,f,d,p)))}return m};t.exports=function(t,e){var n=t,r=e||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,v,_=o.formatters[r.format];"function"==typeof r.filter?(v=r.filter,n=v("",n)):Array.isArray(r.filter)&&(v=r.filter,y=v);var b=[];if("object"!=typeof n||null===n)return"";var x;x=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var w=i[x];y||(y=Object.keys(n)),p&&y.sort(p);for(var I=0;I<y.length;++I){var k=y[I];u&&null===n[k]||(b=b.concat(l(n[k],k,w,c,u,f?d:null,v,p,h,m,_,g)))}return b.join(a)}},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.16.138"}});