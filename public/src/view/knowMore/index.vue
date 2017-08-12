<template>
    <div>
        <div>
            <n-search :oSearch="oSearch">
                <badge class="personal-header-mesg"
                       :action="badgeData.action"
                       :iconStyle="badgeData.iconStyle"
                       :superScriptState="badgeData.superScriptState"
                       :iconName="badgeData.iconName"
                ></badge>
            </n-search>
        </div>
        <div>
            <div style="flex-direction: row; justify-content: space-around; width: 750px; height: 185px;">
                <div v-for="(item, i) in badgeLinkData" :key="i" style="justify-content: space-around; align-items: center;">
                    <badge 	:action="item.action"
                            :iconStyle="item.iconStyle"
                            :superScriptState="item.superScriptState"
                            :iconName="item.iconName"
                            :bid="item.bid"
                            @badge="test"
                    ></badge>
                </div>
            </div>
        </div>
        <div v-for="(item, i) in news" :key="i" class="cell-wrap">
            <n-news :news="item" class="cell-item"></n-news>
        </div>
        <!--<div style="flex: 1;">-->
            <!--<n-tabbar-->
                    <!--:scrolleable="scrolleable"-->
                    <!--:marginTop="tabbarTop"-->
                    <!--backgroundColor="#f7f7f7"-->
                    <!--bottomSelectedColor="#FB633C"-->
                    <!--bottomUnSelectedColor="#f7f7f7"-->
                    <!--:tabItems="tabItems"-->
                    <!--@tabBarOnClick="tabBarOnClick"/>-->
        <!--</div>-->
    </div>
</template>

<style>
    .personal-header-mesg {
        margin-left: 30px;
        margin-top: 20px;
    }

    .cell-wrap {
        width: 750px;
        background-color: #f8f8f8;
    }

    .cell-item {
        margin-bottom: 10px;
    }
</style>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import weexutil from 'utils/weex/instance'

    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    var modal = weex.requireModule('modal')

    let id_ico = 1,
        id_wiki = 2,
        id_app = 3,
        id_start = 4;

    export default {
        data() {
            return {
                oSearch: {
                    placeHolderText: '搜索区块链/币种/应用',
                    hasBtn: true,
                    searchWrapStyle: 'search-wrap-fc6d3f',
                    searchMoudleStyle: '',
                    inputSearchStyle: 'input-search-fff'
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
                badgeLinkData: [
                    {
                        bid: id_ico,
                        action() {                                  //点击回调
                            console.log('click badge1');
                        },
                        iconStyle: {
                            url: '/src/view/knowMore/images/ico.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'ICO爆料'
                        }
                    },
                    {
                        bid: id_wiki,
                        action() {                                  //点击回调
                            console.log('click badge2');
                        },
                        iconStyle: {
                            url: '/src/view/knowMore/images/link-wiki.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: '链百科'
                        }
                    },
                    {
                        bid: id_app,
                        action() {                                  //点击回调
                            console.log('click badge2');
                        },
                        iconStyle: {
                            url: '/src/view/knowMore/images/link-app.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: '链应用'
                        }
                    },
                    {
                        bid: id_start,
                        action() {                                  //点击回调
                            console.log('click badge3');
                            navigator.push(routerPage.getStarted)
                        },
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: '新手营'
                        }
                    }
                ],
                scrolleable: true,
                tabbarTop: 285,
                tabItems: [
                    {
                        index: 0,
                        title: '全部',
                        titleFontSize: '28px',
                        src: '/wikiClass.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '比特币',
                        titleFontSize: '28px',
                        src: '/test.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '以太坊',
                        titleFontSize: '28px',
                        src: '/icoRate/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 3,
                        title: 'ETH',
                        titleFontSize: '28px',
                        src: '/icoIntro/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 4,
                        title: 'ETC',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 5,
                        title: 'BTS',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 6,
                        title: 'BCC',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 7,
                        title: 'EOS',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 8,
                        title: 'OMG',
                        titleFontSize: '28px',
                        src: '/icoTeam/index.js',
                        visibility: 'hidden',
                    }
                ],
                news: [
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: '',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    }
                ]
            }
        },
        components: {
            cellFresh: require('components/cells/cellFresh.vue'),
            nSearch: require('components/search/search-hasBtn.vue'),
            badge: require('components/badge/index.vue'),
            nTabbar: require('components/tabbar/tabbar.vue'),
            nNews: require('components/news/index.vue')
        },
        methods: {
            test(v) {
                modal.toast({
                    message: v,
                    duration: 0.3
                })
                if (v == id_ico) {
                    navigator.push(routerPage.ico)
                } else if(v == id_wiki) {
                    navigator.push(routerPage.wikiIndex)
                } else if(v == id_app) {
                    navigator.push(routerPage.appIndex)
                } else if(v == id_start) {
                    navigator.push(routerPage.getStarted)
                }
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