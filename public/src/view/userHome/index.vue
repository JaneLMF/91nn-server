<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                isfollow: false,
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
                },
                jumpMyNews() {
                    navigator.push(routerPage.myNews)
                },
                jumpMyFavorites() {
                    navigator.push(routerPage.myFavorites)
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
                    }
                ],
                articleArr: [
                    {
                        repostMesgArr: [
                            {
                                type: 'text',
                                repostInfo: 'test'
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            }
                        ],
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '15:30',
                            comment: '0',
                            forward: '0',
                            agree: '0'
                        },
                        news: {
                            articleID: '',
                            tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                            intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                            imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                            issue: '比特大时代',
                            comment: '10',
                            agree: '10',
                            time: '07/23'
                        },
                        articleType: 'news'
                    },
                    {
                        repostMesgArr: [
                            {
                                type: 'text',
                                repostInfo: 'test'
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            }
                        ],
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '15:30',
                            comment: '0',
                            forward: '0',
                            agree: '0'
                        },
                        news: {
                            articleID: '',
                            tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                            intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                            imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                            issue: '比特大时代',
                            comment: '10',
                            agree: '10',
                            time: '07/23'
                        },
                        articleType: 'news'
                    },
                    {
                        repostMesgArr: [
                            {
                                type: 'text',
                                repostInfo: 'test'
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            }
                        ],
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '15:30',
                            comment: '0',
                            forward: '0',
                            agree: '0'
                        },
                        news: {
                            articleID: '',
                            tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                            intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                            imgUrl: '',
                            issue: '比特大时代',
                            comment: '10',
                            agree: '10',
                            time: '07/23'
                        },
                        articleType: 'dynamic',
                        dynamic: {
                            userName: '鹿晗',
                            content: '啊除了你我看呢乾瓦莱卡诺从 i 为你离开我呢俄方离开伯纳乌错误吃我就不从 win 单位'
                        }
                    },
                    {
                        repostMesgArr: [
                            {
                                type: 'text',
                                repostInfo: 'test'
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            },
                            {
                                type: 'user',
                                followType: 'user',
                                followTarget: '鹿晗'
                            },
                            {
                                type: 'text',
                                repostInfo: 'test',
                            }
                        ],
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '15:30',
                            comment: '0',
                            forward: '0',
                            agree: '0'
                        },
                        news: {
                            articleID: '',
                            tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                            intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                            imgUrl: '',
                            issue: '比特大时代',
                            comment: '10',
                            agree: '10',
                            time: '07/23'
                        },
                        articleType: 'dynamic',
                        dynamic: {
                            userName: '鹿晗',
                            content: '啊除了你我看呢乾瓦莱卡诺从 i 为你离开我呢俄方离开伯纳乌错误吃我就不从 win 单位'
                        }
                    }
                ],
                dynamic: [
                    {
                        type: 0,
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
                        type: 1,
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '12.30',
                                comment: '1',
                                forward: '2',
                                agree: '3'
                            },
                            cellModule: {
                                user: {
                                    content: 'repost',
                                    repostList: [
                                        {
                                            name: '王俊凯',
                                            content: 'T'
                                        },
                                        {
                                            name: '王源',
                                            content: 'F'
                                        },
                                        {
                                            name: '易洋千玺',
                                            content: 'BOYS'
                                        }
                                    ]
                                },
                                repostFrom: {
                                    name: '贺冲',
                                    tit: '美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
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
                        type: 2,
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '12.30',
                                comment: '1',
                                forward: '2',
                                agree: '3'
                            },
                            followType: 'coin',
                            followClass: '比特股',
                            followTarget: 'BTS',
                            coinPriceCNY: '1999.890',
                            coinPriceUS: '3077.48',
                            rise: '0.88%',
                            riseStatus: 'up'
                        }
                    },
                    {
                        type: 2,
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '12.30',
                                comment: '1',
                                forward: '2',
                                agree: '3'
                            },
                            followType: 'coin',
                            followClass: '比特股',
                            followTarget: 'BTS',
                            coinPriceCNY: '1999.890',
                            coinPriceUS: '3077.48',
                            rise: '0.88%',
                            riseStatus: 'down'
                        }
                    },
                    {
                        type: 3,
                        newsDetails: {
                            article: {
                                headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                userName: '鹿晗',
                                userIssue: '你牛',
                                articleTime: '12.30',
                                comment: '1',
                                forward: '2',
                                agree: '3'
                            },
                            followType: 'link',
                            followClass: '比特股',
                            followTarget: 'BTS',
                            coinPriceCNY: '1999.890',
                            coinPriceUS: '3077.48',
                            rise: '0.88%',
                            riseStatus: 'down'
                        }
                    }
                ]
            }
        },
        components: {
            userInfo: require('components/userInfo/index.vue'),
            badge: require('components/badge/index.vue'),
            actionRow: require('components/actionRow/index.vue'),
            cellFresh: require('components/cells/cellFresh.vue'),
            badge: require('components/badge/index.vue'),
            slotRepost: require('components/cells/slotRepost.vue'),
            cellCoin: require('components/cells/cellCoin.vue'),
            cellLink: require('components/cells/cellLink.vue')
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
            changeFollow() {
                this.isfollow = !this.isfollow;
            },
            viewInfo() {
                navigator.push(routerPage.userInfo)
            }
        }
    }
</script>

