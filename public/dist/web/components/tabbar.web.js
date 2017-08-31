// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=606)}({0:function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:r,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var i=n(12),r=n(11),o=n(6);e.exports={formats:o,parse:r,stringify:i}},11:function(e,t,n){"use strict";var i=n(7),r=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},i=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<i.length;++o){var a,s,l=i[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),r.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var i,r=e.shift();if("[]"===r)i=[],i=i.concat(s(e,t,n));else{i=n.plainObjects?Object.create(null):{};var o="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,a=parseInt(o,10);!isNaN(a)&&r!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(i=[],i[a]=s(e,t,n)):i[o]=s(e,t,n)}return i},l=function(e,t,n){if(e){var i=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(i),c=l?i.slice(0,l.index):i,u=[];if(c){if(!n.plainObjects&&r.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var d=0;null!==(l=a.exec(i))&&d<n.depth;){if(d+=1,!n.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||i.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var r="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(r),u=0;u<c.length;++u){var d=c[u],p=l(d,r[d],n);s=i.merge(s,p,n)}return i.compact(s)}},12:function(e,t,n){"use strict";var i=n(7),r=n(6),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,r,o,a,s,l,c,u,d,p,f){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=d(h);else if(null===h){if(o)return s&&!f?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||i.isBuffer(h)){if(s){return[p(f?n:s(n))+"="+p(s(h))]}return[p(n)+"="+p(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(l))v=l;else{var b=Object.keys(h);v=c?b.sort(c):b}for(var g=0;g<v.length;++g){var y=v[g];a&&null===h[y]||(m=Array.isArray(h)?m.concat(e(h[y],r(n,y),r,o,a,s,l,c,u,d,p,f)):m.concat(e(h[y],n+(u?"."+y:"["+y+"]"),r,o,a,s,l,c,u,d,p,f)))}return m};e.exports=function(e,t){var n=e,i=t||{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===i.delimiter?s.delimiter:i.delimiter,c="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,u="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,d="boolean"==typeof i.encode?i.encode:s.encode,p="function"==typeof i.encoder?i.encoder:s.encoder,f="function"==typeof i.sort?i.sort:null,h=void 0!==i.allowDots&&i.allowDots,m="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,v="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=r.default;else if(!Object.prototype.hasOwnProperty.call(r.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,g,y=r.formatters[i.format];"function"==typeof i.filter?(g=i.filter,n=g("",n)):Array.isArray(i.filter)&&(g=i.filter,b=g);var x=[];if("object"!=typeof n||null===n)return"";var w;w=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=o[w];b||(b=Object.keys(n)),f&&b.sort(f);for(var C=0;C<b.length;++C){var O=b[C];u&&null===n[O]||(x=x.concat(l(n[O],O,j,c,u,d?p:null,g,f,h,m,y,v)))}return x.join(a)}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"},177:function(e,t,n){n(201);var i=n(0)(n(186),n(195),"data-v-324912da",null);i.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabitem.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] tabitem.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},186:function(e,t,n){"use strict";e.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(e){var t={index:this.index};this.$emit("tabItemOnClick",t)}}}},189:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.container[data-v-324912da] {\n  flex: 1; \n  flex-direction: column; \n  align-items:center; \n  justify-content:center;\n  height: 100;\n}\n.top-line[data-v-324912da] {\n  position: absolute; \n  top: 0; \n  left: 0; \n  right: 0; \n  height: 2;\n}\n.tab-icon[data-v-324912da] {\n  margin-top: 5; \n  width: 40; \n  height: 40\n}\n.tab-text[data-v-324912da] {\n  margin-top: 5; \n  text-align: center;  \n  font-size: 20;\n}\n",""])},195:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{backgroundColor:e.backgroundColor},on:{click:e.onclickitem}},[n("image",{staticClass:"tab-icon",attrs:{src:e.icon}}),e._v(" "),n("text",{staticClass:"tab-text",style:{color:e.titleColor}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(h)return m;i.parentNode.removeChild(i)}if(v){var o=f++;i=p||(p=r()),t=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function a(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return i(r),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=u[a.id];s.refs--,n.push(s)}t?(r=c(e,t),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},201:function(e,t,n){var i=n(189);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("da8ca628",i,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+r,css:s,media:l,sourceMap:c};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},301:function(e,t,n){n(389);var i=n(0)(n(323),n(367),"data-v-43c9f5c3",null);i.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/tabbar.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},323:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(9),o=i(r),a=n(4),s=i(a),l=n(8),c=i(l);e.exports={props:{tabItems:{default:[]},selectedColor:{default:"#fc6d3f"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0,articleFlag:!1}},components:{tabitem:n(177)},created:function(){this.select(this.selectedIndex)},methods:{createNews:function(){c.default.push(s.default.createNews)},createArticles:function(){c.default.push(s.default.createArticles)},tabItemOnClick:function(e){this.selectedIndex=e.index,this.select(e.index),this.$emit("tabBarOnClick",e)},select:function(e){for(var t=0;t<this.tabItems.length;t++){var n=this.tabItems[t];t==e?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}},toPushArticle:function(){this.articleFlag=!0,console.log(this.articleFlag)},closePushArticleModal:function(){this.articleFlag=!1,console.log(this.articleFlag)},articleModal:function(e){e.stopPropagation()}},computed:{computeHeight:function(){if(o.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=15e3/n}return this.height}}}},345:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.header-bg[data-v-43c9f5c3] {\n    width: 750px;\n    background-color: #fc6d3f;\n}\n.wrapper[data-v-43c9f5c3] {\n    width: 750px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n}\n.content[data-v-43c9f5c3] {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin-top: 0;\n    margin-bottom: 100px;\n}\n.tabbar[data-v-43c9f5c3] {\n    flex-direction: row;\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 100px;\n}\n.tabbar-group[data-v-43c9f5c3] {\n    width: 325px;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    border-top-width: 1px;\n    border-color: #eeeeee;\n}\n.createArticle-wrap[data-v-43c9f5c3] {\n    width: 100px;\n    background-color: #fff;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.createArticle-style[data-v-43c9f5c3] {\n    width: 10px;\n    border-top-width: 1px;\n    border-color: #eeeeee;\n}\n.createArticle-btn-wrap[data-v-43c9f5c3] {\n    position: fixed;\n    bottom: 20px;\n    left: 325px;\n    width: 100px;\n    height: 100px;\n    border-width: 1px;\n    border-color: #eeeeee;\n    border-radius: 100px;\n    background-color: #fff;\n}\n.createArticle-btn[data-v-43c9f5c3] {\n    margin-top: 10px;\n    margin-left: 10px;\n    width: 80px;\n    height: 80px;\n}\n.article-modal-wrap[data-v-43c9f5c3] {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background-color: #fff;\n}\n.article-modal-btn-box[data-v-43c9f5c3] {\n    position: absolute;\n    left: 190px;\n    bottom: 550px;\n    width: 370px;\n    height: 170px;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.article-modal-btn-group[data-v-43c9f5c3] {\n    width: 120px;\n}\n.articl-modal-btn-icon[data-v-43c9f5c3] {\n    width: 120px;\n    height: 120px;\n    margin-bottom: 20px;\n}\n.articl-modal-btn-tit[data-v-43c9f5c3] {\n    width: 120px;\n    text-align: center;\n    font-size: 28px;\n    color: #434343;\n}\n.close-article-modal-btn-wrap[data-v-43c9f5c3] {\n    position: absolute;\n    left: 360px;\n    bottom: 50px;\n    width: 50px;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n}\n.close-article-modal-btn[data-v-43c9f5c3] {\n    width: 30px;\n    height: 30px;\n}\n",""])},367:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header-bg",style:{height:e.computeHeight}}),e._v(" "),e._l(e.tabItems,function(t,i){return n("embed",{key:i,staticClass:"content",style:{visibility:t.visibility,marginTop:e.computeHeight},attrs:{src:t.src,type:"weex"}})}),e._v(" "),e.articleFlag?e._e():n("div",{staticClass:"createArticle-btn-wrap"},[n("image",{staticClass:"createArticle-btn",attrs:{src:"/resources/nav-footer/open.png"},on:{click:e.toPushArticle}})]),e._v(" "),e.articleFlag?e._e():n("div",{staticClass:"tabbar",attrs:{append:"tree"}},[n("div",{staticClass:"tabbar-group"},[n("tabitem",{attrs:{index:e.tabItems[0].index,icon:e.tabItems[0].icon,title:e.tabItems[0].title,titleColor:e.tabItems[0].titleColor},on:{tabItemOnClick:e.tabItemOnClick}}),e._v(" "),n("tabitem",{attrs:{index:e.tabItems[1].index,icon:e.tabItems[1].icon,title:e.tabItems[1].title,titleColor:e.tabItems[1].titleColor},on:{tabItemOnClick:e.tabItemOnClick}})],1),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"tabbar-group"},[n("tabitem",{attrs:{index:e.tabItems[2].index,icon:e.tabItems[2].icon,title:e.tabItems[2].title,titleColor:e.tabItems[2].titleColor},on:{tabItemOnClick:e.tabItemOnClick}}),e._v(" "),n("tabitem",{attrs:{index:e.tabItems[3].index,icon:e.tabItems[3].icon,title:e.tabItems[3].title,titleColor:e.tabItems[3].titleColor},on:{tabItemOnClick:e.tabItemOnClick}})],1)]),e._v(" "),e.articleFlag?n("div",{staticClass:"article-modal-wrap",on:{click:e.articleModal}},[n("div",{staticClass:"article-modal-btn-box"},[n("div",{staticClass:"article-modal-btn-group",on:{click:e.createNews}},[n("image",{staticClass:"articl-modal-btn-icon",attrs:{src:"/resources/nav-footer/dongtai.png"}}),e._v(" "),n("text",{staticClass:"articl-modal-btn-tit"},[e._v("动态")])]),e._v(" "),n("div",{staticClass:"article-modal-btn-group",on:{click:e.createArticles}},[n("image",{staticClass:"articl-modal-btn-icon",attrs:{src:"/resources/nav-footer/article.png"}}),e._v(" "),n("text",{staticClass:"articl-modal-btn-tit"},[e._v("文章")])])]),e._v(" "),n("div",{staticClass:"close-article-modal-btn-wrap",on:{click:e.closePushArticleModal}},[n("image",{staticClass:"close-article-modal-btn",attrs:{src:"/resources/nav-footer/close.png"}})])]):e._e()],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"createArticle-wrap"},[n("div",{staticClass:"createArticle-style"}),e._v(" "),n("div",{staticClass:"createArticle-style"})])}]},e.exports.render._withStripped=!0},389:function(e,t,n){var i=n(345);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("0f0e1f14",i,!1)},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},5:function(e,t,n){"use strict";function i(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function r(e,t){p||i("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var i="",r=0;r<n;r++)i+="    ";var a=i+"    ",s="{\n",l=!0;for(var c in e)if(0===r&&r++,e.hasOwnProperty(c)){l=!1;var d=o(e[c],t,n+1);d.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var p=u(e[c]);s+=c,s+="["+p,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=i+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?i("WARN-"+e+"  "+t):(t=e,i("WARN  "+t))}function s(e,t,n,i){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:i})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function c(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),i(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},p=!1;t.default={log:i,dump:r,testBegin:l,testEnd:c}},6:function(e,t,n){"use strict";var i=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},606:function(e,t,n){"use strict";var i=n(301);i.el="#root",new Vue(i)},7:function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)void 0!==e[i]&&(n[i]=e[i]);return n},t.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(r.plainObjects||r.allowPrototypes||!i.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,r)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){i.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,r):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,i){var o=n[i];return Object.prototype.hasOwnProperty.call(e,i)?e[i]=t.merge(e[i],o,r):e[i]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",i=0;i<t.length;++i){var o=t.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(i):o<128?n+=r[o]:o<2048?n+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?n+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),n+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var i=n||[],r=i.indexOf(e);if(-1!==r)return i[r];if(i.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],i)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],i)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},8:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,i="";if(t)i="file://assets/dist/native/";else if(n)i=e.substring(0,e.lastIndexOf("native/")+5);else{var r=f.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(r=o[1]),i="http://"+r+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":i}function o(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(b.default.web,t)}function a(e,t){x.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){y.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,y.default.log("getBaseUrl",r());var n=t?""+r()+e.jsPath+".js?"+d.default.stringify(t):""+r()+e+".js";y.default.log("push "+n),x.push({url:n,animated:"true"},function(e){y.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){y.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(10),d=i(u),p=n(13),f=i(p),h=n(9),m=i(h),v=n(4),b=i(v),g=n(5),y=i(g),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:r,pushWeb:o,pop:l}},9:function(e,t,n){"use strict";function i(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function r(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:i,isWeb:r,getDeviceInfo:o}}});