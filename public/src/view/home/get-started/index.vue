<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'

	export default {
		props: {
            index: {
                type: [String, Number, Boolean, Object, Array],
                default: 0
            },
      	},

		data() {
			return {
				tabs: [
					{
						label: '新手学堂',
						index: 0
					},
					{
                        label: '热链推荐',
                        index: 1
                    },
                    {
                        label: '热币推荐',
                        index: 2
                    }
				],
				tabGroupLabel: [
                    {
                        label: '新手学堂',
						value: 0
					},
                    {
                        label: '热链推荐',
                        value: 1
                    },
                    {
                        label: '热币推荐',
                        value: 2
                    }
				],
                tabBarValue: 0,
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
                tabItems: [
                    {
                        index: 0,
                        title: '新手学堂',
                        titleFontSize: '30px',
                        src: '/school/index.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '热链推荐',
                        titleFontSize: '30px',
                        src: '/hot-chain/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    }
                ]
			}
        },
        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
            }
        },
        methods: {
            selectTab(tab){
                console.log('select ' + tab.index)
                this.index = tab.index
            },
            tabBarOnClick: function(e) {
                console.log('tabBarOnClick', e.index)
            }
        },
        components:{
            banner: require('components/slider/index.vue'),
			badge: require('components/badge/index.vue'),
			tabGroup: require('components/tab/tabGroup.vue'),
			tabItem: require('components/tab/tabItem.vue'),
            textCell:require('../cells/text-cell.vue'),
            oscTabbar: require('./tab/tabbar.vue'),
        }
	}
</script>

