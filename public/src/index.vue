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
						src: '/view/home/home.js',
						visibility: 'visible',
					},
					{
						index: 1,
						title: '链百科',
						titleColor: '#888888',
						icon: '',
						image: '/src/view/home/images/baike.png',
						selectedImage: '/src/view/home/images/baike-active.png',
						src: '/view/link-wiki/index/index.js',
						visibility: 'hidden',
					},
					{
						index: 2,
						title: '链应用',
						titleColor: '#888888',
						icon: '',
						image: '/src/view/home/images/application.png',
						selectedImage: '/src/view/home/images/application-active.png',
						src: '/content3.js',
						visibility: 'hidden',
					},
                    {
                        index: 3,
                        title: '币行情',
                        titleColor: '#888888',
                        icon: '',
                        image: '/src/view/home/images/coin.png',
                        selectedImage: '/src/view/home/images/coin-active.png',
                        src: '/content3.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 4,
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