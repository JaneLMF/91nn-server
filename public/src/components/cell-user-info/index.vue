<template>
    <div class="article-content-wrap">
        <div class="user-wrap">
            <div class="user-header-wrap" @click="clickIt">
                <image :src="headerUrl" class="user-header"></image>
                <text class="user-name">{{ userName }}</text>
                <text class="user-issue">来自: {{ userIssue }}</text>
            </div>
            <div class="article-time-wrap">
                <text class="article-time">{{ articleTime }}</text>
            </div>
        </div>
    </div>
</template>

<style>
    .article-content-wrap {
        background-color: #fff;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 25px;
    }

    .user-wrap {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
    }

    .user-header-wrap {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .article-time-wrap {
        justify-content: flex-end;
        align-items: center;
        justify-content: center;
        height: 50px;
    }

    .article-time {
        font-size: 24px;
        color: #959595;
    }

    .user-name {
        margin-right: 20px;
        font-size: 26px;
        color: #333333;
    }

    .user-issue {
        font-size: 24px;
        color: #959595;
    }

    .user-header {
        margin-right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
</style>

<script>
    export default {
        props: {
            headerUrl: { default: ''},
            userName: { default: ''},
            userIssue: { default: ''},
            articleTime: { default: ''}
        },
        methods: {
            clickIt() {
                this.$emit('callBack');
            }
        }
    }
</script>