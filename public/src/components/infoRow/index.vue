<template>
    <div class="infoBox-bg">
        <div class="infoBox-wrap">
            <text class="infoBox-tit">{{ infoBox.tit }}</text>
            <div class="infoBox-content-wrap">
                <text class="infoBox-content">{{ infoBox.content }}</text>
                <div class="infoBox-btn-wrap" v-if="infoBox.hasBtn">
                    <image src="/resources/common/find-more.png" class="infoBox-btn"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .infoBox-bg {
        width: 750px;
        height: 85px;
        background-color: #fff;
    }

    .infoBox-wrap {
        width: 690px;
        height: 85px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        border-bottom-width: 1px;
        border-color: #e5e5e5;
    }

    .infoBox-tit {
        font-size: 28px;
        color: #333;
    }

    .infoBox-content-wrap {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .infoBox-content {
        font-size: 28px;
        color: #959595;
    }

    .infoBox-btn-wrap {
        width: 48px;
        height: 85px;
        justify-content: center;
        align-items: flex-end;
    }

    .infoBox-btn {
        width: 24px;
        height: 24px;
    }
</style>

<script>
    export default {
        props: {
            infoBox: {
                default() {
                    return {
                        tit: '',
                        content: '',
                        hasBtn: true,
                        callBack() {

                        }
                    }
                }
            }
        },
        methods: {
            findMore() {
                this.infoBox.callBack();
            }
        }
    }
</script>