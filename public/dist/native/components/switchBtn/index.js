// { "framework": "Vue"} 

!function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=355)}({355:function(e,t,r){var i,n,o=[];o.push(r(42)),i=r(37);var s=r(47);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/jane/MyWorld/Work/GitHub/weex-91nn/src/components/switchBtn/index.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-75011658",n.style=n.style||{},o.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,o),e.exports=i,e.exports.el="true",new Vue(e.exports)},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("animation");t.default={name:"u-switch",props:{value:[String,Number,Boolean,Object,Array],trueValue:{type:[String,Number,Boolean,Object,Array],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array],default:!1},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},computed:{checked:function(){return this.value==this.trueValue}},methods:{change:function(){if(!this.disabled){var e=this.checked?this.falseValue:this.trueValue;i.transition(this.$refs.icon,{styles:{transform:"translateX("+(this.checked?"0":"100%")+")"},duration:300,timingFunction:"ease",delay:0}),this.$emit("input",e),this.$emit("change",e)}}},mounted:function(){var e=this;this.$nextTick(function(){e.checked&&i.transition(e.$refs.icon,{styles:{transform:"translateX(100%)"},duration:0,delay:0})})}}},42:function(e,t){e.exports={switch:{width:80,flexDirection:"row",alignItems:"center",backgroundColor:"#c9c9c9"},"sz-small":{minWidth:80,height:40,borderRadius:20},"sz-normal":{minWidth:120,height:60,borderRadius:30},"sz-large":{minWidth:160,height:80,borderRadius:40},checked:{backgroundColor:"#fc6d3f"},disabled:{backgroundColor:"#c9c9c9"},icon:{backgroundColor:"#ffffff",borderStyle:"solid",borderColor:"#c9c9c9",transform:"translateX(0)"},"icon-checked":{borderColor:"#fc6d3f"},"icon-disabled":{borderColor:"#c9c9c9"},"isz-small":{width:40,height:40,borderWidth:2,borderRadius:20},"isz-normal":{width:60,height:60,borderWidth:4,borderRadius:30},"isz-large":{width:80,height:80,borderWidth:6,borderRadius:3},text:{color:"#c9c9c9",marginLeft:40},"text-disabled":{color:"#e6ecf2"}}},47:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["switch"],class:[e.checked?"checked":"",e.disabled?"disabled":"","sz-"+e.size],on:{click:e.change}},[r("div",{ref:"icon",staticClass:["icon"],class:[e.checked?"icon-checked":"",e.disabled?"icon-disabled":"","isz-"+e.size]}),e.$slots.default?r("text",{staticClass:["text"],class:[e.disabled?"text-disabled":""]},[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0}});