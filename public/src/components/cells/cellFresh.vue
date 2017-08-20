<template>
    <cell-container :footerType="footerType"
                    :author="newsDetails.author"
                    :articleTime="newsDetails.createAt"
                    :comment="newsDetails.commentCount"
                    :forward="newsDetails.transmitCount"
                    :agree="newsDetails.upvoteCount">
                    <!--@agree="v=>newsDetails.article.agree=v">-->
        <div class="article-module-bg" @click="viewDetails">
            <div class="article-tit-wrap" v-if="newsDetails.title.length > 0">
                <text class="article-tit">{{ newsDetails.title }}</text>
            </div>
            <div class="article-wrap">
                <text class="article-content" :class="[newsDetails.title.length == 0 ? 'article-content-notit' : '']">{{ newsDetails.summary }}</text>
            </div>
            <div class="article-img-wrap" v-if="newsDetails.images.length > 0">
                <div class="article-img-group" v-for="(item, i) in newsDetails.images" :key="i">
                    <div class="article-img-box">
                        <image class="article-img-item" :src="item.url"></image>
                    </div>
                </div>
            </div>
        </div>
    </cell-container>
</template>

<style>
    .article-module-bg {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
    }

    .article-tit {
        font-size: 32px;
        color: #000;
        font-weight: 600;
        lines: 2;
        margin-bottom: 10px;
        line-height: 45px;
    }

    .article-wrap {
        margin-bottom: 25px;
    }

    .article-content {
        font-size: 32px;
        color: #333333;
        lines: 4;
        line-height: 45px;
    }

    .article-content-notit {
        font-size: 32px;
        line-height: 45px;
        color: #333333;
    }

    .article-img-wrap {
        margin-bottom: 25px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .article-img-group {

    }

    .article-img-box {
        width: 220px;
        height: 220px;
        overflow: hidden;
    }

    .article-img-item {
        width: 220px;
        height: 220px;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        mounted() {
            console.log(123);
        },
        props: {
            newsDetails: {
                default() {
                    return {
//                        article: {
//                            headerUrl: '',
//                            userName: '',
//                            userIssue: '',
//                            articleTime: '',
//                            comment: '',
//                            forward: '',
//                            agree: ''
//                        },
//                        cellModule: {
//                            user: {
//                                tit: '',
//                                content: '',
//                                contentImg: []
//                            }
//                        }
                    }
                }
            }
        },
        data() {
            return {
                footerType: 0
            }
        },
        components: {
            cellContainer: require('./cellContainer.vue')
        },
        methods: {
            viewDetails() {
                navigator.push(routerPage.repostPage)
            }
        }
    }
</script>