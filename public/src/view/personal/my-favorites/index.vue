<template>
    <back-navpage :title="title">
        <list>
            <cell v-if="news.length == 0" class="nofile-wrap">
                <image src="/src/view/personal/my-news/images/nofile.png" class="nofile"></image>
                <text class="nofile-tit">那么多美好的事，快去收藏他们吧！</text>
            </cell>
            <cell v-else v-for="(item, i) in news" :key="i" class="cell-wrap">
                <cell-fresh :newsDetails="item.newsDetails" class="cell-item"></cell-fresh>
            </cell>
        </list>
    </back-navpage>
</template>

<style>
    .nofile-wrap {
        width: 750px;
        height: 1024px;
        justify-content: center;
        align-items: center;
    }

    .nofile {
        width: 304px;
        height: 230px;
    }

    .nofile-tit {
        margin-top: 50px;
        font-size: 26px;
        color: #bbbbbb;
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
    export default {
        data() {
            return {
                title: '我的收藏',
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
            cellRepost: require('components/cells/cellRepost.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        }
    }
</script>