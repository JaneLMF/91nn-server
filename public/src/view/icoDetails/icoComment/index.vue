<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    export default {
        data() {
            return {
                comment: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    }
                ]
            }
        },
        components: {
            commentGroup: require('components/commentGroup/index.vue')
        }
    }
</script>