// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=303)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:i,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"iOS"===weex.config.env.platform}function i(){return"Web"===weex.config.env.platform}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},11:function(e,t,n){"use strict";var r=n(13),i=n(12),o=n(5);e.exports={formats:o,parse:i,stringify:r}},12:function(e,t,n){"use strict";var r=n(6),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),i.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[o]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var p=0;null!==(l=a.exec(r))&&p<n.depth;){if(p+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var p=c[u],d=l(p,i[p],n);s=r.merge(s,d,n)}return r.compact(s)}},122:function(e,t,n){n(181);var r=n(0)(n(136),n(167),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/slider/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},13:function(e,t,n){"use strict";var r=n(6),i=n(5),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,a,s,l,c,u,p,d,f){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=p(m);else if(null===m){if(o)return s&&!f?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(s){return[d(f?n:s(n))+"="+d(s(m))]}return[d(n)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(l))g=l;else{var b=Object.keys(m);g=c?b.sort(c):b}for(var v=0;v<g.length;++v){var y=g[v];a&&null===m[y]||(h=Array.isArray(m)?h.concat(e(m[y],i(n,y),i,o,a,s,l,c,u,p,d,f)):h.concat(e(m[y],n+(u?"."+y:"["+y+"]"),i,o,a,s,l,c,u,p,d,f)))}return h};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,p="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,f="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var b,v,y=i.formatters[r.format];"function"==typeof r.filter?(v=r.filter,n=v("",n)):Array.isArray(r.filter)&&(v=r.filter,b=v);var x=[];if("object"!=typeof n||null===n)return"";var w;w=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=o[w];b||(b=Object.keys(n)),f&&b.sort(f);for(var X=0;X<b.length;++X){var j=b[X];u&&null===n[j]||(x=x.concat(l(n[j],j,_,c,u,p?d:null,v,f,m,h,y,g)))}return x.join(a)}},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{bannerData:{default:function(){}}}}},153:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.slider-wrap {\n    position: relative;\n    width: 750px;\n    height: 400px;\n}\n.slider-group {\n    width: 750px;\n    height: 400px;\n}\n.slider-item {\n    width: 750px;\n    height: 350px;\n}\n.indicator {\n    width: 750px;\n    height: 30px;\n    position: absolute;\n    bottom: 0px;\n    item-color: rgba(51, 51, 51, 0.5);\n    item-selected-color: #fff;\n    item-size: 10px;\n}\n",""])},167:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slider",{staticClass:"slider-wrap"},[e._l(e.bannerData,function(e,t){return n("div",{key:t,staticClass:"slider-group"},[n("image",{staticClass:"slider-item",attrs:{src:e.imageUrl}})])}),e._v(" "),n("indicator",{staticClass:"indicator"})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},181:function(e,t,n){var r=n(153);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("791002fb",r,!1)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(g){var o=f++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},200:function(e,t,n){n(412);var r=n(0)(n(236),n(379),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/home.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),a=n(9),s=r(a);t.default={data:function(){return{bannerData:[{imageUrl:"/src/view/link-wiki/images/start-all.png",callBack:function(){}},{imageUrl:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg",callBack:function(){}},{imageUrl:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg",callBack:function(){}}],badgeData:[{action:function(){console.log("click badge1")},iconStyle:{url:"/src/view/home/images/badge-ico.png",size:"m"},superScriptState:{hasSuperScript:!0,state:"1",content:"HOT"},iconName:{hasName:!0,name:"ICO爆料"}},{action:function(){console.log("click badge2")},iconStyle:{url:"/src/view/home/images/badge-boss.png",size:"m"},superScriptState:{hasSuperScript:!0,state:"1",content:"HOT"},iconName:{hasName:!0,name:"大咖秀"}},{action:function(){console.log("click badge3"),s.default.push(o.default.getStarted)},iconStyle:{url:"/src/view/home/images/badge-new.png",size:"m"},superScriptState:{hasSuperScript:!1,state:"",content:""},iconName:{hasName:!0,name:"新手营"}}],tabGroupLabel:[{label:"全部",value:0},{label:"btccccc",value:1},{label:"eth",value:2},{label:"eos",value:3},{label:"omg",value:4},{label:"bts",value:5},{label:"1st",value:6},{label:"dogge",value:7},{label:"ans",value:8},{label:"zec",value:9}],tabBarValue:0,tabBarClass:{activeClass:"homePage-active",defaultClass:"homePage-default",tabBarStyle:"homePage-tabBarNav",hasNextBtn:!0},articleGroup:[{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg","https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:[],comment:"1",forward:"7",agree:"5"},{headerUrl:"/src/view/home/images/badge-boss.png",userName:"tfboys",userIsuue:"weibo",articleTime:"2017-07-15 18:09:35",articleContent:"金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。",articleImg:["https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg","https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg","https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"],comment:"1",forward:"7",agree:"5"}]}},components:{banner:n(122),badge:n(37),tabGroup:n(25),tabItem:n(26),textCell:n(39)},methods:{viewappear:function(){console.log("viewappear")}}}},25:function(e,t,n){n(36);var r=n(0)(n(28),n(34),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tab/tabGroup.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tabGroup.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},26:function(e,t,n){var r=n(0)(n(29),n(32),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tab/tabItem.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tabItem.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"u-tabs",props:{value:{type:[String,Number,Boolean,Object,Array],default:0},tabs:{default:function(){return[{label:"",value:0}]}},tabBarClass:{default:function(){return{activeClass:"",defaultClass:"",tabBarStyle:"",hasNextBtn:!0}}}},methods:{addTab:function(e){this.tabs.push(e)},removeTab:function(e){this.tabs.splice(this.tabs.indexOf(e),1)},selectTab:function(e){this.$emit("input",e.value),this.$emit("change",e.value)},nextTab:function(e,t){e<t.length-1&&this.$emit("input",e+1)}}}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"u-tab",props:{label:{type:String,required:!0},value:{type:[String,Number,Boolean,Object,Array],required:!0}},data:function(){return{$parent:null}},computed:{actived:function(){return this.$parent&&this.$parent.value===this.value}},beforeDestroy:function(){this.$parent&&this.$parent.removeTab(this)}}},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},303:function(e,t,n){"use strict";var r=n(200);r.el="#root",new Vue(r)},31:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.homePage-tabBarNav {\n    background-color: #f3f3f3;\n}\n.homePage-default {\n    color: black;\n    border-bottom-width: 4px;\n    border-color: #f3f3f3;\n}\n.homePage-active {\n    color: #ff6539;\n    border-bottom-width: 4px;\n    border-color: #ff6539;\n}\n.linkWiki-tabBarNav {\n    background-color: #fc6d3f;\n}\n.link-wiki-default {\n    color: #fff;\n    border-bottom-width: 4px;\n    border-color: #fc6d3f;\n}\n.link-wiki-active {\n    color: #fff;\n    border-bottom-width: 4px;\n    border-color: #fff;\n}\n.link-wiki-default {\n    color: #fff;\n}\n.tab-nav {\n    width: 750px;\n    height: 70px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n}\n.tab-nav-wrap {\n    height: 70px;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.tab-nav-hasNextBtn {\n    width: 680px;\n}\n.tab-nav-noNextBtn {\n    width: 750px;\n}\n.tab-nav-group {\n    /*width: 110px;*/\n    padding-left: 25px;\n    padding-right: 25px;\n    height: 70px;\n    justify-content: center;\n    align-items: center;\n}\n.tab-item {\n    padding-top: 17px;\n    padding-bottom: 17px;\n    font-size: 28px;\n}\n.nav-next {\n    justify-content: center;\n    align-items: center;\n    width: 15px;\n    height: auto;\n    /*padding-top: 5px;*/\n    padding-left: 5px;\n    /*padding-right: 5px;*/\n    /*padding-bottom: 5px;*/\n}\n",""])},32:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.actived?n("scroller",[e._t("default")],2):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0},34:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tab-nav",class:[e.tabBarClass.tabBarStyle]},[n("scroller",{staticClass:"tab-nav-wrap",class:[e.tabBarClass.hasNextBtn?"tab-nav-hasNextBtn":"tab-nav-noNextBtn"],attrs:{"scroll-direction":"horizontal"}},e._l(e.tabs,function(t){return n("div",{staticClass:"tab-nav-group"},[n("text",{staticClass:"tab-item",class:[t.value===e.value?e.tabBarClass.activeClass:e.tabBarClass.defaultClass],on:{click:function(n){e.selectTab(t)}}},[e._v(e._s(t.label))])])})),e._v(" "),e.tabBarClass.hasNextBtn?n("image",{staticClass:"nav-next",attrs:{src:"/src/view/home/images/nextButton.png"},on:{click:function(t){e.nextTab(e.value,e.tabs)}}}):e._e()],1),e._v(" "),n("div",{staticClass:"tab-content"},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},347:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},36:function(e,t,n){var r=n(31);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("317c1727",r,!1)},37:function(e,t,n){n(51);var r=n(0)(n(40),n(48),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},379:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list",{on:{viewappear:e.viewappear}},[n("cell",[n("banner",{attrs:{bannerData:e.bannerData}})],1),e._v(" "),n("cell",[n("div",{staticStyle:{"flex-direction":"row","justify-content":"space-around",width:"750px",height:"185px"}},e._l(e.badgeData,function(e,t){return n("div",{key:t,staticStyle:{"justify-content":"space-around","align-items":"center"}},[n("badge",{attrs:{action:e.action,iconStyle:e.iconStyle,superScriptState:e.superScriptState,iconName:e.iconName}})],1)}))]),e._v(" "),n("cell",[n("tab-group",{staticClass:"tab-group",attrs:{value:e.tabBarValue,tabs:e.tabGroupLabel,tabBarClass:e.tabBarClass},on:{input:function(t){return e.tabBarValue=t}}},e._l(e.tabGroupLabel,function(t,r){return n("div",{key:r},[n("tab-item",{staticClass:"tab-item",attrs:{label:t.label,value:t.value}},[n("scroller",{staticStyle:{"background-color":"#f8f8f8"}},e._l(e.articleGroup,function(e,t){return n("div",{key:t},[n("text-cell",{attrs:{article:e}})],1)}))],1)],1)}))],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},39:function(e,t,n){n(50);var r=n(0)(n(42),n(47),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/home/cells/text-cell.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] text-cell.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"}}},40:function(e,t,n){"use strict";e.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},412:function(e,t,n){var r=n(347);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("ae9a7996",r,!1)},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",userIsuue:"",articleTime:"",articleContent:"",articleImg:[],comment:"",forward:"",agree:""}}}},data:function(){return{}}}},44:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-box {\n\tbackground-color: #fff;\n\tmargin-bottom: 10px;\n}\n.article-content-wrap {\n\tbackground-color: #fff;\n\tpadding-left: 40px;\n\tpadding-right: 40px;\n}\n.user-wrap {\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tmargin-top: 30px;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 60px;\n}\n.article-time-wrap {\n\tjustify-content: flex-end;\n\talign-items: center;\n\theight: 60px;\n}\n.article-time {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.article-wrap {\n\tmargin-top: 30px;\n\tmargin-bottom: 25px;\n\tjustify-content: space-around;\n\ttext-align: justify;\n}\n.article-content {\n\tfont-weight: 200;\n\tfont-size: 28px;\n\tcolor: #333333;\n\tjustify-content: space-around;\n}\n.article-img-wrap {\n\tmargin-bottom: 25px;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.article-img-group {\n}\n.article-img-item {\n\twidth: 210px;\n\theight: 118px;\n\tborder-radius: 4px;\n}\n.user-info-wrap {\n\tmargin-left: 20px;\n}\n.user-name {\n\tfont-size: 24px;\n\tcolor: #333333;\n}\n.user-issue {\n\tfont-size: 24px;\n\tcolor: #959595;\n}\n.user-header {\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n}\n.button-group {\n\tflex-direction: row;\n\tborder-top-width: 2px;\n\tborder-color: #e5e5e5;\n\twidth: 750px;\n}\n.button-item {\n\tflex-direction: row;\n\tflex:1;\n\theight: 73px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.button-icon {\n\twidth: 32px;\n\theight: 32px;\n\tmargin-right: 14px;\n}\n.button-content {\n\tfont-size: 24px;\n\tcolor: #bbbbbb;\n}\n",""])},45:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.badge-wrap {\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 0;\n}\n.badgeIcon-wrap-m {\n    position: relative;\n    width: 90px;\n    height: 90px;\n}\n.badgeImg-wrap-m {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-m {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}\n.superScript-hot {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: inline-block;\n    width: 40px;\n    height: 20px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #ff6a3c;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 20px;\n    border-width: 1px;\n    border-color: #fff;\n}\n.badgeTit-wrap-m {\n    font-size: 24px;\n    color: #333;\n    font-weight: 200;\n    margin-top: 18px;\n}\n\n/*---------------------------------------------*/\n.badgeIcon-wrap-s {\n    position: relative;\n    width: 60px;\n    height: 60px;\n}\n.badgeImg-wrap-s {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n}\n.icon-wrap-s {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.superScript-mesg {\n    position: absolute;\n    top: 0;\n    right: 2px;\n    display: block;\n    width: 26px;\n    height: 22px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #fff;\n    color: #ff6a3c;\n    font-size: 12px;\n    border-radius: 16px;\n    border-width: 2px;\n    border-color: #ff6a3c;\n}\n\n/*-------------------------------------*/\n.badgeIcon-wrap-l {\n    width: 120px;\n    height: 120px;\n}\n.badgeImg-wrap-l {\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-l {\n    width: 120px;\n    height: 120px;\n    border-radius: 100%;\n    background-color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n.badgeTit-wrap-l {\n    font-size: 36px;\n    color: #434343;\n    font-weight: 200;\n    margin-top: 20px;\n}\n",""])},47:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-box"},[n("div",{staticClass:"article-content-wrap"},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-header-wrap"},[n("image",{staticClass:"user-header",attrs:{src:e.article.headerUrl}}),e._v(" "),n("div",{staticClass:"user-info-wrap"},[n("text",{staticClass:"user-name"},[e._v(e._s(e.article.userName))]),e._v(" "),n("text",{staticClass:"user-issue"},[e._v("来自: "+e._s(e.article.userIsuue))])])]),e._v(" "),n("div",{staticClass:"article-time-wrap"},[n("text",{staticClass:"article-time"},[e._v(e._s(e.article.articleTime))])])]),e._v(" "),n("div",{staticClass:"article-wrap"},[n("text",{staticClass:"article-content"},[e._v(e._s(e.article.articleContent))])]),e._v(" "),e.article.articleImg.length>0?n("div",{staticClass:"article-img-wrap"},e._l(e.article.articleImg,function(e,t){return n("div",{key:t,staticClass:"article-img-group"},[n("image",{staticClass:"article-img-item",attrs:{src:e}})])})):e._e()]),e._v(" "),n("div",{staticClass:"button-group"},[n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/zhuanfa.png"}}),e._v(" "),n("text",{staticClass:"button-content"},[e._v(e._s(e.article.forward))])]),e._v(" "),n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/pinglun.png"}}),e._v(" "),n("text",{staticClass:"button-content"},[e._v(e._s(e.article.comment))])]),e._v(" "),n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/view/home/images/zan.png"}}),e._v(" "),n("text",{staticClass:"button-content"},[e._v(e._s(e.article.agree))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},48:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badge-wrap",on:{click:e.clickIcon}},[n("div",{class:["badgeIcon-wrap-"+e.iconStyle.size]},[n("div",{class:["icon-wrap-"+e.iconStyle.size]},[n("image",{class:["badgeImg-wrap-"+e.iconStyle.size],attrs:{src:e.iconStyle.url}})]),e._v(" "),e.superScriptState.hasSuperScript?n("text",{class:["1"==e.superScriptState.state?"superScript-hot":"superScript-mesg"]},[e._v(e._s(e.superScriptState.content))]):e._e()]),e._v(" "),e.iconName.hasName?n("text",{class:["badgeTit-wrap-"+e.iconStyle.size]},[e._v(e._s(e.iconName.name))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},50:function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("336083f6",r,!1)},51:function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("ab7d544e",r,!1)},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},7:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){d||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var p=o(e[c],t,n+1);p.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var d=u(e[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=p,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){p._testbegin=(new Date).getTime(),p._testIsBegin=!0}function c(e){p._testEnd=(new Date).getTime(),s(!0===p._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+p._testEnd+" - "+p._testbegin+" : "+(p._testEnd-p._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=p||{},d=!1;t.default={log:r,dump:i,testBegin:l,testEnd:c}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.199.161"},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=f.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(b.default.web,t)}function a(e,t){x.push({url:t?e+"?"+p.default.stringify(t):e,animated:"true"},function(e){y.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,y.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+p.default.stringify(t):""+i()+e+".js";y.default.log("push "+n),x.push({url:n,animated:"true"},function(e){y.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){y.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),p=r(u),d=n(8),f=r(d),m=n(10),h=r(m),g=n(4),b=r(g),v=n(7),y=r(v),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:l}}});