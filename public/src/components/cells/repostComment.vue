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
            <div class="comment-bg">
                <div class="comment-wrap">
                    <text class="comment-auth">@{{ newsDetails.targetComment.author.nick }}:</text>
                    <div class="comment-content-group">
                        <div  v-for="(item, i) in newsDetails.targetComment.content" class="comment-content-item" :key="i">
                            <!--<follow-target v-if="item.type == 'link'" :followType="item.topCategory" :followText="item.text" :followID="tem.subCategory"></follow-target>-->
                            <follow-target v-if="item.type == 'link'" :followType="item.hasOwnProperty(topCategory) ? '' : item.topCategory" :followText="item.text" :followID="item.hasOwnProperty(subCategory) ? '' : item.subCategory"></follow-target>
                            <text v-else-if="item.type == 'text'" class="comment-content">{{ item.text }}</text>
                            <follow-target v-else-if="item.type == 'atUser'" :followType="'user'" :followText="item.hasOwnProperty(atUser) ? '' : '@' + item.atUser.nick + ' '" :followID="item.hasOwnProperty(atUser) ? '' : item.atUser._id"></follow-target>
                            <!--<follow-target v-else-if="item.type == 'atUser'" :followType="'user'" :followText="item.atUser.nick" :followID="tem.atUser._id"></follow-target>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </cell-container>
</template>

<style>
    .repost-mesg-wrap {
        flex-direction: row;
        margin-left: 30px;
    }

    .comment-bg {
        width: 750px;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;
    }

    .comment-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
    }

    .comment-auth {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 32px;
        color: #5583ff;
    }

    .comment-content-group {
        flex-direction: row;
        margin-bottom: 20px;
    }

    .comment-content {
        font-size: 32px;
        color: #333333;
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
                footerType: 1
            }
        },
        components: {
            cellContainer: require('components/cells/cellContainer.vue'),
            repostMesg: require('components/cells/repostMesg.vue'),
            followTarget: require('components/followTarget/index.vue')
        },
        created() {
            console.log('repostComment');
        }
    }
</script>