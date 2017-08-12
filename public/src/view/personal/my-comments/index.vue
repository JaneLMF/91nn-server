<template>
    <back-navpage :title="title">
        <list class="myComments-wrap">
            <cell class="myComments-group" v-for="(item, i) in commentGroup" :key="i">
                <cell-user-info :headerUrl="item.article.headerUrl" :userName="item.article.userName" :userIssue="item.article.userIssue" :articleTime="item.article.articleTime"></cell-user-info>
                <div class="myComments-content-wrap">
                    <div v-if="item.type == 0" class="myComments-content">
                        <text class="reply-default">{{ item.myComment }}</text>
                    </div>
                    <div v-else-if="item.type == 1" class="myComments-reply-wrap">
                        <div class="my-reply-wrap">
                            <text class="reply-default">回复</text>
                            <text class="reply-issue-name">@{{ item.issueUserName }}</text>
                            <text class="reply-default">:</text>
                            <text class="reply-default reply-content">{{ item.myComment }}</text>
                        </div>
                        <div class="line"></div>
                        <div class="reply-issue-wrap">
                            <text class="reply-issue-name">@{{ item.issueUserName }}</text>
                            <text class="reply-default">:</text>
                            <text class="reply-default reply-content">{{ item.issueContent }}</text>
                        </div>
                    </div>
                    <div v-else-if="item.type == 2" class="myComments-repost-wrap">
                        <text class="reply-default">{{ item.myComment }}</text>
                        <div class="repost-list" v-for="(reposter, j) in item.repostList" :key="j">
                            <text class="reply-default">//</text>
                            <text class="reply-issue-name">@{{ reposter.name }}</text>
                            <text class="reply-default">:</text>
                            <text class="reply-default reply-content">{{ reposter.content }}</text>
                        </div>
                    </div>
                </div>
                <div>
                    <my-comment :contentIssue="item.contentIssue" class="my-comment-issue"></my-comment>
                </div>
                <div style="width: 750px; height: 10px; background-color: #f8f8f8;"></div>
            </cell>
        </list>
    </back-navpage>
</template>

<style>
    .myComments-wrap {
        width: 750px;
        background-color: #f8f8f8;
    }

    .myComments-group {
        margin-bottom: 10px;
        background-color: #fff;
    }

    .myComments-content-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
    }

    .myComments-content {
        margin-bottom: 15px;
    }

    .myComments-reply-wrap {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .my-reply-wrap {
        flex-direction: row;
    }

    .myComments-repost-wrap {
        margin-top: 15px;
        margin-bottom: 15px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .line {
        margin-top: 10px;
        width: 690px;
        height: 1px;
        background-color: #dddddd;
    }

    .reply-issue-wrap {
        margin-top: 10px;
        margin-bottom: 10px;
        flex-direction: row;
    }

    .repost-list {
        flex-direction: row;
    }

    .reply-content {
        margin-left: 10px;
    }

    .reply-default {
        line-height: 40px;
        font-size: 30px;
        color: #434343;
    }

    .reply-issue-name {
        line-height: 40px;
        font-size: 30px;
        color: #fc6d3f;
    }

    .my-comment-issue {
        padding-bottom: 30px;
    }
</style>

<script>
    export default {
        data() {
            return {
                title: '我的评论',
                commentGroup: [
                    {
                        type: 0,
                        myComment: 'hello world',
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '12:30'
                        },
                        contentIssue: {
                            contentImg: '/src/components/comment/test.jpg',
                            issue: '清风马迪市',
                            content: '【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的...'
                        }
                    },
                    {
                        type: 1,
                        myComment: 'hello world',
                        issueUserName: '新垣结衣',
                        issueContent: 'hello nice',
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '12:30'
                        },
                        contentIssue: {
                            contentImg: '/src/components/comment/test.jpg',
                            issue: '清风马迪市',
                            content: '【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的...'
                        }
                    },
                    {
                        type: 2,
                        myComment: 'hello world',
                        issueUserName: '新垣结衣',
                        issueContent: 'hello nice',
                        repostList: [
                            {
                                name: '王俊凯',
                                content: 'T'
                            },
                            {
                                name: '王源',
                                content: 'F'
                            },
                            {
                                name: '易烊千玺',
                                content: 'Boys'
                            }
                        ],
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            userIssue: '你牛',
                            articleTime: '12:30'
                        },
                        contentIssue: {
                            contentImg: '/src/components/comment/test.jpg',
                            issue: '清风马迪市',
                            content: '【区块链在知识产权领域的应用】核心在于提出一种新的知识产权体系和机制大时代的...'
                        }
                    }
                ]
            }
        },
        components: {
            cellUserInfo: require('components/cell-user-info/index.vue'),
            myComment: require('components/comment/index.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        }
    }
</script>