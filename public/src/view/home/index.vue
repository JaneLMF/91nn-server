<template>
    <div class="home-wrap">
        <list class="list-wrap">
            <cell>
                <n-search :oSearch="oSearch">
                    <badge class="personal-header-mesg"
                           :action="badgeData.action"
                           :iconStyle="badgeData.iconStyle"
                           :superScriptState="badgeData.superScriptState"
                           :iconName="badgeData.iconName"></badge>
                </n-search>
            </cell>
            <cell v-for="(item, i) in news" :key="i" class="cell-wrap">
                <cell-fresh :newsDetails="item.newsDetails" class="cell-item"></cell-fresh>
            </cell>
        </list>
        <div>
            <image src="/src/view/home/images/fatie.png" class="fatie" @click="toFatie"></image>
            <all-screen-modal :flag="modalFlag" :openIt="v=>modalFlag=v" class="all-screen-modal"></all-screen-modal>
        </div>
    </div>
</template>

<style>
    /*.home-wrap {*/
        /*position: relative;*/
    /*}*/

    /*.list-wrap {*/
        /*position: absolute;*/
        /*top: 0px;*/
        /*left: 0px;*/
    /*}*/

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

    .fatie {
        position: fixed;
        bottom: 60px;
        right: 60px;
        width: 100px;
        height: 100px;
    }

    /*.all-screen-modal {*/
        /*width: 750px;*/
        /*position: absolute;*/
        /*top: 0px;*/
        /*left: 0px;*/
        /*z-index: 10;*/
    /*}*/
</style>

<script>
    var modal = weex.requireModule('modal')

    export default {
        data() {
            return {
                modalFlag: false,
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
                ]
            }
        },
        components: {
            cellFresh: require('components/cells/cellFresh.vue'),
            nSearch: require('components/search/search-hasBtn.vue'),
            badge: require('components/badge/index.vue'),
            allScreenModal: require('components/allScreenModal/index.vue')
        },
        methods: {
            toFatie() {
                this.modalFlag = !this.modalFlag;

                modal.toast({
                    message: this.modalFlag,
                    duration: 0.3
                })
            }
        }
    }
</script>