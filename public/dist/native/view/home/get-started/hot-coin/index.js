// { "framework": "Vue"} 

!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=629)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"}}},1:function(e,t,i){"use strict";var r=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},174:function(e,t,i){"use strict";e.exports={data:{items:[],sliderItems:[]},methods:{ready:function(){this.sliderItems=this.getSliderItems()},getSliderItems:function(){return this.items.map(function(e,t){return e}.bind(this))}}}},176:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=r(n),a=i(3),s=r(a);t.default={props:{coins:{default:function(){return[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800.62",usdPrice:"300"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:1800.333,usdPrice:"300"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:1800.1234,usdPrice:"300"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:1800.12,usdPrice:"300"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:1800.12,usdPrice:"300"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.39,usdPrice:"300"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.12,usdPrice:"300"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.34,usdPrice:"300"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.12,usdPrice:"300"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:1800.1398,usdPrice:"300"}]}}},methods:{oncellclick:function(e){s.default.push(o.default.coinDetails,{id:e})}}}},185:function(e,t){e.exports={"slider-page":{width:720,height:420}}},187:function(e,t){e.exports={root:{width:750,flex:1},"item-line":{paddingLeft:30,paddingRight:30},item:{height:148,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"item-line-top":{borderWidth:1,borderColor:"#ffffff"},"item-line-bottom":{borderWidth:1,borderColor:"#f8f8f8"},"user-header-wrap":{flexDirection:"row",alignItems:"center",textAlign:"left",height:60},"user-name":{fontSize:34,color:"#434343"},"user-issue":{marginTop:10,fontSize:24,color:"#959595"},"div-increase":{width:140,height:65,borderRadius:10,alignItems:"center",justifyContent:"center"},"bg-price-down":{backgroundColor:"#ff5452"},"bg-price-up":{backgroundColor:"#21cd3d"},price:{width:250,alignItems:"flex-end"},"price-usd":{marginTop:3,fontSize:24,color:"#959595"},"price-calm":{color:"#FFFFFF",fontSize:32},increase:{marginTop:10,marginLeft:10,width:18,height:18},"star-box":{flexDirection:"row",justifyContent:"flex-end",marginBottom:10},"star-text":{paddingLeft:10,paddingRight:10,backgroundColor:"#f9b713",borderRadius:10},star:{flexDirection:"row"},slider:{width:750,height:290},"slider-indicator":{width:750,height:30,position:"absolute",bottom:60,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:15},img:{width:520,height:210,borderRadius:10},"list-head":{width:750,height:64,paddingLeft:30,paddingRight:30,backgroundColor:"#f7f7f7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"list-head-item":{fontSize:24,color:"#959595"},"list-head-item-price":{width:250,textAlign:"right"}}},2:function(e,t,i){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var i=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(i[r]=e[r]);return i},t.merge=function(e,i,n){if(!i)return e;if("object"!=typeof i){if(Array.isArray(e))e.push(i);else{if("object"!=typeof e)return[e,i];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,i))&&(e[i]=!0)}return e}if("object"!=typeof e)return[e].concat(i);var o=e;return Array.isArray(e)&&!Array.isArray(i)&&(o=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(i)?(i.forEach(function(i,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],i,n):e.push(i):e[o]=i}),e):Object.keys(i).reduce(function(e,r){var o=i[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,n):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),i="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=t.charAt(r):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},t.compact=function(e,i){if("object"!=typeof e||null===e)return e;var r=i||[],n=r.indexOf(e);if(-1!==n)return r[n];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(i){e[i]=t.compact(e[i],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},202:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["slider-page"]},[i("slider-neighbor-item",{attrs:{repeat:e.sliderItems}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},204:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["root"]},[e._m(0),i("list",{staticClass:["border"]},e._l(e.coins,function(t){return i("cell",{appendAsTree:!0,attrs:{append:"tree"},on:{click:function(i){e.oncellclick(t.id)}}},[i("div",{staticClass:["item-line"]},[i("div",{staticClass:["item-line-top"]}),i("div",{staticClass:["item","border"]},[i("div",{staticClass:["user-info-wrap"]},[i("text",{staticClass:["user-name"]},[e._v(e._s(t.name))]),i("text",{staticClass:["user-issue"]},[e._v(e._s(t.storeName))])]),i("div",{staticClass:["price"]},[i("text",{staticClass:["user-name"]},[e._v("￥ "+e._s(t.cnyPrice))]),i("text",{staticClass:["price-usd"]},[e._v("$ "+e._s(t.usdPrice))])]),i("div",{staticClass:["div-increase"],class:[t.increase>0?"bg-price-up":"bg-price-down"]},[0==t.increase?i("text",{staticClass:["price-calm"]},[e._v(e._s(t.increase)+"%")]):e._e(),t.increase>0?i("text",{staticClass:["price-calm"]},[e._v("+"+e._s(t.increase)+"%")]):e._e(),t.increase<0?i("text",{staticClass:["price-calm"]},[e._v(e._s(t.increase)+"%")]):e._e()])]),i("div",{staticClass:["item-line-bottom"]})])])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["list-head"]},[i("text",{staticClass:["list-head-item"]},[e._v("名称")]),i("text",{staticClass:["list-head-item","list-head-item-price"]},[e._v("最新价格")]),i("text",{staticClass:["list-head-item"]},[e._v("涨跌幅")])])}]},e.exports.render._withStripped=!0},295:function(e,t,i){var r,n,o=[];o.push(i(185)),r=i(174);var a=i(202);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-page.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-4b4cd99c",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},297:function(e,t,i){var r,n,o=[];o.push(i(187)),r=i(176);var a=i(204);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/market/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-6096306c",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},3:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,i=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(i)r=e.substring(0,e.lastIndexOf("native/")+5);else{var n=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(n=o[1]),r="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":r}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){w.push({url:t?e+"?"+u.default.stringify(t):e,animated:"true"},function(e){b.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,b.default.log("getBaseUrl",n());var i=t?""+n()+e.jsPath+".js?"+u.default.stringify(t):""+n()+e+".js";b.default.log("push "+i),w.push({url:i,animated:"true"},function(e){b.default.log("callback: ",e)})}function c(){w.pop({animated:"true"},function(e){b.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=i(6),u=r(d),f=i(9),p=r(f),m=i(4),h=r(m),g=i(0),y=r(g),v=i(5),b=r(v),w=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:n,pushWeb:o,pop:c}},323:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(5),o=r(n),a=i(0),s=(r(a),i(3));r(s);t.default={beforeCreate:function(){o.default.log(this.name+" beforeCreate")},created:function(){o.default.log(this.name+" created")},beforeMount:function(){o.default.log(this.name+" beforeMount")},mounted:function(){o.default.log(this.name+" mounted")},beforeDestroy:function(){o.default.log(this.name+" beforeDestory")},destroyed:function(){o.default.log(this.name+" destroyed")},data:function(){return{name:"hot-coin",coins:[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:"1800",usdPrice:"300"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:"1800",usdPrice:"300"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:"1800",usdPrice:"300"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:"1800",usdPrice:"300"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300"}],bannerData:[{id:"1",url:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"},{id:"2",url:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"},{id:"3",url:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}]}},methods:{bannerItemClick:function(e){o.default.log("bannerItemClick "+e)}},components:{sliderNeighbor:i(295),nMarket:i(297)}}},4:function(e,t,i){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function n(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:n,getDeviceInfo:o}},415:function(e,t){e.exports={root:{width:750,flex:1},border:{borderWidth:1},"item-line":{width:750,paddingLeft:30,paddingRight:30},item:{height:148,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"item-line-top":{borderWidth:1,borderColor:"#ffffff"},"item-line-bottom":{borderWidth:1},"user-header-wrap":{flexDirection:"row",alignItems:"center",textAlign:"left",height:60},"user-name":{fontSize:32,color:"#434343"},"user-issue":{fontSize:20,color:"#959595"},"price-group":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start"},price:{alignItems:"flex-end"},"price-calm":{fontSize:20},"price-down":{color:"#ff5452"},"price-up":{color:"#21cd3d"},increase:{marginTop:10,marginLeft:10,width:18,height:18},"star-box":{flexDirection:"row",justifyContent:"flex-end",marginBottom:10},"star-text":{paddingLeft:10,paddingRight:10,backgroundColor:"#f9b713",borderRadius:10},star:{flexDirection:"row"},slider:{width:750,height:290},"slider-indicator":{width:750,height:30,position:"absolute",bottom:60,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:15},img:{width:520,height:210,borderRadius:10},"list-head":{width:750,height:64,paddingLeft:30,paddingRight:30,backgroundColor:"#f7f7f7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"list-head-item":{fontSize:24,color:"#959595"}}},483:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["root"]},[i("slider-neighbor",{staticClass:["slider"],attrs:{neighborScale:"1.0",neighborSpace:"40",currentItemScale:"1.0",interval:"3000",neighborAlpha:"0.8",autoPlay:"true"}},[e._l(e.bannerData,function(t){return i("image",{staticClass:["img"],attrs:{src:t.url},on:{click:function(i){e.bannerItemClick(t.id)}}})}),i("indicator",{staticClass:["slider-indicator"]})],2),i("n-market",{attrs:{coins:e.coins}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,i){"use strict";function r(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){f||r("["+e+"]  "+o(t))}function o(e,t,i){if(void 0===t&&(t=10),void 0===i&&(i=0),i===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":d(e)))return""+e;for(var r="",n=0;n<i;n++)r+="    ";var a=r+"    ",s="{\n",c=!0;for(var l in e)if(0===n&&n++,e.hasOwnProperty(l)){c=!1;var u=o(e[l],t,i+1);u.indexOf("function"),s+=a,e.hasOwnProperty(l)||(s+="prototype.");var f=d(e[l]);s+=l,s+="["+f,s+="]",s+=" : ",s+=u,s+=" ,\n"}return s+=r+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,i,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:i,info1:r})+"------------create ------------\n"+function(){var e="",t=0,i=arguments.callee;do{if(t>=3&&t<10){e+=""+i}else if(t>=10)break;i=i.arguments.callee.caller,t++}while(i);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function l(e){u._testEnd=(new Date).getTime(),s(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=u||{},f=!1;t.default={log:r,dump:n,testBegin:c,testEnd:l}},6:function(e,t,i){"use strict";var r=i(8),n=i(7),o=i(1);e.exports={formats:o,parse:n,stringify:r}},629:function(e,t,i){var r,n,o=[];o.push(i(415)),r=i(323);var a=i(483);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/hot-coin/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-814674f6",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},7:function(e,t,i){"use strict";var r=i(2),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var i={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,c=r[o],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),n.call(i,a)?i[a]=[].concat(i[a]).concat(s):i[a]=s}return i},s=function(e,t,i){if(!e.length)return t;var r,n=e.shift();if("[]"===n)r=[],r=r.concat(s(e,t,i));else{r=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,a=parseInt(o,10);!isNaN(a)&&n!==o&&String(a)===o&&a>=0&&i.parseArrays&&a<=i.arrayLimit?(r=[],r[a]=s(e,t,i)):r[o]=s(e,t,i)}return r},c=function(e,t,i){if(e){var r=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=o.exec(r),l=c?r.slice(0,c.index):r,d=[];if(l){if(!i.plainObjects&&n.call(Object.prototype,l)&&!i.allowPrototypes)return;d.push(l)}for(var u=0;null!==(c=a.exec(r))&&u<i.depth;){if(u+=1,!i.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!i.allowPrototypes)return;d.push(c[1])}return c&&d.push("["+r.slice(c.index)+"]"),s(d,t,i)}};e.exports=function(e,t){var i=t||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:o.delimiter,i.depth="number"==typeof i.depth?i.depth:o.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:o.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:o.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:o.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:o.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:o.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:o.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return i.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a(e,i):e,s=i.plainObjects?Object.create(null):{},l=Object.keys(n),d=0;d<l.length;++d){var u=l[d],f=c(u,n[u],i);s=r.merge(s,f,i)}return r.compact(s)}},8:function(e,t,i){"use strict";var r=i(2),n=i(1),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,i,n,o,a,s,c,l,d,u,f,p){var m=t;if("function"==typeof c)m=c(i,m);else if(m instanceof Date)m=u(m);else if(null===m){if(o)return s&&!p?s(i):i;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(s){return[f(p?i:s(i))+"="+f(s(m))]}return[f(i)+"="+f(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(c))g=c;else{var y=Object.keys(m);g=l?y.sort(l):y}for(var v=0;v<g.length;++v){var b=g[v];a&&null===m[b]||(h=Array.isArray(m)?h.concat(e(m[b],n(i,b),n,o,a,s,c,l,d,u,f,p)):h.concat(e(m[b],i+(d?"."+b:"["+b+"]"),n,o,a,s,c,l,d,u,f,p)))}return h};e.exports=function(e,t){var i=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,l="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,d="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,u="boolean"==typeof r.encode?r.encode:s.encode,f="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,v,b=n.formatters[r.format];"function"==typeof r.filter?(v=r.filter,i=v("",i)):Array.isArray(r.filter)&&(v=r.filter,y=v);var w=[];if("object"!=typeof i||null===i)return"";var x;x=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=o[x];y||(y=Object.keys(i)),p&&y.sort(p);for(var P=0;P<y.length;++P){var j=y[P];d&&null===i[j]||(w=w.concat(c(i[j],j,_,l,d,u?f:null,v,p,m,h,b,g)))}return w.join(a)}},9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"}});