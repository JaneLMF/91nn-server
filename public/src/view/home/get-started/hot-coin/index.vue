<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	import nn from 'utils/debug'
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
	export default {
        beforeCreate () {
            nn.log(this.name + ' beforeCreate');
        },
        created() {
            nn.log(this.name + ' created');
        },
        beforeMount() {
            nn.log(this.name + ' beforeMount');
        },
        mounted () {
            nn.log(this.name + ' mounted');
        },
        beforeDestroy() {
            nn.log(this.name + ' beforeDestory');
        },
        destroyed() {
            nn.log(this.name + ' destroyed');
        },
		data() {
            return {
                name: 'hot-coin',
                coins: [
                    {
                        id: '0',
                        name: '比特币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '1',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: -1.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '2',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: -0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '3',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 1.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '4',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '5',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '6',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '7',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '8',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    },
                    {
                        id: '9',
                        name: '云储币',
                        storeName: '云币网',
                        unit: '$',
                        increase: 0.6,
                        cnyPrice: '1800',
                        usdPrice: '300',
                    }
                ],
            bannerData: [
                {
                    id: '1',
                    url: 'https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png'
                },
                {
                    id: '2',
                    url: 'https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png'
                },
                {
                    id: '3',
                    url: 'https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png'
                }
            ]
            }
        },
        methods:{
            bannerItemClick(id){
              nn.log('bannerItemClick ' + id)
            }
        },
        components:{
            sliderNeighbor: require('components/slider-neighbor/slider-neighbor-page.vue'),
            nMarket: require('view/coin-market/market/index.vue')
        }
	}
</script>

