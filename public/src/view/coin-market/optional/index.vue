<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import nn from 'utils/debug'
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
    export default {
        mounted () {

        },
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
                    ]
                }
            }
        },
        methods:{
            oncellclick(id) {
                nn.log('oncellclick ' + id)
                navigator.push(routerPage.coinDetails,{
                    id : id
                })
            }
        },
    }
</script>

