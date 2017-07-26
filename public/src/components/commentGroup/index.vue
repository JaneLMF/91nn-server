<template>
    <div class="bc-wrap">
        <div class="bc-user-wrap">
            <user-header :article="comment.article" class="bc-header"></user-header>
            <div class="bc-jiaohu">
                <div class="bc-zan-wrap">
                    <image src="/src/view/home/images/zan.png" class="bc-zan-icon"></image>
                    <text class="bc-zan-content">{{ comment.agreeNum }}</text>
                </div>
                <image src="/src/view/home/images/pinglun.png" class="bc-pinglun-icon"></image>
            </div>
        </div>
        <text class="bc-content">{{ comment.content }}</text>
    </div>
</template>

<style>
    .bc-wrap {
        margin-left: 30px;
        margin-right: 30px;
    }

    .bc-user-wrap {
        margin-top: 30px;
        margin-bottom: 20px;
        flex-direction: row;
        justify-content: space-between;
    }

    .bc-jiaohu {
        height: 50px;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .bc-zan-wrap {
        flex-direction: row;
    }

    .bc-zan-icon {
        width: 24px;
        height: 24px;
    }

    .bc-zan-content {
        margin-left: 10px;
        font-size: 20px;
        color: #c9c9c9;
    }

    .bc-pinglun-icon {
        margin-left: 30px;
        width: 24px;
        height: 24px;
    }

    .bc-content {
        margin-left: 90px;
        padding-bottom: 35px;
        width: 600px;
        font-size: 26px;
        color: #434343;
        border-bottom-width: 1px;
        border-color: #e5e5e5;
    }
</style>

<script>
    export default {
        props: {
            comment: {
                default() {
                    return {
                        article: {
                            headerUrl: '',
                            userName: '',
                            subTitle: '',
                            headerStyle: ''
                        },
                        agreeNum: '',
                        content: ''
                    }
                }
            }
        },
        components: {
            userHeader: require('../userHeader/index.vue')
        }
    }
</script>