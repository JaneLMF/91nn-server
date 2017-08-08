// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=545)}({0:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.16.87"},11:function(e,t,n){"use strict";var r=n(13),o=n(12),i=n(5);e.exports={formats:i,parse:o,stringify:r}},12:function(e,t,n){"use strict";var r=n(6),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<r.length;++i){var s,a,c=r[i],l=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===l?(s=t.decoder(c),a=t.strictNullHandling?null:""):(s=t.decoder(c.slice(0,l)),a=t.decoder(c.slice(l+1))),o.call(n,s)?n[s]=[].concat(n[s]).concat(a):n[s]=a}return n},a=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(a(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,s=parseInt(i,10);!isNaN(s)&&o!==i&&String(s)===i&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(r=[],r[s]=a(e,t,n)):r[i]=a(e,t,n)}return r},c=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=i.exec(r),l=c?r.slice(0,c.index):r,u=[];if(l){if(!n.plainObjects&&o.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}for(var p=0;null!==(c=s.exec(r))&&p<n.depth;){if(p+=1,!n.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+r.slice(c.index)+"]"),a(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:i.delimiter,n.depth="number"==typeof n.depth?n.depth:i.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:i.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:i.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:i.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:i.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:i.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:i.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof e?s(e,n):e,a=n.plainObjects?Object.create(null):{},l=Object.keys(o),u=0;u<l.length;++u){var p=l[u],d=c(p,o[p],n);a=r.merge(a,d,n)}return r.compact(a)}},13:function(e,t,n){"use strict";var r=n(6),o=n(5),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,a={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,n,o,i,s,a,c,l,u,p,d,f){var h=t;if("function"==typeof c)h=c(n,h);else if(h instanceof Date)h=p(h);else if(null===h){if(i)return a&&!f?a(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(a){return[d(f?n:a(n))+"="+d(a(h))]}return[d(n)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(c))g=c;else{var x=Object.keys(h);g=l?x.sort(l):x}for(var v=0;v<g.length;++v){var w=g[v];s&&null===h[w]||(m=Array.isArray(h)?m.concat(e(h[w],o(n,w),o,i,s,a,c,l,u,p,d,f)):m.concat(e(h[w],n+(u?"."+w:"["+w+"]"),o,i,s,a,c,l,u,p,d,f)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===r.delimiter?a.delimiter:r.delimiter,l="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:a.skipNulls,p="boolean"==typeof r.encode?r.encode:a.encode,d="function"==typeof r.encoder?r.encoder:a.encoder,f="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:a.serializeDate,g="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:a.encodeValuesOnly;if(void 0===r.format)r.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,r.format))throw new TypeError("Unknown format option provided.");var x,v,w=o.formatters[r.format];"function"==typeof r.filter?(v=r.filter,n=v("",n)):Array.isArray(r.filter)&&(v=r.filter,x=v);var b=[];if("object"!=typeof n||null===n)return"";var y;y=r.arrayFormat in i?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=i[y];x||(x=Object.keys(n)),f&&x.sort(f);for(var j=0;j<x.length;++j){var I=x[j];u&&null===n[I]||(b=b.concat(c(n[I],I,_,l,u,p?d:null,v,f,h,m,w,g)))}return b.join(s)}},174:function(e,t,n){n(226);var r=n(0)(n(187),n(213),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/userInfo/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{userInfo:{default:function(){return{userHeader:"",isVIP:!1,userName:"",userSex:"",userIntro:""}}}},methods:{viewInfo:function(){this.$emit("viewInfo")}}}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(g){var i=f++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},p=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},200:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.userIcon-wrap {\n    justify-content: center;\n    align-items: center;\n}\n.userHeader-wrap {\n    position: relative;\n    width: 132px;\n    height: 132px;\n}\n.userHeader-bg {\n}\n.userHeader {\n    width: 130px;\n    height: 130px;\n    border-radius: 130px;\n    border-width: 2px;\n    border-color: #f8997a;\n}\n.userVIP {\n    position: absolute;\n    bottom: 0;\n    right: 20px;\n    width: 24px;\n    height: 24px;\n}\n.userInfo-wrap {\n    position: relative;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.userInfo-name {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 34px;\n    color: #fff;\n}\n.userInfo-sex {\n    /*margin-left: 10px;*/\n    position: absolute;\n    top: 28px;\n    right: 0px;\n    width: 24px;\n    height: 24px;\n}\n.user-intro {\n    font-size: 26px;\n    color: #fff;\n}\n",""])},213:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"userIcon-wrap"},[n("div",{staticClass:"userHeader-wrap"},[n("div",{staticClass:"userHeader-bg"},[n("image",{staticClass:"userHeader",attrs:{src:e.userInfo.userHeader},on:{click:e.viewInfo}})]),e._v(" "),e.userInfo.isVIP?n("image",{staticClass:"userVIP",attrs:{src:"/src/components/userInfo/images/vip.png"}}):e._e()]),e._v(" "),n("div",{staticClass:"userInfo-wrap"},[n("text",{staticClass:"userInfo-name"},[e._v(e._s(e.userInfo.userName))]),e._v(" "),n("image",{staticClass:"userInfo-sex",attrs:{src:"/src/components/userInfo/images/sex-m.png"}})]),e._v(" "),n("text",{staticClass:"user-intro"},[e._v(e._s(e.userInfo.userIntro))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},226:function(e,t,n){var r=n(200);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("0b8a962a",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],c=i[2],l=i[3],u={id:e+":"+o,css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},359:function(e,t,n){n(697);var r=n(0)(n(421),n(635),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/personal/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"},userInfo:{title:"我的资料",path:"/userInfo",jsPath:"view/userHome/infoPage/index"},mesgBox:{title:"消息",path:"/mesgBox",jsPath:"view/mesgBox/index"},commentMe:{title:"添加币",path:"/commentMe",jsPath:"view/mesgBox/commentme/index"},atMe:{title:"我的资料",path:"/atMe",jsPath:"view/mesgBox/atme/index"},agreeMe:{title:"消息",path:"/agreeMe",jsPath:"view/mesgBox/agreeme/index"},repostInput:{title:"转发",path:"/repostInput",jsPath:"view/repostInput/index"}}},421:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),s=n(8),a=r(s);t.default={data:function(){return{userInfo:{userHeader:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394",isVIP:!0,userName:"鹿晗",userSex:"man",userIntro:"机械神教和比特神教信徒..."},badgeData:{action:function(){console.log("click badge1")},iconStyle:{url:"/src/view/personal/images/nav-mesg.png",size:"s"},superScriptState:{hasSuperScript:!0,state:"2",content:"99"},iconName:{hasName:!1,name:""}},hasIcon:!0,settingAction:function(){a.default.push(i.default.settings)},jumpMyNews:function(){a.default.push(i.default.myNews)},jumpMyFavorites:function(){a.default.push(i.default.myFavorites)}}},components:{userInfo:n(174),badge:n(49),actionRow:n(77)},methods:{jumpToFollows:function(){a.default.push(i.default.myFollows)},jumpToFans:function(){a.default.push(i.default.myFans)},jumpMyComments:function(){a.default.push(i.default.myComments)}}}},49:function(e,t,n){n(58);var r=n(0)(n(51),n(56),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/badge/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},5:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},50:function(e,t,n){n(57);var r=n(0)(n(52),n(55),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/switchBtn/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},51:function(e,t,n){"use strict";e.exports={name:"badge",props:{bid:{default:""},action:{default:function(){}},iconStyle:{default:function(){return{url:"",size:"m"}}},superScriptState:{default:function(){return{hasSuperScript:!1,state:"",content:""}}},iconName:{default:function(){return{hasName:!1,name:""}}}},computed:{superScriptClass:function(){return"1"==this.superScriptState.state?"superScript-hot":"2"==this.superScriptState.state?"superScript-mesg":void 0},badgeIconClass:function(){return"badgeIcon-wrap-"+this.iconStyle.size},badgeTit:function(){return"badgeTit-wrap-"+this.iconStyle.size},badgeImgClass:function(){return"badgeImg-wrap-"+this.iconStyle.size}},methods:{clickIcon:function(){this.$emit("badge",this.bid)}}}},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("animation");t.default={name:"u-switch",props:{value:[String,Number,Boolean,Object,Array],trueValue:{type:[String,Number,Boolean,Object,Array],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array],default:!1},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value==this.trueValue}},methods:{change:function(){if(!this.disabled){var e=this.checked?this.falseValue:this.trueValue;r.transition(this.$refs.icon,{styles:{transform:"translateX("+(this.checked?"0":"100%")+")"},duration:300,timingFunction:"ease",delay:0}),this.$emit("input",e),this.$emit("change",e)}}},mounted:function(){var e=this;this.$nextTick(function(){e.checked&&r.transition(e.$refs.icon,{styles:{transform:"translateX(100%)"},duration:0,delay:0})})}}},53:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.switch {\n    width: 80px;\n    flex-direction: row;\n    align-items: center;\n    background-color: #c9c9c9;\n}\n.sz-small {\n    min-width: 80px;\n    height: 40px;\n    border-radius: 20px;\n}\n.sz-normal {\n    min-width: 120px;\n    height: 60px;\n    border-radius: 30px;\n}\n.sz-large{\n    min-width: 160px;\n    height: 80px;\n    border-radius: 40px;\n}\n.checked {\n    background-color: #fc6d3f;\n}\n.disabled {\n    background-color: #c9c9c9;\n}\n.icon {\n    background-color: #fff;\n    border-style: solid;\n    border-color: #c9c9c9;\n    transform: translateX(0);\n}\n.icon-checked {\n    border-color: #fc6d3f;\n}\n.icon-disabled {\n    border-color: #c9c9c9;\n}\n.isz-small {\n    width: 40px;\n    height: 40px;\n    border-width: 2px;\n    border-radius: 20px;\n}\n.isz-normal {\n    width: 60px;\n    height: 60px;\n    border-width: 4px;\n    border-radius: 30px;\n}\n.isz-large {\n    width: 80px;\n    height: 80px;\n    border-width: 6px;\n    border-radius: 3px;\n}\n.text {\n    color: #c9c9c9;\n    margin-left: 40px;\n}\n.text-disabled {\n    color: #e6ecf2;\n}\n",""])},54:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.badge-wrap {\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 0;\n}\n.badgeIcon-wrap-m {\n    position: relative;\n    width: 90px;\n    height: 90px;\n}\n.badgeImg-wrap-m {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-m {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}\n.superScript-hot {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: inline-block;\n    width: 40px;\n    height: 20px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #ff6a3c;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 20px;\n    border-width: 1px;\n    border-color: #fff;\n}\n.badgeTit-wrap-m {\n    font-size: 24px;\n    color: #333;\n    font-weight: 200;\n    margin-top: 18px;\n}\n\n/*---------------------------------------------*/\n.badgeIcon-wrap-s {\n    position: relative;\n    width: 60px;\n    height: 60px;\n}\n.badgeImg-wrap-s {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n}\n.icon-wrap-s {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.superScript-mesg {\n    position: absolute;\n    top: 0;\n    right: 2px;\n    display: block;\n    width: 26px;\n    height: 22px;\n    line-height: 20px;\n    text-align: center;\n    background-color: #fff;\n    color: #ff6a3c;\n    font-size: 12px;\n    border-radius: 16px;\n    border-width: 2px;\n    border-color: #ff6a3c;\n}\n\n/*-------------------------------------*/\n.badgeIcon-wrap-xm {\n    width: 100px;\n    height: 100px;\n}\n.badgeImg-wrap-xm {\n    width: 100px;\n    height: 100px;\n}\n.icon-wrap-xm {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n    background-color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n.badgeTit-wrap-xm {\n    font-size: 24px;\n    color: #434343;\n    font-weight: 200;\n    margin-top: 20px;\n}\n\n/*-------------------------------------*/\n.badgeIcon-wrap-l {\n    width: 120px;\n    height: 120px;\n}\n.badgeImg-wrap-l {\n    width: 90px;\n    height: 90px;\n}\n.icon-wrap-l {\n    width: 120px;\n    height: 120px;\n    border-radius: 100%;\n    background-color: #fff;\n    justify-content: center;\n    align-items: center;\n}\n.badgeTit-wrap-l {\n    font-size: 36px;\n    color: #434343;\n    font-weight: 200;\n    margin-top: 20px;\n}\n",""])},545:function(e,t,n){"use strict";var r=n(359);r.el="#root",new Vue(r)},55:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch",class:[e.checked?"checked":"",e.disabled?"disabled":"","sz-"+e.size],on:{click:e.change}},[n("div",{ref:"icon",staticClass:"icon",class:[e.checked?"icon-checked":"",e.disabled?"icon-disabled":"","isz-"+e.size]}),e._v(" "),e.$slots.default?n("text",{staticClass:"text",class:[e.disabled?"text-disabled":""]},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},56:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badge-wrap",on:{click:e.clickIcon}},[n("div",{class:["badgeIcon-wrap-"+e.iconStyle.size]},[n("div",{class:["icon-wrap-"+e.iconStyle.size]},[n("image",{class:["badgeImg-wrap-"+e.iconStyle.size],attrs:{src:e.iconStyle.url}})]),e._v(" "),e.superScriptState.hasSuperScript?n("text",{class:["1"==e.superScriptState.state?"superScript-hot":"superScript-mesg"]},[e._v(e._s(e.superScriptState.content))]):e._e()]),e._v(" "),e.iconName.hasName?n("text",{class:["badgeTit-wrap-"+e.iconStyle.size]},[e._v(e._s(e.iconName.name))]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},57:function(e,t,n){var r=n(53);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("de67c46e",r,!1)},577:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.personal-bg {\n    width: 750px;\n    background-color: #f8f8f8;\n}\n.personal-header {\n    position: relative;\n    width: 750px;\n    height: 394px;\n}\n.personal-header-bg {\n    width: 750px;\n    height: 394px;\n}\n.personal-header-mesg {\n    position: absolute;\n    top: 25px;\n    right: 30px;\n    width: 60px;\n    height: 60px;\n}\n.user-info-wrap {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n}\n.user-atten-bg {\n    width: 750px;\n    height: 100px;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n}\n.user-atten-wrap {\n    height: 100px;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.user-atten-group {\n    flex-direction: row;\n}\n.user-atten-tit {\n    font-size: 26px;\n    color: #959595;\n}\n.user-atten-content {\n    margin-left: 20px;\n    font-size: 28px;\n    color: #434343;\n}\n.fenge {\n    margin-right: 60px;\n    margin-left: 60px;\n    font-size: 26px;\n    color: #d2d2d2;\n}\n.row-icon-wrap {\n    width: 70px;\n    height: 110px;\n    justify-content: center;\n    align-items: flex-start;\n}\n.row-icon {\n    width: 48px;\n    height: 48px;\n}\n.row-mesg {\n    margin-right: 25px;\n    font-size: 28px;\n    color: #c9c9c9;\n}\n",""])},58:function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("ab7d544e",r,!1)},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var i=e;return Array.isArray(e)&&!Array.isArray(n)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,i){r.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],n,o):e.push(n):e[i]=n}),e):Object.keys(n).reduce(function(e,r){var i=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],i,o):e[r]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var i=t.charCodeAt(r);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?n+=t.charAt(r):i<128?n+=o[i]:i<2048?n+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?n+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(r+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(r)),n+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],o=r.indexOf(e);if(-1!==o)return r[o];if(r.push(e),Array.isArray(e)){for(var i=[],s=0;s<e.length;++s)e[s]&&"object"==typeof e[s]?i.push(t.compact(e[s],r)):void 0!==e[s]&&i.push(e[s]);return i}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},635:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("list",{staticClass:"personal-bg"},[n("cell",{staticClass:"personal-header"},[n("image",{staticClass:"personal-header-bg",attrs:{src:"/src/view/personal/images/index-bg.png"}}),e._v(" "),n("badge",{staticClass:"personal-header-mesg",attrs:{action:e.badgeData.action,iconStyle:e.badgeData.iconStyle,superScriptState:e.badgeData.superScriptState,iconName:e.badgeData.iconName}}),e._v(" "),n("user-info",{staticClass:"user-info-wrap",attrs:{userInfo:e.userInfo}})],1),e._v(" "),n("cell",{staticClass:"user-atten-bg"},[n("div",{staticClass:"user-atten-wrap"},[n("div",{staticClass:"user-atten-group",on:{click:e.jumpToFollows}},[n("text",{staticClass:"user-atten-tit"},[e._v("我的关注")]),e._v(" "),n("text",{staticClass:"user-atten-content"},[e._v("88")])]),e._v(" "),n("text",{staticClass:"fenge"},[e._v("|")]),e._v(" "),n("div",{staticClass:"user-atten-group",on:{click:e.jumpToFans}},[n("text",{staticClass:"user-atten-tit"},[e._v("我的粉丝")]),e._v(" "),n("text",{staticClass:"user-atten-content"},[e._v("288")])])])]),e._v(" "),n("cell",{staticClass:"myInfo-wrap"},[n("action-row",{staticClass:"updateInfo-content",staticStyle:{"margin-top":"10px"},attrs:{rowTit:"我的动态",btnClass:"details",hasIcon:e.hasIcon,callBack:e.jumpMyNews}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/me-status.png"}})]),e._v(" "),n("text",{staticClass:"row-mesg",slot:"mesg"},[e._v("0")])]),e._v(" "),n("action-row",{staticClass:"updateInfo-content",attrs:{rowTit:"我的收藏",btnClass:"details",hasIcon:e.hasIcon,callBack:e.jumpMyFavorites}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/me-mark.png"}})]),e._v(" "),n("text",{staticClass:"row-mesg",slot:"mesg"},[e._v("0")])]),e._v(" "),n("action-row",{staticClass:"updateInfo-content",staticStyle:{"margin-bottom":"10px"},attrs:{rowTit:"我的评论",btnClass:"details",hasIcon:e.hasIcon,callBack:e.jumpMyComments}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/me-pinglun.png"}})]),e._v(" "),n("text",{staticClass:"row-mesg",slot:"mesg"},[e._v("0")])])],1),e._v(" "),n("cell",{staticClass:"app-info"},[n("action-row",{staticClass:"updateInfo-content",attrs:{rowTit:"设置",btnClass:"details",hasIcon:e.hasIcon,callBack:e.settingAction}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/settings.png"}})])]),e._v(" "),n("action-row",{staticClass:"updateInfo-content",attrs:{rowTit:"关于你牛",btnClass:"details",hasIcon:e.hasIcon}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/about.png"}})])]),e._v(" "),n("action-row",{staticClass:"updateInfo-content",attrs:{rowTit:"帮助与反馈",btnClass:"details",hasIcon:e.hasIcon}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/mishu.png"}})])]),e._v(" "),n("action-row",{staticClass:"updateInfo-content",attrs:{rowTit:"推荐给好友",btnClass:"details",hasIcon:e.hasIcon}},[n("div",{staticClass:"row-icon-wrap",slot:"icon"},[n("image",{staticClass:"row-icon",attrs:{src:"/src/view/personal/images/share.png"}})])])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},697:function(e,t,n){var r=n(577);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("0125a83f",r,!1)},7:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function o(){return"web"==weex.config.env.platform.toLowerCase}function i(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:o,getDeviceInfo:i}},77:function(e,t,n){n(92);var r=n(0)(n(80),n(89),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/actionRow/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var o=f.default+":8080",i=/\/\/([^\/]+?)\//.exec(e);i&&i.length>=2&&(o=i[1]),r="http://"+o+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":l(window))?"?page=../dist/web/":r}function i(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,a(x.default.web,t)}function s(e,t){b.push({url:t?e+"?"+p.default.stringify(t):e,animated:"true"},function(e){w.default.log("callback: ",e)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,w.default.log("getBaseUrl",o());var n=t?""+o()+e.jsPath+".js?"+p.default.stringify(t):""+o()+e+".js";w.default.log("push "+n),b.push({url:n,animated:"true"},function(e){w.default.log("callback: ",e)})}function c(){b.pop({animated:"true"},function(e){w.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),p=r(u),d=n(10),f=r(d),h=n(7),m=r(h),g=n(4),x=r(g),v=n(9),w=r(v),b=weex.requireModule("navigator");t.default={push:a,pushByUrl:s,getBaseUrl:o,pushWeb:i,pop:c}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{rowTit:{default:""},btnClass:{default:"details"},callBack:{default:function(){}},switchIsChecked:{default:"female"},hasIcon:{default:!1}},methods:{doSth:function(){this.callBack()}},components:{switchBtn:n(50)}}},86:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.row-bg {\n    width: 750px;\n    height: 110px;\n    background-color: #fff;\n}\n.row-wrap {\n    margin-right: 30px;\n    margin-left: 30px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.row-group {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom-width: 1px;\n    border-color: #e5e5e5;\n}\n.hasIcon-row {\n    width: 620px;\n}\n.noIcon-row {\n    width: 690px;\n}\n.tit-wrap {\n    height: 110px;\n    flex-direction: row;\n    align-items: center;\n}\n.tit-content {\n    font-size: 28px;\n    color: #434343;\n}\n.action-wrap {\n    height: 110px;\n    flex-direction: row;\n    align-items: center;\n}\n.action-group {\n    width: 30px;\n    height: 110px;\n    justify-content: center;\n    align-items: center;\n}\n.action-item {\n    width: 24px;\n    height: 24px;\n}\n",""])},89:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row-bg"},[n("div",{staticClass:"row-wrap",on:{click:e.doSth}},[e._t("icon"),e._v(" "),n("div",{staticClass:"row-group",class:[e.hasIcon?"hasIcon-row":"noIcon-row"]},[n("div",{staticClass:"tit-wrap"},[n("text",{staticClass:"tit-content"},[e._v(e._s(e.rowTit))])]),e._v(" "),n("div",{staticClass:"action-wrap"},[e._t("mesg"),e._v(" "),"details"==e.btnClass?n("div",{staticClass:"action-group"},[n("image",{staticClass:"action-item",attrs:{src:"/src/components/actionRow/images/do-more.png"}})]):e._e(),e._v(" "),"switchBtn"==e.btnClass?n("switch-btn",{attrs:{value:e.switchIsChecked,"true-value":"male","false-value":"female"},on:{input:function(t){return e.switchIsChecked=t}}}):e._e()],2)])],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){"use strict";function r(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||r("["+e+"]  "+i(t))}function i(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",o=0;o<n;o++)r+="    ";var s=r+"    ",a="{\n",c=!0;for(var l in e)if(0===o&&o++,e.hasOwnProperty(l)){c=!1;var p=i(e[l],t,n+1);p.indexOf("function"),a+=s,e.hasOwnProperty(l)||(a+="prototype.");var d=u(e[l]);a+=l,a+="["+d,a+="]",a+=" : ",a+=p,a+=" ,\n"}return a+=r+"}",c&&(a="{}"),a}function s(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function a(e,t,n,r){if(null===e||void 0===e||!1===e){if(s("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){p._testbegin=(new Date).getTime(),p._testIsBegin=!0}function l(e){p._testEnd=(new Date).getTime(),a(!0===p._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+p._testEnd+" - "+p._testbegin+" : "+(p._testEnd-p._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=p||{},d=!1;t.default={log:r,dump:o,testBegin:c,testEnd:l}},92:function(e,t,n){var r=n(86);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("9a24bcb0",r,!1)}});