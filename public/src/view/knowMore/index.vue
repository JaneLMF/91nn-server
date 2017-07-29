<template>
    <list>
        <cell>
            <n-search :oSearch="oSearch">
                <badge class="personal-header-mesg"
                       :action="badgeData.action"
                       :iconStyle="badgeData.iconStyle"
                       :superScriptState="badgeData.superScriptState"
                       :iconName="badgeData.iconName"
                ></badge>
            </n-search>
        </cell>
        <cell>
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
        </cell>
        <cell v-for="(item, i) in news" :key="i" class="cell-wrap">

            <cell-fresh :newsDetails="item.newsDetails" class="cell-item"></cell-fresh>
        </cell>
    </list>
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
                news: [
                    {
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '15:30',
                                comment: '0',
                                forward: '0',
                                agree: '0'
                            },
                            cellModule: {
                                user: {
                                    tit: '',
                                    content: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                                    contentImg: [
                                        'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                                    ]
                                }
                            }
                        }
                    },
                    {
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '15:30',
                                comment: '0',
                                forward: '0',
                                agree: '0'
                            },
                            cellModule: {
                                user: {
                                    tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                                    content: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                                    contentImg: []
                                }
                            }
                        }
                    },
                    {
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '15:30',
                                comment: '0',
                                forward: '0',
                                agree: '0'
                            },
                            cellModule: {
                                user: {
                                    tit: '',
                                    content: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                                    contentImg: []
                                }
                            }
                        }
                    },
                    {
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '15:30',
                                comment: '0',
                                forward: '0',
                                agree: '0'
                            },
                            cellModule: {
                                user: {
                                    tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                                    content: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                                    contentImg: [
                                        'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                                    ]
                                }
                            }
                        }
                    },
                    {
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '15:30',
                                comment: '0',
                                forward: '0',
                                agree: '0'
                            },
                            cellModule: {
                                user: {
                                    tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                                    content: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                                    contentImg: [
                                        'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                                        'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                                    ]
                                }
                            }
                        }
                    }
                ],
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
                ]
            }
        },
        components: {
            tabGroup: require('../../components/tab/tabGroup.vue'),
            tabItem: require('../../components/tab/tabItem.vue'),
            cellFresh: require('components/cells/cellFresh.vue'),
            nSearch: require('components/search/search-hasBtn.vue'),
            badge: require('components/badge/index.vue')
        },
        methods: {
            test(v) {
                modal.toast({
                    message: v,
                    duration: 0.3
                })
                if (v == id_ico) {

                } else if(v == id_wiki) {
                    navigator.push(routerPage.wikiIndex)
                } else if(v == id_app) {
                    navigator.push(routerPage.appIndex)
                } else if(v == id_start) {
                    navigator.push(routerPage.getStarted)
                }
            }
        }
    }
</script>