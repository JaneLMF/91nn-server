<template>
    <div>
        <div>
            <div class="personal-header" v-if="isLogin">
                <image :src="userHomeBg" class="personal-header-bg"></image>
                <n-mesg-icon class="personal-header-mesg"></n-mesg-icon>
                <user-info :userInfo="userInfo" class="user-info-wrap"></user-info>
            </div>
            <div class="personal-header" v-else >
                <image src="/resources/common/index-bg.png" class="personal-header-bg"></image>
                <n-mesg-icon class="personal-header-mesg"></n-mesg-icon>
                <div class="userIcon-wrap">
                    <div class="userHeader-wrap">
                        <div class="userHeader-bg">
                            <image :src="unLogin.userHeader" class="userHeader"></image>
                        </div>
                    </div>
                    <div class="log-in-wrap">
                        <text class="unLogin-btn" @click="regist">注册</text>
                        <text class="unLogin-fenge">|</text>
                        <text class="unLogin-btn" @click="login">登录</text>
                    </div>
                    <text class="user-intro">{{ unLogin.userIntro }}</text>
                </div>
            </div>
            <div class="user-atten-bg" v-if="isLogin">
                <div class="user-atten-wrap">
                    <div class="user-atten-group" @click="jumpToFollows">
                        <text class="user-atten-tit">我的关注</text>
                        <text class="user-atten-content">{{ myFollowers }}</text>
                    </div>
                    <text class="fenge">|</text>
                    <div class="user-atten-group" @click="jumpToFans">
                        <text class="user-atten-tit">我的粉丝</text>
                        <text class="user-atten-content">{{ myFans }}</text>
                    </div>
                </div>
            </div>
            <div class="user-atten-bg" v-else>
                <div class="user-atten-wrap">
                    <div class="user-atten-group">
                        <text class="user-atten-tit">我的关注</text>
                        <text class="user-atten-content">{{ myFollowers }}</text>
                    </div>
                    <text class="fenge">|</text>
                    <div class="user-atten-group">
                        <text class="user-atten-tit">我的粉丝</text>
                        <text class="user-atten-content">{{ myFans }}</text>
                    </div>
                </div>
            </div>
        </div>
        <list class="personal-bg">
            <cell class="myInfo-wrap">
                <action-row :rowTit="'我的动态'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" style="margin-top: 10px;" :callBack="jumpMyNews">
                    <div class="row-icon-wrap" slot="icon">
                        <image src="/src/view/personal/images/me-status.png" class="row-icon"></image>
                    </div>
                    <text slot="mesg" class="row-mesg">{{ articleCount }}</text>
                </action-row>
                <action-row :rowTit="'我的收藏'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" :callBack="jumpMyFavorites">
                    <div class="row-icon-wrap" slot="icon">
                        <image src="/src/view/personal/images/me-mark.png" class="row-icon"></image>
                    </div>
                    <text slot="mesg" class="row-mesg">{{ collectedCount }}</text>
                </action-row>
                <action-row :rowTit="'我的评论'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" style="margin-bottom: 10px;" :callBack="jumpMyComments">
                    <div class="row-icon-wrap" slot="icon">
                        <image src="/src/view/personal/images/me-pinglun.png" class="row-icon"></image>
                    </div>
                    <text slot="mesg" class="row-mesg">{{ commentCount }}</text>
                </action-row>
            </cell>
            <cell class="app-info">
                <action-row :rowTit="'设置'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon" :callBack="settingAction">
                    <div class="row-icon-wrap" slot="icon">
                        <image src="/src/view/personal/images/settings.png" class="row-icon"></image>
                    </div>
                </action-row>
                <action-row :rowTit="'关于你牛'" :btnClass="'details'" class="updateInfo-content" :hasIcon="hasIcon">
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
    </div>
</template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal');

    export default {
        data() {
            return {
                unLogin: {
                    userHeader: '/resources/common/unLoginHeader.png',
                    isVIP: false,
                    userName: '鹿晗',
                    userIntro: '暂无简介'
                },
                isLogin: false,
                userHomeBg: '/resources/common/index-bg.png',
                myFollowers: 0,
                myFans: 0,
                articleCount: 0,
                collectedCount: 0,
                commentCount: 0,
                userInfo: {
                    id: '',
                    userHeader: '/resources/common/unLoginHeader.png',
                    attestation: true,
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
                },
                jumpMyNews() {
                    navigator.push(routerPage.myNews)
                },
                jumpMyFavorites() {
                    navigator.push(routerPage.myFavorites)
                }
            }
        },
        components: {
            userInfo: require('components/userInfo/index.vue'),
            badge: require('components/badge/index.vue'),
            actionRow: require('components/actionRow/index.vue'),
            nMesgIcon: require('components/badge/mesgIcon/index.vue')
        },
        methods: {
            jumpToFollows() {
                navigator.push(routerPage.myFollows)
            },
            jumpToFans() {
                navigator.push(routerPage.myFans)
            },
            jumpMyComments() {
                navigator.push(routerPage.myComments)
            },
            regist() {
                navigator.push(routerPage.register)
            },
            login() {
                navigator.push(routerPage.login)
            }
        },
        mounted() {
            storage.getItem('bossInfo',(res) => {
                modal.toast({ message: res.data, duration: 1 })
                if(res.data) {
                    console.log(res.data);
                    var bossInfo = JSON.parse(res.data);
                    this.isLogin = true;
                    if(bossInfo.avatar != '') {
                        this.userInfo.userHeader = bossInfo.avatar;
                    }
                    this.userInfo.userName = bossInfo.nick;
                    this.userInfo.userSex = bossInfo.sex;
                    this.userInfo.userIntro = bossInfo.briefInfo;
                    this.userInfo.id = bossInfo._id;
                    this.myFollowers = bossInfo.concernedUserCount;
                    this.myFans = bossInfo.fansCount;
                    this.articleCount = bossInfo.articleCount;
                    this.collectedCount = bossInfo.collectedCount;
                    this.commentCount = bossInfo.commentCount;
                    if(bossInfo.type == 'normal') {
                        this.userInfo.attestation = false;
                    } else {
                        this.userInfo.attestation = true;
                    }
                }
            })
        },
    }
</script>

<style>
    .personal-bg {
        width: 750px;
        background-color: #f8f8f8;
    }

    .personal-header {
        position: relative;
        justify-content: flex-end;
        align-items: center;
        width: 750px;
        height: 350px;
    }

    .personal-header-bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 750px;
        height: 350px;
    }

    .personal-header-mesg-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        justify-content: center;
        align-items: flex-end;
    }

    .personal-header-mesg {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    .user-info-wrap {
        margin-bottom: 30px;
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
        font-size: 28px;
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
        color: #e5e5e5;
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
        font-size: 30px;
        color: #c9c9c9;
    }

    /*未登录*/
    .userIcon-wrap {
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
    }

    .userHeader-wrap {
        position: relative;
        width: 132px;
        height: 132px;
    }

    .userHeader-bg {

    }

    .userHeader {
        width: 130px;
        height: 130px;
        border-radius: 130px;
        border-width: 2px;
        border-color: #f8997a;
    }

    .user-intro {
        font-size: 28px;
        color: #fff;
    }

    .log-in-wrap {
        height: 70px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .unLogin-btn {
        font-size: 36px;
        color: #fff;
    }

    .unLogin-fenge {
        font-size: 36px;
        color: #fff;
        margin-left: 25px;
        margin-right: 25px;
    }
</style>