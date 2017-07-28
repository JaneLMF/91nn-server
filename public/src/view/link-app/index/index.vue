<template src="./index.html"></template>
<style src="./index.css"></style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                oSearch: {
                    placeHolderText: '搜索应用',
                    hasBtn: false,
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
                bc: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: '资产交易',
                        jumpDetails() {
                            navigator.push(routerPage.appDetails)
                        }
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: '资产交易',
                        jumpDetails() {
                            navigator.push(routerPage.appDetails)
                        }
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: '资产交易',
                        jumpDetails() {
                            navigator.push(routerPage.appDetails)
                        }
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: 'tfboys',
                            subTitle: 'weibo',
                            headerStyle: 'user'
                        },
                        algorithm: '资产交易',
                        jumpDetails() {
                            navigator.push(routerPage.appDetails)
                        }
                    }
                ],
                tabBarValue: 0,
                tabBarClass: {
                    activeClass: 'link-wiki-active',
                    defaultClass: 'link-wiki-default',
                    tabBarStyle: 'linkWiki-tabBarNav',
                    hasNextBtn: false
                },
            }
        },
        components: {
            tabGroup: require('../../../components/tab/tabGroup.vue'),
            tabItem: require('../../../components/tab/tabItem.vue'),
            userHeader: require('../../../components/userHeader/index.vue'),
            nSearch: require('../../../components/search/search-hasBtn.vue')
        }
    }
</script>