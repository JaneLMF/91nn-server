// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=397)}({108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{num:{default:""}},computed:{showText:function(){var e=this.num+"";return 1==e.length&&(e="0"+e),e}}}},130:function(e,t){e.exports={player:{width:32,height:32,lineHeight:32,textAlign:"center",borderRadius:4,backgroundColor:"#fc6d3f",color:"#ffffff",fontSize:24}}},146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["player"]},[e._v(e._s(e.showText))])},staticRenderFns:[]},e.exports.render._withStripped=!0},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={props:{targetTime:{default:1501490891e3}},data:function(){return{timing:"",timer:null,timeHour:"",timeMinute:"",timeSecond:""}},computed:{time_now:function(){return new Date("2017/07/30 17:12:11").getTime()}},mounted:function(){var e=new Date;this.timing=e.getTime();var t=this.targetTime-this.timing;t<864e5&&(this.timeHour=this.formatHours(t),this.timeMinute=this.formatMinutes(t),this.timeSecond=this.formatSeconds(t)),this.countDown()},methods:{formatDuring:function(e){return parseInt(e/864e5)+" 天 "+parseInt(e%864e5/36e5)+" 小时 "+parseInt(e%36e5/6e4)+" 分钟 "+e%6e4/1e3+" 秒 "},formatDays:function(e){return parseInt(e/864e5)},formatHours:function(e){return parseInt(e%864e5/36e5)},formatMinutes:function(e){return parseInt(e%36e5/6e4)},formatSeconds:function(e){return parseInt(e%6e4/1e3)},countDown:function(){var e=this;this.timer=setInterval(function(){--e.timeSecond<0&&(e.timeMinute--,e.timeSecond=59,e.timeMinute<0&&(e.timeHour--,e.timeMinute=59,0==e.timeHour&&clearInterval(e.timer)))},1e3)}},components:{nPlayer:n(208)}}},172:function(e,t){e.exports={"countDown-wrap":{justifyContent:"center",alignItems:"center"},time:{flexDirection:"row"},maohao:{paddingRight:2,paddingLeft:2,fontSize:28,color:"#fc6d3f"},tit:{marginTop:17,fontSize:24,color:"#888888"}}},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["countDown-wrap"]},[n("div",{staticClass:["time"]},[n("n-player",{attrs:{num:e.timeHour}}),n("text",{staticClass:["maohao"]},[e._v(":")]),n("n-player",{attrs:{num:e.timeMinute}}),n("text",{staticClass:["maohao"]},[e._v(":")]),n("n-player",{attrs:{num:e.timeSecond}})],1),n("text",{staticClass:["tit"]},[e._v("开始倒计时")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},208:function(e,t,n){var r,o,i=[];i.push(n(130)),r=n(108);var s=n(146);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/countDown/player.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-7e2a813c",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},397:function(e,t,n){var r,o,i=[];i.push(n(172)),r=n(156);var s=n(188);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/countDown/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-2cd5e6e1",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)}});