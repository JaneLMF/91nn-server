<template>
    <list class="personal-bg">
        <cell class="personal-header">
            <image src="/src/view/personal/images/index-bg.png" class="personal-header-bg"></image>
            <badge class="personal-header-mesg"
                   :action="badgeData.action"
                   :iconStyle="badgeData.iconStyle"
                   :superScriptState="badgeData.superScriptState"
                   :iconName="badgeData.iconName"></badge>
            <user-info :userInfo="userInfo" class="user-info-wrap"></user-info>
        </cell>
        <cell class="user-atten-bg">
            <div class="user-atten-wrap">
                <div class="user-atten-group">
                    <text class="user-atten-tit">我的关注</text>
                    <text class="user-atten-content">88</text>
                </div>
                <text class="fenge">|</text>
                <div class="user-atten-group">
                    <text class="user-atten-tit">我的粉丝</text>
                    <text class="user-atten-content">288</text>
                </div>
            </div>
        </cell>
        <cell class="myInfo-wrap">
            <action-row :rowTit="'我的动态'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" style="margin-top: 10px;">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/me-status.png" class="row-icon"></image>
                </div>
                <text slot="mesg" class="row-mesg">0</text>
            </action-row>
            <action-row :rowTit="'我的收藏'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/me-mark.png" class="row-icon"></image>
                </div>
                <text slot="mesg" class="row-mesg">0</text>
            </action-row>
            <action-row :rowTit="'我的评论'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" style="margin-bottom: 10px;">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/me-pinglun.png" class="row-icon"></image>
                </div>
                <text slot="mesg" class="row-mesg">0</text>
            </action-row>
        </cell>
        <cell class="app-info">
            <action-row :rowTit="'设置'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" :callBack="settingAction">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/settings.png" class="row-icon"></image>
                </div>
            </action-row>
            <action-row :rowTit="'关于链链'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/about.png" class="row-icon"></image>
                </div>
            </action-row>
            <action-row :rowTit="'帮助与反馈'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/mishu.png" class="row-icon"></image>
                </div>
            </action-row>
            <action-row :rowTit="'推荐给好友'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon">
                <div class="row-icon-wrap" slot="icon">
                    <image src="/src/view/personal/images/share.png" class="row-icon"></image>
                </div>
            </action-row>
        </cell>
    </list>
</template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                userInfo: {
                    userHeader: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                    isVIP: true,
                    userName: '鹿晗',
                    userSex: 'man',
                    userIntro: '机械神教和比特神教信徒...'
                },
                badgeData: {
                    action() {                                  //点击回调
                        console.log('click badge1');
                    },
                    iconStyle: {
                        url: '/src/view/personal/images/nav-mesg.png',                                //图片源
                        size: 's'
                    },
                    superScriptState: {
                        hasSuperScript: true,                  //是否需要
                        state: '2',                              //角标类型
                        content: '99'
                    },
                    iconName: {
                        hasName: false,                         //是否有tit
                        name: ''
                    }
                },
                hasIcon: true,
                settingAction() {
                    navigator.push(routerPage.settings)
                }
            }
        },
        components: {
            userInfo: require('components/userInfo/index.vue'),
            badge: require('components/badge/index.vue'),
            actionRow: require('components/actionRow/index.vue')
        }
    }
</script>

<style>
    .personal-bg {
        width: 750px;
        background-color: #f8f8f8;
    }

    .personal-header {
        position: relative;
        width: 750px;
        height: 394px;
    }

    .personal-header-bg {
        width: 750px;
        height: 394px;
    }

    .personal-header-mesg {
        position: absolute;
        top: 25px;
        right: 30px;
        width: 60px;
        height: 60px;
    }

    .user-info-wrap {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

    .user-atten-bg {
        width: 750px;
        height: 100px;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

    .user-atten-wrap {
        height: 100px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .user-atten-group {
        flex-direction: row;
    }

    .user-atten-tit {
        font-size: 26px;
        color: #959595;
    }

    .user-atten-content {
        margin-left: 20px;
        font-size: 28px;
        color: #434343;
    }

    .fenge {
        margin-right: 60px;
        margin-left: 60px;
        font-size: 26px;
        color: #d2d2d2;
    }

    .row-icon-wrap {
        width: 70px;
        height: 110px;
        justify-content: center;
        align-items: flex-start;
    }

    .row-icon {
        width: 48px;
        height: 48px;
    }

    .row-mesg {
        margin-right: 25px;
        font-size: 28px;
        color: #c9c9c9;
    }
</style>