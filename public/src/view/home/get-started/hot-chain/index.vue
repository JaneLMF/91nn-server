<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	import nn from 'utils/debug'
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
	export default {
		mounted () {

		},
		props: {
			chains: {
				default(){
					return [
                        {
                            id: '0',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '比特币',
                            date: '2017-05-15',
                            status: 'POW',
                            star: '3.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '1',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '以太坊',
                            date: '2017-05-15',
                            status: 'ICO',
                            star: '4.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '2',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '3',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '4',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '5',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比91nnnnn',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '6',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '7',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '8',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        },
                        {
                            id: '9',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比棒',
                            date: '2017-08-15',
                            status: 'POW',
                            star: '5.0',
                            startStyle: 'bc-start-small',
                        }
                    ]
				}
			},
            bannerData: {
			    default(){
			        return [
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
            }
		},
        methods:{
            bannerItemClick(id){
              nn.log('bannerItemClick ' + id)
                wikiDetails
            },
            oncellclick(id) {
              nn.log('oncellclick ' + id)
              navigator.push(routerPage.wikiDetails,
                {
                    id: id
                })
            }
        },
        components:{
            sliderNeighbor: require('components/slider-neighbor/slider-neighbor-page.vue'),
            starts: require('components/starts/index.vue'),
        }
	}
</script>

