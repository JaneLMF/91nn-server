// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=452)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"},11:function(e,t,n){"use strict";var r=n(13),o=n(12),i=n(5);e.exports={formats:i,parse:o,stringify:r}},12:function(e,t,n){"use strict";var r=n(6),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var a,s,l=r[i],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[i]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var f=0;null!==(l=a.exec(r))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(o),u=0;u<c.length;++u){var f=c[u],p=l(f,o[f],n);s=r.merge(s,p,n)}return r.compact(s)}},126:function(e,t,n){n(159);var r=n(0)(n(133),n(151),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/cellLink.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] cellLink.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},13:function(e,t,n){"use strict";var r=n(6),o=n(5),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,o,i,a,s,l,c,u,f,p,d){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(i)return s&&!d?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[p(d?n:s(n))+"="+p(s(h))]}return[p(n)+"="+p(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(l))v=l;else{var g=Object.keys(h);v=c?g.sort(c):g}for(var y=0;y<v.length;++y){var w=v[y];a&&null===h[w]||(m=Array.isArray(h)?m.concat(e(h[w],o(n,w),o,i,a,s,l,c,u,f,p,d)):m.concat(e(h[w],n+(u?"."+w:"["+w+"]"),o,i,a,s,l,c,u,f,p,d)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,f="boolean"==typeof r.encode?r.encode:s.encode,p="function"==typeof r.encoder?r.encoder:s.encoder,d="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,y,w=o.formatters[r.format];"function"==typeof r.filter?(y=r.filter,n=y("",n)):Array.isArray(r.filter)&&(y=r.filter,g=y);var x=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var j=i[b];g||(g=Object.keys(n)),d&&g.sort(d);for(var _=0;_<g.length;++_){var O=g[_];u&&null===n[O]||(x=x.concat(l(n[O],O,j,c,u,f?p:null,y,d,h,m,w,v)))}return x.join(a)}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{newsDetails:{default:function(){return{article:{headerUrl:"",userName:"",userIssue:"",articleTime:"",comment:"",forward:"",agree:""},followType:"",followClass:"",followTarget:"",coinPriceCNY:"",coinPriceUS:"",rise:"",riseStatus:""}}}},data:function(){return{footerType:0}},components:{cellContainer:n(30),followTarget:n(40)}}},143:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.follow-text-wrap {\n    flex-direction: row;\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 690px;\n    height: 60px;\n    justify-content: flex-start;\n}\n.follow-text {\n    font-size: 26px;\n    color: #434343;\n}\n",""])},151:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cell-container",{attrs:{article:e.newsDetails.article,footerType:e.footerType},on:{agree:function(t){return e.newsDetails.article.agree=t}}},[n("div",{staticClass:"follow-text-wrap"},[n("text",{staticClass:"follow-text"},[e._v("我刚刚关注了")]),e._v(" "),n("follow-target",{attrs:{followType:e.newsDetails.followType,followClass:e.newsDetails.followClass,followTarget:e.newsDetails.followTarget}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},159:function(e,t,n){var r=n(143);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("df38a6c0",r,!1)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var i=d++;r=p||(p=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},29:function(e,t,n){n(34);var r=n(0)(n(31),n(33),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],c=i[3],u={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},30:function(e,t,n){n(44);var r=n(0)(n(41),n(43),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/cellContainer.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] cellContainer.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""}},methods:{clickIt:function(){this.$emit("callBack")}}}},32:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-content-wrap {\n    background-color: #fff;\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-bottom: 25px;\n}\n.user-wrap {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 30px;\n}\n.user-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n}\n.article-time-wrap {\n    justify-content: flex-end;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n}\n.article-time {\n    font-size: 24px;\n    color: #959595;\n}\n.user-name {\n    margin-right: 20px;\n    font-size: 26px;\n    color: #333333;\n}\n.user-issue {\n    font-size: 24px;\n    color: #959595;\n}\n.user-header {\n    margin-right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n}\n",""])},33:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-content-wrap"},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-header-wrap",on:{click:e.clickIt}},[n("image",{staticClass:"user-header",attrs:{src:e.headerUrl}}),e._v(" "),n("text",{staticClass:"user-name"},[e._v(e._s(e.userName))]),e._v(" "),n("text",{staticClass:"user-issue"},[e._v("来自: "+e._s(e.userIssue))])]),e._v(" "),n("div",{staticClass:"article-time-wrap"},[n("text",{staticClass:"article-time"},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},34:function(e,t,n){var r=n(32);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("294b68ef",r,!1)},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},40:function(e,t,n){n(48);var r=n(0)(n(45),n(47),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/followTarget/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(8),s=r(a),l=weex.requireModule("modal");t.default={props:{footerType:{default:0},article:{default:function(){return{headerUrl:"",userName:"",userIssue:"",articleTime:"",comment:0,forward:0,agree:0}}}},data:function(){return{hasAgree:!1,agreeIcon:"/src/components/cells/images/zan.png"}},methods:{agreeIt:function(){this.hasAgree?(l.toast({message:"取消赞",duration:.3}),this.agreeIcon="/src/components/cells/images/zan.png",this.$emit("agree",parseInt(this.article.agree)-1)):(l.toast({message:"已赞",duration:.3}),this.agreeIcon="/src/components/cells/images/agree-active.png",this.$emit("agree",parseInt(this.article.agree)+1)),this.hasAgree=!this.hasAgree},repostIt:function(){s.default.push(i.default.repostInput)},toUserHome:function(){s.default.push(i.default.userHome)}},components:{cellUserInfo:n(29)}}},42:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-box {\n    background-color: #fff;\n    margin-bottom: 10px;\n}\n.button-fresh-group {\n    margin-left: 30px;\n    margin-right: 30px;\n    flex-direction: row;\n    border-top-width: 2px;\n    border-color: #e5e5e5;\n    width: 690px;\n}\n.button-repost-group {\n    flex-direction: row;\n    width: 750px;\n}\n.button-item {\n    flex-direction: row;\n    flex:1;\n    height: 73px;\n    justify-content: center;\n    align-items: center;\n}\n.button-icon {\n    width: 32px;\n    height: 32px;\n    margin-right: 14px;\n}\n.button-content {\n    font-size: 24px;\n    color: #bbbbbb;\n}\n.agree-active {\n    color: #fc6d3f;\n}\n",""])},43:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-box"},[n("cell-user-info",{attrs:{headerUrl:e.article.headerUrl,userName:e.article.userName,userIssue:e.article.userIssue,articleTime:e.article.articleTime},on:{callBack:e.toUserHome}}),e._v(" "),e._t("default"),e._v(" "),n("div",{class:[0==e.footerType?"button-fresh-group":"button-repost-group"]},[n("div",{staticClass:"button-item",on:{click:e.repostIt}},[n("image",{staticClass:"button-icon",attrs:{src:"/src/components/cells/images/zhuanfa.png"}}),e._v(" "),n("text",{staticClass:"button-content"},[e._v(e._s(0==e.article.forward?"转发":e.article.forward))])]),e._v(" "),n("div",{staticClass:"button-item"},[n("image",{staticClass:"button-icon",attrs:{src:"/src/components/cells/images/pinglun.png"}}),e._v(" "),n("text",{staticClass:"button-content"},[e._v(e._s(0==e.article.comment?"评论":e.article.comment))])]),e._v(" "),n("div",{staticClass:"button-item",on:{click:e.agreeIt}},[n("image",{staticClass:"button-icon",attrs:{src:e.agreeIcon}}),e._v(" "),n("text",{staticClass:"button-content",class:[e.hasAgree?"agree-active":""]},[e._v(e._s(0==e.article.agree?"赞":e.article.agree))])])])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},44:function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("2cf621f2",r,!1)},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(8),s=r(a);t.default={props:{followType:{default:""},followClass:{default:""},followTarget:{default:""},followID:{default:""}},computed:{followText:function(){var e="",t=this.followType,n=this.followClass,r=this.followTarget;return"coin"==t?e="$"+n+"/"+r+"$":"link"==t?e="$"+n+"·"+r+"$":"user"==t&&(e="@"+r),e}},methods:{clickIt:function(){"coin"==this.followType?s.default.push(i.default.appDetails):"link"==this.followType?s.default.push(i.default.userHome):"user"==this.followType&&s.default.push(i.default.userHome)}}}},452:function(e,t,n){"use strict";var r=n(126);r.el="#root",new Vue(r)},46:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.followTarget {\n    font-size: 28px;\n    color: #5583ff;\n}\n",""])},47:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:"followTarget",on:{click:e.clickIt}},[e._v(e._s(e.followText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},48:function(e,t,n){var r=n(46);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f8b81de6",r,!1)},5:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],r)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=d.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function i(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(g.default.web,t)}function a(e,t){x.push({url:t?e+"?"+f.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,w.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+f.default.stringify(t):""+o()+e+".js";w.default.log("push "+n),x.push({url:n,animated:"true"},function(e){w.default.log("callback: ",e)})}function l(){x.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),f=r(u),p=n(10),d=r(p),h=n(7),m=r(h),v=n(4),g=r(v),y=n(9),w=r(y),x=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:l}},9:function(e,t,n){"use strict";function r(e){p||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){p||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===o&&o++,e.hasOwnProperty(c)){l=!1;var f=i(e[c],t,n+1);f.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var p=u(e[c]);s+=c,s+="["+p,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function c(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},p=!1;t.default={log:r,dump:o,testBegin:l,testEnd:c}}});