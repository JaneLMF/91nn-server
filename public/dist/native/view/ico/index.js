// { "framework": "Vue"} 

!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=349)}({159:function(e,t,i){var n,o,r=[];r.push(i(78)),n=i(75);var s=i(88);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabbar.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-3cbe2e3c",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},179:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(63),r=n(o),s=i(3),a=n(s),c=i(4),l=n(c);t.default={data:function(){return{tabbarTop:270,tabItems:[{index:0,title:"即将开始",titleFontSize:"30px",src:"/icoLevel.js",visibility:"visible"},{index:1,title:"进行中",titleFontSize:"30px",src:"/icoLevel.js",visibility:"hidden"},{index:2,title:"已完成",titleFontSize:"30px",src:"/icoLevel.js",visibility:"hidden"}],badgeLinkData:[{iconStyle:{url:"/src/view/knowMore/images/ico.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"YOYOW"}},{iconStyle:{url:"/src/view/knowMore/images/link-wiki.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"Taas"}},{iconStyle:{url:"/src/view/knowMore/images/link-app.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"ipfs"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}},{iconStyle:{url:"/src/view/knowMore/images/get-start.png",size:"xm"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"tenx"}}]}},components:{nTabbar:i(159),badge:i(39)},methods:{tabBarOnClick:function(e){console.log("tabBarOnClick",e.index)}},created:function(){for(var e=0;e<this.tabItems.length;e++){var t=this.tabItems[e];t.src=r.default.js(t.src),a.default.log("src "+t.src)}if(l.default.isIOS()){var i=weex.config.env,n=i.scale,o=i.deviceWidth/n;this.navBarHeight=48e3/o}}}},18:function(e,t,i){"use strict";e.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},221:function(e,t){e.exports={"ico-wrap":{width:750},"hot-ico-wrap":{width:720,marginLeft:30},"hot-ico-tit":{marginTop:30,marginBottom:30,paddingLeft:10,fontSize:28,color:"#333333",borderLeftWidth:4,borderColor:"#fc6d3f"},"hot-ico-group":{marginBottom:40,flexDirection:"row",width:720}}},24:function(e,t){e.exports={"badge-wrap":{flexDirection:"column",alignItems:"center"},"badgeIcon-wrap-m":{position:"relative",width:90,height:90},"badgeImg-wrap-m":{position:"absolute",bottom:0,left:0,width:90,height:90},"icon-wrap-m":{width:90,height:90,borderRadius:50},"superScript-hot":{position:"absolute",top:0,right:0,display:"inline-block",width:40,height:20,lineHeight:20,textAlign:"center",backgroundColor:"#ff6a3c",color:"#ffffff",fontSize:12,borderRadius:20,borderWidth:1,borderColor:"#ffffff"},"badgeTit-wrap-m":{fontSize:24,color:"#333333",fontWeight:"200",marginTop:18},"badgeIcon-wrap-s":{position:"relative",width:60,height:60},"badgeImg-wrap-s":{position:"absolute",bottom:0,left:0,width:40,height:40},"icon-wrap-s":{width:40,height:40,borderRadius:50},"superScript-mesg":{position:"absolute",top:0,right:2,display:"block",width:26,height:22,lineHeight:20,textAlign:"center",backgroundColor:"#ffffff",color:"#ff6a3c",fontSize:12,borderRadius:16,borderWidth:2,borderColor:"#ff6a3c"},"badgeIcon-wrap-xm":{width:100,height:100},"badgeImg-wrap-xm":{width:100,height:100},"icon-wrap-xm":{width:100,height:100,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-xm":{fontSize:24,color:"#434343",fontWeight:"200",marginTop:20},"badgeIcon-wrap-l":{width:120,height:120},"badgeImg-wrap-l":{width:90,height:90},"icon-wrap-l":{width:120,height:120,borderRadius:100,backgroundColor:"#ffffff",justifyContent:"center",alignItems:"center"},"badgeTit-wrap-l":{fontSize:36,color:"#434343",fontWeight:"200",marginTop:20}}},258:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["ico-wrap"]},[i("div",{staticClass:["hot-ico-wrap"]},[i("text",{staticClass:["hot-ico-tit"]},[e._v("热门ICO")]),i("scroller",{staticClass:["hot-ico-group"],attrs:{scrollDirection:"horizontal"}},e._l(e.badgeLinkData,function(t,n){return i("div",{key:n,staticStyle:{justifyContent:"space-around",alignItems:"center",marginRight:"40px"}},[i("badge",{attrs:{iconStyle:t.iconStyle,superScriptState:t.superScriptState,iconName:t.iconName},on:{badge:e.test}})],1)}))]),i("n-tabbar",{attrs:{marginTop:e.tabbarTop,backgroundColor:"#f7f7f7",bottomSelectedColor:"#FB633C",bottomUnSelectedColor:"#f7f7f7",tabItems:e.tabItems},on:{tabBarOnClick:e.tabBarOnClick}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["badge-wrap"],on:{click:e.clickIcon}},[i("div",{class:["badgeIcon-wrap-"+e.iconStyle.size]},[i("div",{class:["icon-wrap-"+e.iconStyle.size]},[i("image",{class:["badgeImg-wrap-"+e.iconStyle.size],attrs:{src:e.iconStyle.url}})]),e.superScriptState.hasSuperScript?i("text",{class:["1"==e.superScriptState.state?"superScript-hot":"superScript-mesg"]},[e._v(e._s(e.superScriptState.content))]):e._e()]),e.iconName.hasName?i("text",{class:["badgeTit-wrap-"+e.iconStyle.size]},[e._v(e._s(e.iconName.name))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,i){"use strict";function n(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){f||n("["+e+"]  "+r(t))}function r(e,t,i){if(void 0===t&&(t=10),void 0===i&&(i=0),i===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var n="",o=0;o<i;o++)n+="    ";var s=n+"    ",a="{\n",c=!0;for(var l in e)if(0===o&&o++,e.hasOwnProperty(l)){c=!1;var d=r(e[l],t,i+1);d.indexOf("function"),a+=s,e.hasOwnProperty(l)||(a+="prototype.");var f=u(e[l]);a+=l,a+="["+f,a+="]",a+=" : ",a+=d,a+=" ,\n"}return a+=n+"}",c&&(a="{}"),a}function s(e,t){arguments.length>=2?n("WARN-"+e+"  "+t):(t=e,n("WARN  "+t))}function a(e,t,i,n){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+r({expression:e,msg:t,info0:i,info1:n})+"------------create ------------\n"+function(){var e="",t=0,i=arguments.callee;do{if(t>=3&&t<10){e+=""+i}else if(t>=10)break;i=i.arguments.callee.caller,t++}while(i);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function l(e){d._testEnd=(new Date).getTime(),a(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),n(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:n,dump:o,testBegin:c,testEnd:l}},349:function(e,t,i){var n,o,r=[];r.push(i(221)),n=i(179);var s=i(258);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/ico/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-6e74c5b4",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n,e.exports.el="true",new Vue(e.exports)},39:function(e,t,i){var n,o,r=[];r.push(i(24)),n=i(18);var s=i(28);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-6e6f5c33",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n},4:function(e,t,i){"use strict";function n(){return!!weex.config.env&&"iOS"===weex.config.env.platform}function o(){return"Web"===weex.config.env.platform}function r(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:n,isWeb:o,getDeviceInfo:r}},53:function(e,t,i){"use strict";e.exports={props:{height:{default:90},index:{default:0},title:{default:""},margin:{default:25},titleColor:{default:"#000000"},bottomColor:{default:"#ffffee"},titleFontSize:{default:"30px"},backgroundColor:{default:"#ffffee"}},methods:{onclickitem:function(e){var t={index:this.index};this.$emit("tabItemOnClick",t)}}}},55:function(e,t){e.exports={border:{borderWidth:1},container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},"tab-text":{textAlign:"center"},"tab-line":{justifyContent:"center",borderTopWidth:4,borderBottomWidth:4}}},59:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["container"],style:{height:e.height},on:{click:e.onclickitem}},[i("div",{staticClass:["tab-line"],style:{borderTopColor:e.backgroundColor,borderBottomColor:e.bottomColor,height:e.height,marginLeft:e.margin,marginRight:e.margin}},[i("text",{staticClass:["tab-text"],style:{color:e.titleColor,fontSize:e.titleFontSize}},[e._v(e._s(e.title))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},63:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={js:function(e){var t=weex.config.bundleUrl;if("undefined"==typeof window){for(t=t.substring(0,t.lastIndexOf("/"));-1!==e.indexOf("../");)e=e.substr(3),t=t.substr(0,t.lastIndexOf("/"));return t+e}var i=new URL(t).origin+"/web/?page=/dist/web"+encodeURI(e);return console.log("webUrl="+i),i},img:function(e){var t=weex.config.bundleUrl;return new URL(t).hostname+"url"}}},75:function(e,t,i){"use strict";e.exports={props:{scrolleable:{default:!1},marginTop:{default:0},tabHeight:{default:90},tabMargin:{default:25},tabItems:{default:[]},backgroundColor:{default:"#f8f8f8"},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#333333"},bottomSelectedColor:{default:"#fc6d3f"},bottomUnSelectedColor:{default:"#f8f8f8"}},data:function(){return{selectedIndex:0}},components:{tabitem:i(99)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(e){this.selectedIndex=e.index,this.select(e.index),this.$emit("tabBarOnClick",e)},select:function(e){for(var t=0;t<this.tabItems.length;t++){var i=this.tabItems[t];t==e?(i.icon=i.selectedImage,i.titleColor=this.selectedColor,i.bottomColor=this.bottomSelectedColor,i.visibility="visible"):(i.icon=i.image,i.titleColor=this.unselectedColor,i.bottomColor=this.bottomUnSelectedColor,i.visibility="hidden")}}}}},78:function(e,t){e.exports={border:{borderWidth:1},wrapper:{width:750,position:"absolute",left:0,right:0,bottom:0},tabbase:{width:750,flexDirection:"row",justifyContent:"space-around"},"tabbase-scroller":{flexDirection:"row",justifyContent:"space-around"},content:{width:750,position:"absolute",bottom:0,left:0,right:0}}},88:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:["wrapper"],style:{top:e.marginTop}},[i("scroller",{staticStyle:{flexDirection:"row"},appendAsTree:!0,attrs:{append:"tree",scrollDirection:"horizontal"}},[i("div",{class:[0==e.scrolleable?"tabbase":"tabbase-scroller"],style:{height:e.tabHeight,backgroundColor:e.backgroundColor}},e._l(e.tabItems,function(t){return i("div",{key:t.index,style:{height:e.tabHeight}},[i("tabitem",{attrs:{index:t.index,title:t.title,height:e.tabHeight,margin:e.tabMargin,titleFontSize:t.titleFontSize,titleColor:t.titleColor,bottomColor:t.bottomColor,backgroundColor:e.backgroundColor},on:{tabItemOnClick:e.tabItemOnClick}})],1)}))]),e._l(e.tabItems,function(t,n){return i("embed",{key:n,staticClass:["content"],style:{visibility:t.visibility,top:e.tabHeight},attrs:{src:t.src,type:"weex"}})})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},99:function(e,t,i){var n,o,r=[];r.push(i(55)),n=i(53);var s=i(59);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar/tabitem.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-0c6e4d3a",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=n}});