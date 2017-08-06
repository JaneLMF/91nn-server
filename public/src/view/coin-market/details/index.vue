<template src="./index.html"></template>
<style src="./index.css"></style>

<script>
    export default {
        data() {
            return {
                title: '详情',
                badgeData: {
                    action() {                                  //点击回调
                        console.log('click badge1');
                    },
                    iconStyle: {
                        url: '/src/view/home/images/badge-ico.png',                                //图片源
                        size: 'l'
                    },
                    superScriptState: {
                        hasSuperScript: false,                  //是否需要
                    },
                    iconName: {
                        hasName: true,                         //是否有tit
                        name: '比特币'
                    }
                },
                infoBox: [
                    {
                        tit: '所用区块链',
                        content: '比特币／BitCoin',
                        callBack() {

                        }
                    }
                ],
                commentFooter: {
                    placeholderText: '谈谈你对此应用的看法...',
                    isFollow: false
                },
                proIntroContent: '比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比出，根据中本聪的思路设计发布的开源特币是一种P2P形式的...',
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
                tabGroupLabel: [
                    {
                        label: '评论',
                        value: 0
                    },
                    {
                        label: '新闻',
                        value: 1
                    }
                ],
                tabBarValue: 0,
                tabBarClass: {
                    activeClass: 'homePage-active',
                    defaultClass: 'homePage-default',
                    tabBarStyle: 'homePage-tabBarNav',
                    hasNextBtn: false
                },
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
                appInfo: {
                    industry: '网络互助',
                    deliveryTime: '2009-08-23',
                    userCount: '900万'
                }
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            badge: require('components/badge/index.vue'),
            infoRow: require('components/infoRow/index.vue'),
            commentFooter: require('components/commentFooter/index.vue'),
            contentSummary: require('components/contentSummary/index.vue'),
            commentGroup: require('components/commentGroup/index.vue'),
            tabGroup: require('components/tab/tabGroup.vue'),
            tabItem: require('components/tab/tabItem.vue'),
            textCell:require('../../home/cells/text-cell.vue')
        }
    }
</script>