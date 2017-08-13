<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import wtj from 'utils/modules/wtj'

	export default {
		props: {
            index: {
                type: [String, Number, Boolean, Object, Array],
                default: 0
            },
      	},
		data() {
			return {
                tabbarTop: 0,
                title: '新手营',
                navBarHeight: 88,
                dir: 'examples',
                baseURL: '',
                subPath: weex.config.env.platform === 'Web' ? 'vue-web/' : '',

                tabItems: [
                    {
                        index: 0,
                        name: 'school',
                        title: '新手学堂',
                        titleFontSize: '30px',
                        src: '/school/index.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        name: 'hot-chain',
                        title: '热链推荐',
                        titleFontSize: '30px',
                        src: '/hot-chain/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        name: 'hot-coin',
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    },
                ]
			}
        },

        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
                nn.log('tabItem.src ' + tabItem.src)
            }
        },
        methods: {
            selectTab(tab){
                console.log('select ' + tab.index)
                this.index = tab.index
            },
            tabBarOnClick: function(e) {
                nn.log('tabBarOnClick ' + e.index);
                wtj.onPageStart(e.name);
            },
        },
        components:{
            nTabbar: require('components/tabbar/tabbar.vue'),
            backNavpage: require('components/navbar/back-navbar.vue'),
        }
	}
</script>

