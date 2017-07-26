<template src="./index.html"></template>
<style src="./index.css"></style>

<script>
    export default {
        data() {
            return {
                oSearch: {
                    placeHolderText: '搜索区块链',
                    hasBtn: true,
                    searchWrapStyle: 'search-wrap-fc6d3f',
                    searchMoudleStyle: '',
                    inputSearchStyle: 'input-search-fff'
                },
                tabGroupLabel: [
                    {
                        label: '自选',
                        value: 0
                    },
                    {
                        label: '全部',
                        value: 1
                    },
                    {
                        label: '公正防伪',
                        value: 2
                    },
                    {
                        label: '资产交易',
                        value: 3
                    },
                    {
                        label: '银行结算',
                        value: 4
                    },
                    {
                        label: '电子合同',
                        value: 5
                    },
                    {
                        label: '智能合约',
                        value: 6
                    },
                    {
                        label: '跨境支付',
                        value: 7
                    },
                    {
                        label: '去中心化交易所',
                        value: 8
                    },
                    {
                        label: '圈钱',
                        value: 9
                    }
                ],
                tabBarValue: 0,
                tabBarClass: {
                    activeClass: 'link-wiki-active',
                    defaultClass: 'link-wiki-default',
                    tabBarStyle: 'linkWiki-tabBarNav',
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
                ]
            }
        },
        components: {
            tabGroup: require('../../../components/tab/tabGroup.vue'),
            tabItem: require('../../../components/tab/tabItem.vue'),
            userHeader: require('../../../components/userHeader/index.vue'),
            starts: require('../../../components/starts/index.vue'),
            nSearch: require('../../../components/search/search-hasBtn.vue')
        }
    }
</script>