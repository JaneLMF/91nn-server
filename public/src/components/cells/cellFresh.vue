<template>
    <cell-container :article="newsDetails.article" :footerType="footerType" @agree="v=>newsDetails.article.agree=v">
        <div class="article-module-bg" @click="viewDetails">
            <div class="article-tit-wrap" v-if="newsDetails.cellModule.user.tit.length > 0">
                <text class="article-tit">{{ newsDetails.cellModule.user.tit }}</text>
            </div>
            <div class="article-wrap">
                <text class="article-content" :class="[newsDetails.cellModule.user.tit.length == 0 ? 'article-content-notit' : '']">{{ newsDetails.cellModule.user.content }}</text>
            </div>
            <div class="article-img-wrap" v-if="newsDetails.cellModule.user.contentImg.length > 0">
                <div class="article-img-group" v-for="(item, i) in newsDetails.cellModule.user.contentImg" :key="i">
                    <div class="article-img-box">
                        <image class="article-img-item" :src="item"></image>
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
        font-weight: 500;
        lines: 2;
        margin-bottom: 10px;
        line-height: 40px;
    }

    .article-wrap {
        margin-bottom: 25px;
    }

    .article-content {
        font-size: 26px;
        color: #888888;
        font-weight: 200;
        lines: 4;
        line-height: 35px;
    }

    .article-content-notit {
        font-size: 30px;
        line-height: 40px;
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
        props: {
            newsDetails: {
                default() {
                    return {
                        article: {
                            headerUrl: '',
                            userName: '',
                            userIssue: '',
                            articleTime: '',
                            comment: '',
                            forward: '',
                            agree: ''
                        },
                        cellModule: {
                            user: {
                                tit: '',
                                content: '',
                                contentImg: []
                            }
                        }
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