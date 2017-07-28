<template>
    <cell-container :article="newsDetails.article" :footerType="footerType" @agree="v=>newsDetails.article.agree=v">
        <div class="article-module-bg">
            <div class="article-tit-wrap">
                <text class="article-tit">{{ newsDetails.cellModule.user.tit }}</text>
            </div>
            <div class="article-wrap">
                <text class="article-content">{{ newsDetails.cellModule.user.content }}</text>
            </div>
            <div class="article-img-wrap" v-if="newsDetails.cellModule.user.contentImg.length > 0">
                <div class="article-img-group" v-for="(item, i) in newsDetails.cellModule.user.contentImg" :key="i">
                    <image class="article-img-item" :src="item"></image>
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
        color: #333333;
        font-weight: bolder;
        lines: 2;
    }

    .article-wrap {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .article-content {
        font-size: 26px;
        color: #888888;
        font-weight: 200;
        lines: 4;
    }

    .article-img-wrap {
        margin-bottom: 25px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .article-img-group {

    }

    .article-img-item {
        width: 210px;
        height: 118px;
        border-radius: 4px;
    }
</style>

<script>
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
        }
    }
</script>