<template src="./index.html"></template>

<style src="./index.css"></style>

<script>
    export default {
        data() {
            return {
                article: {
                    headerUrl: '/src/view/home/images/badge-boss.png',
                    userName: '比特币',
                    subTitle: '',
                    headerStyle: 'user-wiki-details'
                },
                level: {
                    score: '4.8',
                    startStyle: 'bc-start-middle'
                },
                coinInfo: {
                    tokenName: 'BTC',
                    consensusAlgorithm: 'POW',
                    byRegion: '美国',
                    deliveryTime: '2009-08-23',
                    teamGroup: 'Nakamoto/Andy/Jon',
                    whitePaper: 'http://wwww.bitcoin.org/paper',
                    github: 'http://i.github.com/67541',
                    introduction: '众托帮是一款主打互助保障类产品的APP，让加入会员之间实现经济互助，风险互抵，让申请互助的会员大病有钱医，费用大家摊，加入用户能以小的投入获得高的...',
                    teamGroupIntro: [
                        {
                            name: '刘强(白菜)',
                            intro: 'BitShares 社区深度参与者,HelloBTS创始人, YOYOW 项目创始人。'
                        },
                        {
                            name: '刘嘉陵(巨蟹)',
                            intro: '国内早期区块链项目布道者和投资者，比特创业营创始成员，比特股和以太坊项目早期参与者，比特股理事会理事。'
                        },
                        {
                            name: '刘强',
                            intro: 'BitShares 社区深度参与者,HelloBTS创始人, YOYOW 项目创始人。'
                        }
                    ],
                    timeLine: [
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        },
                        {
                            date: '2017-06-05',
                            content: '中本聪在位于芬兰赫尔辛基的一个小型服务器上挖出了第一批比特币50个'
                        }
                    ]

                },
                tabGroupLabel: [
                    {
                        label: '评论',
                        value: 0
                    },
                    {
                        label: '新闻',
                        value: 1
                    },
                    {
                        label: '团队',
                        value: 2
                    },
                    {
                        label: '大事记',
                        value: 3
                    },
                    {
                        label: '应用',
                        value: 4
                    }
                ],
                tabBarValue: 0,
                tabBarClass: {
                    activeClass: 'homePage-active',
                    defaultClass: 'homePage-default',
                    tabBarStyle: 'homePage-tabBarNav',
                    hasNextBtn: false
                },
                bc: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: 'POW',
                        level: '2.8',
                        startStyle: 'bc-start-small'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: 'POW',
                        level: '4.5',
                        startStyle: 'bc-start-small'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: 'POW',
                        level: '1.0',
                        startStyle: 'bc-start-small'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: 'POW',
                        level: '4.0',
                        startStyle: 'bc-start-small'
                    }
                ],
                app: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        purpose: '资产交易',
                        platform: '以太坊'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        purpose: '资产交易',
                        platform: '以太坊'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        purpose: '资产交易',
                        platform: '以太坊'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        purpose: '资产交易',
                        platform: '以太坊'
                    }
                ],
                articleGroup: [
                    {
                        headerUrl: '/src/view/home/images/badge-boss.png',
                        userName: 'tfboys',
                        userIsuue: 'weibo',
                        articleTime: '2017-07-15 18:09:35',
                        articleContent: '金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。',
                        articleImg: [
                            'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                            'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                            'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                        ],
                        comment: '1',
                        forward: '7',
                        agree: '5'
                    },
                    {
                        headerUrl: '/src/view/home/images/badge-boss.png',
                        userName: 'tfboys',
                        userIsuue: 'weibo',
                        articleTime: '2017-07-15 18:09:35',
                        articleContent: '金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。',
                        articleImg: [],
                        comment: '1',
                        forward: '7',
                        agree: '5'
                    },
                    {
                        headerUrl: '/src/view/home/images/badge-boss.png',
                        userName: 'tfboys',
                        userIsuue: 'weibo',
                        articleTime: '2017-07-15 18:09:35',
                        articleContent: '金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。',
                        articleImg: [
                            'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                            'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                            'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
                        ],
                        comment: '1',
                        forward: '7',
                        agree: '5'
                    }
                ],
                comment: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    }
                ],
                commentFooter: {
                    placeholderText: '谈谈你对此区块链的看法...',
                    isFollow: false
                }
            }
        },
        components: {
            tabGroup: require('../../../components/tab/tabGroup.vue'),
            tabItem: require('../../../components/tab/tabItem.vue'),
            userHeader: require('../../../components/userHeader/index.vue'),
            starts: require('../../../components/starts/index.vue'),
            textCell:require('../../home/cells/text-cell.vue'),
            VTimeline:require('../../../components/timeLine/Timeline.vue'),
            VTimelineItem:require('../../../components/timeLine/TimelineItem.vue'),
            commentGroup: require('../../../components/commentGroup/index.vue'),
            commentFooter: require('../../../components/commentFooter/index.vue')
        }
    }
</script>