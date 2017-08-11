<template>
    <back-navpage :title="title">
        <div class="ico-wrap">
            <div class="hot-ico-bg">
                <div class="hot-ico-wrap">
                    <text class="hot-ico-tit">热门ICO</text>
                    <scroller show-scrollbar="false" scroll-direction="horizontal" class="hot-ico-group">
                        <div v-for="(item, i) in badgeLinkData" :key="i" style="justify-content: space-around; align-items: center; margin-right: 40px;">
                            <badge
                                  :iconStyle="item.iconStyle"
                                  :superScriptState="item.superScriptState"
                                  :iconName="item.iconName"
                                  @badge="test"
                            ></badge>
                        </div>
                    </scroller>
                </div>
            </div>
            <div class="hot-ico-bg my-follow-ico-wrap">
                <div class="hot-ico-wrap">
                    <text class="hot-ico-tit">关注的ICO</text>
                    <scroller show-scrollbar="false" scroll-direction="horizontal" class="hot-ico-group">
                        <div v-for="(item, i) in badgeLinkData" :key="i" style="justify-content: space-around; align-items: center; margin-right: 40px;">
                            <badge
                                    :iconStyle="item.iconStyle"
                                    :superScriptState="item.superScriptState"
                                    :iconName="item.iconName"
                                    @badge="test"
                            ></badge>
                        </div>
                    </scroller>
                </div>
            </div>
            <n-tabbar
                    :marginTop="tabbarTop"
                    backgroundColor="#f7f7f7"
                    bottomSelectedColor="#FB633C"
                    bottomUnSelectedColor="#f7f7f7"
                    :tabItems="tabItems"
                    @tabBarOnClick="tabBarOnClick"/>
        </div>
    </back-navpage>
</template>

<style>
    .ico-wrap {
        width: 750px;
        flex: 1;
        background-color: #f8f8f8;
    }

    .hot-ico-bg {
        width: 750px;
        background-color: #fff;
    }

    .hot-ico-wrap {
        width: 720px;
        margin-left: 30px;
    }

    .my-follow-ico-wrap {
        margin-top: 10px;
    }

    .hot-ico-tit {
        margin-top: 30px;
        margin-bottom: 30px;
        padding-left: 10px;
        font-size: 28px;
        color: #333333;
        border-left-width: 4px;
        border-color: #fc6d3f;
    }

    .hot-ico-group {
        margin-bottom: 40px;
        flex-direction: row;
        width: 720px;
        height: 150px;
        /*border-width: 1px;*/
    }
</style>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import weexutil from 'utils/weex/instance'

    export default {
        data() {
            return {
                title: 'ICO爆料',
                tabbarTop: 580,
                tabItems: [
                    {
                        index: 0,
                        title: '即将开始',
                        titleFontSize: '30px',
                        src: '/icoLevel.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '进行中',
                        titleFontSize: '30px',
                        src: '/icoLevel.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '已完成',
                        titleFontSize: '30px',
                        src: '/icoLevel.js',
                        visibility: 'hidden',
                    }
                ],
                badgeLinkData: [
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/ico.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'YOYOW'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/link-wiki.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'Taas'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/link-app.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'ipfs'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    },
                    {
                        iconStyle: {
                            url: '/src/view/knowMore/images/get-start.png',                                //图片源
                            size: 'xm'
                        },
                        superScriptState: {
                            hasSuperScript: false,                  //是否需要
                            state: '',                              //角标类型
                            content: ''
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'tenx'
                        }
                    }
                ]
            }
        },
        components: {
            nTabbar: require('components/tabbar/tabbar.vue'),
            badge: require('components/badge/index.vue'),
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