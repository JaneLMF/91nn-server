<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'

	export default {
		props: {
            index: {
                type: [String, Number, Boolean, Object, Array],
                default: 0
            },
      	},

		data() {
			return {
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
                    {
                        index: 2,
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '热币推荐',
                        titleFontSize: '30px',
                        src: '/hot-coin/index.js',
                        visibility: 'hidden',
                    }
                ]
			}
        },
        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
            }
        },
        methods: {
            selectTab(tab){
                console.log('select ' + tab.index)
                this.index = tab.index
            },
            tabBarOnClick: function(e) {
                console.log('tabBarOnClick', e.index)
            }
        },
        components:{
            oscTabbar: require('./tab/tabbar.vue'),
        }
	}
</script>

