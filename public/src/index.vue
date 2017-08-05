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
				tabItems: [{
						index: 0,
						title: '首页',
						titleColor: '#888888',
						icon: '',
						image: '/src/view/home/images/homePage.png',
						selectedImage: '/src/view/home/images/homePage-active.png',
						src: '/view/home/index.js',
						visibility: 'visible',
					},
					{
						index: 1,
						title: '知库',
						titleColor: '#888888',
						icon: '',
						image: '/src/view/home/images/baike.png',
						selectedImage: '/src/view/home/images/baike-active.png',
						src: '/view/knowMore/index.js',
						visibility: 'hidden',
					},
                    {
                        index: 2,
                        title: '币行情',
                        titleColor: '#888888',
                        icon: '',
                        image: '/src/view/home/images/coin.png',
                        selectedImage: '/src/view/home/images/coin-active.png',
                        src: '/view/coin-market/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 3,
                        title: '个人',
                        titleColor: '#888888',
                        icon: '',
                        image: '/src/view/home/images/user.png',
                        selectedImage: '/src/view/home/images/user-active.png',
                        src: '/view/personal/index.js',
                        visibility: 'hidden',
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