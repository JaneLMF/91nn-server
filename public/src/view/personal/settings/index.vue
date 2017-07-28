<template>
    <div class="setting-wrap">
        <div class="updateInfo-wrap">
            <action-row :rowTit="'修改资料'" :btnClass="'details'" class="updateInfo-content" :callBack="updateInfo"></action-row>
            <action-row :rowTit="'账号绑定'" :btnClass="'details'" class="updateInfo-content" :callBack="bindAccount"></action-row>
            <action-row :rowTit="'修改密码'" :btnClass="'details'" class="updateInfo-content" :callBack="action"></action-row>
        </div>
        <div class="switch-wrap">
            <action-row :rowTit="'消息提醒'" :btnClass="'switchBtn'" class="updateInfo-content"></action-row>
            <action-row :rowTit="'动态推送'" :btnClass="'switchBtn'" class="updateInfo-content" :switchIsChecked="'male'"></action-row>
        </div>
        <div class="logout-wrap">
            <text class="logout">退出账号</text>
        </div>
    </div>
</template>

<style>
    .setting-wrap {
        width: 750px;
        background-color: #f8f8f8;
    }

    .switch-wrap {
        margin-top: 10px;
    }

    .logout-wrap {
        margin-top: 40px;
        width: 750px;
        justify-content: center;
        align-items: center;
    }

    .logout {
        width: 690px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border-radius: 8px;
        font-size: 32px;
        color: #fff;
        background-color: #fc6d3f;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                canVerify: true,
                action() {
                    navigator.push(routerPage.updatePw)
                },
                bindAccount() {
                    navigator.push(routerPage.bindAccount)
                },
                updateInfo() {
                    navigator.push(routerPage.updateInfo)
                }
            }
        },
        components: {
            actionRow: require('components/actionRow/index.vue')
        }
    }
</script>