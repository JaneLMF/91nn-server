// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=610)}({0:function(e,t){e.exports=function(e,t,r,n){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var c=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},10:function(e,t,r){"use strict";var n=r(12),o=r(11),i=r(6);e.exports={formats:i,parse:o,stringify:n}},11:function(e,t,r){"use strict";var n=r(7),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<n.length;++i){var a,s,c=n[i],u=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===u?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,u)),s=t.decoder(c.slice(u+1))),o.call(r,a)?r[a]=[].concat(r[a]).concat(s):r[a]=s}return r},s=function(e,t,r){if(!e.length)return t;var n,o=e.shift();if("[]"===o)n=[],n=n.concat(s(e,t,r));else{n=r.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(n=[],n[a]=s(e,t,r)):n[i]=s(e,t,r)}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=i.exec(n),u=c?n.slice(0,c.index):n,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;null!==(c=a.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+n.slice(c.index)+"]"),s(l,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},u=Object.keys(o),l=0;l<u.length;++l){var f=u[l],d=c(f,o[f],r);s=n.merge(s,d,r)}return n.compact(s)}},12:function(e,t,r){"use strict";var n=r(7),o=r(6),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,i,a,s,c,u,l,f,d,p){var y=t;if("function"==typeof c)y=c(r,y);else if(y instanceof Date)y=f(y);else if(null===y){if(i)return s&&!p?s(r):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||n.isBuffer(y)){if(s){return[d(p?r:s(r))+"="+d(s(y))]}return[d(r)+"="+d(String(y))]}var g=[];if(void 0===y)return g;var h;if(Array.isArray(c))h=c;else{var m=Object.keys(y);h=u?m.sort(u):m}for(var v=0;v<h.length;++v){var b=h[v];a&&null===y[b]||(g=Array.isArray(y)?g.concat(e(y[b],o(r,b),o,i,a,s,c,u,l,f,d,p)):g.concat(e(y[b],r+(l?"."+b:"["+b+"]"),o,i,a,s,c,u,l,f,d,p)))}return g};e.exports=function(e,t){var r=e,n=t||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===n.delimiter?s.delimiter:n.delimiter,u="boolean"==typeof n.strictNullHandling?n.strictNullHandling:s.strictNullHandling,l="boolean"==typeof n.skipNulls?n.skipNulls:s.skipNulls,f="boolean"==typeof n.encode?n.encode:s.encode,d="function"==typeof n.encoder?n.encoder:s.encoder,p="function"==typeof n.sort?n.sort:null,y=void 0!==n.allowDots&&n.allowDots,g="function"==typeof n.serializeDate?n.serializeDate:s.serializeDate,h="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:s.encodeValuesOnly;if(void 0===n.format)n.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,n.format))throw new TypeError("Unknown format option provided.");var m,v,b=o.formatters[n.format];"function"==typeof n.filter?(v=n.filter,r=v("",r)):Array.isArray(n.filter)&&(v=n.filter,m=v);var x=[];if("object"!=typeof r||null===r)return"";var j;j=n.arrayFormat in i?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var w=i[j];m||(m=Object.keys(r)),p&&m.sort(p);for(var O=0;O<m.length;++O){var _=m[O];l&&null===r[_]||(x=x.concat(c(r[_],_,w,u,l,f?d:null,v,p,y,g,b,h)))}return x.join(a)}},14:function(e,t,r){r(36);var n=r(0)(r(33),r(35),null,null);n.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},2:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(i(r.parts[o]));l[r.id]={id:r.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(y)return g;n.parentNode.removeChild(n)}if(h){var i=p++;n=d||(d=o()),t=a.bind(null,n,i,!1),r=a.bind(null,n,i,!0)}else n=o(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=r(3),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,y=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){y=r;var o=u(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,r.push(s)}t?(o=u(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(31),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e,t,r){var n={code:e,phone:t,password:r};return o.default.post("api/sendIdentifyCode",n)},a=function(e,t){var r={phone:e,password:t};return o.default.post("api/login",r)},s=function(e){var t={phone:e};return o.default.post("api/requestIdentifyCode",t)},c=function(e,t,r){var n={id:e,sex:t,nick:r};return o.default.put("api/userProfile",n)},u=function(e,t){var r={userId:e,concernedId:t};return o.default.get("api/concernUser",r)},l=function(e,t,r){var n={userId:e,maxLength:t,isFirstTime:r};return o.default.get("api/homePage",n)},f=function(e,t,r){var n={targetType:"article",targetId:e,author:t,content:r};return o.default.post("api/comment",n)},d=function(e,t,r){var n={targetType:"article",targetId:e,author:t,comment:r};return o.default.post("api/transmit",n)},p=function(e,t){var r={author:e,title:"",content:t};return o.default.post("api/article",r)},y=function(e,t,r){var n={author:e,title:t,content:r};return o.default.post("api/article",n)},g=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return o.default.post("api/upvote",n)},h=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return o.default.del("api/upvote",n)},m=function(e){var t={id:"598953513dcfac3d6714d90b"};return o.default.get("api/article",t)};t.default={register:i,login:a,getMesgVerify:s,updateUserNickSex:c,concernUser:u,getArticleInHome:l,commentArticle:f,repostArticle:d,createNews:p,createArticles:y,upvote:g,delUpvote:h,getArticleByID:m}},3:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],u=i[3],l={id:e+":"+o,css:s,media:c,sourceMap:u};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}},31:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return new Promise(function(r,n){console.log("request:",p+e+"?"+u.default.stringify(t)),d.fetch({method:"GET",url:p+e+"?"+u.default.stringify(t),type:"json"},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function i(e,t){return new Promise(function(r,n){d.fetch({method:"POST",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function a(e,t){return new Promise(function(r,n){d.fetch({method:"DELETE",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function s(e,t){return new Promise(function(r,n){d.fetch({method:"PUT",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=r(10),u=n(c),l=r(5),f=n(l),d=weex.requireModule("stream"),p="http://115.159.67.22:60800/";t.default={get:o,post:i,del:a,put:s}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{size:{default:"s"},iconDirection:{default:"row"},textDirection:{default:"right"},hasClick:{default:!1},iconUrl:{default:""},text:{default:""},textColor:{default:"#bbbbbb"}},methods:{clickIt:function(){this.$emit("callBack",!this.hasClick)}}}},34:function(e,t,r){t=e.exports=r(1)(),t.push([e.i,"\n.icon-wrap-row {\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n}\n.icon-wrap-column {\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.icon-s {\n\twidth: 24px;\n\theight: 24px;\n}\n.icon-m {\n\twidth: 32px;\n\theight: 32px;\n}\n.icon-xm {\n\twidth: 40px;\n\theight: 40px;\n}\n.icon-l {\n\twidth: 48px;\n\theight: 48px;\n}\n.text-s {\n\tfont-size: 20px;\n}\n.text-m {\n\tfont-size: 24px;\n}\n.text-xm {\n\tfont-size: 26px;\n}\n.text-l {\n\tfont-size: 28px;\n}\n.text-top {\n\tmargin-bottom: 10px;\n}\n.text-right {\n\tmargin-left: 10px;\n}\n.text-bottom {\n\tmargin-top: 10px;\n}\n.text-left {\n\tmargin-right: 10px;\n}",""])},35:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["icon-wrap-"+e.iconDirection],on:{click:e.clickIt}},["bottom"==e.textDirection||"right"==e.textDirection?r("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e(),e._v(" "),e.text.length>0?r("text",{class:["text-"+e.size,"text-"+e.textDirection],style:{color:e.textColor}},[e._v(e._s(e.text))]):e._e(),e._v(" "),"top"==e.textDirection||"left"==e.textDirection?r("image",{class:["icon-"+e.size],attrs:{src:e.iconUrl}}):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},36:function(e,t,r){var n=r(34);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("b8fe7868",n,!1)},43:function(e,t,r){r(57);var n=r(0)(r(46),r(54),null,null);n.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/textIcon/agree/index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},46:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=n(o),a=r(21),s=n(a),c=(weex.requireModule("storage"),weex.requireModule("modal"));t.default={props:{size:{default:"m"},iconUrl:{default:"/resources/textIcon/agree.png"},text:{default:"0"},textColor:{default:"#bbbbbb"},targetType:{default:""},articleId:{default:""},userId:{default:""}},data:function(){return{hasAgree:!1}},components:{textIcon:r(14)},methods:{agree:function(){var e=this;c.toast({message:this.articleId,duration:.3}),this.hasAgree?s.default.delUpvote(this.targetType,this.articleId,this.userId).then(function(t){i.default.dump("success",t),c.toast({message:"已取消点赞",duration:.3}),e.iconUrl="/resources/textIcon/agree.png",e.textColor="#bbbbbb","0"==t.result?e.text="赞":e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){i.default.dump("Failed",e),c.toast({message:"del"+e,duration:1})}):s.default.upvote(this.targetType,this.articleId,this.userId).then(function(t){i.default.dump("success",t),c.toast({message:"已赞",duration:.3}),e.iconUrl="/resources/textIcon/agree-active.png",e.textColor="#fc6d3f",e.text=t.result,e.hasAgree=!e.hasAgree}).catch(function(e){i.default.dump("Failed",e)}),this.hasAgree=!this.hasAgree}}}},5:function(e,t,r){"use strict";function n(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||n("["+e+"]  "+i(t))}function i(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":l(e)))return""+e;for(var n="",o=0;o<r;o++)n+="    ";var a=n+"    ",s="{\n",c=!0;for(var u in e)if(0===o&&o++,e.hasOwnProperty(u)){c=!1;var f=i(e[u],t,r+1);f.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var d=l(e[u]);s+=u,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=n+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?n("WARN-"+e+"  "+t):(t=e,n("WARN  "+t))}function s(e,t,r,n){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:r,info1:n})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function u(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),n(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:n,dump:o,testBegin:c,testEnd:u}},51:function(e,t,r){t=e.exports=r(1)(),t.push([e.i,"",""])},54:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text-icon",{attrs:{size:e.size,iconUrl:e.iconUrl,text:"0"==e.text?"赞":e.text+"",textColor:e.textColor,hasClick:e.hasAgree},on:{callBack:e.agree}})},staticRenderFns:[]},e.exports.render._withStripped=!0},57:function(e,t,r){var n=r(51);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("355eda73",n,!1)},6:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},610:function(e,t,r){"use strict";var n=r(43);n.el="#root",new Vue(n)},7:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],r,o):e.push(r):e[i]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return Object.prototype.hasOwnProperty.call(e,n)?e[n]=t.merge(e[n],i,o):e[n]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],o=n.indexOf(e);if(-1!==o)return n[o];if(n.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],n)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}}});