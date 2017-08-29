// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=565)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";var r=n(12),o=n(11),i=n(6);e.exports={formats:i,parse:o,stringify:r}},11:function(e,t,n){"use strict";var r=n(7),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var a,s,l=r[i],u=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===u?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,u)),s=t.decoder(l.slice(u+1))),o.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[i]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=i.exec(r),u=l?r.slice(0,l.index):r,c=[];if(u){if(!n.plainObjects&&o.call(Object.prototype,u)&&!n.allowPrototypes)return;c.push(u)}for(var d=0;null!==(l=a.exec(r))&&d<n.depth;){if(d+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+r.slice(l.index)+"]"),s(c,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},u=Object.keys(o),c=0;c<u.length;++c){var d=u[c],f=l(d,o[d],n);s=r.merge(s,f,n)}return r.compact(s)}},12:function(e,t,n){"use strict";var r=n(7),o=n(6),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,o,i,a,s,l,u,c,d,f,p){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=d(h);else if(null===h){if(i)return s&&!p?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[f(p?n:s(n))+"="+f(s(h))]}return[f(n)+"="+f(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(l))g=l;else{var x=Object.keys(h);g=u?x.sort(u):x}for(var v=0;v<g.length;++v){var y=g[v];a&&null===h[y]||(m=Array.isArray(h)?m.concat(e(h[y],o(n,y),o,i,a,s,l,u,c,d,f,p)):m.concat(e(h[y],n+(c?"."+y:"["+y+"]"),o,i,a,s,l,u,c,d,f,p)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,u="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,c="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,d="boolean"==typeof r.encode?r.encode:s.encode,f="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var x,v,y=o.formatters[r.format];"function"==typeof r.filter?(v=r.filter,n=v("",n)):Array.isArray(r.filter)&&(v=r.filter,x=v);var w=[];if("object"!=typeof n||null===n)return"";var b;b=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=i[b];x||(x=Object.keys(n)),p&&x.sort(p);for(var j=0;j<x.length;++j){var I=x[j];c&&null===n[I]||(w=w.concat(l(n[I],I,_,u,c,d?f:null,v,p,h,m,y,g)))}return w.join(a)}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.138"},14:function(e,t,n){n(36);var r=n(0)(n(33),n(35),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(g){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(3),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=c[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t,n){var r={code:e,phone:t,password:n};return o.default.post("api/sendIdentifyCode",r)},a=function(e,t){var n={phone:e,password:t};return o.default.post("api/login",n)},s=function(e){var t={phone:e};return o.default.post("api/requestIdentifyCode",t)},l=function(e,t,n){var r={id:e,sex:t,nick:n};return o.default.put("api/userProfile",r)},u=function(e,t){var n={userId:e,concernedId:t};return o.default.get("api/concernUser",n)},c=function(e,t,n){var r={userId:e,maxLength:t,isFirstTime:n};return o.default.get("api/homePage",r)},d=function(e,t,n){var r={targetType:"article",targetId:e,author:t,content:n};return o.default.post("api/comment",r)},f=function(e,t,n){var r={targetType:"article",targetId:e,author:t,comment:n};return o.default.post("api/transmit",r)},p=function(e,t){var n={author:e,title:"",content:t};return o.default.post("api/article",n)},h=function(e,t,n){var r={author:e,title:t,content:n};return o.default.post("api/article",r)},m=function(e,t,n){var r={targetType:e,targetId:t,userId:n};return o.default.post("api/upvote",r)},g=function(e,t,n){var r={targetType:e,targetId:t,userId:n};return o.default.del("api/upvote",r)},x=function(e){var t={id:"598953513dcfac3d6714d90b"};return o.default.get("api/article",t)};t.default={register:i,login:a,getMesgVerify:s,updateUserNickSex:l,concernUser:u,getArticleInHome:c,commentArticle:d,repostArticle:f,createNews:p,createArticles:h,upvote:m,delUpvote:g,getArticleByID:x}},210:function(e,t,n){n(287);var r=n(0)(n(227),n(270),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/concernUser.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] concernUser.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{newsDetails:{default:function(){return{}}}},data:function(){return{footerType:0}},components:{cellContainer:n(32),followTarget:n(37)}}},253:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.follow-text-wrap {\n    flex-direction: row;\n    margin-left: 30px;\n    margin-right: 30px;\n    width: 690px;\n    height: 60px;\n    justify-content: flex-start;\n}\n.follow-text {\n    font-size: 30px;\n    color: #434343;\n}\n",""])},270:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cell-container",{attrs:{footerType:e.footerType,author:e.newsDetails.author,articleTime:e.newsDetails.createAt,comment:e.newsDetails.concerned.commentCount,forward:e.newsDetails.concerned.transmitCount,agree:e.newsDetails.concerned.upvoteCount,articleId:e.newsDetails._id}},[n("div",{staticClass:"follow-text-wrap"},[n("text",{staticClass:"follow-text"},[e._v("我刚刚关注了")]),e._v(" "),n("follow-target",{attrs:{followType:e.newsDetails.concerned.topCategory,followText:e.newsDetails.concerned.name,followID:e.newsDetails.concerned._id}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},287:function(e,t,n){var r=n(253);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("0a56ddd9",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+o,css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},31:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return new Promise(function(n,r){console.log("request:",p+e+"?"+u.default.stringify(t)),f.fetch({method:"GET",url:p+e+"?"+u.default.stringify(t),type:"json"},function(e){e.ok&&e.data&&0===e.data.errCode?n(e.data):r(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function i(e,t){return new Promise(function(n,r){f.fetch({method:"POST",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?n(e.data):r(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function a(e,t){return new Promise(function(n,r){f.fetch({method:"DELETE",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?n(e.data):r(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}function s(e,t){return new Promise(function(n,r){f.fetch({method:"PUT",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?n(e.data):r(e.data)},function(e){d.default.log("get in progress:"+e.length)})})}Object.defineProperty(t,"__esModule",{value:!0});var l=n(10),u=r(l),c=n(5),d=r(c),f=weex.requireModule("stream"),p="http://115.159.67.22:60800/";t.default={get:o,post:i,del:a,put:s}},32:function(e,t,n){n(61);var r=n(0)(n(58),n(60),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cells/cellContainer.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] cellContainer.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"s"},iconDirection:{default:"row"},textDirection:{default:"right"},hasClick:{default:!1},iconUrl:{default:""},text:{default:""},textColor:{default:"#bbbbbb"}},methods:{clickIt:function(){this.$emit("callBack",!this.hasClick)}}}},34:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.icon-wrap-row {\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n}\n.icon-wrap-column {\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.icon-s {\n\twidth: 24px;\n\theight: 24px;\n}\n.icon-m {\n\twidth: 32px;\n\theight: 32px;\n}\n.icon-xm {\n\twidth: 40px;\n\theight: 40px;\n}\n.icon-l {\n\twidth: 48px;\n\theight: 48px;\n}\n.text-s {\n\tfont-size: 20px;\n}\n.text-m {\n\tfont-size: 24px;\n}\n.text-xm {\n\tfont-size: 26px;\n}\n.text-l {\n\tfont-size: 28px;\n}\n.text-top {\n\tmargin-bottom: 10px;\n}\n.text-right {\n\tmargin-left: 10px;\n}\n.text-bottom {\n\tmargin-top: 10px;\n}\n.text-left {\n\tmargin-right: 10px;\n}",""])},35:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["icon-wrap-"+e.iconDirection],on:{click:e.clickIt}},["bottom"==e.textDirection||"right"==e.textDirection?n("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e(),e._v(" "),e.text.length>0?n("text",{class:["text-"+e.size,"text-"+e.textDirection],style:{color:e.textColor}},[e._v(e._s(e.text))]):e._e(),e._v(" "),"top"==e.textDirection||"left"==e.textDirection?n("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},36:function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("b8fe7868",r,!1)},37:function(e,t,n){n(65);var r=n(0)(n(62),n(64),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/followTarget/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},38:function(e,t,n){n(42);var r=n(0)(n(39),n(41),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/cell-user-info/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{headerUrl:{default:""},userName:{default:""},userIssue:{default:""},articleTime:{default:""},useType:{default:"normal"}},methods:{clickIt:function(){this.$emit("callBack")}}}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{title:"主页",path:"/home",jsPath:"view/index"},getStarted:{title:"新手营",pageName:"school",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",pageName:"wiki",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",pageName:"wikiDetails",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",pageName:"app",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},login:{title:"登录",path:"/login",jsPath:"view/personal/login/index"},register:{title:"注册",path:"/register",jsPath:"view/personal/register/index"},registerNext:{title:"注册输入密码",path:"/registerNext",jsPath:"view/personal/register/register-next/index"},registerNick:{title:"注册输入昵称",path:"/registerNick",jsPath:"view/personal/register/register-nick/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"},userList:{title:"选择用户",path:"/userList",jsPath:"view/atUserList/index"},createNews:{title:"发动态",path:"/createNews",jsPath:"view/createNews/index"},createArticles:{title:"发文章",path:"/createArticles",jsPath:"view/createArticles/index"},createComment:{title:"评论",path:"/createComment",jsPath:"view/createComment/index"}}},40:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-content-wrap {\n    background-color: #fff;\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-bottom: 15px;\n}\n.user-wrap {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 30px;\n}\n.user-header-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n}\n.user-header-issue-wrap {\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n}\n.article-time-wrap {\n    justify-content: flex-end;\n    align-items: center;\n    justify-content: center;\n    height: 50px;\n}\n.article-time {\n    font-size: 24px;\n    color: #959595;\n}\n.user-name {\n    margin-right: 20px;\n    font-size: 26px;\n    color: #333333;\n}\n.user-issue {\n    font-size: 24px;\n    color: #959595;\n}\n.user-header {\n    margin-right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n}\n",""])},41:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-content-wrap"},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-header-wrap",on:{click:e.clickIt}},[n("image",{staticClass:"user-header",attrs:{src:e.headerUrl}}),e._v(" "),"agree"==e.useType?n("text",{staticClass:"user-name"},[e._v(e._s(e.userName)+"刚刚赞了你的评论：")]):"normal"==e.useType?n("div",{staticClass:"user-header-issue-wrap"},[n("text",{staticClass:"user-name"},[e._v(e._s(e.userName))]),e._v(" "),n("text",{staticClass:"user-issue"},[e._v("来自: "+e._s(e.userIssue))])]):e._e()]),e._v(" "),n("div",{staticClass:"article-time-wrap"},[n("text",{staticClass:"article-time"},[e._v(e._s(e.articleTime))])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},42:function(e,t,n){var r=n(40);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("294b68ef",r,!1)},43:function(e,t,n){n(57);var r=n(0)(n(46),n(54),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/agree/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},44:function(e,t,n){n(55);var r=n(0)(n(47),n(52),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/comment/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},45:function(e,t,n){n(56);var r=n(0)(n(48),n(53),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/repost/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=r(o),a=n(21),s=r(a),l=(weex.requireModule("storage"),weex.requireModule("modal"));t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/agree.png"},text:{default:"0"},textColor:{default:"#bbbbbb"},targetType:{default:""},articleId:{default:""},userId:{default:""}},data:function(){return{hasAgree:!1}},components:{textIcon:n(14)},methods:{agree:function(){var e=this;l.toast({message:this.articleId,duration:.3}),this.hasAgree?s.default.delUpvote(this.targetType,this.articleId,this.userId).then(function(t){i.default.dump("success",t),l.toast({message:"已取消点赞",duration:.3}),e.iconUrl="/resources/textIcon/agree.png",e.textColor="#bbbbbb","0"==t.result?e.text="赞":e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){i.default.dump("Failed",e),l.toast({message:"del"+e,duration:1})}):s.default.upvote(this.targetType,this.articleId,this.userId).then(function(t){i.default.dump("success",t),l.toast({message:"已赞",duration:.3}),e.iconUrl="/resources/textIcon/agree-active.png",e.textColor="#fc6d3f",e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){i.default.dump("Failed",e)}),this.hasAgree=!this.hasAgree}}}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/comment.png"},text:{default:"0"},textColor:{default:"#bbbbbb"}},data:function(){return{hasAgree:!1}},components:{textIcon:n(14)},methods:{commentIt:function(){}}}},48:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(8),s=r(a);t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/repost.png"},text:{default:"0"},textColor:{default:"#bbbbbb"}},data:function(){return{hasAgree:!1}},components:{textIcon:n(14)},methods:{repostIt:function(){s.default.push(i.default.repostInput)}}}},49:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"",""])},5:function(e,t,n){"use strict";function r(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){f||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":c(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var u in e)if(0===o&&o++,e.hasOwnProperty(u)){l=!1;var d=i(e[u],t,n+1);d.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var f=c(e[u]);s+=u,s+="["+f,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function u(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:r,dump:o,testBegin:l,testEnd:u}},50:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"",""])},51:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"",""])},52:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"评论":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.commentIt}})},staticRenderFns:[]},e.exports.render._withStripped=!0},53:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"转发":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.repostIt}})},staticRenderFns:[]},e.exports.render._withStripped=!0},54:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"赞":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.agree}})},staticRenderFns:[]},e.exports.render._withStripped=!0},55:function(e,t,n){var r=n(49);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("774074ea",r,!1)},56:function(e,t,n){var r=n(50);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("7b402827",r,!1)},565:function(e,t,n){"use strict";var r=n(210);r.el="#root",new Vue(r)},57:function(e,t,n){var r=n(51);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("355eda73",r,!1)},58:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=r(o),a=n(21),s=r(a),l=n(4),u=r(l),c=n(8),d=r(c),f=weex.requireModule("storage"),p=weex.requireModule("modal");t.default={props:{footerType:{default:0},articleId:{default:""},author:{default:function(){return{id:"",avatar:"",nick:"",from:""}}},articleTime:{default:""},comment:{default:"0"},forward:{default:"0"},agree:{default:"0"}},data:function(){return{hasAgree:!1,agreeIcon:"/src/components/cells/images/zan.png",headerUrl:"/resources/common/defaultHeader.png",targetType:"article",userId:""}},mounted:function(){var e=this;this.author.avatar.length>0&&(this.headerUrl=this.author.avatar),f.getItem("bossInfo",function(t){if(p.toast({message:t.data,duration:1}),t.data){var n=JSON.parse(t.data);e.userId=n._id}})},methods:{agreeIt:function(){var e=this;f.setItem("articleId",this.articleId,function(){}),this.hasAgree?s.default.upvote(this.articleId,this.userId).then(function(t){i.default.dump("success",t),p.toast({message:"已赞",duration:.3}),e.agreeIcon="/src/components/cells/images/zan.png",e.$emit("agree",t.result)}).catch(function(e){i.default.dump("Failed",e),p.toast({message:e,duration:1})}):s.default.upvote(this.articleId,this.userId).then(function(t){i.default.dump("success",t),p.toast({message:"已赞",duration:.3}),e.agreeIcon="/src/components/cells/images/agree-active.png",e.$emit("agree",t.result)}).catch(function(e){i.default.dump("Failed",e),p.toast({message:e,duration:1})}),this.hasAgree=!this.hasAgree},repostIt:function(){f.setItem("articleId",this.articleId,function(){}),d.default.push(u.default.repostInput)},commentIt:function(){f.setItem("articleId",this.articleId,function(){}),d.default.push(u.default.createComment)},toUserHome:function(){d.default.push(u.default.userHome)}},components:{cellUserInfo:n(38),nAgree:n(43),nComment:n(44),nRepost:n(45)}}},59:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.article-box {\n    background-color: #fff;\n    margin-bottom: 10px;\n}\n.button-fresh-group {\n    margin-left: 30px;\n    margin-right: 30px;\n    flex-direction: row;\n    border-top-width: 2px;\n    border-color: #f8f8f8;\n    width: 690px;\n}\n.button-repost-group {\n    flex-direction: row;\n    width: 750px;\n}\n.button-item {\n    flex-direction: row;\n    flex:1;\n    height: 73px;\n    justify-content: center;\n    align-items: center;\n}\n.button-icon {\n    width: 32px;\n    height: 32px;\n    margin-right: 14px;\n}\n.button-content {\n    font-size: 24px;\n    color: #bbbbbb;\n}\n.agree-active {\n    color: #fc6d3f;\n}\n",""])},6:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},60:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-box"},[n("cell-user-info",{attrs:{headerUrl:e.headerUrl,userName:e.author.nick,userIssue:e.author.from,articleTime:e.articleTime},on:{callBack:e.toUserHome}}),e._v(" "),e._t("default"),e._v(" "),n("div",{class:[0==e.footerType?"button-fresh-group":"button-repost-group"]},[n("div",{staticClass:"button-item",on:{click:e.repostIt}},[n("n-repost",{attrs:{text:e.forward}})],1),e._v(" "),n("div",{staticClass:"button-item",on:{click:e.commentIt}},[n("n-comment",{attrs:{text:e.comment}})],1),e._v(" "),n("div",{staticClass:"button-item"},[n("n-agree",{attrs:{text:e.agree,targetType:e.targetType,articleId:e.articleId,userId:e.userId}})],1)])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},61:function(e,t,n){var r=n(59);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("2cf621f2",r,!1)},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(8),s=r(a);t.default={props:{followType:{default:""},followText:{default:""},followID:{default:""}},computed:{},methods:{clickIt:function(){"coin"==this.followType?s.default.push(i.default.appDetails):"chain"==this.followType?s.default.push(i.default.wikiDetails):"user"==this.followType?s.default.push(i.default.userHome):"app"==this.followType?s.default.push(i.default.appDetails):"ico"==this.followType&&s.default.push(i.default.coinDetails)}}}},63:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.followTarget {\n    font-size: 32px;\n    color: #5583ff;\n}\n",""])},64:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:"followTarget",on:{click:e.clickIt}},[e._v(e._s(e.followText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},65:function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f8b81de6",r,!1)},7:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],r)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=p.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":u(window))?"?page=../dist/web/":r}function i(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(x.default.web,t)}function a(e,t){w.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){y.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,t.pageName=e.pageName,y.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+d.default.stringify(t):""+o()+e+".js";y.default.log("push "+n),w.push({url:n,animated:"true"},function(e){y.default.log("callback: ",e)})}function l(){w.pop({animated:"true"},function(e){y.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(10),d=r(c),f=n(13),p=r(f),h=n(9),m=r(h),g=n(4),x=r(g),v=n(5),y=r(v),w=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:o,pushWeb:i,pop:l}},9:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}}});