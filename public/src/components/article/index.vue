<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

	export default {
        props: {
            userType: { default: '' },
            articleType: { default: 'news' },
            title: { default: '' },
            summary: { default: '' },
            author: {
                default() {
                    return {

                    }
                }
            },
            commentCount: { default: '' },
            upvoteCount: { default: '' },
            createAt: { default: '' },
            images: {
                default() {
                    return []
                }
            },
//            news: {
//                default() {
//                    return {
//                        articleID: '',
//                        tit: '',
//                        intro: '',
//                        imgUrl: '',
//                        issue: '',
//                        comment: '',
//                        agree: '',
//                        time: ''
//                    }
//                }
//            },
            dynamic: {
                default() {
                    return {
                        userName: '',
                        content: ''
                    }
                }
            },
            newsDetails: {
                default() {
                    return {

                    }
                }
            }
        },
        methods: {
            viewNewsDetails() {
                navigator.push(routerPage.repostPage);
            }
        },
        components: {
            nNews: require('components/article/news/index.vue'),
            nDynamic: require('components/article/dynamic/index.vue'),
//            nCoin: require('components/article/coin/index.vue'),
//            nLink: require('components/article/link/index.vue')
        }
	}
</script>

