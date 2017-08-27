<template>
	<div style="flex-direction: column;">
		<osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"/>
	</div>
</template>
<script>
	import config from 'utils/config'
	module.exports = {
		data: function() {
			return {
				dir: 'examples',
				tabItems: [
				    {
						index: 0,
						title: '首页',
						titleColor: '#888888',
						icon: '',
						image: '/resources/navFoot/homePage.png',
						selectedImage: '/resources/navFoot/homePage-active.png',
						src: '/view/home/index.js',
						visibility: 'visible'
					},
					{
						index: 1,
						title: '百科',
						titleColor: '#888888',
						icon: '',
						image: '/resources/navFoot/baike.png',
						selectedImage: '/resources/navFoot/baike-active.png',
						src: '/view/knowMore/index.js',
						visibility: 'hidden'
					},
                    {
                        index: 2,
                        title: '币行情',
                        titleColor: '#888888',
                        icon: '',
                        image: '/resources/navFoot/coin.png',
                        selectedImage: '/resources/navFoot/coin-active.png',
                        src: '/view/coin-market/index.js',
                        visibility: 'hidden'
                    },
                    {
                        index: 3,
                        title: '个人',
                        titleColor: '#888888',
                        icon: '',
                        image: '/resources/navFoot/user.png',
                        selectedImage: '/resources/navFoot/user-active.png',
                        src: '/view/personal/index.js',
                        visibility: 'hidden'
                    }
				],
			}
		},
		components: {
			oscTabbar: typeof(window) == 'undefined' ? require('./components/tabbar.vue') : require('./components/tabbar-web.vue')
		},
		created: function() {
			for(var i = 0; i < this.tabItems.length; i++) {
				var tabItem = this.tabItems[i];
				tabItem.src = config.js(tabItem.src)
				console.log(tabItem.src)
			}
		},
		methods: {
			tabBarOnClick: function(e) {
				console.log('tabBarOnClick', e.index)
			}
		}
	}
</script>