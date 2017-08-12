<template>
    <div class="news-bg">
        <div class="news-wrap">
            <div class="news-content-wrap" :class="[news.imgUrl.length > 0 ? 'news-content-wrap-hasImg' : 'news-content-wrap-noImg']">
                <text class="news-content-tit">{{ news.tit }}</text>
                <text v-if="news.imgUrl.length <= 0" class="news-content">{{ news.intro }}</text>
                <div class="news-issue-wrap" :class="[news.imgUrl.length > 0 ? 'news-issue-wrap-hasImg' : 'news-issue-wrap-noImg']">
                    <div class="news-info-wrap">
                        <text class="news-submit-tit">{{ news.issue }}</text>
                        <text class="fenge">·</text>
                        <text class="news-submit-tit">评论{{ news.comment }}</text>
                        <text class="fenge">·</text>
                        <text class="news-submit-tit">赞{{ news.agree }}</text>
                    </div>
                    <text class="news-submit-tit">{{ news.time }}</text>
                </div>
            </div>
            <image v-if="news.imgUrl.length > 0" class="news-img" :src="news.imgUrl"></image>
        </div>
    </div>
</template>

<style>
    .news-bg {
        width: 750px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
    }

    .news-wrap {
        flex-direction: row;
        width: 690px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .news-content-wrap {
        position: relative;
    }

    .news-content-wrap-hasImg {
        width: 450px;
        height: 140px;
        align-content: space-between;
    }

    .news-content-wrap-noImg {
        width: 690px;
        height: 240px;
        align-content: space-between;
    }

    .news-content-tit {
        font-size: 32px;
        line-height: 45px;
        color: #000;
        font-weight: bold;
        lines: 2;
    }

    .news-content {
        margin-top: 10px;
        font-size: 32px;
        line-height: 45px;
        color: #333;
        lines: 2;
    }

    .news-issue-wrap {
        position: absolute;
        left: 0px;
        bottom: 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .news-issue-wrap-hasImg {
        width: 450px;
    }

    .news-issue-wrap-noImg {
        width: 690px;
    }

    .news-info-wrap {
        flex-direction: row;
    }

    .news-submit-tit {
        font-size: 24px;
        color: #bbbbbb;
    }

    .fenge {
        margin-left: 10px;
        margin-right: 10px;
        color: #bbbbbb;
    }

    .news-img {
        width: 210px;
        height: 140px;
        margin-left: 30px;
    }
</style>

<script>
    export default {
        props: {
            news: {
                default() {
                    return {
                        tit: '',
                        intro: '',
                        imgUrl: '',
                        issue: '',
                        comment: '',
                        agree: '',
                        time: ''
                    }
                }
            }
        }
    }
</script>