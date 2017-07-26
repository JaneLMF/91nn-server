<template>
	<list @viewappear="viewappear">
		<cell>
			<banner :bannerData="bannerData"></banner>
		</cell>
		<cell>
			<div style="flex-direction: row; justify-content: space-around; width: 750px; height: 185px;">
				<div v-for="(item, i) in badgeData" :key="i" style="justify-content: space-around; align-items: center;">
					<badge 	:action="item.action"
							:iconStyle="item.iconStyle"
							:superScriptState="item.superScriptState"
							:iconName="item.iconName"
					></badge>
				</div>
			</div>
		</cell>
		<cell>
			<tab-group class="tab-group" :value="tabBarValue" :tabs="tabGroupLabel" @input="v=>tabBarValue=v" :tabBarClass="tabBarClass">
				<div v-for="(item, i) in tabGroupLabel" :key="i">
					<tab-item class="tab-item" :label="item.label" :value="item.value">
						<scroller style="background-color: #f8f8f8">
							<div v-for="(item, i) in articleGroup" :key="i">
								<text-cell :article="item"></text-cell>
							</div>
						</scroller>
					</tab-item>
				</div>
			</tab-group>
		</cell>
	</list>
</template>
<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
    export default {
        data() {
            return {
                bannerData: [
                    {
                        imageUrl: '/src/view/link-wiki/images/start-all.png',
                        callBack() {

                        }
                    },
                    {
                        imageUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg',
                        callBack() {

                        }
                    },
                    {
                        imageUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg',
                        callBack() {

                        }
                    }
				],
				badgeData: [
                    {
                        action() {                                  //点击回调
                            console.log('click badge1');
                        },
                        iconStyle: {
                            url: '/src/view/home/images/badge-ico.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: true,                  //是否需要
                            state: '1',                              //角标类型
                            content: 'HOT'
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: 'ICO爆料'
                        }
                    },
                    {
                        action() {                                  //点击回调
                            console.log('click badge2');
                        },
                        iconStyle: {
                            url: '/src/view/home/images/badge-boss.png',                                //图片源
                            size: 'm'
                        },
                        superScriptState: {
                            hasSuperScript: true,                  //是否需要
                            state: '1',                              //角标类型
                            content: 'HOT'
                        },
                        iconName: {
                            hasName: true,                         //是否有tit
                            name: '大咖秀'
                        }
                    },
                    {
                        action() {                                  //点击回调
                            console.log('click badge3');
                            navigator.push(routerPage.getStarted)
                        },
                        iconStyle: {
                            url: '/src/view/home/images/badge-new.png',                                //图片源
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
				],
                tabGroupLabel: [
                    {
                        label: '全部',
						value: 0
					},
                    {
                        label: 'btccccc',
                        value: 1
                    },
                    {
                        label: 'eth',
                        value: 2
                    },
                    {
                        label: 'eos',
                        value: 3
                    },
                    {
                        label: 'omg',
                        value: 4
                    },
                    {
                        label: 'bts',
                        value: 5
                    },
                    {
                        label: '1st',
                        value: 6
                    },
                    {
                        label: 'dogge',
                        value: 7
                    },
                    {
                        label: 'ans',
                        value: 8
                    },
                    {
                        label: 'zec',
                        value: 9
                    }
				],
                tabBarValue: 0,
				tabBarClass: {
                    activeClass: 'homePage-active',
                    defaultClass: 'homePage-default',
					tabBarStyle: 'homePage-tabBarNav',
                    hasNextBtn: true
				},
                articleGroup: [
                    {
						headerUrl: '/src/view/home/images/badge-boss.png',
						userName: 'tfboys',
						userIsuue: 'weibo',
						articleTime: '2017-07-15 18:09:35',
						articleContent: '金香是一个互联网黄金理财平台，提供数字黄金的买卖、存取及线下提取等服务，致力于满足用户无障碍黄金流通服务。金香将数字黄金资产发行到布萌，数字黄金资产由上海黄金交易所等价实物黄金背书，其价值稳定、便于流通，未来任何有价值的资产都可以与金香黄金进行等价兑换。',
						articleImg: [
							'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
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
                        articleImg: [
                            'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                            'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
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
                ]
			}
        },
        components:{
            banner: require('../../components/slider/index.vue'),
			badge: require('../../components/badge/index.vue'),
			tabGroup: require('../../components/tab/tabGroup.vue'),
			tabItem: require('../../components/tab/tabItem.vue'),
            textCell:require('./cells/text-cell.vue'),
        },
        methods:{
            viewappear(){
                console.log('viewappear')
            }
        }
    }
</script>
<style>

</style>