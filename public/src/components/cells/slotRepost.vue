<template>
    <cell-container :article="article" :footerType="footerType" @agree="v=>article.agree=v">
        <div>
            <div class="repost-mesg-wrap">
                <div v-for="(item, i) in repostMesgArr" :key="i">
                    <repost-mesg :type="item.type"
                                 :repostInfo="item.repostInfo"
                                 :followType="item.followType"
                                 :followClass="item.followClass"
                                 :followTarget="item.followTarget"
                                 :followID="item.followID"></repost-mesg>
                </div>
            </div>
            <div>
                <n-article :news="news" :articleType="articleType" :dynamic="dynamic" :newsDetails="newsDetails"></n-article>
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
            repostMesgArr: {
                default() {
                    return [
                        {
                            type: '',
                            repostInfo: '',
                            followType: '',
                            followClass: '',
                            followTarget: '',
                            followID: ''
                        }
                    ]
                }
            },
            article: {
                default() {
                    return {
                        headerUrl: '',
                        userName: '',
                        userIssue: '',
                        articleTime: '',
                        comment: '',
                        forward: '',
                        agree: ''
                    }
                }
            },
            news: {
                default() {
                    return {
                        articleID: '',
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    }
                }
            },
            articleType: { default: '' },
            dynamic: {
                default() {
                    return {
                        userName: '',
                        content: ''
                    }
                }
            },
//            newsDetails: {
//                default() {
//                    return {
//                        article: {
//                            headerUrl: '',
//                            userName: '',
//                            userIssue: '',
//                            articleTime: '',
//                            comment: '',
//                            forward: '',
//                            agree: ''
//                        },
//                        followType: '',
//                        followClass: '',
//                        followTarget: '',
//                        coinPriceCNY: '',
//                        coinPriceUS: '',
//                        rise: '',
//                        riseStatus: ''
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