// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=514)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"},11:function(e,t,n){"use strict";var r=n(13),o=n(12),i=n(5);e.exports={formats:i,parse:o,stringify:r}},12:function(e,t,n){"use strict";var r=n(6),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var a,s,l=r[i],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[i]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var p=0;null!==(l=a.exec(r))&&p<n.depth;){if(p+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var p=c[u],d=l(p,o[p],n);s=r.merge(s,d,n)}return r.compact(s)}},13:function(e,t,n){"use strict";var r=n(6),o=n(5),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,o,i,a,s,l,c,u,p,d,f){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=p(m);else if(null===m){if(i)return s&&!f?s(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(s){return[d(f?n:s(n))+"="+d(s(m))]}return[d(n)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var g;if(Array.isArray(l))g=l;else{var v=Object.keys(m);g=c?v.sort(c):v}for(var x=0;x<g.length;++x){var b=g[x];a&&null===m[b]||(h=Array.isArray(m)?h.concat(e(m[b],o(n,b),o,i,a,s,l,c,u,p,d,f)):h.concat(e(m[b],n+(u?"."+b:"["+b+"]"),o,i,a,s,l,c,u,p,d,f)))}return h};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,p="boolean"==typeof r.encode?r.encode:s.encode,d="function"==typeof r.encoder?r.encoder:s.encoder,f="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var v,x,b=o.formatters[r.format];"function"==typeof r.filter?(x=r.filter,n=x("",n)):Array.isArray(r.filter)&&(x=r.filter,v=x);var y=[];if("object"!=typeof n||null===n)return"";var w;w=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=i[w];v||(v=Object.keys(n)),f&&v.sort(f);for(var C=0;C<v.length;++C){var j=v[C];u&&null===n[j]||(y=y.concat(l(n[j],j,_,c,u,p?d:null,x,f,m,h,b,g)))}return y.join(a)}},14:function(e,t,n){n(18);var r=n(0)(n(15),n(17),"data-v-ee1dd0cc",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},15:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},16:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border[data-v-ee1dd0cc] {\n  border-width: 1px;\n}\n.container[data-v-ee1dd0cc] {\n  flex-direction: row;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 750px;\n}\n.right-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  right: 32px;\n  text-align: right;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  left :32px;\n  text-align :left;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 25px;\n  left: 172px;\n  right: 172px;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n}\n.left-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 120px;\n  height: 80px;\n}\n.left-image[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  left: 28px;\n  width: 25px;\n  height: 48px;\n}\n.right-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  right: 28px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n}\n.right-image[data-v-ee1dd0cc] {\n  width: 6px;\n  height: 40px;\n}\n",""])},17:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:"right-text",style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e._v(" "),e.rightItemSrc?n("div",{staticClass:"right-image-box",attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[n("image",{staticClass:"right-image",attrs:{src:e.rightItemSrc}})]):e._e(),e._v(" "),e.leftItemSrc?e._e():n("text",{staticClass:"left-text",style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e._v(" "),e.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e._v(" "),e.leftItemSrc?n("div",{staticClass:"left-image-box",on:{click:e.onclickleftitem}}):e._e(),e._v(" "),n("text",{staticClass:"center-text",style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},18:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("e655ad8c",r,!1)},19:function(e,t,n){n(23);var r=n(0)(n(20),n(22),"data-v-33a35918",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(g){var i=f++;r=d||(d=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},20:function(e,t,n){"use strict";var r=n(7),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:n(14)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},21:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper[data-v-33a35918] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 750;\n}\n",""])},22:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),e._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},23:function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("68f36e54",r,!1)},24:function(e,t,n){n(28);var r=n(0)(n(25),n(27),"data-v-d8b144c8",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] back-navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:n(19)}}},26:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root[data-v-d8b144c8] {\n    width: 750px;\n}\n\n",""])},27:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("navpage",{staticClass:"root",attrs:{dataRole:e.dataRole,title:e.title,leftItemSrc:e.leftItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("34e58666",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],c=i[3],u={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},330:function(e,t,n){n(688);var r=n(0)(n(394),n(626),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/content/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},35:function(e,t,n){n(39);var r=n(0)(n(36),n(38),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userHeader/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",subTitle:"",headerStyle:""}}}}}},37:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.user-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 70px;\n}\n.user-wiki-details-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n}\n.follow-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n}\n.user-header {\n    width: 70px;\n    height: 70px;\n    border-radius: 70px;\n}\n.user-wiki-details-header {\n    width: 100px;\n    height: 100px;\n    border-radius: 100px;\n}\n.follow-header {\n    width: 80px;\n    height: 80px;\n    border-radius: 80px;\n}\n.user-info-wrap {\n    margin-left: 20px;\n}\n.user-name {\n    font-size: 28px;\n    color: #434343;\n}\n.user-wiki-details-name {\n    font-size: 36px;\n    color: #434343;\n}\n.follow-name {\n    font-size: 28px;\n    color: #434343;\n}\n.user-issue {\n    font-size: 22px;\n    color: #959595;\n}\n.user-wiki-details-issue {\n    font-size: 22px;\n    color: #959595;\n}\n.follow-issue {\n    margin-top: 15px;\n    font-size: 24px;\n    color: #959595;\n}\n",""])},38:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.article.headerStyle+"-header-wrap"]},[n("image",{class:[e.article.headerStyle+"-header"],attrs:{src:e.article.headerUrl}}),e._v(" "),n("div",{staticClass:"user-info-wrap"},[n("text",{class:[e.article.headerStyle+"-name"]},[e._v(e._s(e.article.userName))]),e._v(" "),n("text",{class:[e.article.headerStyle+"-issue"]},[e._v(e._s(e.article.subTitle))]),e._v(" "),e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},39:function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("338da93c",r,!1)},394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"正文",isAuth:!1,comment:[{article:{headerUrl:"/src/view/home/images/badge-boss.png",userName:"月明静朗",subTitle:"2017-06-12  11：30",headerStyle:"user"},agreeNum:"12",content:"区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。"},{article:{headerUrl:"/src/view/home/images/badge-boss.png",userName:"月明静朗",subTitle:"2017-06-12  11：30",headerStyle:"user"},agreeNum:"12",content:"区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。"},{article:{headerUrl:"/src/view/home/images/badge-boss.png",userName:"月明静朗",subTitle:"2017-06-12  11：30",headerStyle:"user"},agreeNum:"12",content:"区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。"},{article:{headerUrl:"/src/view/home/images/badge-boss.png",userName:"月明静朗",subTitle:"2017-06-12  11：30",headerStyle:"user"},agreeNum:"12",content:"区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。"}],authName:"鹿晗",authHeader:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",contentTime:"2017-06-20 11:30",contentIssue:"微博",contentTit:"Parity钱包漏洞导致15万ETH被盗，多重签名钱包用户需尽快转移资金",content:"根据Etherscan.io确认的数据显示，据该公司的报告，目前已经确认有150,000ETH（大约价值3000万美元）被盗。据Parity所说，这次的漏洞是一种叫做wallet.sol的多重签名合约出现bug导致的。不过，数据显示这个问题已经被缓解，白帽黑客此前已经找回了大约377，000可能受到这个漏洞影响的ETH。Parity方面在公开讲话中将这个bug的严重程度列为“极严重的”，敦促“所有在多重签名钱包中存有资金的用户”都将资金转移到一个安全的地址。",contentComment:"3",contentAgree:"12",hasAgree:!1,agreeIcon:"/src/view/content/images/un-agree.png"}},components:{commentGroup:n(78),backNavpage:n(24)},methods:{agreeIt:function(){this.hasAgree?(this.agreeIcon="/src/view/content/images/un-agree.png",this.contentAgree--):(this.agreeIcon="/src/view/content/images/agree.png",this.contentAgree++),this.hasAgree=!this.hasAgree}}}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},5:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},514:function(e,t,n){"use strict";var r=n(330);r.el="#root",new Vue(r)},568:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.content-list {\n    margin-bottom: 20px;\n    width: 750px;\n    background-color: #f8f8f8;\n}\n.content-bg {\n    width: 750px;\n    background-color: #fff;\n}\n.user-info-row {\n    margin-left: 30px;\n    margin-right: 30px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 690px;\n    height: 130px;\n}\n.user-info-wrap {\n    height: 70px;\n    flex-direction: row;\n    align-items: center;\n}\n.user-header {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n}\n.user-info-group {\n    margin-left: 20px;\n}\n.user-name {\n    font-size: 26px;\n    color: #434343;\n}\n.content-issue-wrap {\n    flex-direction: row;\n}\n.content-issue-text {\n    font-size: 24px;\n    color: #959595;\n}\n.content-issue {\n    margin-left: 30px;\n}\n.follow-auth {\n    width: 100px;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    border-width: 1px;\n    border-color: #fc6d3f;\n    border-radius: 4px;\n    color: #fc6d3f;\n    font-size: 24px;\n}\n.content-moudle {\n    margin-bottom: 20px;\n    margin-right: 30px;\n    margin-left: 30px;\n    width: 690px;\n}\n.content-moudle-tit {\n    font-size: 36px;\n    color: #434343;\n    font-weight: bold;\n}\n.content-moudle-content {\n    margin-top: 30px;\n    font-size: 28px;\n    color: #434343;\n}\n.comment-wrap {\n    flex-direction: row;\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 690px;\n    height: 60px;\n    justify-content: flex-start;\n    align-items: center;\n    border-bottom-width: 1px;\n    border-color: #f8f8f8;\n}\n.comment-font-wrap {\n    flex-direction: row;\n}\n.comment-font-s {\n    font-size: 26px;\n    color: #888888;\n}\n.agree-wrap {\n    margin-left: 30px;\n}\n.comment-footer-wrap {\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    width: 750px;\n    height: 100px;\n    border-top-width: 1px;\n    border-color: #dddddd;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n}\n.comment-footer-bg {\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 690px;\n    height: 56px;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n}\n.comment-footer {\n    padding-left: 30px;\n    width: 474px;\n    height: 56px;\n    border-radius: 56px;\n    border-width: 1px;\n    border-color: #eeeeee;\n    background-color: #f8f8f8;\n    font-size: 26px;\n    placeholder-color: #bbbbbb;\n}\n.comment-footer-agree-group {\n    margin-left: 40px;\n    height: 48px;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.comment-footer-agree-icon {\n    width: 48px;\n    height: 48px;\n}\n.comment-footer-agree-count {\n    margin-left: 10px;\n    font-size: 28px;\n    color: #bbbbbb;\n}\n.comment-footer-repost-group {\n    margin-left: 40px;\n    width: 48px;\n    height: 48px;\n}\n.agree-active {\n    color: #fc6d3f;\n}",""])},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],r)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},626:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("back-navpage",{attrs:{title:e.title}},[n("div",{staticClass:"content-wrap"},[n("list",{staticClass:"content-list"},[n("cell",{staticClass:"content-bg"},[n("div",{staticClass:"user-info-row"},[n("div",{staticClass:"user-info-wrap"},[n("image",{staticClass:"user-header",attrs:{src:e.authHeader}}),e._v(" "),n("div",{staticClass:"user-info-group"},[n("text",{staticClass:"user-name"},[e._v(e._s(e.authName))]),e._v(" "),n("div",{staticClass:"content-issue-wrap"},[n("text",{staticClass:"content-issue-text"},[e._v(e._s(e.contentTime))]),e._v(" "),n("text",{staticClass:"content-issue-text content-issue"},[e._v("来自：")]),e._v(" "),n("text",{staticClass:"content-issue-text"},[e._v(e._s(e.contentIssue))])])])]),e._v(" "),e.isAuth?e._e():n("text",{staticClass:"follow-auth"},[e._v("+ 关注")])]),e._v(" "),n("div",{staticClass:"content-moudle"},[n("text",{staticClass:"content-moudle-tit"},[e._v(e._s(e.contentTit))]),e._v(" "),n("text",{staticClass:"content-moudle-content"},[e._v(e._s(e.content))])])]),e._v(" "),n("cell",{staticStyle:{width:"750px",height:"20px","background-color":"#f8f8f8"}}),e._v(" "),n("cell",{staticClass:"content-bg comment-bg"},[n("div",{staticClass:"comment-wrap"},[n("div",{staticClass:"comment-font-wrap"},[n("text",{staticClass:"comment-font-s"},[e._v("评论")]),e._v(" "),n("text",{staticClass:"comment-font-s"},[e._v(e._s(e.contentComment))])]),e._v(" "),n("div",{staticClass:"comment-font-wrap agree-wrap"},[n("text",{staticClass:"comment-font-s"},[e._v("赞")]),e._v(" "),n("text",{staticClass:"comment-font-s"},[e._v(e._s(e.contentAgree))])])]),e._v(" "),n("div",{staticStyle:{"margin-bottom":"100px"}},e._l(e.comment,function(e,t){return n("div",{key:t},[n("comment-group",{attrs:{comment:e}})],1)}))])],1),e._v(" "),n("div",{staticClass:"comment-footer-wrap"},[n("div",{staticClass:"comment-footer-bg"},[n("input",{staticClass:"comment-footer",attrs:{type:"text",placeholder:"谈谈你的看法..."}}),e._v(" "),n("div",{staticClass:"comment-footer-agree-group",on:{click:e.agreeIt}},[n("image",{staticClass:"comment-footer-agree-icon",attrs:{src:e.agreeIcon}}),e._v(" "),n("text",{staticClass:"comment-footer-agree-count",class:[e.hasAgree?"agree-active":""]},[e._v(e._s(0==e.contentAgree?"赞":e.contentAgree))])]),e._v(" "),n("image",{staticClass:"comment-footer-repost-group",attrs:{src:"/src/view/content/images/repost.png"}})])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},688:function(e,t,n){var r=n(568);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("3ecf444e",r,!1)},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}},78:function(e,t,n){n(91);var r=n(0)(n(81),n(88),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/commentGroup/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=f.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function i(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(v.default.web,t)}function a(e,t){y.push({url:t?e+"?"+p.default.stringify(t):e,animated:"true"},function(e){b.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,b.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+p.default.stringify(t):""+o()+e+".js";b.default.log("push "+n),y.push({url:n,animated:"true"},function(e){b.default.log("callback: ",e)})}function l(){y.pop({animated:"true"},function(e){b.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),p=r(u),d=n(10),f=r(d),m=n(7),h=r(m),g=n(4),v=r(g),x=n(9),b=r(x),y=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:l}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{comment:{default:function(){return{article:{headerUrl:"",userName:"",subTitle:"",headerStyle:""},agreeNum:"",content:""}}}},components:{userHeader:n(35)}}},85:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.bc-wrap {\n    margin-left: 30px;\n    margin-right: 30px;\n}\n.bc-user-wrap {\n    margin-top: 30px;\n    margin-bottom: 20px;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.bc-jiaohu {\n    height: 50px;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n.bc-zan-wrap {\n    flex-direction: row;\n}\n.bc-zan-icon {\n    width: 24px;\n    height: 24px;\n}\n.bc-zan-content {\n    margin-left: 10px;\n    font-size: 20px;\n    color: #c9c9c9;\n}\n.bc-pinglun-icon {\n    margin-left: 30px;\n    width: 24px;\n    height: 24px;\n}\n.bc-content {\n    margin-left: 90px;\n    padding-bottom: 35px;\n    width: 600px;\n    font-size: 26px;\n    color: #434343;\n    border-bottom-width: 1px;\n    border-color: #e5e5e5;\n}\n",""])},88:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc-wrap"},[n("div",{staticClass:"bc-user-wrap"},[n("user-header",{staticClass:"bc-header",attrs:{article:e.comment.article}}),e._v(" "),n("div",{staticClass:"bc-jiaohu"},[n("div",{staticClass:"bc-zan-wrap"},[n("image",{staticClass:"bc-zan-icon",attrs:{src:"/src/view/home/images/zan.png"}}),e._v(" "),n("text",{staticClass:"bc-zan-content"},[e._v(e._s(e.comment.agreeNum))])]),e._v(" "),n("image",{staticClass:"bc-pinglun-icon",attrs:{src:"/src/view/home/images/pinglun.png"}})])],1),e._v(" "),n("text",{staticClass:"bc-content"},[e._v(e._s(e.comment.content))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===o&&o++,e.hasOwnProperty(c)){l=!1;var p=i(e[c],t,n+1);p.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var d=u(e[c]);s+=c,s+="["+d,s+="]",s+=" : ",s+=p,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){p._testbegin=(new Date).getTime(),p._testIsBegin=!0}function c(e){p._testEnd=(new Date).getTime(),s(!0===p._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+p._testEnd+" - "+p._testbegin+" : "+(p._testEnd-p._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=p||{},d=!1;t.default={log:r,dump:o,testBegin:l,testEnd:c}},91:function(e,t,n){var r=n(85);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("70167596",r,!1)}});