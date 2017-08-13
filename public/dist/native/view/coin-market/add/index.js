// { "framework": "Vue"} 

!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=518)}({0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},1:function(e,t,i){"use strict";var r=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},10:function(e,t,i){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},11:function(e,t){e.exports={border:{borderWidth:1},container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image-box":{position:"absolute",bottom:0,left:0,width:120,height:80},"left-image":{position:"absolute",bottom:20,left:28,width:25,height:48},"right-image-box":{position:"absolute",bottom:20,right:28,width:50,height:50,alignItems:"center"},"right-image":{width:6,height:40}}},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():i("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?i("div",{staticClass:["right-image-box"],attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[i("image",{staticClass:["right-image"],attrs:{src:e.rightItemSrc}})]):e._e(),e.leftItemSrc?e._e():i("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?i("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e.leftItemSrc?i("div",{staticClass:["left-image-box"],on:{click:e.onclickleftitem}}):e._e(),i("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},13:function(e,t,i){"use strict";var r=i(3),n=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:i(16)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(n.default.isIOS()){var e=weex.config.env,t=e.scale,i=e.deviceWidth/t;this.height=48e3/i}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},14:function(e,t){e.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"]},[i("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),i("div",{staticClass:["wrapper"],style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},16:function(e,t,i){var r,n,o=[];o.push(i(11)),r=i(10);var a=i(12);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-7c73bc08",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},17:function(e,t,i){var r,n,o=[];o.push(i(14)),r=i(13);var a=i(15);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-156f9af6",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},18:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemSrc:{default:""}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void n.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:i(17)}}},19:function(e,t){e.exports={root:{width:750}}},190:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=r(n),a=i(4),s=r(a);t.default={props:{coins:{default:function(){return[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:"1800",usdPrice:"300",follow:"true"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"}]}},switchIsChecked:{default:"female"},hasIcon:{default:!1}},data:{title:"添加币"},methods:{oncellclick:function(e){s.default.push(o.default.coinDetails,{id:e})}},components:{backNavpage:i(21),switchBtn:i(45)}}},2:function(e,t,i){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var i=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(i[r]=e[r]);return i},t.merge=function(e,i,n){if(!i)return e;if("object"!=typeof i){if(Array.isArray(e))e.push(i);else{if("object"!=typeof e)return[e,i];(n.plainObjects||n.allowPrototypes||!r.call(Object.prototype,i))&&(e[i]=!0)}return e}if("object"!=typeof e)return[e].concat(i);var o=e;return Array.isArray(e)&&!Array.isArray(i)&&(o=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(i)?(i.forEach(function(i,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],i,n):e.push(i):e[o]=i}),e):Object.keys(i).reduce(function(e,r){var o=i[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,n):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),i="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=t.charAt(r):o<128?i+=n[o]:o<2048?i+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?i+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),i+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return i},t.compact=function(e,i){if("object"!=typeof e||null===e)return e;var r=i||[],n=r.indexOf(e);if(-1!==n)return r[n];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(i){e[i]=t.compact(e[i],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("navpage",{staticClass:["root"],attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e.showLine?i("div",{staticStyle:{height:"1px",backgroundColor:"#e5e5e5"}}):e._e(),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},208:function(e,t){e.exports={root:{width:750,flex:1},"item-line":{paddingLeft:30,paddingRight:30},item:{height:148,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"item-line-top":{borderWidth:1,borderColor:"#ffffff"},"item-line-bottom":{borderWidth:1,borderColor:"#f7f7f7"},"user-header-wrap":{flexDirection:"row",alignItems:"center",textAlign:"left",height:60},"user-name":{fontSize:32,color:"#434343"},"user-issue":{fontSize:20,color:"#959595"},"div-increase":{width:120,height:50,borderRadius:10,alignItems:"center",justifyContent:"center"},"bg-price-down":{backgroundColor:"#ff5452"},"bg-price-up":{backgroundColor:"#21cd3d"},"price-group":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start"},price:{alignItems:"flex-end"},"price-calm":{color:"#FFFFFF",fontSize:20},increase:{marginTop:10,marginLeft:10,width:18,height:18},"star-box":{flexDirection:"row",justifyContent:"flex-end",marginBottom:10},"star-text":{paddingLeft:10,paddingRight:10,backgroundColor:"#f9b713",borderRadius:10},star:{flexDirection:"row"},slider:{width:750,height:290},"slider-indicator":{width:750,height:30,position:"absolute",bottom:60,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:15},img:{width:520,height:210,borderRadius:10},"list-head":{width:750,height:64,paddingLeft:30,paddingRight:30,backgroundColor:"#f7f7f7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"list-head-item":{fontSize:24,color:"#959595"}}},21:function(e,t,i){var r,n,o=[];o.push(i(19)),r=i(18);var a=i(20);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-4fa3807a",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},226:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("back-navpage",{attrs:{title:e.title}},[i("div",{staticClass:["root"]},[i("div",{staticClass:["list-head"]},e._l(["名称","最新价格","添加"],function(t){return i("text",{staticClass:["list-head-item"]},[e._v(e._s(t))])})),i("list",{staticClass:["border"]},e._l(e.coins,function(t){return i("cell",{appendAsTree:!0,attrs:{append:"tree"},on:{click:function(i){e.oncellclick(t.id)}}},[i("div",{key:t.id,staticClass:["item-line"]},[i("div",{staticClass:["item-line-top"]}),i("div",{staticClass:["item","border"]},[i("div",{staticClass:["user-info-wrap"]},[i("text",{staticClass:["user-name"]},[e._v(e._s(t.name))]),i("div",{staticClass:["price-group"]},[i("text",{staticClass:["user-issue"]},[e._v(e._s(t.storeName))])])]),i("div",{staticClass:["price","border"]},[0==t.increase?i("text",{staticClass:["user-name"]},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),t.increase>0?i("text",{staticClass:["user-name","price-up"]},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),t.increase<0?i("text",{staticClass:["user-name","price-down"]},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),i("text",{staticClass:["user-issue","border"]},[e._v("$ "+e._s(t.usdPrice))])]),i("switch-btn",{attrs:{value:t.follow,trueValue:"true",falseValue:"false"},on:{input:function(e){return t.follow=e}}})],1),i("div",{staticClass:["item-line-bottom"]})])])}))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,i){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function n(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:n,getDeviceInfo:o}},4:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,i=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(i)r=e.substring(0,e.lastIndexOf("native/")+5);else{var n=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(n=o[1]),r="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(y.default.web,t)}function a(e,t){_.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){b.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,b.default.log("getBaseUrl",n());var i=t?""+n()+e.jsPath+".js?"+d.default.stringify(t):""+n()+e+".js";b.default.log("push "+i),_.push({url:i,animated:"true"},function(e){b.default.log("callback: ",e)})}function l(){_.pop({animated:"true"},function(e){b.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=i(6),d=r(u),f=i(7),p=r(f),m=i(3),h=r(m),g=i(0),y=r(g),v=i(5),b=r(v),_=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:n,pushWeb:o,pop:l}},42:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("animation");t.default={name:"u-switch",props:{value:[String,Number,Boolean,Object,Array],trueValue:{type:[String,Number,Boolean,Object,Array],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array],default:!1},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value==this.trueValue}},methods:{change:function(){if(!this.disabled){var e=this.checked?this.falseValue:this.trueValue;r.transition(this.$refs.icon,{styles:{transform:"translateX("+(this.checked?"0":"100%")+")"},duration:300,timingFunction:"ease",delay:0}),this.$emit("input",e),this.$emit("change",e)}}},mounted:function(){var e=this;this.$nextTick(function(){e.checked&&r.transition(e.$refs.icon,{styles:{transform:"translateX(100%)"},duration:0,delay:0})})}}},43:function(e,t){e.exports={switch:{width:80,flexDirection:"row",alignItems:"center",backgroundColor:"#c9c9c9"},"sz-small":{minWidth:80,height:40,borderRadius:20},"sz-normal":{minWidth:120,height:60,borderRadius:30},"sz-large":{minWidth:160,height:80,borderRadius:40},checked:{backgroundColor:"#fc6d3f"},disabled:{backgroundColor:"#c9c9c9"},icon:{backgroundColor:"#ffffff",borderStyle:"solid",borderColor:"#c9c9c9",transform:"translateX(0)"},"icon-checked":{borderColor:"#fc6d3f"},"icon-disabled":{borderColor:"#c9c9c9"},"isz-small":{width:40,height:40,borderWidth:2,borderRadius:20},"isz-normal":{width:60,height:60,borderWidth:4,borderRadius:30},"isz-large":{width:80,height:80,borderWidth:6,borderRadius:3},text:{color:"#c9c9c9",marginLeft:40},"text-disabled":{color:"#e6ecf2"}}},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["switch"],class:[e.checked?"checked":"",e.disabled?"disabled":"","sz-"+e.size],on:{click:e.change}},[i("div",{ref:"icon",staticClass:["icon"],class:[e.checked?"icon-checked":"",e.disabled?"icon-disabled":"","isz-"+e.size]}),e.$slots.default?i("text",{staticClass:["text"],class:[e.disabled?"text-disabled":""]},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},45:function(e,t,i){var r,n,o=[];o.push(i(43)),r=i(42);var a=i(44);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/switchBtn/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-75011658",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r},5:function(e,t,i){"use strict";function r(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){f||r("["+e+"]  "+o(t))}function o(e,t,i){if(void 0===t&&(t=10),void 0===i&&(i=0),i===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",n=0;n<i;n++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===n&&n++,e.hasOwnProperty(c)){l=!1;var d=o(e[c],t,i+1);d.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var f=u(e[c]);s+=c,s+="["+f,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,i,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:i,info1:r})+"------------create ------------\n"+function(){var e="",t=0,i=arguments.callee;do{if(t>=3&&t<10){e+=""+i}else if(t>=10)break;i=i.arguments.callee.caller,t++}while(i);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function c(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:r,dump:n,testBegin:l,testEnd:c}},518:function(e,t,i){var r,n,o=[];o.push(i(208)),r=i(190);var a=i(226);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/add/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-94f4a02e",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},6:function(e,t,i){"use strict";var r=i(9),n=i(8),o=i(1);e.exports={formats:o,parse:n,stringify:r}},7:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},8:function(e,t,i){"use strict";var r=i(2),n=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var i={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),n.call(i,a)?i[a]=[].concat(i[a]).concat(s):i[a]=s}return i},s=function(e,t,i){if(!e.length)return t;var r,n=e.shift();if("[]"===n)r=[],r=r.concat(s(e,t,i));else{r=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,a=parseInt(o,10);!isNaN(a)&&n!==o&&String(a)===o&&a>=0&&i.parseArrays&&a<=i.arrayLimit?(r=[],r[a]=s(e,t,i)):r[o]=s(e,t,i)}return r},l=function(e,t,i){if(e){var r=i.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!i.plainObjects&&n.call(Object.prototype,c)&&!i.allowPrototypes)return;u.push(c)}for(var d=0;null!==(l=a.exec(r))&&d<i.depth;){if(d+=1,!i.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!i.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,i)}};e.exports=function(e,t){var i=t||{};if(null!==i.decoder&&void 0!==i.decoder&&"function"!=typeof i.decoder)throw new TypeError("Decoder has to be a function.");if(i.delimiter="string"==typeof i.delimiter||r.isRegExp(i.delimiter)?i.delimiter:o.delimiter,i.depth="number"==typeof i.depth?i.depth:o.depth,i.arrayLimit="number"==typeof i.arrayLimit?i.arrayLimit:o.arrayLimit,i.parseArrays=!1!==i.parseArrays,i.decoder="function"==typeof i.decoder?i.decoder:o.decoder,i.allowDots="boolean"==typeof i.allowDots?i.allowDots:o.allowDots,i.plainObjects="boolean"==typeof i.plainObjects?i.plainObjects:o.plainObjects,i.allowPrototypes="boolean"==typeof i.allowPrototypes?i.allowPrototypes:o.allowPrototypes,i.parameterLimit="number"==typeof i.parameterLimit?i.parameterLimit:o.parameterLimit,i.strictNullHandling="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return i.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a(e,i):e,s=i.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var d=c[u],f=l(d,n[d],i);s=r.merge(s,f,i)}return r.compact(s)}},9:function(e,t,i){"use strict";var r=i(2),n=i(1),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,i,n,o,a,s,l,c,u,d,f,p){var m=t;if("function"==typeof l)m=l(i,m);else if(m instanceof Date)m=d(m);else if(null===m){if(o)return s&&!p?s(i):i;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(s){return[f(p?i:s(i))+"="+f(s(m))]}return[f(i)+"="+f(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(l))g=l;else{var y=Object.keys(m);g=c?y.sort(c):y}for(var v=0;v<g.length;++v){var b=g[v];a&&null===m[b]||(h=Array.isArray(m)?h.concat(e(m[b],n(i,b),n,o,a,s,l,c,u,d,f,p)):h.concat(e(m[b],i+(u?"."+b:"["+b+"]"),n,o,a,s,l,c,u,d,f,p)))}return h};e.exports=function(e,t){var i=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,d="boolean"==typeof r.encode?r.encode:s.encode,f="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var y,v,b=n.formatters[r.format];"function"==typeof r.filter?(v=r.filter,i=v("",i)):Array.isArray(r.filter)&&(v=r.filter,y=v);var _=[];if("object"!=typeof i||null===i)return"";var w;w=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var x=o[w];y||(y=Object.keys(i)),p&&y.sort(p);for(var I=0;I<y.length;++I){var C=y[I];u&&null===i[C]||(_=_.concat(l(i[C],C,x,c,u,d?f:null,v,p,m,h,b,g)))}return _.join(a)}}});