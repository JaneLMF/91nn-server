<template>
    <cell-container :footerType="footerType"
                    :author="newsDetails.comment.author"
                    :articleTime="newsDetails.comment.createAt"
                    :comment="newsDetails.comment.commentCount"
                    :forward="newsDetails.comment.transmitCount"
                    :agree="newsDetails.comment.upvoteCount">
        <!--@agree="v=>newsDetails.article.agree=v">-->
        <div>
            <div class="repost-mesg-wrap">
                <div v-for="(item, i) in newsDetails.comment.content" :key="i">
                    <repost-mesg :repostText="item"></repost-mesg>
                </div>
            </div>
            <div>
                <n-article :userType="newsDetails.type"
                           :newsDetails="newsDetails.article"
                           :title="newsDetails.article.title"
                           :summary="newsDetails.article.summary"
                           :author="newsDetails.article.author"
                           :commentCount="newsDetails.article.commentCount"
                           :upvoteCount="newsDetails.article.upvoteCount"
                           :createAt="newsDetails.article.createAt"
                           :images="newsDetails.article.images"
                ></n-article>
            </div>
        </div>
    </cell-container>
</template>

<style>
    .repost-mesg-wrap {
        flex-direction: row;
        margin-left: 30px;
    }
</style>

<script>
    export default {
        props: {
            newsDetails: {
                default() {
                    return {

                    }
                }
            },
//            repostMesgArr: {
//                default() {
//                    return [
//                        {
//                            type: '',
//                            repostInfo: '',
//                            followType: '',
//                            followClass: '',
//                            followTarget: '',
//                            followID: ''
//                        }
//                    ]
//                }
//            },
//            article: {
//                default() {
//                    return {
//                        headerUrl: '',
//                        userName: '',
//                        userIssue: '',
//                        articleTime: '',
//                        comment: '',
//                        forward: '',
//                        agree: ''
//                    }
//                }
//            },
//            news: {
//                default() {
//                    return {
//                        articleID: '',
//                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
//                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
//                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
//                        issue: '比特大时代',
//                        comment: '10',
//                        agree: '10',
//                        time: '07/23'
//                    }
//                }
//            },
//            articleType: { default: '' },
//            dynamic: {
//                default() {
//                    return {
//                        userName: '',
//                        content: ''
//                    }
//                }
//            }
        },
        data() {
            return {
                footerType: 1
            }
        },
        components: {
            cellContainer: require('components/cells/cellContainer.vue'),
            repostMesg: require('components/cells/repostMesg.vue'),
            nArticle: require('components/article/index.vue')
        }
    }
</script>