// { "framework": "Vue"} 

!function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=346)}({0:function(e,t,r){"use strict";var i=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},1:function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(r[i]=e[i]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!i.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){i.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,n):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,i){var a=r[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],a,n):e[i]=a,e},a)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",i=0;i<t.length;++i){var a=t.charCodeAt(i);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(i):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(i+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(i)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var i=r||[],n=i.indexOf(e);if(-1!==n)return i[n];if(i.push(e),Array.isArray(e)){for(var a=[],o=0;o<e.length;++o)e[o]&&"object"==typeof e[o]?a.push(t.compact(e[o],i)):void 0!==e[o]&&a.push(e[o]);return a}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{bannerData:{default:function(){}}}}},126:function(e,t){e.exports={"slider-wrap":{position:"relative",width:750,height:400},"slider-group":{width:750,height:400},"slider-item":{width:750,height:350},indicator:{width:750,height:30,position:"absolute",bottom:0,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:10}}},143:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("slider",{staticClass:["slider-wrap"]},[e._l(e.bannerData,function(e,t){return r("div",{key:t,staticClass:["slider-group"]},[r("image",{staticClass:["slider-item"],attrs:{src:e.imageUrl}})])}),r("indicator",{staticClass:["indicator"]})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},176:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=i(n),o=r(6),s=i(o);t.default={data:function(){return{bannerData:[{imageUrl:"/src/view/link-wiki/images/start-all.png",callBack:function(){}},{imageUrl:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg",callBack:function(){}},{imageUrl:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg",callBack:function(){}}],badgeData:[{action:function(){console.log("click badge1")},iconStyle:{url:"/src/view/home/images/badge-ico.png",size:"m"},superScriptState:{hasSuperScript:!0,state:"1",content:"HOT"},iconName:{hasName:!0,name:"ICO爆料"}},{action:function(){console.log("click badge2")},iconStyle:{url:"/src/view/home/images/badge-boss.png",size:"m"},superScriptState:{hasSuperScript:!0,state:"1",content:"HOT"},iconName:{hasName:!0,name:"大咖秀"}},{action:function(){console.log("click badge3"),s.default.push(a.default.getStarted)},iconStyle:{url:"/src/view/home/images/badge-new.png",size:"m"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"新手营"}}],tabGroupLabel:[{label:"全部",value:0},{label:"btccccc",value:1},{label:"eth",value:2},{label:"eos",value:3},{label:"omg",value:4},{label:"bts",value:5},{label:"1st",value:6},{label:"dogge",value:7},{label:"ans",value:8},{label:"zec",value:9}],tabBarValue:0,tabBarClass:{activeClass:"homePage-active",defaultClass:"homePage-default",tabBarStyle:"homePage-tabBarNav",hasNextBtn:!0},articleGroup:[{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg","https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:[],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg","https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"}]}},components:{banner:r(306),badge:r(39),tabGroup:r(40),tabItem:r(41),textCell:r(50)},methods:{viewappear:function(){console.log("viewappear")}}}},18:function(e,t,r){"use strict";e.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"}}},20:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"u-tabs",props:{value:{type:[String,Number,Boolean,Object,Array],default:0},tabs:{default:function(){return[{label:"",value:0}]}},tabBarClass:{default:function(){return{activeClass:"",defaultClass:"",tabBarStyle:"",hasNextBtn:!0}}}},methods:{addTab:function(e){this.tabs.push(e)},removeTab:function(e){this.tabs.splice(this.tabs.indexOf(e),1)},selectTab:function(e){this.$emit("input",e.value),this.$emit("change",e.value)},nextTab:function(e,t){e<t.length-1&&this.$emit("input",e+1)}}}},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"u-tab",props:{label:{type:String,required:!0},value:{type:[String,Number,Boolean,Object,Array],required:!0}},data:function(){return{$parent:null}},computed:{actived:function(){return this.$parent&&this.$parent.value===this.value}},beforeDestroy:function(){this.$parent&&this.$parent.removeTab(this)}}},23:function(e,t){e.exports={"homePage-tabBarNav":{backgroundColor:"#f3f3f3"},"homePage-default":{color:"#000000",borderBottomWidth:4,borderColor:"#f3f3f3"},"homePage-active":{color:"#ff6539",borderBottomWidth:4,borderColor:"#ff6539"},"linkWiki-tabBarNav":{backgroundColor:"#fc6d3f"},"link-wiki-default":{color:"#ffffff",borderBottomWidth:4,borderColor:"#fc6d3f"},"link-wiki-active":{color:"#ffffff",borderBottomWidth:4,borderColor:"#ffffff"},"tab-nav":{width:750,height:70,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},"tab-nav-wrap":{height:70,flexDirection:"row",justifyContent:"space-between"},"tab-nav-hasNextBtn":{width:680},"tab-nav-noNextBtn":{width:750},"tab-nav-group":{paddingLeft:25,paddingRight:25,height:70,justifyContent:"center",alignItems:"center"},"tab-item":{paddingTop:17,paddingBottom:17,fontSize:28},"nav-next":{justifyContent:"center",alignItems:"center",width:15,paddingLeft:5}}},230:function(e,t){e.exports={}},24:function(e,t){e.exports={"badge-wrap":{flexDirection:"column",alignItems:"center"},"badgeIcon-wrap-m":{position:"relative",width:90,height:90},"badgeImg-wrap-m":{position:"absolute",bottom:0,left:0,width:90,height:90},"icon-wrap-m":{width:90,height:90,borderRadius:50},"superScript-hot":{position:"absolute",top:0,right:0,display:"inline-block",width:40,height:20,lineHeight:20,textAlign:"center",backgroundColor:"#ff6a3c",color:"#ffffff",fontSize:12,borderRadius:20,borderWidth:1,borderColor:"#ffffff"},"badgeTit-wrap-m":{fontSize:24,color:"#333333",fontWeight:"200",marginTop:18},"badgeIcon-wrap-s":{position:"relative",width:60,height:60},"badgeImg-wrap-s":{position:"absolute",bottom:0,left:0,width:40,height:40},"icon-wrap-s":{width:40,height:40,borderRadius:50},"superScript-mesg":{position:"absolute",top:0,right:2,display:"block",width:26,height:22,lineHeight:20,textAlign:"center",backgroundColor:"#ffffff",color:"#ff6a3c",fontSize:12,borderRadius:16,borderWidth:2,borderColor:"#ff6a3c"},"badgeIcon-wrap-xm":{width:100,height:100},"badgeImg-wrap-xm":{width:100,height:100},"icon-wrap-xm":{width:100,height:100,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-xm":{fontSize:24,color:"#434343",fontWeight:"200",marginTop:20},"badgeIcon-wrap-l":{width:120,height:120},"badgeImg-wrap-l":{width:90,height:90},"icon-wrap-l":{width:120,height:120,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-l":{fontSize:36,color:"#434343",fontWeight:"200",marginTop:20}}},26:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.actived?r("scroller",[e._t("default")],2):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0},27:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:["tab-nav"],class:[e.tabBarClass.tabBarStyle]},[r("scroller",{staticClass:["tab-nav-wrap"],class:[e.tabBarClass.hasNextBtn?"tab-nav-hasNextBtn":"tab-nav-noNextBtn"],attrs:{scrollDirection:"horizontal"}},e._l(e.tabs,function(t){return r("div",{staticClass:["tab-nav-group"]},[r("text",{staticClass:["tab-item"],class:[t.value===e.value?e.tabBarClass.activeClass:e.tabBarClass.defaultClass],on:{click:function(r){e.selectTab(t)}}},[e._v(e._s(t.label))])])})),e.tabBarClass.hasNextBtn?r("image",{staticClass:["nav-next"],attrs:{src:"/src/view/home/images/nextButton.png"},on:{click:function(t){e.nextTab(e.value,e.tabs)}}}):e._e()]),r("div",{staticClass:["tab-content"]},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},270:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("list",{on:{viewappear:e.viewappear}},[r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("banner",{attrs:{bannerData:e.bannerData}})],1),r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("div",{staticStyle:{flexDirection:"row",justifyContent:"space-around",width:"750px",height:"185px"}},e._l(e.badgeData,function(e,t){return r("div",{key:t,staticStyle:{justifyContent:"space-around",alignItems:"center"}},[r("badge",{attrs:{action:e.action,iconStyle:e.iconStyle,superScriptState:e.superScriptState,iconName:e.iconName}})],1)}))]),r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("tab-group",{staticClass:["tab-group"],attrs:{value:e.tabBarValue,tabs:e.tabGroupLabel,tabBarClass:e.tabBarClass},on:{input:function(t){return e.tabBarValue=t}}},e._l(e.tabGroupLabel,function(t,i){return r("div",{key:i},[r("tab-item",{staticClass:["tab-item"],attrs:{label:t.label,value:t.value}},[r("scroller",{staticStyle:{backgroundColor:"#f8f8f8"}},e._l(e.articleGroup,function(e,t){return r("div",{key:t},[r("text-cell",{attrs:{article:e}})],1)}))])],1)}))],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["badge-wrap"],on:{click:e.clickIcon}},[r("div",{class:["badgeIcon-wrap-"+e.iconStyle.size]},[r("div",{class:["icon-wrap-"+e.iconStyle.size]},[r("image",{class:["badgeImg-wrap-"+e.iconStyle.size],attrs:{src:e.iconStyle.url}})]),e.superScriptState.hasSuperScript?r("text",{class:["1"==e.superScriptState.state?"superScript-hot":"superScript-mesg"]},[e._v(e._s(e.superScriptState.content))]):e._e()]),e.iconName.hasName?r("text",{class:["badgeTit-wrap-"+e.iconStyle.size]},[e._v(e._s(e.iconName.name))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,r){"use strict";function i(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function n(e,t){f||i("["+e+"]  "+a(t))}function a(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var i="",n=0;n<r;n++)i+="    ";var o=i+"    ",s="{\n",c=!0;for(var l in e)if(0===n&&n++,e.hasOwnProperty(l)){c=!1;var d=a(e[l],t,r+1);d.indexOf("function"),s+=o,e.hasOwnProperty(l)||(s+="prototype.");var f=u(e[l]);s+=l,s+="["+f,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=i+"}",c&&(s="{}"),s}function o(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function s(e,t,r,i){if(null===e||void 0===e||!1===e){if(o("assert","\n------------err msg------------\n"+a({expression:e,msg:t,info0:r,info1:i})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function l(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:i,dump:n,testBegin:c,testEnd:l}},306:function(e,t,r){var i,n,a=[];a.push(r(126)),i=r(108);var o=r(143);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider/index.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-4bb1d827",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",userIsuue:"",articleTime:"",articleContent:"",articleImg:[],comment:"",forward:"",agree:""}}}},data:function(){return{}}}},33:function(e,t){e.exports={"article-box":{backgroundColor:"#ffffff",marginBottom:10},"article-content-wrap":{backgroundColor:"#ffffff",paddingLeft:40,paddingRight:40},"user-wrap":{flexDirection:"row",justifyContent:"space-between",marginTop:30},"user-header-wrap":{flexDirection:"row",justifyContent:"center",alignItems:"center",height:60},"article-time-wrap":{justifyContent:"flex-end",alignItems:"center",height:60},"article-time":{fontSize:24,color:"#959595"},"article-wrap":{marginTop:30,marginBottom:25,justifyContent:"space-around"},"article-content":{fontWeight:"200",fontSize:28,color:"#333333",justifyContent:"space-around"},"article-img-wrap":{marginBottom:25,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"article-img-item":{width:210,height:118,borderRadius:4},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:24,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"user-header":{width:60,height:60,borderRadius:50},"button-group":{flexDirection:"row",borderTopWidth:2,borderColor:"#e5e5e5",width:750},"button-item":{flexDirection:"row",flex:1,height:73,justifyContent:"center",alignItems:"center"},"button-icon":{width:32,height:32,marginRight:14},"button-content":{fontSize:24,color:"#bbbbbb"}}},346:function(e,t,r){var i,n,a=[];a.push(r(230)),i=r(176);var o=r(270);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/home.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-f49d552a",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i,e.exports.el="true",new Vue(e.exports)},36:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["article-box"]},[r("div",{staticClass:["article-content-wrap"]},[r("div",{staticClass:["user-wrap"]},[r("div",{staticClass:["user-header-wrap"]},[r("image",{staticClass:["user-header"],attrs:{src:e.article.headerUrl}}),r("div",{staticClass:["user-info-wrap"]},[r("text",{staticClass:["user-name"]},[e._v(e._s(e.article.userName))]),r("text",{staticClass:["user-issue"]},[e._v("来自: "+e._s(e.article.userIsuue))])])]),r("div",{staticClass:["article-time-wrap"]},[r("text",{staticClass:["article-time"]},[e._v(e._s(e.article.articleTime))])])]),r("div",{staticClass:["article-wrap"]},[r("text",{staticClass:["article-content"]},[e._v(e._s(e.article.articleContent))])]),e.article.articleImg.length>0?r("div",{staticClass:["article-img-wrap"]},e._l(e.article.articleImg,function(e,t){return r("div",{key:t,staticClass:["article-img-group"]},[r("image",{staticClass:["article-img-item"],attrs:{src:e}})])})):e._e()]),r("div",{staticClass:["button-group"]},[r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/zhuanfa.png"}}),r("text",{staticClass:["button-content"]},[e._v(e._s(e.article.forward))])]),r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/pinglun.png"}}),r("text",{staticClass:["button-content"]},[e._v(e._s(e.article.comment))])]),r("div",{staticClass:["button-item"]},[r("image",{staticClass:["button-icon"],attrs:{src:"/src/view/home/images/zan.png"}}),r("text",{staticClass:["button-content"]},[e._v(e._s(e.article.agree))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},39:function(e,t,r){var i,n,a=[];a.push(r(24)),i=r(18);var o=r(28);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-6e6f5c33",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i},4:function(e,t,r){"use strict";function i(){return!!weex.config.env&&"iOS"===weex.config.env.platform}function n(){return"Web"===weex.config.env.platform}function a(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:n,getDeviceInfo:a}},40:function(e,t,r){var i,n,a=[];a.push(r(23)),i=r(20);var o=r(27);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tab/tabGroup.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-4caef327",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i},41:function(e,t,r){var i,n,a=[];i=r(21);var o=r(26);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tab/tabItem.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.199.161"},50:function(e,t,r){var i,n,a=[];a.push(r(33)),i=r(32);var o=r(36);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/text-cell.vue",n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-08021b68",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=i},6:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,r=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(r)i=e.substring(0,e.lastIndexOf("native/")+5);else{var n=p.default+":8080",a=/\/\/([^\/]+?)\//.exec(e);a&&a.length>=2&&(n=a[1]),i="http://"+n+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":i}function a(e,t){if(b.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(h.default.web,t)}function o(e,t){w.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){v.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,v.default.log("getBaseUrl",n());var r=t?""+n()+e.jsPath+".js?"+d.default.stringify(t):""+n()+e+".js";v.default.log("push "+r),w.push({url:r,animated:"true"},function(e){v.default.log("callback: ",e)})}function c(){w.pop({animated:"true"},function(e){v.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(7),d=i(u),f=r(5),p=i(f),m=r(4),b=i(m),g=r(2),h=i(g),y=r(3),v=i(y),w=weex.requireModule("navigator");t.default={push:s,pushByUrl:o,getBaseUrl:n,pushWeb:a,pop:c}},7:function(e,t,r){"use strict";var i=r(9),n=r(8),a=r(0);e.exports={formats:a,parse:n,stringify:i}},8:function(e,t,r){"use strict";var i=r(1),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(e,t){for(var r={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),a=0;a<i.length;++a){var o,s,c=i[a],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(o=t.decoder(c),s=t.strictNullHandling?null:""):(o=t.decoder(c.slice(0,l)),s=t.decoder(c.slice(l+1))),n.call(r,o)?r[o]=[].concat(r[o]).concat(s):r[o]=s}return r},s=function(e,t,r){if(!e.length)return t;var i,n=e.shift();if("[]"===n)i=[],i=i.concat(s(e,t,r));else{i=r.plainObjects?Object.create(null):{};var a="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,o=parseInt(a,10);!isNaN(o)&&n!==a&&String(o)===a&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(i=[],i[o]=s(e,t,r)):i[a]=s(e,t,r)}return i},c=function(e,t,r){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,c=a.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var d=0;null!==(c=o.exec(i))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),s(u,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||i.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?o(e,r):e,s=r.plainObjects?Object.create(null):{},l=Object.keys(n),u=0;u<l.length;++u){var d=l[u],f=c(d,n[d],r);s=i.merge(s,f,r)}return i.compact(s)}},9:function(e,t,r){"use strict";var i=r(1),n=r(0),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return o.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,n,a,o,s,c,l,u,d,f,p){var m=t;if("function"==typeof c)m=c(r,m);else if(m instanceof Date)m=d(m);else if(null===m){if(a)return s&&!p?s(r):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||i.isBuffer(m)){if(s){return[f(p?r:s(r))+"="+f(s(m))]}return[f(r)+"="+f(String(m))]}var b=[];if(void 0===m)return b;var g;if(Array.isArray(c))g=c;else{var h=Object.keys(m);g=l?h.sort(l):h}for(var y=0;y<g.length;++y){var v=g[y];o&&null===m[v]||(b=Array.isArray(m)?b.concat(e(m[v],n(r,v),n,a,o,s,c,l,u,d,f,p)):b.concat(e(m[v],r+(u?"."+v:"["+v+"]"),n,a,o,s,c,l,u,d,f,p)))}return b};e.exports=function(e,t){var r=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var o=void 0===i.delimiter?s.delimiter:i.delimiter,l="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,d="boolean"==typeof i.encode?i.encode:s.encode,f="function"==typeof i.encoder?i.encoder:s.encoder,p="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,b="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,g="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var h,y,v=n.formatters[i.format];"function"==typeof i.filter?(y=i.filter,r=y("",r)):Array.isArray(i.filter)&&(y=i.filter,h=y);var w=[];if("object"!=typeof r||null===r)return"";var _;_=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[_];h||(h=Object.keys(r)),p&&h.sort(p);for(var X=0;X<h.length;++X){var j=h[X];u&&null===r[j]||(w=w.concat(c(r[j],j,x,l,u,d?f:null,y,p,m,b,v,g)))}return w.join(o)}}});