<template>
    <back-navpage :title="title">
        <div class="ico-details-wrap">
            <list class="ico-details-list">
                <cell>
                    <div class="ico-tit-bg">
                        <div class="ico-tit-wrap">
                            <div class="ico-details-pro-wrap">
                                <image class="ico-details-pro-logo" :src="icoPro.logoUrl"></image>
                                <div class="ico-details-pro-text-wrap">
                                    <text class="ico-details-pro-name">{{ icoPro.name }}</text>
                                    <div class="ico-details-pro-time-wrap">
                                        <text class="ico-details-pro-time">{{ icoPro.startTime }}</text>
                                        <text class="ico-details-pro-time-line">--</text>
                                        <text class="ico-details-pro-time">{{ icoPro.stopTime }}</text>
                                    </div>
                                </div>
                            </div>
                            <ico-level :oLevel="oLevel" class="ico-level-wrap"></ico-level>
                        </div>
                        <div class="ico-info-wrap">
                            <div class="ico-info-group">
                                <text class="ico-info-content">{{ icoPro.appDomain }}</text>
                                <text class="ico-info-tit">应用领域</text>
                            </div>
                            <text class="ico-info-fenge">|</text>
                            <div class="ico-info-group">
                                <text class="ico-info-content">{{ icoPro.cost }}</text>
                                <text class="ico-info-tit">ICO成本</text>
                            </div>
                            <text class="ico-info-fenge">|</text>
                            <div class="ico-info-group">
                                <text class="ico-info-content">{{ icoPro.publishDomain }}</text>
                                <text class="ico-info-tit">发布地域</text>
                            </div>
                            <text class="ico-info-fenge">|</text>
                            <div class="ico-info-group">
                                <text class="ico-info-content">{{ icoPro.status }}</text>
                                <text class="ico-info-tit">项目状态</text>
                            </div>
                        </div>
                    </div>
                </cell>
                <cell>
                    <div class="ico-target-wrap">
                        <text class="ico-target-tit">众筹目标</text>
                        <text class="ico-target-content">{{ icoPro.icoTarget }}</text>
                    </div>
                </cell>
                <cell>
                    <div class="ico-intro-wrap">
                        <text class="ico-intro-content">{{ icoPro.icoIntro }}</text>
                        <text class="ico-intro-all">阅读全文</text>
                    </div>
                </cell>
                <!--<cell>-->
                    <!--<n-tabbar-->
                            <!--:marginTop="tabbarTop"-->
                            <!--backgroundColor="#f7f7f7"-->
                            <!--bottomSelectedColor="#FB633C"-->
                            <!--bottomUnSelectedColor="#f7f7f7"-->
                            <!--:tabItems="tabItems"-->
                            <!--@tabBarOnClick="tabBarOnClick"/>-->
                <!--</cell>-->
            </list>
            <n-tabbar
                    :marginTop="tabbarTop"
                    backgroundColor="#f7f7f7"
                    bottomSelectedColor="#FB633C"
                    bottomUnSelectedColor="#f7f7f7"
                    :tabItems="tabItems"
                    @tabBarOnClick="tabBarOnClick"/>
            <div>
                <comment-footer :commentFooter="commentFooter" class="fixed-input-wrap"></comment-footer>
            </div>
        </div>
    </back-navpage>
</template>

<style>
    .ico-details-wrap {
        width: 750px;
    }

    .ico-details-list {
        width: 750px;
    }

    .ico-tit-bg {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        border-bottom-width: 1px;
        border-color: #dddddd;
        justify-content: center;
        align-items: center;
    }

    .ico-tit-wrap {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 690px;
        height: 170px;
    }

    .ico-details-pro-wrap {
        flex-direction: row;
    }

    .ico-details-pro-logo {
        width: 80px;
        height: 80px;
        border-radius: 80px;
    }

    .ico-details-pro-text-wrap {
        height: 80px;
        margin-left: 20px;
        justify-content: center;
        align-items: flex-start;
    }

    .ico-details-pro-name {
        font-size: 32px;
        color: #434343;
    }

    .ico-details-pro-time-wrap {
        flex-direction: row;
    }

    .ico-details-pro-time {
        font-size: 24px;
        color: #959595;
    }

    .ico-details-pro-time-line {
        font-size: 24px;
        color: #fc6d3f;
        margin-left: 5px;
        margin-right: 5px;
    }

    .ico-level-wrap {
        margin-left: 127px;
        width: 78px;
        height: 88px;
    }

    .ico-info-wrap {
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 30px;
        width: 640px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .ico-info-group {
        justify-content: center;
        align-items: center;
    }

    .ico-info-content {
        font-size: 26px;
        color: #333333;
    }

    .ico-info-tit {
        margin-top: 20px;
        font-size: 24px;
        color: #959595;
    }

    .ico-info-fenge {
        font-size: 24px;
        color: #959595;
    }

    .ico-target-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        height: 85px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-width: 1px;
        border-color: #dddddd;
    }

    .ico-target-tit {
        font-size: 26px;
        color: #333333;
    }

    .ico-target-content {
        font-size: 26px;
        color: #959595;
    }

    .ico-intro-wrap {
        /*flex-direction: row;*/
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 20px;
        margin-bottom: 40px;
        width: 690px;
    }

    .ico-intro-content {
        font-size: 26px;
        color: #434343;
        lines: 3;
    }

    .ico-intro-all {
        font-size: 26px;
        color: #959595;
    }

    .fixed-input-wrap {
        position: fixed;
        left: 0px;
        bottom: 0px;
    }
</style>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import weexutil from 'utils/weex/instance'

    export default {
        data() {
            return {
                title: '详情',
                oLevel: {
                    lStyle: 'index',
                    level: 's'
                },
                icoPro: {
                    logoUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                    name: 'YOYOW',
                    startTime: '2017-05-21',
                    stopTime: '2017-06-30',
                    appDomain: '网络互助',
                    cost: '待定',
                    publishDomain: '美国',
                    status: '已结束',
                    icoTarget: '800BTC',
                    icoIntro: '比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的...'
                },
                commentFooter: {
                    placeholderText: '谈谈你对此ICO的看法...',
                    isFollow: false
                },
                tabbarTop: 600,
                tabItems: [
                    {
                        index: 0,
                        title: '评论',
                        titleFontSize: '28px',
                        src: '/icoComment/index.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '新闻',
                        titleFontSize: '28px',
                        src: '/icoNews/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '点评',
                        titleFontSize: '28px',
                        src: '/icoRate/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 3,
                        title: '介绍',
                        titleFontSize: '28px',
                        src: '/icoIntro/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 4,
                        title: '团队',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    }
                ]
            }
        },
        components: {
            icoLevel: require('components/icoLevel/index.vue'),
            commentFooter: require('components/commentFooter/index.vue'),
            nTabbar: require('components/tabbar/tabbar.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        },
        methods: {
            tabBarOnClick: function(e) {
                console.log('tabBarOnClick', e.index)
            }
        },
        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
                nn.log('src ' + tabItem.src)
            }
            //adapter navbar for ios
            if (weexutil.isIOS()){
                let env = weex.config.env;
                let scale = env.scale;
                let deviceWidth = env.deviceWidth / scale;
                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
            }
        }
    }
</script>