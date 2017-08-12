<template>
    <div class="row-bg">
        <div class="row-wrap" @click="doSth">
            <slot name="icon"></slot>
            <div class="row-group" :class="[hasIcon ? 'hasIcon-row' : 'noIcon-row']">
                <div class="tit-wrap">
                    <text class="tit-content">{{ rowTit }}</text>
                </div>
                <div class="action-wrap">
                    <slot name="mesg"></slot>
                    <div class="action-group" v-if="btnClass == 'details'">
                        <image src="/src/components/actionRow/images/do-more.png" class="action-item"></image>
                    </div>
                    <switch-btn :value="switchIsChecked" @input="v=>switchIsChecked=v"
                                true-value="male" false-value="female" v-if="btnClass == 'switchBtn'"></switch-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .row-bg {
        width: 750px;
        height: 110px;
        background-color: #fff;
    }
    
    .row-wrap {
        margin-right: 30px;
        margin-left: 30px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .row-group {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-width: 1px;
        border-color: #e5e5e5;
    }

    .hasIcon-row {
        width: 620px;
    }

    .noIcon-row {
        width: 690px;
    }

    .tit-wrap {
        height: 110px;
        flex-direction: row;
        align-items: center;
    }

    .tit-content {
        font-size: 30px;
        color: #434343;
    }

    .action-wrap {
        height: 110px;
        flex-direction: row;
        align-items: center;
    }

    .action-group {
        width: 30px;
        height: 110px;
        justify-content: center;
        align-items: center;
    }

    .action-item {
        width: 24px;
        height: 24px;
    }
</style>

<script>
    export default {
        props: {
            rowTit: {default: ''},
            btnClass: { default: 'details' },
            callBack: {
                default: function() {

                }
            },
            switchIsChecked: { default: 'female' },
            hasIcon: { default: false }
        },
        methods: {
            doSth() {
                this.callBack();
            }
        },
        components: {
            switchBtn: require('components/switchBtn/index.vue')
        }
    }
</script>