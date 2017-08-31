// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=527)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},1:function(e,t,r){"use strict";function n(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){f||n("["+e+"]  "+o(t))}function o(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var n="",i=0;i<r;i++)n+="    ";var a=n+"    ",s="{\n",c=!0;for(var l in e)if(0===i&&i++,e.hasOwnProperty(l)){c=!1;var d=o(e[l],t,r+1);d.indexOf("function"),s+=a,e.hasOwnProperty(l)||(s+="prototype.");var f=u(e[l]);s+=l,s+="["+f,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=n+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?n("WARN-"+e+"  "+t):(t=e,n("WARN  "+t))}function s(e,t,r,n){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:r,info1:n})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function l(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),n(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:n,dump:i,testBegin:c,testEnd:l}},10:function(e,t,r){var n,i,o=[];o.push(r(27)),n=r(26);var a=r(28);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5cc54d8c",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(24),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(e,t,r){var n={code:e,phone:t,password:r};return i.default.post("api/sendIdentifyCode",n)},a=function(e,t){var r={phone:e,password:t};return i.default.post("api/login",r)},s=function(e){var t={phone:e};return i.default.post("api/requestIdentifyCode",t)},c=function(e,t,r){var n={id:e,sex:t,nick:r};return i.default.put("api/userProfile",n)},l=function(e,t){var r={userId:e,concernedId:t};return i.default.get("api/concernUser",r)},u=function(e,t,r){var n={userId:e,maxLength:t,isFirstTime:r};return i.default.get("api/homePage",n)},d=function(e,t,r){var n={targetType:"article",targetId:e,author:t,content:r};return i.default.post("api/comment",n)},f=function(e,t,r){var n={targetType:"article",targetId:e,author:t,comment:r};return i.default.post("api/transmit",n)},p=function(e,t){var r={author:e,title:"",content:t};return i.default.post("api/article",r)},m=function(e,t,r){var n={author:e,title:t,content:r};return i.default.post("api/article",n)},h=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return i.default.post("api/upvote",n)},g=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return i.default.del("api/upvote",n)},y=function(e){var t={id:"598953513dcfac3d6714d90b"};return i.default.get("api/article",t)};t.default={register:o,login:a,getMesgVerify:s,updateUserNickSex:c,concernUser:l,getArticleInHome:u,commentArticle:d,repostArticle:f,createNews:p,createArticles:m,upvote:h,delUpvote:g,getArticleByID:y}},2:function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},24:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return new Promise(function(r,n){console.log("request:",p+e+"?"+l.default.stringify(t)),f.fetch({method:"GET",url:p+e+"?"+l.default.stringify(t),type:"json"},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function o(e,t){return new Promise(function(r,n){f.fetch({method:"POST",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function a(e,t){return new Promise(function(r,n){f.fetch({method:"DELETE",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function s(e,t){return new Promise(function(r,n){f.fetch({method:"PUT",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=r(6),l=n(c),u=r(1),d=n(u),f=weex.requireModule("stream"),p="http://115.159.67.22:60800/";t.default={get:i,post:o,del:a,put:s}},25:function(e,t,r){var n,i,o=[];o.push(r(44)),n=r(43);var a=r(45);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/cellContainer.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-18c9654e",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"s"},iconDirection:{default:"row"},textDirection:{default:"right"},hasClick:{default:!1},iconUrl:{default:""},text:{default:""},textColor:{default:"#bbbbbb"}},methods:{clickIt:function(){this.$emit("callBack",!this.hasClick)}}}},27:function(e,t){e.exports={"icon-wrap-row":{flexDirection:"row",justifyContent:"center",alignItems:"center"},"icon-wrap-column":{flexDirection:"column",justifyContent:"center",alignItems:"center"},"icon-s":{width:24,height:24},"icon-m":{width:32,height:32},"icon-xm":{width:40,height:40},"icon-l":{width:48,height:48},"text-s":{fontSize:20},"text-m":{fontSize:24},"text-xm":{fontSize:26},"text-l":{fontSize:28},"text-top":{marginBottom:10},"text-right":{marginLeft:10},"text-bottom":{marginTop:10},"text-left":{marginRight:10}}},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["icon-wrap-"+e.iconDirection],on:{click:e.clickIt}},["bottom"==e.textDirection||"right"==e.textDirection?r("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e(),e.text.length>0?r("text",{class:["text-"+e.size,"text-"+e.textDirection],style:{color:e.textColor}},[e._v(e._s(e.text))]):e._e(),"top"==e.textDirection||"left"==e.textDirection?r("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,i){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(i.plainObjects||i.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,o){n.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],r,i):e.push(r):e[o]=r}),e):Object.keys(r).reduce(function(e,n){var o=r[n];return Object.prototype.hasOwnProperty.call(e,n)?e[n]=t.merge(e[n],o,i):e[n]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=i[o]:o<2048?r+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?r+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],i=n.indexOf(e);if(-1!==i)return n[i];if(n.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],n)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""},useType:{default:"normal"}},methods:{clickIt:function(){this.$emit("callBack")}}}},31:function(e,t){e.exports={"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:30,paddingRight:30,marginBottom:15},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"user-header-issue-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50},"article-time-wrap":{justifyContent:"center",alignItems:"center",height:50},"article-time":{fontSize:24,color:"#959595"},"user-name":{marginRight:20,fontSize:26,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{marginRight:20,width:50,height:50,borderRadius:50}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["article-content-wrap"]},[r("div",{staticClass:["user-wrap"]},[r("div",{staticClass:["user-header-wrap"],on:{click:e.clickIt}},[r("image",{staticClass:["user-header"],attrs:{src:e.headerUrl}}),"agree"==e.useType?r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName)+"刚刚赞了你的评论：")]):"normal"==e.useType?r("div",{staticClass:["user-header-issue-wrap"]},[r("text",{staticClass:["user-name"]},[e._v(e._s(e.userName))]),r("text",{staticClass:["user-issue"]},[e._v("来自: "+e._s(e.userIssue))])]):e._e()]),r("div",{staticClass:["article-time-wrap"]},[r("text",{staticClass:["article-time"]},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},33:function(e,t,r){var n,i,o=[];o.push(r(31)),n=r(30);var a=r(32);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5da6dbea",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},34:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),o=n(i),a=r(14),s=n(a),c=(weex.requireModule("storage"),weex.requireModule("modal"));t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/agree.png"},text:{default:"0"},textColor:{default:"#bbbbbb"},targetType:{default:""},articleId:{default:""},userId:{default:""}},data:function(){return{hasAgree:!1}},components:{textIcon:r(10)},methods:{agree:function(){var e=this;c.toast({message:this.articleId,duration:.3}),this.hasAgree?s.default.delUpvote(this.targetType,this.articleId,this.userId).then(function(t){o.default.dump("success",t),c.toast({message:"已取消点赞",duration:.3}),e.iconUrl="/resources/textIcon/agree.png",e.textColor="#bbbbbb","0"==t.result?e.text="赞":e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){o.default.dump("Failed",e),c.toast({message:"del"+e,duration:1})}):s.default.upvote(this.targetType,this.articleId,this.userId).then(function(t){o.default.dump("success",t),c.toast({message:"已赞",duration:.3}),e.iconUrl="/resources/textIcon/agree-active.png",e.textColor="#fc6d3f",e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){o.default.dump("Failed",e)}),this.hasAgree=!this.hasAgree}}}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/comment.png"},text:{default:"0"},textColor:{default:"#bbbbbb"}},data:function(){return{hasAgree:!1}},components:{textIcon:r(10)},methods:{commentIt:function(){}}}},36:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),o=n(i),a=r(4),s=n(a);t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/repost.png"},text:{default:"0"},textColor:{default:"#bbbbbb"}},data:function(){return{hasAgree:!1}},components:{textIcon:r(10)},methods:{repostIt:function(){s.default.push(o.default.repostInput)}}}},37:function(e,t){e.exports={}},38:function(e,t){e.exports={}},39:function(e,t){e.exports={}},4:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,r=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,n="";if(t)n="file://assets/dist/native/";else if(r)n=e.substring(0,e.lastIndexOf("native/")+5);else{var i=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),n="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":n}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){_.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){x.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,x.default.log("getBaseUrl",i());var r=t?""+i()+e.jsPath+".js?"+d.default.stringify(t):""+i()+e+".js";x.default.log("push "+r),_.push({url:r,animated:"true"},function(e){x.default.log("callback: ",e)})}function c(){_.pop({animated:"true"},function(e){x.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(6),d=n(u),f=r(9),p=n(f),m=r(5),h=n(m),g=r(0),y=n(g),v=r(1),x=n(v),_=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:c}},40:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"赞":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.agree}})},staticRenderFns:[]},e.exports.render._withStripped=!0},41:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"评论":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.commentIt}})},staticRenderFns:[]},e.exports.render._withStripped=!0},42:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"转发":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.repostIt}})},staticRenderFns:[]},e.exports.render._withStripped=!0},43:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),o=n(i),a=r(14),s=n(a),c=r(0),l=n(c),u=r(4),d=n(u),f=weex.requireModule("storage"),p=weex.requireModule("modal");t.default={props:{footerType:{default:0},articleId:{default:""},author:{default:function(){return{id:"",avatar:"",nick:"",from:""}}},articleTime:{default:""},comment:{default:"0"},forward:{default:"0"},agree:{default:"0"}},data:function(){return{hasAgree:!1,agreeIcon:"/src/components/cells/images/zan.png",headerUrl:"/resources/common/defaultHeader.png",targetType:"article",userId:""}},mounted:function(){var e=this;this.author.avatar.length>0&&(this.headerUrl=this.author.avatar),f.getItem("bossInfo",function(t){if(p.toast({message:t.data,duration:1}),t.data){var r=JSON.parse(t.data);e.userId=r._id}})},methods:{agreeIt:function(){var e=this;f.setItem("articleId",this.articleId,function(){}),this.hasAgree?s.default.upvote(this.articleId,this.userId).then(function(t){o.default.dump("success",t),p.toast({message:"已赞",duration:.3}),e.agreeIcon="/src/components/cells/images/zan.png",e.$emit("agree",t.result)}).catch(function(e){o.default.dump("Failed",e),p.toast({message:e,duration:1})}):s.default.upvote(this.articleId,this.userId).then(function(t){o.default.dump("success",t),p.toast({message:"已赞",duration:.3}),e.agreeIcon="/src/components/cells/images/agree-active.png",e.$emit("agree",t.result)}).catch(function(e){o.default.dump("Failed",e),p.toast({message:e,duration:1})}),this.hasAgree=!this.hasAgree},repostIt:function(){f.setItem("articleId",this.articleId,function(){}),d.default.push(l.default.repostInput)},commentIt:function(){f.setItem("articleId",this.articleId,function(){}),d.default.push(l.default.createComment)},toUserHome:function(){d.default.push(l.default.userHome)}},components:{cellUserInfo:r(33),nAgree:r(46),nComment:r(47),nRepost:r(48)}}},44:function(e,t){e.exports={"article-box":{backgroundColor:"#ffffff",marginBottom:10},"button-fresh-group":{marginLeft:30,marginRight:30,flexDirection:"row",borderTopWidth:2,borderColor:"#f8f8f8",width:690},"button-repost-group":{flexDirection:"row",width:750},"button-item":{flexDirection:"row",flex:1,height:73,justifyContent:"center",alignItems:"center"},"button-icon":{width:32,height:32,marginRight:14},"button-content":{fontSize:24,color:"#bbbbbb"},"agree-active":{color:"#fc6d3f"}}},45:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["article-box"]},[r("cell-user-info",{attrs:{headerUrl:e.headerUrl,userName:e.author.nick,userIssue:e.author.from,articleTime:e.articleTime},on:{callBack:e.toUserHome}}),e._t("default"),r("div",{class:[0==e.footerType?"button-fresh-group":"button-repost-group"]},[r("div",{staticClass:["button-item"],on:{click:e.repostIt}},[r("n-repost",{attrs:{text:e.forward}})],1),r("div",{staticClass:["button-item"],on:{click:e.commentIt}},[r("n-comment",{attrs:{text:e.comment}})],1),r("div",{staticClass:["button-item"]},[r("n-agree",{attrs:{text:e.agree,targetType:e.targetType,articleId:e.articleId,userId:e.userId}})],1)])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},46:function(e,t,r){var n,i,o=[];o.push(r(37)),n=r(34);var a=r(40);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/agree/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-38d1bc69",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},47:function(e,t,r){var n,i,o=[];o.push(r(38)),n=r(35);var a=r(41);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/comment/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-3b6f93dc",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},48:function(e,t,r){var n,i,o=[];o.push(r(39)),n=r(36);var a=r(42);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/repost/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-7ae34968",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n},5:function(e,t,r){"use strict";function n(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:n,isWeb:i,getDeviceInfo:o}},527:function(e,t,r){var n,i,o=[];o.push(r(64)),n=r(63);var a=r(65);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/cellFresh.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-03bf540a",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},6:function(e,t,r){"use strict";var n=r(8),i=r(7),o=r(2);e.exports={formats:o,parse:i,stringify:n}},63:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),o=n(i),a=r(4),s=n(a);t.default={props:{newsDetails:{default:function(){return{}}}},data:function(){return{footerType:0}},components:{cellContainer:r(25)},methods:{viewDetails:function(){s.default.push(o.default.repostPage)},imgSize:function(e){return e<=.75?"article-img-vertical":e>=1.3?"article-img-horizen":"article-img-square"},imgWidth:function(e){return(e<=.75?240:e>=1.3?240*e:220)+"px"},imgHeight:function(e){return(e<=.75?240/e:e>=1.3?240:220/e)+"px"}}}},64:function(e,t){e.exports={"article-module-bg":{marginLeft:30,marginRight:30,width:690},"article-tit":{fontSize:32,color:"#000000",fontWeight:"600",lines:2,marginBottom:10,lineHeight:45},"article-wrap":{marginBottom:25},"article-content":{fontSize:32,color:"#333333",lines:4,lineHeight:45},"article-content-notit":{fontSize:32,lineHeight:45,color:"#333333"},"article-img-wrap-three":{justifyContent:"space-between",alignItems:"center"},"article-img-wrap":{marginBottom:25,flexDirection:"row"},"article-img-group-two":{marginRight:15},"article-img-box":{width:220,height:220,overflow:"hidden"},"article-img-item":{width:220,height:220},"article-img-vertical":{width:240,height:320},"article-img-horizen":{width:320,height:240},"article-img-square":{width:220,height:220}}},65:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("cell-container",{attrs:{footerType:e.footerType,author:e.newsDetails.author,articleTime:e.newsDetails.createAt,comment:e.newsDetails.commentCount,forward:e.newsDetails.transmitCount,agree:e.newsDetails.upvoteCount,articleId:e.newsDetails._id}},[r("div",{staticClass:["article-module-bg"],on:{click:e.viewDetails}},[e.newsDetails.title.length>0?r("div",{staticClass:["article-tit-wrap"]},[r("text",{staticClass:["article-tit"]},[e._v(e._s(e.newsDetails.title))])]):e._e(),r("div",{staticClass:["article-wrap"]},[r("nn-html",{staticClass:["article-content"],class:[0==e.newsDetails.title.length?"article-content-notit":""],attrs:{html:e.newsDetails.summary}})],1),e.newsDetails.images.length>0?r("div",{staticClass:["article-img-wrap"],class:[3==e.newsDetails.images.length?"article-img-wrap-three":""]},e._l(e.newsDetails.images,function(t,n){return r("div",{key:n,staticClass:["article-img-group"],class:[2==e.newsDetails.images.length?"article-img-group-two":""]},[r("div",{staticClass:["article-img-box"],class:[e.imgSize(t.size)]},[r("image",{staticClass:["article-img-item"],class:[e.imgSize(t.size)],style:{width:e.imgWidth(t.size),height:e.imgHeight(t.size)},attrs:{src:t.url}})])])})):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,r){"use strict";var n=r(3),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<n.length;++o){var a,s,c=n[o],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),i.call(r,a)?r[a]=[].concat(r[a]).concat(s):r[a]=s}return r},s=function(e,t,r){if(!e.length)return t;var n,i=e.shift();if("[]"===i)n=[],n=n.concat(s(e,t,r));else{n=r.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(n=[],n[a]=s(e,t,r)):n[o]=s(e,t,r)}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=o.exec(n),l=c?n.slice(0,c.index):n,u=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var d=0;null!==(c=a.exec(n))&&d<r.depth;){if(d+=1,!r.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),s(u,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},l=Object.keys(i),u=0;u<l.length;++u){var d=l[u],f=c(d,i[d],r);s=n.merge(s,f,r)}return n.compact(s)}},8:function(e,t,r){"use strict";var n=r(3),i=r(2),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,i,o,a,s,c,l,u,d,f,p){var m=t;if("function"==typeof c)m=c(r,m);else if(m instanceof Date)m=d(m);else if(null===m){if(o)return s&&!p?s(r):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m)){if(s){return[f(p?r:s(r))+"="+f(s(m))]}return[f(r)+"="+f(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(c))g=c;else{var y=Object.keys(m);g=l?y.sort(l):y}for(var v=0;v<g.length;++v){var x=g[v];a&&null===m[x]||(h=Array.isArray(m)?h.concat(e(m[x],i(r,x),i,o,a,s,c,l,u,d,f,p)):h.concat(e(m[x],r+(u?"."+x:"["+x+"]"),i,o,a,s,c,l,u,d,f,p)))}return h};e.exports=function(e,t){var r=e,n=t||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===n.delimiter?s.delimiter:n.delimiter,l="boolean"==typeof n.strictNullHandling?n.strictNullHandling:s.strictNullHandling,u="boolean"==typeof n.skipNulls?n.skipNulls:s.skipNulls,d="boolean"==typeof n.encode?n.encode:s.encode,f="function"==typeof n.encoder?n.encoder:s.encoder,p="function"==typeof n.sort?n.sort:null,m=void 0!==n.allowDots&&n.allowDots,h="function"==typeof n.serializeDate?n.serializeDate:s.serializeDate,g="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:s.encodeValuesOnly;if(void 0===n.format)n.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,n.format))throw new TypeError("Unknown format option provided.");var y,v,x=i.formatters[n.format];"function"==typeof n.filter?(v=n.filter,r=v("",r)):Array.isArray(n.filter)&&(v=n.filter,y=v);var _=[];if("object"!=typeof r||null===r)return"";var w;w=n.arrayFormat in o?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var b=o[w];y||(y=Object.keys(r)),p&&y.sort(p);for(var j=0;j<y.length;++j){var I=y[j];u&&null===r[I]||(_=_.concat(c(r[I],I,b,l,u,d?f:null,v,p,m,h,x,g)))}return _.join(a)}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"}});