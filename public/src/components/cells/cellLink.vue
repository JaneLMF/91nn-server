<template>
    <cell-container :article="newsDetails.article" :footerType="footerType" @agree="v=>newsDetails.article.agree=v">
        <div class="follow-text-wrap">
            <text class="follow-text">我刚刚关注了</text>
            <follow-target :followType="newsDetails.followType" :followClass="newsDetails.followClass" :followTarget="newsDetails.followTarget"></follow-target>
        </div>
    </cell-container>
</template>

<style>
    .follow-text-wrap {
        flex-direction: row;
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        height: 60px;
        justify-content: flex-start;
    }

    .follow-text {
        font-size: 26px;
        color: #434343;
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
                        followType: '',
                        followClass: '',
                        followTarget: '',
                        coinPriceCNY: '',
                        coinPriceUS: '',
                        rise: '',
                        riseStatus: ''
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
            cellContainer: require('./cellContainer.vue'),
            followTarget: require('components/followTarget/index.vue')
        }
    }
</script>