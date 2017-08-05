<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
	export default {
	    data() {
	        return {
                tabbarTop: 80,
                oSearch: {
                    placeHolderText: '输入关键词',
                    hasBtn: true,
                    searchWrapStyle: 'search-wrap-fc6d3f',
                    searchMoudleStyle: '',
                    inputSearchStyle: 'input-search-fff'
                },
                tabItems: [
                    {
                        index: 0,
                        title: '自选',
                        titleFontSize: '30px',
                        src: '/optional/index.js',
                        visibility: 'visible',
                    },
                    {
                        index: 1,
                        title: '比特币',
                        titleFontSize: '30px',
                        src: '/optional/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 2,
                        title: '莱特币',
                        titleFontSize: '30px',
                        src: '..//home/get-started/hot-coin/index.js',
                        visibility: 'hidden',
                    },
                    {
                        index: 3,
                        title: 'ETH',
                        titleFontSize: '30px',
                        src: '..//home/get-started/hot-coin/index.js',
                        visibility: 'hidden',
                    }
                ]
            }
        },
        created: function() {
            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = config.js(tabItem.src)
                nn.log(tabItem.src)
            }
        },
        methods: {
            tabBarOnClick(e){

            },
        },
		components: {
            nSearch: require('components/search/search-hasBtn.vue'),
            nTabbar: require('./tab/tabbar.vue'),
        },

	}
</script>

