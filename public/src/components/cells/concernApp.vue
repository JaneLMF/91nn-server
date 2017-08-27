<template>
    <cell-container :footerType="footerType"
                    :author="newsDetails.author"
                    :articleTime="newsDetails.createAt"
                    :comment="newsDetails.concerned.commentCount"
                    :forward="newsDetails.concerned.transmitCount"
                    :agree="newsDetails.concerned.upvoteCount">
        <div class="follow-text-wrap">
            <text class="follow-text">我刚刚关注了</text>
            <follow-target :followType="newsDetails.concerned.topCategory" :followText="newsDetails.concerned.name" :followID="newsDetails.concerned._id"></follow-target>
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
        font-size: 30px;
        color: #434343;
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
        },
        created() {
            console.log('app')
        }
    }
</script>