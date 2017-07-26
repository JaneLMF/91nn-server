<template>
	<div>
		<text-cell v-if = "type == 0 " :article="article"></text-cell>
		<image-cell v-if="type == 1"></image-cell>
	</div>
</template>

<script>
	export default {
		props:{
			type:{default: 0}
		},
		data() {
		    return {
		        article: {
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
			}
		},
		components: {
			textCell: require('./text-cell.vue'),
			imageCell: require('./image-cell.vue')
		}
	}
</script>

<style>

</style>