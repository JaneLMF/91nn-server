<template>
    <div class="comment-issue-wrap">
        <image :src="contentIssue.contentImg" class="comment-issue-img"></image>
        <div class="comment-content-bg">
            <div class="comment-content-wrap">
                <text class="comment-issue">@{{ contentIssue.issue }}</text>
                <text class="comment-issue-content">{{ contentIssue.content }}</text>
            </div>
        </div>
    </div>
</template>

<style>
    .comment-issue-wrap {
        margin-right: 30px;
        margin-left: 30px;
        width: 690px;
        flex-direction: row;
    }

    .comment-issue-img {
        width: 150px;
        height: 150px;
    }

    .comment-content-bg {
        width: 540px;
        height: 150px;
        background-color: #f8f8f8;
    }

    .comment-content-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 480px;
    }

    .comment-issue {
        height: 60px;
        line-height: 60px;
        font-size: 26px;
        color: #333333;
    }

    .comment-issue-content {
        margin-top: 15px;
        font-size: 24px;
        color: #888888;
        lines: 2;
    }
</style>

<script>
    export default {
        props: {
            contentIssue: {
                default() {
                    return {
                        contentImg: '',
                        issue: '',
                        content: ''
                    }
                }
            }
        }
    }
</script>