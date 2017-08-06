<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import config from 'utils/config'
    import nn from 'utils/debug'
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    let id_add = 1, id_edit = 2;
	export default {
	    data() {
	        return {
                title: '行情',
                showmenu: false,
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
                menulist: [
                    {
                        id: id_add,
                        icon: '/resources/coin-market/menu_add.png',
                        title: '添加'
                    },
                    {
                        id: id_edit,
                        icon: '/resources/coin-market/menu_edit.png',
                        title: '编辑'
                    }
                ]
            }
        },
        created: function() {

        },
        methods: {
            naviBarRightItemClick(event){
                nn.log('naviBarRightItemClick');
                this.openMenu();
            },
            openMenu(){
                this.$refs.menu.open();
            },
            closeMenu(){
                this.$refs.menu.close();
            },
            clickMenuItem(id){
                nn.log('clickMenuItem ' + id);
                this.closeMenu();
                if (id_add == id){
                    navigator.push(routerPage.addCoin)
                }else if(id_edit == id){

                }
            }
        },
		components: {
            navpage: require('components/navbar/navpage.vue'),
            nNull: require('./null/index.vue'),
            nMarket: require('./market/index.vue'),
            nAdd: require('./add/index.vue'),
            nMenu: require('components/n-menu/index.vue')
        },

	}
</script>

