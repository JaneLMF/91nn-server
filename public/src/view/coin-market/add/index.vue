<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
	export default {
        props: {
            coins: {
                default(){
                    return [
                        {
                            id: '0',
                            name: '比特币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '1',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: -1.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'true'
                        },
                        {
                            id: '2',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: -0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '3',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 1.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '4',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '5',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '6',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '7',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '8',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        },
                        {
                            id: '9',
                            name: '云储币',
                            storeName: '云币网',
                            unit: '$',
                            increase: 0.6,
                            cnyPrice: '1800',
                            usdPrice: '300',
                            follow: 'false'
                        }
                    ]
                }
            },
            switchIsChecked: { default: 'female' },
            hasIcon: { default: false }
        },
        data: {
            title: '添加币'
        },
        methods:{
            oncellclick(id) {
                navigator.push(routerPage.coinDetails,
                    {
                        id: id
                    })
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            switchBtn: require('components/switchBtn/index.vue'),
        }
	}
</script>

