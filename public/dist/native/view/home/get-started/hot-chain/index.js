// { "framework": "Vue"} 

!function(t){function e(r){if(s[r])return s[r].exports;var i=s[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var s={};e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,r){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=206)}({0:function(t,e,s){"use strict";function r(t){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function i(t,e){f||r("["+t+"]  "+n(e))}function n(t,e,s){if(void 0===e&&(e=10),void 0===s&&(s=0),s===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":d(t)))return""+t;for(var r="",i=0;i<s;i++)r+="    ";var a=r+"    ",o="{\n",l=!0;for(var c in t)if(0===i&&i++,t.hasOwnProperty(c)){l=!1;var u=n(t[c],e,s+1);u.indexOf("function"),o+=a,t.hasOwnProperty(c)||(o+="prototype.");var f=d(t[c]);o+=c,o+="["+f,o+="]",o+=" : ",o+=u,o+=" ,\n"}return o+=r+"}",l&&(o="{}"),o}function a(t,e){arguments.length>=2?r("WARN-"+t+"  "+e):(e=t,r("WARN  "+e))}function o(t,e,s,r){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+n({expression:t,msg:e,info0:s,info1:r})+"------------create ------------\n"+function(){var t="",e=0,s=arguments.callee;do{if(e>=3&&e<10){t+=""+s}else if(e>=10)break;s=s.arguments.callee.caller,e++}while(s);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){u._testbegin=(new Date).getTime(),u._testIsBegin=!0}function c(t){u._testEnd=(new Date).getTime(),o(!0===u._testIsBegin,"nn.Debug._testIsBegin need"),r(t+" "+u._testEnd+" - "+u._testbegin+" : "+(u._testEnd-u._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=u||{},f=!1;e.default={log:r,dump:i,testBegin:l,testEnd:c}},107:function(t,e,s){var r,i,n=[];n.push(s(48)),r=s(43);var a=s(55);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider-neighbor/slider-neighbor-page.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-4b4cd99c",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=r},115:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={mounted:function(){},props:{chains:{default:function(){return[{id:"0",icon:"/src/view/home/images/badge-boss.png",name:"比特币",date:"2017-05-15",status:"POW",star:"3.0",startStyle:"bc-start-small"},{id:"1",icon:"/src/view/home/images/badge-boss.png",name:"以太坊",date:"2017-05-15",status:"ICO",star:"4.0",startStyle:"bc-start-small"},{id:"2",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"3",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"4",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"5",icon:"/src/view/home/images/badge-boss.png",name:"布比91nnnnn",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"6",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"7",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"8",icon:"/src/view/home/images/badge-boss.png",name:"布比",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"},{id:"9",icon:"/src/view/home/images/badge-boss.png",name:"布比棒",date:"2017-08-15",status:"POW",star:"5.0",startStyle:"bc-start-small"}]}},bannerData:{default:function(){return[{id:"1",url:"https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"},{id:"2",url:"https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"},{id:"3",url:"https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"}]}}},methods:{bannerItemClick:function(t){i.default.log("bannerItemClick "+t)},oncellclick:function(t){i.default.log("oncellclick "+t)}},components:{sliderNeighbor:s(107),starts:s(60)}}},141:function(t,e){t.exports={root:{width:750,height:1334},"item-line":{width:750,height:150,paddingLeft:30,paddingRight:30},item:{height:148,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"item-line-top":{borderWidth:1,borderColor:"#ffffff"},"item-line-bottom":{marginLeft:80,borderWidth:1},"user-header-wrap":{flexDirection:"row",alignItems:"center",textAlign:"left",height:60},"user-header":{width:60,height:60,borderRadius:50},"user-info-wrap":{marginLeft:20},"user-name":{fontSize:24,color:"#333333"},"user-issue":{fontSize:24,color:"#959595"},"star-item":{width:170,justifyContent:"flex-end"},"star-box":{flexDirection:"row",justifyContent:"flex-end",marginBottom:10},"star-text":{paddingLeft:10,paddingRight:10,backgroundColor:"#f9b713",borderRadius:10},star:{flexDirection:"row"},slider:{width:750,height:290},"slider-indicator":{width:750,height:30,position:"absolute",bottom:60,itemColor:"rgba(51, 51, 51, 0.5)",itemSelectedColor:"#fff",itemSize:15},img:{width:520,height:210,borderRadius:10},"list-head":{width:750,height:64,paddingLeft:30,paddingRight:30,backgroundColor:"#f7f7f7",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},"list-head-item":{fontSize:24,color:"#959595"},"start-moudle":{width:170,justifyContent:"space-between"}}},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("list",{staticClass:["root"]},[s("cell",{appendAsTree:!0,attrs:{append:"tree"}},[s("slider-neighbor",{staticClass:["slider"],attrs:{neighborScale:"1.0",neighborSpace:"40",currentItemScale:"1.0",interval:"3000",neighborAlpha:"0.8",autoPlay:"true"}},[t._l(t.bannerData,function(e){return s("image",{staticClass:["img"],attrs:{src:e.url},on:{click:function(s){t.bannerItemClick(e.id)}}})}),s("indicator",{staticClass:["slider-indicator"]})],2)],1),s("cell",{appendAsTree:!0,attrs:{append:"tree"}},[s("div",{staticClass:["list-head"]},t._l(["名称","共识算法","评测等级"],function(e){return s("text",{staticClass:["list-head-item"]},[t._v(t._s(e))])}))]),t._l(t.chains,function(e){return s("cell",{appendAsTree:!0,attrs:{append:"tree"},on:{click:function(s){t.oncellclick(e.id)}}},[s("div",{staticClass:["item-line"]},[s("div",{staticClass:["item-line-top"]}),s("div",{staticClass:["item","border"]},[s("div",{staticClass:["user-header-wrap","border"]},[s("image",{staticClass:["user-header"],attrs:{src:e.icon}}),s("div",{staticClass:["user-info-wrap"]},[s("text",{staticClass:["user-name"]},[t._v(t._s(e.name))]),s("text",{staticClass:["user-issue"]},[t._v(t._s(e.date))])])]),s("text",[t._v(t._s(e.status))]),s("div",{staticClass:["star-item","border"]},[s("div",{staticClass:["star-box"]},[s("text",{staticClass:["star-text","border"]},[t._v(t._s(e.star))])]),s("starts",{staticClass:["start-moudle"],attrs:{level:e.star,startStyle:[e.startStyle]}})],1)]),s("div",{staticClass:["item-line-bottom"]})])])})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},20:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{level:{default:""},startStyle:{default:""}}}},206:function(t,e,s){var r,i,n=[];n.push(s(141)),r=s(115);var a=s(160);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/get-started/hot-chain/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-ef569aba",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=r,t.exports.el="true",new Vue(t.exports)},23:function(t,e){t.exports={"bc-start-group":{flexDirection:"row"},"bc-start-small":{width:24,height:23},"bc-start-middle":{width:33,height:31}}},27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:["bc-start-group"]},[t._l(parseInt(t.level.split("")[0]),function(e){return parseInt(t.level.split("")[0])>0?s("div",{staticClass:["bc-start-item"]},[s("image",{class:t.startStyle,attrs:{src:"/src/view/link-wiki/images/start-all.png"}})]):t._e()}),parseInt(t.level.split("")[2])>0?s("div",{staticClass:["bc-start-item"]},[s("image",{class:t.startStyle,attrs:{src:"/src/view/link-wiki/images/start-"+t.level.split("")[2]+".png"}})]):t._e(),t._l(5-Math.ceil(t.level),function(e){return 5-Math.ceil(t.level)>0?s("div",{staticClass:["bc-start-item"]},[s("image",{class:t.startStyle,attrs:{src:"/src/view/link-wiki/images/start-none.png"}})]):t._e()})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},43:function(t,e,s){"use strict";t.exports={data:{items:[],sliderItems:[]},methods:{ready:function(){this.sliderItems=this.getSliderItems()},getSliderItems:function(){return this.items.map(function(t,e){return t}.bind(this))}}}},48:function(t,e){t.exports={"slider-page":{width:720,height:420}}},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:["slider-page"]},[s("slider-neighbor-item",{attrs:{repeat:t.sliderItems}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},60:function(t,e,s){var r,i,n=[];n.push(s(23)),r=s(20);var a=s(27);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/starts/index.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-1f169b97",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=r}});