// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=573)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var l="function"==typeof i?i.options:i;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),r){var s=l.computed||(l.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:o,exports:i,options:l}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var r=n(13),o=n(12),i=n(5);e.exports={formats:i,parse:o,stringify:r}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.0.153"},12:function(e,t,n){"use strict";var r=n(6),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var a,l,s=r[i],c=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;-1===c?(a=t.decoder(s),l=t.strictNullHandling?null:""):(a=t.decoder(s.slice(0,c)),l=t.decoder(s.slice(c+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(l):n[a]=l}return n},l=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(l(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=l(e,t,n)):r[i]=l(e,t,n)}return r},s=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=i.exec(r),c=s?r.slice(0,s.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(s=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+r.slice(s.index)+"]"),l(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,l=n.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var f=c[u],d=s(f,o[f],n);l=r.merge(l,d,n)}return r.compact(l)}},13:function(e,t,n){"use strict";var r=n(6),o=n(5),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,n,o,i,a,l,s,c,u,f,d,p){var h=t;if("function"==typeof s)h=s(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(i)return l&&!p?l(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(l){return[d(p?n:l(n))+"="+d(l(h))]}return[d(n)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(s))v=s;else{var g=Object.keys(h);v=c?g.sort(c):g}for(var x=0;x<v.length;++x){var y=v[x];a&&null===h[y]||(m=Array.isArray(h)?m.concat(e(h[y],o(n,y),o,i,a,l,s,c,u,f,d,p)):m.concat(e(h[y],n+(u?"."+y:"["+y+"]"),o,i,a,l,s,c,u,f,d,p)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?l.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:l.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:l.skipNulls,f="boolean"==typeof r.encode?r.encode:l.encode,d="function"==typeof r.encoder?r.encoder:l.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:l.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:l.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,x,y=o.formatters[r.format];"function"==typeof r.filter?(x=r.filter,n=x("",n)):Array.isArray(r.filter)&&(x=r.filter,g=x);var w=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=i[b];g||(g=Object.keys(n)),p&&g.sort(p);for(var j=0;j<g.length;++j){var I=g[j];u&&null===n[I]||(w=w.concat(s(n[I],I,_,c,u,f?d:null,x,p,h,m,y,v)))}return w.join(a)}},14:function(e,t,n){n(18);var r=n(0)(n(15),n(17),"data-v-ee1dd0cc",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},15:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},16:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border[data-v-ee1dd0cc] {\n  border-width: 1px;\n}\n.container[data-v-ee1dd0cc] {\n  flex-direction: row;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 750px;\n}\n.right-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  right: 32px;\n  text-align: right;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  left :32px;\n  text-align :left;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 25px;\n  left: 172px;\n  right: 172px;\n  text-align: center;\n  font-size: 36px;\n}\n.left-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 120px;\n  height: 80px;\n}\n.left-image[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  left: 28px;\n  width: 25px;\n  height: 48px;\n}\n.right-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  right: 28px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n}\n.right-image[data-v-ee1dd0cc] {\n  width: 6px;\n  height: 40px;\n}\n",""])},17:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:"right-text",style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e._v(" "),e.rightItemSrc?n("div",{staticClass:"right-image-box",attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[n("image",{staticClass:"right-image",attrs:{src:e.rightItemSrc}})]):e._e(),e._v(" "),e.leftItemSrc?e._e():n("text",{staticClass:"left-text",style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e._v(" "),e.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e._v(" "),e.leftItemSrc?n("div",{staticClass:"left-image-box",on:{click:e.onclickleftitem}}):e._e(),e._v(" "),n("text",{staticClass:"center-text",style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},173:function(e,t,n){n(226);var r=n(0)(n(187),n(212),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/follows/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},18:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("e655ad8c",r,!1)},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{followers:{default:function(){return{article:{headerUrl:"",userName:"",subTitle:"",headerStyle:"follow"},isFollow:!1}}}},components:{userHeader:n(35)},methods:{followIt:function(){this.$emit("follow",!this.followers.isFollow)}}}},19:function(e,t,n){n(23);var r=n(0)(n(20),n(22),"data-v-33a35918",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},198:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.follow-wrap {\n    margin-right: 30px;\n    margin-left: 30px;\n    width: 690px;\n}\n.follow-content-wrap {\n    width: 690px;\n    height: 138px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.follow-btn {\n    width: 100px;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    border-width: 1px;\n    border-color: #fc6d3f;\n    border-radius: 8px;\n    font-size: 24px;\n    color: #fc6d3f;\n}\n.has-follow {\n    border-color: #959595;\n    color: #959595;\n}\n.line {\n    margin-left: 100px;\n    width: 590px;\n    height: 1px;\n    background-color: #e5e5e5;\n}\n",""])},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var i=p++;r=d||(d=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=l.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},f=s&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],l=u[a.id];l.refs--,n.push(l)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var l=n[i];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete u[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},20:function(e,t,n){"use strict";var r=n(7),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:n(14)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(o.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},21:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper[data-v-33a35918] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 750;\n}\n",""])},212:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"follow-wrap"},[n("div",{staticClass:"follow-content-wrap"},[n("user-header",{staticClass:"follower-header",attrs:{article:e.followers.article}}),e._v(" "),n("text",{staticClass:"follow-btn",class:[e.followers.isFollow?"has-follow":""],on:{click:e.followIt}},[e._v(e._s(e.followers.isFollow?"已关注":"+关注"))])],1),e._v(" "),n("div",{staticClass:"line"})])},staticRenderFns:[]},e.exports.render._withStripped=!0},22:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),e._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},226:function(e,t,n){var r=n(198);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("43251baa",r,!1)},23:function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("68f36e54",r,!1)},24:function(e,t,n){n(28);var r=n(0)(n(25),n(27),"data-v-d8b144c8",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] back-navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{showLine:{default:!1},title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"},backgroundColor:{default:"#fc6d3f"},titleColor:{default:"white"},rightItemTitle:{default:""},rightItemSrc:{default:""}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void o.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:n(19)}}},26:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root[data-v-d8b144c8] {\n    width: 750px;\n}\n\n",""])},27:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("navpage",{staticClass:"root",attrs:{dataRole:e.dataRole,title:e.title,titleColor:e.titleColor,backgroundColor:e.backgroundColor,rightItemTitle:e.rightItemTitle,leftItemSrc:e.leftItemSrc,rightItemSrc:e.rightItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e.showLine?n("div",{staticStyle:{height:"1px","background-color":"#e5e5e5"}}):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},28:function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("34e58666",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],l=i[1],s=i[2],c=i[3],u={id:e+":"+o,css:l,media:s,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},35:function(e,t,n){n(39);var r=n(0)(n(36),n(38),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userHeader/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{article:{default:function(){return{headerUrl:"",userName:"",subTitle:"",headerStyle:""}}}}}},37:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.user-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 70px;\n}\n.user-wiki-details-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n}\n.follow-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n}\n.user-header {\n    width: 70px;\n    height: 70px;\n    border-radius: 70px;\n}\n.user-wiki-details-header {\n    width: 100px;\n    height: 100px;\n    border-radius: 100px;\n}\n.follow-header {\n    width: 80px;\n    height: 80px;\n    border-radius: 80px;\n}\n.user-info-wrap {\n    margin-left: 20px;\n}\n.user-name {\n    font-size: 28px;\n    color: #000;\n}\n.user-wiki-details-name {\n    font-size: 36px;\n    color: #434343;\n}\n.follow-name {\n    font-size: 28px;\n    color: #434343;\n}\n.user-issue {\n    font-size: 22px;\n    color: #959595;\n}\n.user-wiki-details-issue {\n    font-size: 22px;\n    color: #959595;\n}\n.follow-issue {\n    margin-top: 15px;\n    font-size: 24px;\n    color: #959595;\n}\n",""])},379:function(e,t,n){n(751);var r=n(0)(n(442),n(689),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/my-follow/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},38:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.article.headerStyle+"-header-wrap"]},[n("image",{class:[e.article.headerStyle+"-header"],attrs:{src:e.article.headerUrl}}),e._v(" "),n("div",{staticClass:"user-info-wrap"},[n("text",{class:[e.article.headerStyle+"-name"]},[e._v(e._s(e.article.userName))]),e._v(" "),n("text",{class:[e.article.headerStyle+"-issue"]},[e._v(e._s(e.article.subTitle))]),e._v(" "),e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},39:function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("338da93c",r,!1)},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"}}},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"我的关注",followList:[{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",userName:"鹿晗",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!0},{article:{headerUrl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2949599068,3391309327&fm=58&u_exp_0=2382565453,3058003917&fm_exp_0=86&bpow=502&bpoh=502",userName:"王俊凯",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!0},{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876",userName:"王源",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!0},{article:{headerUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=179813241,910224211&fm=58&u_exp_0=3907746922,576918801&fm_exp_0=86&bpow=1600&bpoh=2000",userName:"易烊千玺",subTitle:"链链策略选币达人",headerStyle:"follow"},isFollow:!0}]}},components:{follows:n(173),backNavpage:n(24)}}},5:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},573:function(e,t,n){"use strict";var r=n(379);r.el="#root",new Vue(r)},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],r)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},629:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.nofile-wrap {\n    width: 750px;\n    height: 1024px;\n    justify-content: center;\n    align-items: center;\n}\n.nofile {\n    width: 304px;\n    height: 230px;\n}\n.nofile-tit {\n    margin-top: 50px;\n    font-size: 26px;\n    color: #bbbbbb;\n}\n",""])},689:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("back-navpage",{attrs:{title:e.title}},[n("div",[0==e.followList.length?n("div",{staticClass:"nofile-wrap"},[n("image",{staticClass:"nofile",attrs:{src:"/src/view/personal/my-news/images/nofile.png"}}),e._v(" "),n("text",{staticClass:"nofile-tit"},[e._v("你还没有关注的人")])]):e._l(e.followList,function(e,t){return n("div",{key:t},[n("follows",{attrs:{followers:e},on:{follow:function(t){return e.isFollow=t}}})],1)})],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}},751:function(e,t,n){var r=n(629);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("0235b9a0",r,!1)},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=p.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function i(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,l(g.default.web,t)}function a(e,t){w.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){y.default.log("callback: ",e)})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,y.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+f.default.stringify(t):""+o()+e+".js";y.default.log("push "+n),w.push({url:n,animated:"true"},function(e){y.default.log("callback: ",e)})}function s(){w.pop({animated:"true"},function(e){y.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(10),f=r(u),d=n(11),p=r(d),h=n(7),m=r(h),v=n(4),g=r(v),x=n(9),y=r(x),w=weex.requireModule("navigator");t.default={push:l,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:s}},9:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",l="{\n",s=!0;for(var c in e)if(0===o&&o++,e.hasOwnProperty(c)){s=!1;var f=i(e[c],t,n+1);f.indexOf("function"),l+=a,e.hasOwnProperty(c)||(l+="prototype.");var d=u(e[c]);l+=c,l+="["+d,l+="]",l+=" : ",l+=f,l+=" ,\n"}return l+=r+"}",s&&(l="{}"),l}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function l(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function s(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),l(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:r,dump:o,testBegin:s,testEnd:c}}});