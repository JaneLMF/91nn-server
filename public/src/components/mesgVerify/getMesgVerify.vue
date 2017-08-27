<template>
    <text class="sendMesg" :class="[canVerify? 'action' : 'disabled']"  @click="sendVerify()">{{ content }}</text>
</template>

<style>
    .sendMesg {
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 8px;
        color: #fff;
        font-size: 28px;
    }

    .action {
        background-color: #fc6d3f;
    }

    .disabled {
        background-color: #bbbbbb;
    }
</style>

<script>
    import nn from 'utils/debug'

    import nAPI from 'api/index'

    var modal = weex.requireModule('modal');

    export default {
        props: {
            canVerify: { default: false },
            phoneNum: { default: '' }
        },
        data() {
            return {
                content: '获取验证码',
//                canSendVerify: false,
                seconds: 10,
                timer: null
            }
        },
        methods: {
            sendVerify() {
                if(this.canVerify) {
                    this.$emit('input', false);
                    this.canVerify = false;
                    this.timer = setInterval(() => {
                        this.seconds--;
                        this.content = this.seconds + "秒后重新获取";
                        if (this.seconds == 0) {
                            clearInterval(this.timer);
                            this.content = "重新获取";
                            this.$emit('input', true);
                            this.seconds = 10;
                        }
                    },1000);

                    console.log(this.phoneNum);

                    nAPI.getMesgVerify(this.phoneNum).then(res => {
                        nn.dump('success', res);
                        modal.toast({ message: '已成功发送短信验证码', duration: 1 })
                    }).catch(res => {
                        nn.dump('Failed', res)
                        modal.toast({ message: 'sendMesgVerifyFailed', duration: 1 })
                    })
                }
            }
        }
    }
</script>