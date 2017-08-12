<template>
    <div v-if="show" class="root">
        <n-mask @click="layoutClick"></n-mask>
        <div class="bg" :style="{'top': computeTop}">
            <slot name="backgroud"></slot>
        </div>
        <div class="box" ref="box" :style="{'top': computeTop}">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import nn from 'utils/debug'
    import uweex from 'utils/weex/instance'
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
          return {
              height: 88,
              left: '0px',
              top: '0px'
          }
        },
        computed: {
            computeTop: function(){
                //adapter navbar for ios
                if (uweex.isIOS()){
                    let env = weex.config.env;
                    let scale = env.scale;
                    let deviceWidth = env.deviceWidth / scale;
                    this.height = 64.0 * 750.0 / deviceWidth;
                }
                return this.height;
            }
        },
        methods: {
            open: function() {
                this.show = true;
            },
            close: function(){
                this.show = false;
            },
            layoutClick: function () {
                nn.log('layoutClick');
                this.close();
            }
        },
        components: {
            nMask: require('components/n-mask/index.vue')
        }
    }
</script>

<style>
    .root {
        /*position: fixed;*/
        /*left: 30px;*/
        /*right: 30px;*/
        /*top: 0px;*/
        /*bottom: 0px;*/

        background-color: #f9b713;
        /*position: fixed;*/
        /*opacity: 0;*/
        /*transform: scale(0.9, 0.9);*/
    }

    .border {
        border-width: 1px;
    }

    .bg {
        position: fixed;
        right: 30px;
    }

    .box {
        position: fixed;
        right: 30px;
    }

    .content {
        position: relative;
        flex-direction: column;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
    }


</style>