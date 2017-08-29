// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=558)}({1:function(e,t,r){"use strict";function n(e){d||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function o(e,t){d||n("["+e+"]  "+i(t))}function i(e,t,r){if(void 0===t&&(t=10),void 0===r&&(r=0),r===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":l(e)))return""+e;for(var n="",o=0;o<r;o++)n+="    ";var a=n+"    ",s="{\n",c=!0;for(var u in e)if(0===o&&o++,e.hasOwnProperty(u)){c=!1;var f=i(e[u],t,r+1);f.indexOf("function"),s+=a,e.hasOwnProperty(u)||(s+="prototype.");var d=l(e[u]);s+=u,s+="["+d,s+="]",s+=" : ",s+=f,s+=" ,\n"}return s+=n+"}",c&&(s="{}"),s}function a(e,t){arguments.length>=2?n("WARN-"+e+"  "+t):(t=e,n("WARN  "+t))}function s(e,t,r,n){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+i({expression:e,msg:t,info0:r,info1:n})+"------------create ------------\n"+function(){var e="",t=0,r=arguments.callee;do{if(t>=3&&t<10){e+=""+r}else if(t>=10)break;r=r.arguments.callee.caller,t++}while(r);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function c(){f._testbegin=(new Date).getTime(),f._testIsBegin=!0}function u(e){f._testEnd=(new Date).getTime(),s(!0===f._testIsBegin,"nn.Debug._testIsBegin need"),n(e+" "+f._testEnd+" - "+f._testbegin+" : "+(f._testEnd-f._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=f||{},d=!1;t.default={log:n,dump:o,testBegin:c,testEnd:u}},107:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o),a=r(14),s=n(a),c=weex.requireModule("modal");t.default={props:{canVerify:{default:!1},phoneNum:{default:""}},data:function(){return{content:"获取验证码",seconds:10,timer:null}},methods:{sendVerify:function(){var e=this;this.canVerify&&(this.$emit("input",!1),this.canVerify=!1,this.timer=setInterval(function(){e.seconds--,e.content=e.seconds+"秒后重新获取",0==e.seconds&&(clearInterval(e.timer),e.content="重新获取",e.$emit("input",!0),e.seconds=10)},1e3),console.log(this.phoneNum),s.default.getMesgVerify(this.phoneNum).then(function(e){i.default.dump("success",e),c.toast({message:"已成功发送短信验证码",duration:1})}).catch(function(e){i.default.dump("Failed",e),c.toast({message:"sendMesgVerifyFailed",duration:1})}))}}}},111:function(e,t){e.exports={sendMesg:{width:200,height:60,lineHeight:60,textAlign:"center",borderRadius:8,color:"#ffffff",fontSize:28},action:{backgroundColor:"#fc6d3f"},disabled:{backgroundColor:"#bbbbbb"}}},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["sendMesg"],class:[e.canVerify?"action":"disabled"],on:{click:function(t){e.sendVerify()}}},[e._v(e._s(e.content))])},staticRenderFns:[]},e.exports.render._withStripped=!0},136:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});weex.requireModule("storage");t.default={props:{buttonText:{default:""},submitAction:{default:function(){}}},data:function(){return{phoneNum:"",mesgVerify:"",canVerify:!1}},components:{getVerify:r(154)},methods:{inputPhoneNum:function(e){this.phoneNum=e.value,/^1[0-9]{10}$/.test(e.value)&&(this.canVerify=!0)},inputMesgVerify:function(e){this.mesgVerify=e.value},submitForm:function(){this.$emit("submit",{phone:this.phoneNum,code:this.mesgVerify})}}}},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(24),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e,t,r){var n={code:e,phone:t,password:r};return o.default.post("api/sendIdentifyCode",n)},a=function(e,t){var r={phone:e,password:t};return o.default.post("api/login",r)},s=function(e){var t={phone:e};return o.default.post("api/requestIdentifyCode",t)},c=function(e,t,r){var n={id:e,sex:t,nick:r};return o.default.put("api/userProfile",n)},u=function(e,t){var r={userId:e,concernedId:t};return o.default.get("api/concernUser",r)},l=function(e,t,r){var n={userId:e,maxLength:t,isFirstTime:r};return o.default.get("api/homePage",n)},f=function(e,t,r){var n={targetType:"article",targetId:e,author:t,content:r};return o.default.post("api/comment",n)},d=function(e,t,r){var n={targetType:"article",targetId:e,author:t,comment:r};return o.default.post("api/transmit",n)},p=function(e,t){var r={author:e,title:"",content:t};return o.default.post("api/article",r)},y=function(e,t,r){var n={author:e,title:t,content:r};return o.default.post("api/article",n)},g=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return o.default.post("api/upvote",n)},m=function(e,t,r){var n={targetType:e,targetId:t,userId:r};return o.default.del("api/upvote",n)},h=function(e){var t={id:"598953513dcfac3d6714d90b"};return o.default.get("api/article",t)};t.default={register:i,login:a,getMesgVerify:s,updateUserNickSex:c,concernUser:u,getArticleInHome:l,commentArticle:f,repostArticle:d,createNews:p,createArticles:y,upvote:g,delUpvote:m,getArticleByID:h}},144:function(e,t){e.exports={"content-bg":{width:750,backgroundColor:"#ffffff"},"content-wrap":{marginLeft:90,marginRight:90,marginTop:56},inputTel:{width:570,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},"mesgVerify-wrap":{marginTop:56,flexDirection:"row",justifyContent:"space-between"},inputVerify:{width:350,height:60,lineHeight:60,borderBottomWidth:1,borderColor:"#dddddd",fontSize:26,placeholderColor:"#bbbbbb"},submitBtn:{marginTop:80,width:570,height:70,backgroundColor:"#fc6d3f",color:"#ffffff",fontSize:32,lineHeight:70,textAlign:"center",borderRadius:8}}},150:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["content-bg"]},[r("div",{staticClass:["content-wrap"]},[r("input",{staticClass:["inputTel"],attrs:{type:"text",placeholder:"请输入手机号码"},on:{input:e.inputPhoneNum}}),r("div",{staticClass:["mesgVerify-wrap"]},[r("input",{staticClass:["inputVerify"],attrs:{type:"text",placeholder:"请输入短信验证码"},on:{input:e.inputMesgVerify}}),r("get-verify",{staticClass:["getMesgVerify"],attrs:{phoneNum:e.phoneNum,canVerify:e.canVerify},on:{input:function(t){return e.canVerify=t}}})],1),r("text",{staticClass:["submitBtn"],on:{click:e.submitForm}},[e._v(e._s(e.buttonText))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},154:function(e,t,r){var n,o,i=[];i.push(r(111)),n=r(107);var a=r(119);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/getMesgVerify.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-20cda974",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},2:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},24:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return new Promise(function(r,n){console.log("request:",p+e+"?"+u.default.stringify(t)),d.fetch({method:"GET",url:p+e+"?"+u.default.stringify(t),type:"json"},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function i(e,t){return new Promise(function(r,n){d.fetch({method:"POST",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function a(e,t){return new Promise(function(r,n){d.fetch({method:"DELETE",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}function s(e,t){return new Promise(function(r,n){d.fetch({method:"PUT",url:p+e,type:"json",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},function(e){e.ok&&e.data&&0===e.data.errCode?r(e.data):n(e.data)},function(e){f.default.log("get in progress:"+e.length)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=r(6),u=n(c),l=r(1),f=n(l),d=weex.requireModule("stream"),p="http://115.159.67.22:60800/";t.default={get:o,post:i,del:a,put:s}},3:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],r,o):e.push(r):e[i]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return Object.prototype.hasOwnProperty.call(e,n)?e[n]=t.merge(e[n],i,o):e[n]=i,e},i)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],o=n.indexOf(e);if(-1!==o)return n[o];if(n.push(e),Array.isArray(e)){for(var i=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?i.push(t.compact(e[a],n)):void 0!==e[a]&&i.push(e[a]);return i}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},558:function(e,t,r){var n,o,i=[];i.push(r(144)),n=r(136);var a=r(150);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/mesgVerify/index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7f2ec36a",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},6:function(e,t,r){"use strict";var n=r(8),o=r(7),i=r(2);e.exports={formats:i,parse:o,stringify:n}},7:function(e,t,r){"use strict";var n=r(3),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),i=0;i<n.length;++i){var a,s,c=n[i],u=-1===c.indexOf("]=")?c.indexOf("="):c.indexOf("]=")+1;-1===u?(a=t.decoder(c),s=t.strictNullHandling?null:""):(a=t.decoder(c.slice(0,u)),s=t.decoder(c.slice(u+1))),o.call(r,a)?r[a]=[].concat(r[a]).concat(s):r[a]=s}return r},s=function(e,t,r){if(!e.length)return t;var n,o=e.shift();if("[]"===o)n=[],n=n.concat(s(e,t,r));else{n=r.plainObjects?Object.create(null):{};var i="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,a=parseInt(i,10);!isNaN(a)&&o!==i&&String(a)===i&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(n=[],n[a]=s(e,t,r)):n[i]=s(e,t,r)}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,c=i.exec(n),u=c?n.slice(0,c.index):n,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;null!==(c=a.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+n.slice(c.index)+"]"),s(l,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},u=Object.keys(o),l=0;l<u.length;++l){var f=u[l],d=c(f,o[f],r);s=n.merge(s,d,r)}return n.compact(s)}},8:function(e,t,r){"use strict";var n=r(3),o=r(2),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,i,a,s,c,u,l,f,d,p){var y=t;if("function"==typeof c)y=c(r,y);else if(y instanceof Date)y=f(y);else if(null===y){if(i)return s&&!p?s(r):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||n.isBuffer(y)){if(s){return[d(p?r:s(r))+"="+d(s(y))]}return[d(r)+"="+d(String(y))]}var g=[];if(void 0===y)return g;var m;if(Array.isArray(c))m=c;else{var h=Object.keys(y);m=u?h.sort(u):h}for(var b=0;b<m.length;++b){var v=m[b];a&&null===y[v]||(g=Array.isArray(y)?g.concat(e(y[v],o(r,v),o,i,a,s,c,u,l,f,d,p)):g.concat(e(y[v],r+(l?"."+v:"["+v+"]"),o,i,a,s,c,u,l,f,d,p)))}return g};e.exports=function(e,t){var r=e,n=t||{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===n.delimiter?s.delimiter:n.delimiter,u="boolean"==typeof n.strictNullHandling?n.strictNullHandling:s.strictNullHandling,l="boolean"==typeof n.skipNulls?n.skipNulls:s.skipNulls,f="boolean"==typeof n.encode?n.encode:s.encode,d="function"==typeof n.encoder?n.encoder:s.encoder,p="function"==typeof n.sort?n.sort:null,y=void 0!==n.allowDots&&n.allowDots,g="function"==typeof n.serializeDate?n.serializeDate:s.serializeDate,m="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:s.encodeValuesOnly;if(void 0===n.format)n.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,n.format))throw new TypeError("Unknown format option provided.");var h,b,v=o.formatters[n.format];"function"==typeof n.filter?(b=n.filter,r=b("",r)):Array.isArray(n.filter)&&(b=n.filter,h=b);var _=[];if("object"!=typeof r||null===r)return"";var j;j=n.arrayFormat in i?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var O=i[j];h||(h=Object.keys(r)),p&&h.sort(p);for(var w=0;w<h.length;++w){var x=h[w];l&&null===r[x]||(_=_.concat(c(r[x],x,O,u,l,f?d:null,b,p,y,g,v,m)))}return _.join(a)}}});