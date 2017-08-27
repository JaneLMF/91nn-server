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
                <nn-html :html="newsDetails.summary" class="article-content" :class="[newsDetails.title.length == 0 ? 'article-content-notit' : '']"></nn-html>
                <!--<text class="article-content" :class="[newsDetails.title.length == 0 ? 'article-content-notit' : '']">{{ newsDetails.summary }}</text>-->
            </div>
            <div class="article-img-wrap" v-if="newsDetails.images.length > 0" :class="[newsDetails.images.length == 3 ? 'article-img-wrap-three' : '']">
                <div class="article-img-group" :class="[newsDetails.images.length == 2 ? 'article-img-group-two' : '']" v-for="(item, i) in newsDetails.images" :key="i">
                    <div class="article-img-box" :class="[imgSize(item.size)]">
                        <image class="article-img-item" :class="[imgSize(item.size)]" :src="item.url" :style="{'width': imgWidth(item.size), 'height': imgHeight(item.size)}"></image>
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

    .article-img-wrap-three {
        justify-content: space-between;
        align-items: center;
    }

    .article-img-wrap {
        margin-bottom: 25px;
        flex-direction: row;
    }

    .article-img-group {

    }

    .article-img-group-two {
        margin-right: 15px;
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

    .article-img-vertical {
        width: 240px;
        height: 320px;
    }

    .article-img-horizen {
        width: 320px;
        height: 240px;
    }

    .article-img-square {
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
            },
            imgSize(scale) {
                var imgStyle = '';
                if(scale <= 0.75) {
                    imgStyle = 'article-img-vertical';
                } else if(scale >= 1.3) {
                    imgStyle = 'article-img-horizen';
                } else {
                    imgStyle = 'article-img-square';
                }
                return imgStyle;
            },
            imgWidth(scale) {
                var imgStyle = 0;
                if(scale <= 0.75) {
                    imgStyle = 240;
                } else if(scale >= 1.3) {
                    imgStyle = 240*scale;
                } else {
                    imgStyle = 220;
                }
                return imgStyle + 'px';
            },
            imgHeight(scale) {
                var imgStyle = 0;
                if(scale <= 0.75) {
                    imgStyle = 240/scale;
                } else if(scale >= 1.3) {
                    imgStyle = 240;
                } else {
                    imgStyle = 220/scale;
                }
                return imgStyle + 'px';
            }
        }
    }
</script>