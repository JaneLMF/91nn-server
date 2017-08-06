// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=461)}({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:i,exports:o,options:s}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="192.168.199.161"},103:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("navpage",{staticClass:"root",attrs:{dataRole:e.dataRole,title:e.title,leftItemSrc:e.leftItemSrc},on:{naviBarLeftItemClick:e.leftItemClick}},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},107:function(e,t,n){var r=n(99);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("34e58666",r,!1)},11:function(e,t,n){"use strict";var r=n(13),i=n(12),o=n(5);e.exports={formats:o,parse:i,stringify:r}},12:function(e,t,n){"use strict";var r=n(6),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var n={},r=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<r.length;++o){var a,s,l=r[o],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;-1===c?(a=t.decoder(l),s=t.strictNullHandling?null:""):(a=t.decoder(l.slice(0,c)),s=t.decoder(l.slice(c+1))),i.call(n,a)?n[a]=[].concat(n[a]).concat(s):n[a]=s}return n},s=function(e,t,n){if(!e.length)return t;var r,i=e.shift();if("[]"===i)r=[],r=r.concat(s(e,t,n));else{r=n.plainObjects?Object.create(null):{};var o="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,a=parseInt(o,10);!isNaN(a)&&i!==o&&String(a)===o&&a>=0&&n.parseArrays&&a<=n.arrayLimit?(r=[],r[a]=s(e,t,n)):r[o]=s(e,t,n)}return r},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(r),c=l?r.slice(0,l.index):r,u=[];if(c){if(!n.plainObjects&&i.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var d=0;null!==(l=a.exec(r))&&d<n.depth;){if(d+=1,!n.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+r.slice(l.index)+"]"),s(u,t,n)}};e.exports=function(e,t){var n=t||{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null===e||void 0===e)return n.plainObjects?Object.create(null):{};for(var i="string"==typeof e?a(e,n):e,s=n.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var d=c[u],f=l(d,i[d],n);s=r.merge(s,f,n)}return r.compact(s)}},13:function(e,t,n){"use strict";var r=n(6),i=n(5),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,n,i,o,a,s,l,c,u,d,f,p){var h=t;if("function"==typeof l)h=l(n,h);else if(h instanceof Date)h=d(h);else if(null===h){if(o)return s&&!p?s(n):n;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h)){if(s){return[f(p?n:s(n))+"="+f(s(h))]}return[f(n)+"="+f(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(l))v=l;else{var g=Object.keys(h);v=c?g.sort(c):g}for(var x=0;x<v.length;++x){var y=v[x];a&&null===h[y]||(m=Array.isArray(h)?m.concat(e(h[y],i(n,y),i,o,a,s,l,c,u,d,f,p)):m.concat(e(h[y],n+(u?"."+y:"["+y+"]"),i,o,a,s,l,c,u,d,f,p)))}return m};e.exports=function(e,t){var n=e,r=t||{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var a=void 0===r.delimiter?s.delimiter:r.delimiter,c="boolean"==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,u="boolean"==typeof r.skipNulls?r.skipNulls:s.skipNulls,d="boolean"==typeof r.encode?r.encode:s.encode,f="function"==typeof r.encoder?r.encoder:s.encoder,p="function"==typeof r.sort?r.sort:null,h=void 0!==r.allowDots&&r.allowDots,m="function"==typeof r.serializeDate?r.serializeDate:s.serializeDate,v="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:s.encodeValuesOnly;if(void 0===r.format)r.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,r.format))throw new TypeError("Unknown format option provided.");var g,x,y=i.formatters[r.format];"function"==typeof r.filter?(x=r.filter,n=x("",n)):Array.isArray(r.filter)&&(x=r.filter,g=x);var b=[];if("object"!=typeof n||null===n)return"";var w;w=r.arrayFormat in o?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var _=o[w];g||(g=Object.keys(n)),p&&g.sort(p);for(var k=0;k<g.length;++k){var j=g[k];u&&null===n[j]||(b=b.concat(l(n[j],j,_,c,u,d?f:null,x,p,h,m,y,v)))}return b.join(a)}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var o=p++;r=f||(f=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},225:function(e,t,n){n(288);var r=n(0)(n(241),n(272),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/view/coin-market/add/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),a=n(9),s=r(a);t.default={props:{coins:{default:function(){return[{id:"0",name:"比特币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"1",name:"云储币",storeName:"云币网",unit:"$",increase:-1.6,cnyPrice:"1800",usdPrice:"300",follow:"true"},{id:"2",name:"云储币",storeName:"云币网",unit:"$",increase:-.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"3",name:"云储币",storeName:"云币网",unit:"$",increase:1.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"4",name:"云储币",storeName:"云币网",unit:"$",increase:0,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"5",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"6",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"7",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"8",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"},{id:"9",name:"云储币",storeName:"云币网",unit:"$",increase:.6,cnyPrice:"1800",usdPrice:"300",follow:"false"}]}},switchIsChecked:{default:"female"},hasIcon:{default:!1}},data:{title:"添加币"},methods:{oncellclick:function(e){s.default.push(o.default.coinDetails,{id:e})}},components:{backNavpage:n(89),switchBtn:n(31)}}},256:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root {\n\twidth: 750px;\n\tflex: 1;\n}\n.border {\n\t/*border-width: 1px;*/\n}\n.item-line {\n\t/*width: 750px;*/\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n.item {\n\theight: 148px;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.item-line-top {\n\tborder-width: 1px;\n\tborder-color: #ffffff;\n}\n.item-line-bottom {\n\tborder-width: 1px;\n\tborder-color: #f7f7f7;\n}\n.user-header-wrap {\n\tflex-direction: row;\n\t/*justify-content: center;*/\n\talign-items: center;\n\ttext-align: left;\n\theight: 60px;\n}\n.user-info-wrap {\n}\n.user-name {\n\tfont-size: 32px;\n\tcolor: #434343;\n}\n.user-issue {\n\tfont-size: 20px;\n\tcolor: #959595;\n}\n.div-increase {\n\twidth: 120px;\n\theight: 50px;\n\tborder-radius: 10px;\n\talign-items: center;\n\tjustify-content: center;\n}\n.bg-price-down {\n\tbackground-color: #ff5452;\n}\n.bg-price-up {\n\tbackground-color: #21cd3d;\n}\n.price-group{\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: flex-start;\n}\n.price {\n\talign-items: flex-end;\n\t/*justify-content: flex-end;*/\n}\n.price-calm {\n\tcolor: white;\n\tfont-size: 20px;\n}\n.increase {\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n\twidth: 18px;\n\theight: 18px;\n}\n.star-box {\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tmargin-bottom: 10px;\n}\n.star-text {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tbackground-color: #f9b713;\n\tborder-radius: 10px;\n}\n.star {\n\tflex-direction: row;\n}\n\n/* for slider*/\n.slider{\n\twidth: 750px;\n\theight: 290px;\n}\n.slider-indicator {\n\twidth: 750px;\n\theight: 30px;\n\tposition: absolute;\n\tbottom:60px;\n\titem-color: rgba(51, 51, 51, 0.5);\n\titem-selected-color: #fff;\n\titem-size: 15px;\n}\n.img {\n\twidth: 520px;\n\theight: 210px;\n\tborder-radius: 10px;\n}\n.list-head {\n\twidth: 750px;\n\theight: 64px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tbackground-color: #f7f7f7;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.list-head-item {\n\tfont-size: 24px;\n\tcolor: #959595;\n}",""])},272:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("back-navpage",{attrs:{title:e.title}},[n("div",{staticClass:"root"},[n("div",{staticClass:"list-head"},e._l(["名称","最新价格","添加"],function(t){return n("text",{staticClass:"list-head-item"},[e._v(e._s(t))])})),e._v(" "),n("list",{staticClass:"border"},e._l(e.coins,function(t){return n("cell",{on:{click:function(n){e.oncellclick(t.id)}}},[n("div",{key:t.id,staticClass:"item-line"},[n("div",{staticClass:"item-line-top"}),e._v(" "),n("div",{staticClass:"item border"},[n("div",{staticClass:"user-info-wrap"},[n("text",{staticClass:"user-name"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"price-group"},[n("text",{staticClass:"user-issue"},[e._v(e._s(t.storeName))])])]),e._v(" "),n("div",{staticClass:"price border"},[0==t.increase?n("text",{staticClass:"user-name"},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),e._v(" "),t.increase>0?n("text",{staticClass:"user-name price-up"},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),e._v(" "),t.increase<0?n("text",{staticClass:"user-name price-down"},[e._v("￥ "+e._s(t.cnyPrice))]):e._e(),e._v(" "),n("text",{staticClass:"user-issue border"},[e._v("$ "+e._s(t.usdPrice))])]),e._v(" "),n("switch-btn",{attrs:{value:t.follow,"true-value":"true","false-value":"false"},on:{input:function(e){return t.follow=e}}})],1),e._v(" "),n("div",{staticClass:"item-line-bottom"})])])}))],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},288:function(e,t,n){var r=n(256);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("4c32029f",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},31:function(e,t,n){n(41);var r=n(0)(n(34),n(38),null,null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/switchBtn/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("animation");t.default={name:"u-switch",props:{value:[String,Number,Boolean,Object,Array],trueValue:{type:[String,Number,Boolean,Object,Array],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array],default:!1},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value==this.trueValue}},methods:{change:function(){if(!this.disabled){var e=this.checked?this.falseValue:this.trueValue;r.transition(this.$refs.icon,{styles:{transform:"translateX("+(this.checked?"0":"100%")+")"},duration:300,timingFunction:"ease",delay:0}),this.$emit("input",e),this.$emit("change",e)}}},mounted:function(){var e=this;this.$nextTick(function(){e.checked&&r.transition(e.$refs.icon,{styles:{transform:"translateX(100%)"},duration:0,delay:0})})}}},35:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.switch {\n    width: 80px;\n    flex-direction: row;\n    align-items: center;\n    background-color: #c9c9c9;\n}\n.sz-small {\n    min-width: 80px;\n    height: 40px;\n    border-radius: 20px;\n}\n.sz-normal {\n    min-width: 120px;\n    height: 60px;\n    border-radius: 30px;\n}\n.sz-large{\n    min-width: 160px;\n    height: 80px;\n    border-radius: 40px;\n}\n.checked {\n    background-color: #fc6d3f;\n}\n.disabled {\n    background-color: #c9c9c9;\n}\n.icon {\n    background-color: #fff;\n    border-style: solid;\n    border-color: #c9c9c9;\n    transform: translateX(0);\n}\n.icon-checked {\n    border-color: #fc6d3f;\n}\n.icon-disabled {\n    border-color: #c9c9c9;\n}\n.isz-small {\n    width: 40px;\n    height: 40px;\n    border-width: 2px;\n    border-radius: 20px;\n}\n.isz-normal {\n    width: 60px;\n    height: 60px;\n    border-width: 4px;\n    border-radius: 30px;\n}\n.isz-large {\n    width: 80px;\n    height: 80px;\n    border-width: 6px;\n    border-radius: 3px;\n}\n.text {\n    color: #c9c9c9;\n    margin-left: 40px;\n}\n.text-disabled {\n    color: #e6ecf2;\n}\n",""])},38:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch",class:[e.checked?"checked":"",e.disabled?"disabled":"","sz-"+e.size],on:{click:e.change}},[n("div",{ref:"icon",staticClass:"icon",class:[e.checked?"icon-checked":"",e.disabled?"icon-disabled":"","isz-"+e.size]}),e._v(" "),e.$slots.default?n("text",{staticClass:"text",class:[e.disabled?"text-disabled":""]},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getStarted:{title:"新手营",path:"/getStarted",jsPath:"view/home/get-started/index"},wikiIndex:{title:"链百科",path:"/wikiIndex",jsPath:"view/link-wiki/index/index"},wikiDetails:{title:"链百科",path:"/wikiDetails",jsPath:"view/link-wiki/details/index"},appIndex:{title:"链应用",path:"/appIndex",jsPath:"view/link-app/index/index"},appDetails:{title:"链应用",path:"/appDetails",jsPath:"view/link-app/details/index"},ico:{title:"ICO爆料",path:"/ico",jsPath:"view/ico/index"},icoDetails:{title:"ICO详情",path:"/icoDetails",jsPath:"view/icoDetails/index"},settings:{title:"设置",path:"/settings",jsPath:"view/personal/settings/index"},updatePw:{title:"修改密码",path:"/updatePw",jsPath:"view/personal/settings/updatePw/verify"},submitNewPw:{title:"修改密码",path:"/submitNewPw",jsPath:"view/personal/settings/updatePw/update"},bindAccount:{title:"账号绑定",path:"/bindAccount",jsPath:"view/personal/settings/bindAccount/index"},updateAccount:{title:"绑定手机号",path:"/updateAccount",jsPath:"view/personal/settings/bindAccount/updateAccount"},updateInfo:{title:"修改资料",path:"/updateInfo",jsPath:"view/personal/settings/updateInfo/index"},updateIntro:{title:"编辑简介",path:"/updateIntro",jsPath:"view/personal/settings/updateInfo/updateIntro"},updateName:{title:"编辑昵称",path:"/updateName",jsPath:"view/personal/settings/updateInfo/updateName"},updateFrom:{title:"编辑地区",path:"/updateFrom",jsPath:"view/personal/settings/updateInfo/updateFrom"},myNews:{title:"我的动态",path:"/myNews",jsPath:"view/personal/my-news/index"},myFavorites:{title:"我的收藏",path:"/myFavorites",jsPath:"view/personal/my-favorites/index"},myFollows:{title:"我的关注",path:"/myFollows",jsPath:"view/personal/my-follow/index"},myFans:{title:"我的关注",path:"/myFans",jsPath:"view/personal/my-fans/index"},myComments:{title:"我的评论",path:"/myComments",jsPath:"view/personal/my-comments/index"},repostPage:{title:"正文",path:"/repostPage",jsPath:"view/content/index"},userHome:{title:"",path:"/userHome",jsPath:"view/userHome/index"},coinDetails:{title:"详情",path:"/coinDetails",jsPath:"view/coin-market/details/index"},addCoin:{title:"添加币",path:"/addCoin",jsPath:"view/coin-market/add/index"}}},41:function(e,t,n){var r=n(35);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("de67c46e",r,!1)},44:function(e,t,n){n(61);var r=n(0)(n(48),n(58),"data-v-ee1dd0cc",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},461:function(e,t,n){"use strict";var r=n(225);r.el="#root",new Vue(r)},48:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:"/src/images/common/back.png"},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick",e)},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick",e)}}}},5:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},54:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.border[data-v-ee1dd0cc] {\n  border-width: 1px;\n}\n.container[data-v-ee1dd0cc] {\n  flex-direction: row;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 750px;\n}\n.right-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  right: 32px;\n  text-align: right;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 28px;\n  left :32px;\n  text-align :left;\n  font-size: 32px;\n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 25px;\n  left: 172px;\n  right: 172px;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n}\n.left-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 120px;\n  height: 80px;\n}\n.left-image[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  left: 28px;\n  width: 25px;\n  height: 48px;\n}\n.right-image-box[data-v-ee1dd0cc] {\n  position: absolute;\n  bottom: 20px;\n  right: 28px;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n}\n.right-image[data-v-ee1dd0cc] {\n  width: 6px;\n  height: 40px;\n}\n",""])},58:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:"right-text",style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e._v(" "),e.rightItemSrc?n("div",{staticClass:"right-image-box",attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[n("image",{staticClass:"right-image",attrs:{src:e.rightItemSrc}})]):e._e(),e._v(" "),e.leftItemSrc?e._e():n("text",{staticClass:"left-text",style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e._v(" "),e.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:e.leftItemSrc}}):e._e(),e._v(" "),e.leftItemSrc?n("div",{staticClass:"left-image-box",on:{click:e.onclickleftitem}}):e._e(),e._v(" "),n("text",{staticClass:"center-text",style:{color:e.titleColor},attrs:{naviItemPosition:"center"}},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},6:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,i){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var o=e;return Array.isArray(e)&&!Array.isArray(n)&&(o=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,o){r.call(e,o)?e[o]&&"object"==typeof e[o]?e[o]=t.merge(e[o],n,i):e.push(n):e[o]=n}),e):Object.keys(n).reduce(function(e,r){var o=n[r];return Object.prototype.hasOwnProperty.call(e,r)?e[r]=t.merge(e[r],o,i):e[r]=o,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",r=0;r<t.length;++r){var o=t.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(r):o<128?n+=i[o]:o<2048?n+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?n+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(r+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(r)),n+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var r=n||[],i=r.indexOf(e);if(-1!==i)return r[i];if(r.push(e),Array.isArray(e)){for(var o=[],a=0;a<e.length;++a)e[a]&&"object"==typeof e[a]?o.push(t.compact(e[a],r)):void 0!==e[a]&&o.push(e[a]);return o}return Object.keys(e).forEach(function(n){e[n]=t.compact(e[n],r)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},61:function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("e655ad8c",r,!1)},62:function(e,t,n){n(84);var r=n(0)(n(70),n(79),"data-v-33a35918",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},7:function(e,t,n){"use strict";function r(e){f||(arguments.length>=2?console.log(arguments[0]+": "+arguments[1]):console.log(e))}function i(e,t){f||r("["+e+"]  "+o(t))}function o(e,t,n){if(void 0===t&&(t=10),void 0===n&&(n=0),n===t)return e+"???";if(null===e)return'"'+e+'"';if("string"==typeof e)return'"'+e+'"';if("function"==typeof e)return"Function";if("native code"==typeof e)return"native code";if("object"!==(void 0===e?"undefined":u(e)))return""+e;for(var r="",i=0;i<n;i++)r+="    ";var a=r+"    ",s="{\n",l=!0;for(var c in e)if(0===i&&i++,e.hasOwnProperty(c)){l=!1;var d=o(e[c],t,n+1);d.indexOf("function"),s+=a,e.hasOwnProperty(c)||(s+="prototype.");var f=u(e[c]);s+=c,s+="["+f,s+="]",s+=" : ",s+=d,s+=" ,\n"}return s+=r+"}",l&&(s="{}"),s}function a(e,t){arguments.length>=2?r("WARN-"+e+"  "+t):(t=e,r("WARN  "+t))}function s(e,t,n,r){if(null===e||void 0===e||!1===e){if(a("assert","\n------------err msg------------\n"+o({expression:e,msg:t,info0:n,info1:r})+"------------create ------------\n"+function(){var e="",t=0,n=arguments.callee;do{if(t>=3&&t<10){e+=""+n}else if(t>=10)break;n=n.arguments.callee.caller,t++}while(n);return e}()),!0!==assertExit)return;nn.Utils.Sys.exit()}}function l(){d._testbegin=(new Date).getTime(),d._testIsBegin=!0}function c(e){d._testEnd=(new Date).getTime(),s(!0===d._testIsBegin,"nn.Debug._testIsBegin need"),r(e+" "+d._testEnd+" - "+d._testbegin+" : "+(d._testEnd-d._testbegin)),this.testBegin()}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=d||{},f=!1;t.default={log:r,dump:i,testBegin:l,testEnd:c}},70:function(e,t,n){"use strict";var r=n(8),i=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports={components:{navbar:n(44)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"#fc6d3f"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},computed:{computeHeight:function(){if(i.default.isIOS()){var e=weex.config.env,t=e.scale,n=e.deviceWidth/t;this.height=48e3/n}return this.height}},methods:{naviBarRightItemClick:function(e){this.$emit("naviBarRightItemClick",e)},naviBarLeftItemClick:function(e){this.$emit("naviBarLeftItemClick",e)}}}},74:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper[data-v-33a35918] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 750;\n}\n",""])},79:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:e.dataRole,height:e.computeHeight,backgroundColor:e.backgroundColor,title:e.title,titleColor:e.titleColor,leftItemSrc:e.leftItemSrc,leftItemTitle:e.leftItemTitle,leftItemColor:e.leftItemColor,rightItemSrc:e.rightItemSrc,rightItemTitle:e.rightItemTitle,rightItemColor:e.rightItemColor},on:{naviBarRightItemClick:e.naviBarRightItemClick,naviBarLeftItemClick:e.naviBarLeftItemClick}}),e._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:e.height}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){"use strict";function r(){return!!weex.config.env&&"ios"==weex.config.env.platform.toLowerCase()}function i(){return"web"==weex.config.env.platform.toLowerCase}function o(){var e=weex.config.env;return{deviceWidth:e.deviceWidth,deviceHeight:e.deviceHeight}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={isIOS:r,isWeb:i,getDeviceInfo:o}},84:function(e,t,n){var r=n(74);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("68f36e54",r,!1)},89:function(e,t,n){n(107);var r=n(0)(n(93),n(103),"data-v-d8b144c8",null);r.options.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/navbar/back-navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] back-navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=weex.config.bundleUrl,t=e.indexOf("your_current_IP")>=0||e.indexOf("file://assets/")>=0,n=e.indexOf("file:///")>=0&&e.indexOf("WeexFrame.app")>0,r="";if(t)r="file://assets/dist/native/";else if(n)r=e.substring(0,e.lastIndexOf("native/")+5);else{var i=p.default+":8080",o=/\/\/([^\/]+?)\//.exec(e);o&&o.length>=2&&(i=o[1]),r="http://"+i+"/dist/native/"}return"object"===("undefined"==typeof window?"undefined":c(window))?"?page=../dist/web/":r}function o(e,t){if(m.default.isWeb())return void(window.location.href=e);t=t||{},t.url=e,s(g.default.web,t)}function a(e,t){b.push({url:t?e+"?"+d.default.stringify(t):e,animated:"true"},function(e){y.default.log("callback: ",e)})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.title=e.title,y.default.log("getBaseUrl",i());var n=t?""+i()+e.jsPath+".js?"+d.default.stringify(t):""+i()+e+".js";y.default.log("push "+n),b.push({url:n,animated:"true"},function(e){y.default.log("callback: ",e)})}function l(){b.pop({animated:"true"},function(e){y.default.log("callback: ",e)})}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(11),d=r(u),f=n(10),p=r(f),h=n(8),m=r(h),v=n(4),g=r(v),x=n(7),y=r(x),b=weex.requireModule("navigator");t.default={push:s,pushByUrl:a,getBaseUrl:i,pushWeb:o,pop:l}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{title:{default:""},dataRole:{default:"none"},leftItemSrc:{default:"/src/images/common/back.png"}},methods:{leftItemClick:function(e){if(null==this.naviBarLeftItemClick)return void i.default.pop();this.$emit("naviBarLeftItemClick",e)}},components:{navpage:n(62)}}},99:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.root[data-v-d8b144c8] {\n    width: 750px;\n}\n\n",""])}});