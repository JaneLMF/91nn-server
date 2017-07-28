<template>
    <div class="follow-wrap">
        <div class="follow-content-wrap">
            <user-header class="follower-header" :article="followers.article"></user-header>
            <text class="follow-btn" :class="[followers.isFollow ? 'has-follow' : '']" @click="followIt">{{followers.isFollow ? '已关注' : '+关注'}}</text>
        </div>
        <div class="line"></div>
    </div>
</template>

<style>
    .follow-wrap {
        margin-right: 30px;
        margin-left: 30px;
        width: 690px;
    }

    .follow-content-wrap {
        width: 690px;
        height: 138px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .follow-btn {
        width: 100px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        border-width: 1px;
        border-color: #fc6d3f;
        border-radius: 8px;
        font-size: 24px;
        color: #fc6d3f;
    }
    
    .has-follow {
        border-color: #959595;
        color: #959595;
    }

    .line {
        margin-left: 100px;
        width: 590px;
        height: 1px;
        background-color: #e5e5e5;
    }
</style>

<script>
    export default {
        props: {
            followers: {
                default() {
                    return {
                        article: {
                            headerUrl: '',
                            userName: '',
                            subTitle: '',
                            headerStyle: 'follow'
                        },
                        isFollow: false
                    }
                }
            }
        },
        components: {
            userHeader: require('../userHeader/index.vue')
        },
        methods: {
            followIt() {
                this.$emit('follow', !this.followers.isFollow);
            }
        }
    }
</script>