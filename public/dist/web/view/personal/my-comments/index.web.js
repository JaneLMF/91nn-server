// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=546)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.1.106"},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{contentIssue:{default:function(){return{contentImg:"",issue:"",content:""}}}}}},109:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.comment-issue-wrap {\n    margin-right: 30px;\n    margin-left: 30px;\n    width: 690px;\n    flex-direction: row;\n}\n.comment-issue-img {\n    width: 150px;\n    height: 150px;\n}\n.comment-content-bg {\n    width: 540px;\n    height: 150px;\n    background-color: #f8f8f8;\n}\n.comment-content-wrap {\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 480px;\n}\n.comment-issue {\n    height: 60px;\n    line-height: 60px;\n    font-size: 26px;\n    color: #333333;\n}\n.comment-issue-content {\n    margin-top: 15px;\n    font-size: 24px;\n    color: #888888;\n    lines: 2;\n}\n",""])},11:function(e,t,n){"use strict";var r=n(13),o=n(12),i=n(5);e.exports={formats:i,parse:o,stringify:r}},115:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-issue-wrap"},[n("image",{staticClass:"comment-issue-img",attrs:{src:e.contentIssue.contentImg}}),e._v(" "),n("div",{staticClass:"comment-content-bg"},[n("div",{staticClass:"comment-content-wrap"},[n("text",{staticClass:"comment-issue"},[e._v("@"+e._s(e.contentIssue.issue))]),e._v(" "),n("text",{staticClass:"comment-issue-content"},[e._v(e._s(e.contentIssue.content))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},12:function(e,t,n){"use strict";var r=n(6),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var s,a,l=r[i],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(s=t.decoder(l),a=t.strictNullHandling?null:""):(s=t.decoder(l.slice(0,c)),a=t.decoder(l.slice(c+1))),o.call(n,s)?n[s]=[].concat(n[s]).concat(a):n[s]=a}return n},a=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(a(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,s=parseInt(i,10);!isNaN(s)&&o!==i&&String(s)===i&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(r=[],r[s]=a(e,t,n)):r[i]=a(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=i.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var p=0;null!==(l=s.exec(r))&&p<n.depth;){if(p+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),a(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?s(e,n):e,a=n.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var p=c[u],d=l(p,o[p],n);a=r.merge(a,d,n)}return r.compact(a)}},121:function(e,t,n){var r=n(109);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("7909f6c6",r,!1)},13:function(e,t,n){"use strict";var r=n(6),o=n(5),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,o,i,s,a,l,c,u,p,d,f){var m=t;if("function"==typeof l)m=l(n,m);else if(m instanceof Date)m=p(m);else if(null===m){if(i)return a&&!f?a(n):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||r.isBuffer(m)){if(a){return[d(f?n:a(n))+"="+d(a(m))]}return[d(n)+"="+d(String(m))]}var h=[];if(void 0===m)return h;var v;if(Array.isArray(l))v=l;else{var g=Object.keys(m);v=c?g.sort(c):g}for(var y=0;y<v.length;++y){var x=v[y];s&&null===m[x]||(h=Array.isArray(m)?h.concat(e(m[x],o(n,x),o,i,s,a,l,c,u,p,d,f)):h.concat(e(m[x],n+(u?"."+x:"["+x+"]"),o,i,s,a,l,c,u,p,d,f)))}return h};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===r.delimiter?a.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:a.skipNulls,p="boolean"==typeof r.encode?r.encode:a.encode,d="function"==typeof r.encoder?r.encoder:a.encoder,f="function"==typeof r.sort?r.sort:null,m=void 0!==r.allowDots&&r.allowDots,h="function"==typeof r.serializeDate?r.serializeDate:a.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:a.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,y,x=o.formatters[r.format];"function"==typeof r.filter?(y=r.filter,n=y("",n)):Array.isArray(r.filter)&&(y=r.filter,g=y);var b=[];if("object"!=typeof n||null===n)return"";var w;w=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=i[w];g||(g=Object.keys(n)),f&&g.sort(f);for(var C=0;C<g.length;++C){var I=g[C];u&&null===n[I]||(b=b.concat(l(n[I],I,_,c,u,p?d:null,y,f,m,h,x,v)))}return b.join(s)}},14:function(e,t,n){n(18);var r=n(0)(n(15),n(17),"data-v-ee1dd0cc",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},15:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},16:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border[data-v-ee1dd0cc] {\n  border-width: 1px;\n}\n.container[data-v-ee1dd0cc] {\n  flex-direction: row;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 750px;\n}\n.right-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  right: 32px;\n  text-align: right;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  left :32px;\n  text-align :left;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 25px;\n  left: 172px;\n  right: 172px;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n}\n.left-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 120px;\n  height: 80px;\n}\n.left-image[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  left: 28px;\n  width: 25px;\n  height: 48px;\n}\n.right-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  right: 28px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n}\n.right-image[data-v-ee1dd0cc] {\n  width: 6px;\n  height: 40px;\n}\n",""])},17:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:"right-text",style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e._v(" "),e.rightItemSrc?n("div",{staticClass:"right-image-box",attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[n("image",{staticClass:"right-image",attrs:{src:e.rightItemSrc}})]):e._e(),e._v(" "),e.leftItemSrc?e._e():n("text",{staticClass:"left-text",style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e._v(" "),e.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e._v(" "),e.leftItemSrc?n("div",{staticClass:"left-image-box",on:{click:e.onclickleftitem}}):e._e(),e._v(" "),n("text",{staticClass:"center-text",style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},18:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("e655ad8c",r,!1)},19:function(e,t,n){n(23);var r=n(0)(n(20),n(22),"data-v-33a35918",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(v){var i=f++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,n.push(a)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},20:function(e,t,n){"use strict";var r=n(7),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:n(14)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},21:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper[data-v-33a35918] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 750;\n}\n",""])},22:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),e._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},23:function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("68f36e54",r,!1)},24:function(e,t,n){n(28);var r=n(0)(n(25),n(27),"data-v-d8b144c8",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] back-navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:n(19)}}},26:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root[data-v-d8b144c8] {\n    width: 750px;\n}\n\n",""])},27:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("navpage",{staticClass:"root",attrs:{dataRole:e.dataRole,title:e.title,leftItemSrc:e.leftItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("34e58666",r,!1)},29:function(e,t,n){n(34);var r=n(0)(n(31),n(33),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],l=i[2],c=i[3],u={id:e+":"+o,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""}},methods:{clickIt:function(){this.$emit("callBack")}}}},32:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-content-wrap {\n    background-color: #fff;\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-bottom: 25px;\n}\n.user-wrap {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 30px;\n}\n.user-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n}\n.article-time-wrap {\n    justify-content: flex-end;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n}\n.article-time {\n    font-size: 24px;\n    color: #959595;\n}\n.user-name {\n    margin-right: 20px;\n    font-size: 26px;\n    color: #333333;\n}\n.user-issue {\n    font-size: 24px;\n    color: #959595;\n}\n.user-header {\n    margin-right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n}\n",""])},33:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-content-wrap"},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-header-wrap",on:{click:e.clickIt}},[n("image",{staticClass:"user-header",attrs:{src:e.headerUrl}}),e._v(" "),n("text",{staticClass:"user-name"},[e._v(e._s(e.userName))]),e._v(" "),n("text",{staticClass:"user-issue"},[e._v("来自: "+e._s(e.userIssue))])]),e._v(" "),n("div",{staticClass:"article-time-wrap"},[n("text",{staticClass:"article-time"},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},34:function(e,t,n){var r=n(32);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("294b68ef",r,!1)},360:function(e,t,n){n(685);var r=n(0)(n(422),n(622),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/my-comments/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},422:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"我的评论",commentGroup:[{type:0,myComment:"hello world",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:1,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}},{type:2,myComment:"hello world",issueUserName:"新垣结衣",issueContent:"hello nice",repostList:[{name:"王俊凯",content:"T"},{name:"王源",content:"F"},{name:"易烊千玺",content:"Boys"}],article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",userIssue:"你牛",articleTime:"12:30"},contentIssue:{contentImg:"/src/components/comment/test.jpg",issue:"清风马迪市",content:"【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的..."}}]}},components:{cellUserInfo:n(29),myComment:n(95),backNavpage:n(24)}}},5:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},546:function(e,t,n){"use strict";var r=n(360);r.el="#root",new Vue(r)},565:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.myComments-wrap {\n    width: 750px;\n    background-color: #f8f8f8;\n}\n.myComments-group {\n    margin-bottom: 10px;\n    background-color: #fff;\n}\n.myComments-content-wrap {\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 690px;\n}\n.myComments-content {\n    margin-bottom: 15px;\n}\n.myComments-reply-wrap {\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.my-reply-wrap {\n    flex-direction: row;\n}\n.myComments-repost-wrap {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n}\n.line {\n    margin-top: 10px;\n    width: 690px;\n    height: 1px;\n    background-color: #dddddd;\n}\n.reply-issue-wrap {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    flex-direction: row;\n}\n.repost-list {\n    flex-direction: row;\n}\n.reply-content {\n    margin-left: 10px;\n}\n.reply-default {\n    line-height: 40px;\n    font-size: 26px;\n    color: #434343;\n}\n.reply-issue-name {\n    line-height: 40px;\n    font-size: 26px;\n    color: #fc6d3f;\n}\n.my-comment-issue {\n    padding-bottom: 30px;\n}\n",""])},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?i.push(t.compact(e[s],r)):void 0!==e[s]&&i.push(e[s]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},622:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("back-navpage",{attrs:{title:e.title}},[n("list",{staticClass:"myComments-wrap"},e._l(e.commentGroup,function(t,r){return n("cell",{key:r,staticClass:"myComments-group"},[n("cell-user-info",{attrs:{headerUrl:t.article.headerUrl,userName:t.article.userName,userIssue:t.article.userIssue,articleTime:t.article.articleTime}}),e._v(" "),n("div",{staticClass:"myComments-content-wrap"},[0==t.type?n("div",{staticClass:"myComments-content"},[n("text",{staticClass:"reply-default"},[e._v(e._s(t.myComment))])]):1==t.type?n("div",{staticClass:"myComments-reply-wrap"},[n("div",{staticClass:"my-reply-wrap"},[n("text",{staticClass:"reply-default"},[e._v("回复")]),e._v(" "),n("text",{staticClass:"reply-issue-name"},[e._v("@"+e._s(t.issueUserName))]),e._v(" "),n("text",{staticClass:"reply-default"},[e._v(":")]),e._v(" "),n("text",{staticClass:"reply-default reply-content"},[e._v(e._s(t.myComment))])]),e._v(" "),n("div",{staticClass:"line"}),e._v(" "),n("div",{staticClass:"reply-issue-wrap"},[n("text",{staticClass:"reply-issue-name"},[e._v("@"+e._s(t.issueUserName))]),e._v(" "),n("text",{staticClass:"reply-default"},[e._v(":")]),e._v(" "),n("text",{staticClass:"reply-default reply-content"},[e._v(e._s(t.issueContent))])])]):2==t.type?n("div",{staticClass:"myComments-repost-wrap"},[n("text",{staticClass:"reply-default"},[e._v(e._s(t.myComment))]),e._v(" "),e._l(t.repostList,function(t,r){return n("div",{key:r,staticClass:"repost-list"},[n("text",{staticClass:"reply-default"},[e._v("//")]),e._v(" "),n("text",{staticClass:"reply-issue-name"},[e._v("@"+e._s(t.name))]),e._v(" "),n("text",{staticClass:"reply-default"},[e._v(":")]),e._v(" "),n("text",{staticClass:"reply-default reply-content"},[e._v(e._s(t.content))])])})],2):e._e()]),e._v(" "),n("div",[n("my-comment",{staticClass:"my-comment-issue",attrs:{contentIssue:t.contentIssue}})],1),e._v(" "),n("div",{staticStyle:{width:"750px",height:"10px","background-color":"#f8f8f8"}})],1)}))],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},685:function(e,t,n){var r=n(565);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("6425adfe",r,!1)},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=f.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function i(e,t){if(h.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(g.default.web,t)}function s(e,t){b.push({url:t?e+"?"+p.default.stringify(t):e,animated:"true"},function(e){x.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,x.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+p.default.stringify(t):""+o()+e+".js";x.default.log("push "+n),b.push({url:n,animated:"true"},function(e){x.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){x.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),p=r(u),d=n(10),f=r(d),m=n(7),h=r(m),v=n(4),g=r(v),y=n(9),x=r(y),b=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:o,pushWeb:i,pop:l}},9:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var s=r+"    ",a="{\n",l=!0;for(var c in e)if(0===o&&o++,e.hasOwnProperty(c)){l=!1;var p=i(e[c],t,n+1);p.indexOf("function"),a+=s,e.hasOwnProperty(c)||(a+="prototype.");var d=u(e[c]);a+=c,a+="["+d,a+="]",a+=" : ",a+=p,a+=" ,\n"}return a+=r+"}",l&&(a="{}"),a}function s(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,n,r){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){p._testbegin=(new Date).getTime(),p._testIsBegin=!0}function c(e){p._testEnd=(new Date).getTime(),a(!0===p._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+p._testEnd+" - "+p._testbegin+" : "+(p._testEnd-p._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=p||{},d=!1;t.default={log:r,dump:o,testBegin:l,testEnd:c}},95:function(e,t,n){n(121);var r=n(0)(n(101),n(115),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/comment/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports}});