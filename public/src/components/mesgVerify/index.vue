<template>
    <div class="content-bg">
        <div class="content-wrap">
            <input type="text" placeholder="请输入手机号码" class="inputTel" @input="inputPhoneNum" />
            <div class="mesgVerify-wrap">
                <input type="text" placeholder="请输入短信验证码" class="inputVerify" @input="inputMesgVerify" />
                <get-verify class="getMesgVerify" :phoneNum="phoneNum" :canVerify="canVerify" @input="v=>canVerify=v"></get-verify>
            </div>
            <text class="submitBtn" @click="submitForm">{{ buttonText }}</text>
        </div>
    </div>
</template>

<style>
    .content-bg {
        width: 750px;
        background-color: #fff;
    }

    .content-wrap {
        margin-left: 90px;
        margin-right: 90px;
        margin-top: 56px;
    }

    .inputTel {
        width: 570px;
        height: 60px;
        line-height: 60px;
        border-bottom-width: 1px;
        border-color: #dddddd;
        font-size: 26px;
        placeholder-color: #bbbbbb;
    }

    .mesgVerify-wrap {
        margin-top: 56px;
        flex-direction: row;
        justify-content: space-between;
    }

    .inputVerify {
        width: 350px;
        height: 60px;
        line-height: 60px;
        border-bottom-width: 1px;
        border-color: #dddddd;
        font-size: 26px;
        placeholder-color: #bbbbbb;
    }

    .submitBtn {
        margin-top: 80px;
        width: 570px;
        height: 70px;
        background-color: #fc6d3f;
        color: #fff;
        font-size: 32px;
        line-height: 70px;
        text-align: center;
        border-radius: 8px;
    }
</style>

<script>
    export default {
        props: {
            buttonText: { default: '' },
            submitAction: {
                default() {

                }
            }
        },
        data() {
            return {
                phoneNum: '',
                mesgVerify: '',
                canVerify: false
            }
        },
        components: {
            getVerify: require('./getMesgVerify.vue')
        },
        methods: {
            inputPhoneNum(e) {
                this.phoneNum = e.value;
                var reg= /^1[0-9]{10}$/;
                if(reg.test(e.value)) {
                    this.canVerify = true;
                }
            },
            inputMesgVerify(e) {
                this.mesgVerify = e.value;
            },
            submitForm() {
                this.submitAction();
            }
        }
    }
</script>