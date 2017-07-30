<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import weexutil from 'utils/weex/instance'
    import navigator from 'utils/modules/navigator'

	export default {
		props: {
            index: {
                type: [String, Number, Boolean, Object, Array],
                default: 0
            },
      	},

		data() {
			return {
                title: '新手营',
                navBarHeight: 88,
                dir: 'examples',
                baseURL: '',
                subPath: weex.config.env.platform === 'Web' ? 'vue-web/' : '',

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
                    },
                ]
			}
        },
        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
            }
            //adapter navbar for ios
            if (weexutil.isIOS()){
                let env = weex.config.env;
                let scale = env.scale;
                let deviceWidth = env.deviceWidth / scale;
                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
            }
        },
        methods: {
            selectTab(tab){
                console.log('select ' + tab.index)
                this.index = tab.index
            },
            tabBarOnClick: function(e) {
                console.log('tabBarOnClick', e.index)
            },
            naviBarLeftItemClick: function(){
                navigator.pop()
            }
        },
        components:{
            nTabbar: require('components/tabbar/tabbar.vue'),
            navpage: require('components/navbar/navpage.vue'),
        }
	}
</script>

