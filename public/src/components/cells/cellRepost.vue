<template>
    <cell-container :article="newsDetails.article"
                    :footerType="footerType"
                    @agree="v=>newsDetails.article.agree=v"
                    :articleId="newsDetails.comment._id">
        <div>
            <div class="my-repost-content-wrap">
                <text class="my-repost-content">{{ newsDetails.cellModule.user.content }}</text>
                <div v-for="(item, i) in newsDetails.cellModule.user.repostList" :key="i" class="repost-group">
                    <text class="repost-fenge">//</text>
                    <text class="repost-user">@{{ item.name }}</text>
                    <text class="repost-content">:{{ item.content }}</text>
                </div>
            </div>
            <div class="repost-article-bg">
                <div class="repost-article-wrap">
                    <text class="repost-header">@{{ newsDetails.cellModule.repostFrom.name }}:</text>
                    <div class="article-tit-wrap">
                        <text class="article-tit">{{ newsDetails.cellModule.repostFrom.tit }}</text>
                    </div>
                    <div class="article-wrap">
                        <text class="article-content">{{ newsDetails.cellModule.repostFrom.content }}</text>
                    </div>
                    <div class="article-img-wrap" v-if="newsDetails.cellModule.repostFrom.contentImg.length > 0">
                        <div class="article-img-group" v-for="(item, i) in newsDetails.cellModule.repostFrom.contentImg" :key="i">
                            <image class="article-img-item" :src="item"></image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </cell-container>
</template>

<style>
    .my-repost-content-wrap {
        margin-right: 30px;
        margin-left: 30px;
        flex-direction: row;
    }

    .my-repost-content {
        font-size: 26px;
        color: #434343;
    }

    .repost-group {
        flex-direction: row;
    }

    .repost-fenge {
        font-size: 26px;
        color: #434343;
    }

    .repost-user {
        font-size: 26px;
        color: #5583ff;
    }

    .repost-content {
        font-size: 26px;
        color: #434343;
    }

    .repost-article-bg {
        margin-top: 20px;
        width: 750px;
        background-color: #f8f7f7;
    }

    .repost-article-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
    }

    .repost-header {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 26px;
        color: #5583ff;
    }

    .article-tit {
        width: 690px;
        font-size: 32px;
        color: #333333;
        font-weight: 500;
        lines: 2;
    }

    .article-wrap {
        margin-bottom: 25px;
        margin-top: 25px;
    }

    .article-content {
        width: 690px;
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
                            agree: '',
                        },
                        cellModule: {
                            user: {
                                content: '',
                                repostList: [
                                    {
                                        name: '',
                                        content: ''
                                    }
                                ]
                            },
                            repostFrom: {
                                name: '',
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
                footerType: 1
            }
        },
        components: {
            cellContainer: require('./cellContainer.vue')
        }
    }
</script>