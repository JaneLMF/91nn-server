<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	import nn from 'utils/debug'
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
                            star: 3.0,
                        },
                        {
                            id: '1',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '以太坊',
                            date: '2017-05-15',
                            status: 'ICO',
                            star: 4.0,
                        },
                        {
                            id: '2',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5.0,
                        },
                        {
                            id: '3',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5.0,
                        },
                        {
                            id: '4',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5.0,
                        },
                        {
                            id: '5',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比91nnnnn',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5,
                        },
                        {
                            id: '6',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5,
                        },
                        {
                            id: '7',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5,
                        },
                        {
                            id: '8',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5,
                        },
                        {
                            id: '9',
                            icon: '/src/view/home/images/badge-boss.png',
                            name: '布比',
                            date: '2017-08-15',
                            status: 'POW',
                            star: 5,
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
            },
            oncellclick(id) {
              nn.log('oncellclick ' + id)
            }
        },
        components:{
            sliderNeighbor: require('components/slider-neighbor/slider-neighbor-page.vue')
        }
	}
</script>

