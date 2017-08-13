// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=570)}({0:function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}})}return{esModule:i,exports:o,options:s}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},10:function(t,e,n){"use strict";var r=n(13),i=n(12),o=n(5);t.exports={formats:o,parse:i,stringify:r}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="192.168.0.153"},12:function(t,e,n){"use strict";var r=n(6),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var n={},r=t.split(e.delimiter,e.parameterLimit===1/0?void 0:e.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=e.decoder(l),s=e.strictNullHandling?null:""):(a=e.decoder(l.slice(0,c)),s=e.decoder(l.slice(c+1))),i.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(t,e,n){if(!t.length)return e;var r,i=t.shift();if("[]"===i)r=[],r=r.concat(s(t,e,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(t,e,n)):r[o]=s(t,e,n)}return r},l=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,e,n)}};t.exports=function(t,e){var n=e||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===t||null===t||void 0===t)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof t?a(t,n):t,s=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var f=c[u],d=l(f,i[f],n);s=r.merge(s,d,n)}return r.compact(s)}},13:function(t,e,n){"use strict";var r=n(6),i=n(5),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,n,i,o,a,s,l,c,u,f,d,p){var h=e;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(o)return s&&!p?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[d(p?n:s(n))+"="+d(s(h))]}return[d(n)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(l))v=l;else{var g=Object.keys(h);v=c?g.sort(c):g}for(var y=0;y<v.length;++y){var x=v[y];a&&null===h[x]||(m=Array.isArray(h)?m.concat(t(h[x],i(n,x),i,o,a,s,l,c,u,f,d,p)):m.concat(t(h[x],n+(u?"."+x:"["+x+"]"),i,o,a,s,l,c,u,f,d,p)))}return m};t.exports=function(t,e){var n=t,r=e||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,y,x=i.formatters[r.format];"function"==typeof r.filter?(y=r.filter,n=y("",n)):Array.isArray(r.filter)&&(y=r.filter,g=y);var b=[];if("object"!=typeof n||null===n)return"";var w;w=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=o[w];g||(g=Object.keys(n)),p&&g.sort(p);for(var j=0;j<g.length;++j){var C=g[j];u&&null===n[C]||(b=b.concat(l(n[C],C,_,c,u,f?d:null,y,p,h,m,x,v)))}return b.join(a)}},14:function(t,e,n){n(18);var r=n(0)(n(15),n(17),"data-v-ee1dd0cc",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},15:function(t,e,n){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick",t)},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick",t)}}}},16:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.border[data-v-ee1dd0cc] {\n  border-width: 1px;\n}\n.container[data-v-ee1dd0cc] {\n  flex-direction: row;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 750px;\n}\n.right-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  right: 32px;\n  text-align: right;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  left :32px;\n  text-align :left;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 25px;\n  left: 172px;\n  right: 172px;\n  text-align: center;\n  font-size: 36px;\n}\n.left-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 120px;\n  height: 80px;\n}\n.left-image[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  left: 28px;\n  width: 25px;\n  height: 48px;\n}\n.right-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  right: 28px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n}\n.right-image[data-v-ee1dd0cc] {\n  width: 6px;\n  height: 40px;\n}\n",""])},17:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():n("text",{staticClass:"right-text",style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t._v(" "),t.rightItemSrc?n("div",{staticClass:"right-image-box",attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[n("image",{staticClass:"right-image",attrs:{src:t.rightItemSrc}})]):t._e(),t._v(" "),t.leftItemSrc?t._e():n("text",{staticClass:"left-text",style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t._v(" "),t.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:t.leftItemSrc}}):t._e(),t._v(" "),t.leftItemSrc?n("div",{staticClass:"left-image-box",on:{click:t.onclickleftitem}}):t._e(),t._v(" "),n("text",{staticClass:"center-text",style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},18:function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("e655ad8c",r,!1)},19:function(t,e,n){n(23);var r=n(0)(n(20),n(22),"data-v-33a35918",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},2:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var o=p++;r=d||(d=i()),e=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},f=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},20:function(t,e,n){"use strict";var r=n(7),i=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports={components:{navbar:n(14)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(i.default.isIOS()){var t=weex.config.env,e=t.scale,n=t.deviceWidth/e;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},21:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrapper[data-v-33a35918] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 750;\n}\n",""])},22:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:t.dataRole,height:t.computeHeight,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),t._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},23:function(t,e,n){var r=n(21);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("68f36e54",r,!1)},24:function(t,e,n){n(28);var r=n(0)(n(25),n(27),"data-v-d8b144c8",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] back-navbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},25:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=r(i),a=n(445),s=r(a);e.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemSrc:{default:""}},methods:{leftItemClick:function(t){if(null==this.naviBarLeftItemClick)return void s.default.onPageEnd().then(function(t){o.default.pop()}).catch(function(t){o.default.pop()});this.$emit("naviBarLeftItemClick",t)}},components:{navpage:n(19)}}},26:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.root[data-v-d8b144c8] {\n    width: 750px;\n}\n\n",""])},27:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navpage",{staticClass:"root",attrs:{dataRole:t.dataRole,title:t.title,titleColor:t.titleColor,backgroundColor:t.backgroundColor,rightItemTitle:t.rightItemTitle,leftItemSrc:t.leftItemSrc,rightItemSrc:t.rightItemSrc},on:{naviBarLeftItemClick:t.leftItemClick}},[t.showLine?n("div",{staticStyle:{height:"1px","background-color":"#e5e5e5"}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},28:function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("34e58666",r,!1)},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:t+":"+i,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},381:function(t,e,n){n(743);var r=n(0)(n(443),n(683),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/userHome/infoPage/index.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},443:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{user:{default:function(){return{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",nickName:"鹿晗",sex:"男",intro:"清风徐来，币圈happy",from:"北京",uid:"16283938"}}}},data:function(){return{title:"资料"}},components:{backNavpage:n(24)}}},445:function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){if(!t)return void n("pageName is invalue !!!");a&&o.onPageEnd(a),o.onPageStart(t),a=t,e()})}function i(){return console.log("onPageEnd "+a),new Promise(function(t,e){if(!a)return void e("lastPageName is invalue !!!");o.onPageEnd(a),a="",t()})}Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("wtj"),a="";e.default={onPageStart:r,onPageEnd:i}},5:function(t,e,n){"use strict";var r=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},570:function(t,e,n){"use strict";var r=n(381);r.el="#root",new Vue(r)},6:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(n[r]=t[r]);return n},e.merge=function(t,n,i){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var o=t;return Array.isArray(t)&&!Array.isArray(n)&&(o=e.arrayToObject(t,i)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e.merge(t[o],n,i):t.push(n):t[o]=n}),t):Object.keys(n).reduce(function(t,r){var o=n[r];return Object.prototype.hasOwnProperty.call(t,r)?t[r]=e.merge(t[r],o,i):t[r]=o,t},o)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),n="",r=0;r<e.length;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=e.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},e.compact=function(t,n){if("object"!=typeof t||null===t)return t;var r=n||[],i=r.indexOf(t);if(-1!==i)return r[i];if(r.push(t),Array.isArray(t)){for(var o=[],a=0;a<t.length;++a)t[a]&&"object"==typeof t[a]?o.push(e.compact(t[a],r)):void 0!==t[a]&&o.push(t[a]);return o}return Object.keys(t).forEach(function(n){t[n]=e.compact(t[n],r)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},623:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrap-bg {\n\twidth: 750px;\n\theight: 1080px;\n\tbackground-color: #f8f8f8;\n}\n.info-bg {\n\tbackground-color: #fff;\n}\n.info-wrap {\n\tmargin-left: 30px;\n\tmargin-right: 30px;\n\twidth: 690px;\n}\n.header-wrap {\n\twidth: 690px;\n\theight: 190px;\n\tjustify-content: center;\n\talign-items: center;\n}\n.header {\n\twidth: 130px;\n\theight: 130px;\n\tborder-radius: 130px;\n}\n.info-group {\n\twidth: 690px;\n\theight: 90px;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.info-group-link {\n\tborder-bottom-width: 1px;\n\tborder-color: #e5e5e5;\n}\n.info-tit {\n\tfont-size: 28px;\n\tcolor: #434343;\n}\n.info-content {\n\tfont-size: 28px;\n\tcolor: #959595;\n}",""])},683:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("back-navpage",{attrs:{title:t.title}},[n("div",{staticClass:"wrap-bg"},[n("div",{staticClass:"info-bg"},[n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"header-wrap"},[n("image",{staticClass:"header",attrs:{src:t.user.headerUrl}})]),t._v(" "),n("div",{staticClass:"info-group info-group-link"},[n("text",{staticClass:"info-tit"},[t._v("昵称")]),t._v(" "),n("text",{staticClass:"info-content"},[t._v(t._s(t.user.nickName))])]),t._v(" "),n("div",{staticClass:"info-group info-group-link"},[n("text",{staticClass:"info-tit"},[t._v("性别")]),t._v(" "),n("text",{staticClass:"info-content"},[t._v(t._s(t.user.sex))])]),t._v(" "),n("div",{staticClass:"info-group info-group-link"},[n("text",{staticClass:"info-tit"},[t._v("简介")]),t._v(" "),n("text",{staticClass:"info-content"},[t._v(t._s(t.user.intro))])]),t._v(" "),n("div",{staticClass:"info-group info-group-link"},[n("text",{staticClass:"info-tit"},[t._v("地区")]),t._v(" "),n("text",{staticClass:"info-content"},[t._v(t._s(t.user.from))])]),t._v(" "),n("div",{staticClass:"info-group"},[n("text",{staticClass:"info-tit"},[t._v("UID")]),t._v(" "),n("text",{staticClass:"info-content"},[t._v(t._s(t.user.uid))])])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},7:function(t,e,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var t=weex.config.env;return{deviceWidth:t.deviceWidth,deviceHeight:t.deviceHeight}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={isIOS:r,isWeb:i,getDeviceInfo:o}},743:function(t,e,n){var r=n(623);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("f3d80ce2",r,!1)},8:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=weex.config.bundleUrl,e=t.indexOf("your_current_IP")>=0||t.indexOf("file://assets/")>=0,n=t.indexOf("file:///")>=0&&t.indexOf("WeexFrame.app")>0,r="";if(e)r="file://assets/dist/native/";else if(n)r=t.substring(0,t.lastIndexOf("native/")+5);else{var i=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(t);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(t,e){if(m.default.isWeb())return void(window.location.href=t);e=e||{},e.url=t,s(g.default.web,e)}function a(t,e){b.push({url:e?t+"?"+f.default.stringify(e):t,animated:"true"},function(t){x.default.log("callback: ",t)})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.title=t.title,x.default.log("getBaseUrl",i());var n=e?""+i()+t.jsPath+".js?"+f.default.stringify(e):""+i()+t+".js";x.default.log("push "+n),b.push({url:n,animated:"true"},function(t){x.default.log("callback: ",t)})}function l(){b.pop({animated:"true"},function(t){x.default.log("callback: ",t)})}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=n(10),f=r(u),d=n(11),p=r(d),h=n(7),m=r(h),v=n(4),g=r(v),y=n(9),x=r(y),b=weex.requireModule("navigator");e.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:l}},9:function(t,e,n){"use strict";function r(t){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(t))}function i(t,e){d||r("["+t+"]  "+o(e))}function o(t,e,n){if(void 0===e&&(e=10),void 0===n&&(n=0),n===e)return t+"???";if(null===t)return'"'+t+'"';if("string"==typeof t)return'"'+t+'"';if("function"==typeof t)return"Function";if("native code"==typeof t)return"native code";if("object"!==(void 0===t?"undefined":u(t)))return""+t;for(var r="",i=0;i<n;i++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in t)if(0===i&&i++,t.hasOwnProperty(c)){l=!1;var f=o(t[c],e,n+1);f.indexOf("function"),s+=a,t.hasOwnProperty(c)||(s+="prototype.");var d=u(t[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(t,e){arguments.length>=2?r("WARN-"+t+"  "+e):(e=t,r("WARN  "+e))}function s(t,e,n,r){if(null===t||void 0===t||!1===t){if(a("assert","\n------------err msg------------\n"+o({expression:t,msg:e,info0:n,info1:r})+"------------create ------------\n"+function(){var t="",e=0,n=arguments.callee;do{if(e>=3&&e<10){t+=""+n}else if(e>=10)break;n=n.arguments.callee.caller,e++}while(n);return t}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(t){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(t+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=f||{},d=!1;e.default={log:r,dump:i,testBegin:l,testEnd:c}}});