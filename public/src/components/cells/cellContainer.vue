<template>
    <div class="article-box">
        <cell-user-info :headerUrl="headerUrl" :userName="author.nick" :userIssue="author.from" :articleTime="articleTime" @callBack="toUserHome"></cell-user-info>
        <slot></slot>
        <div :class="[footerType == 0 ? 'button-fresh-group' : 'button-repost-group']">
            <!--<div class="button-item" @click="repostIt">-->
            <!--<image class="button-icon" src="/src/components/cells/images/zhuanfa.png"></image>-->
            <!--<text class="button-content">{{ article.forward == 0 ? '转发' : article.forward }}</text>-->
        <!--</div>-->
            <!--<div class="button-item">-->
                <!--<image class="button-icon" src="/src/components/cells/images/pinglun.png"></image>-->
                <!--<text class="button-content">{{ article.comment == 0 ? '评论' : article.comment }}</text>-->
            <!--</div>-->
            <!--<div class="button-item" @click="agreeIt">-->
                <!--<image class="button-icon" :src="agreeIcon"></image>-->
                <!--<text class="button-content" :class="[hasAgree ? 'agree-active' : '']">{{ article.agree == 0 ? '赞' : article.agree }}</text>-->
            <!--</div>-->
            <div class="button-item" @click="repostIt">
                <n-repost :text="forward"></n-repost>
            </div>
            <div class="button-item" @click="commentIt">
                <n-comment :text="comment"></n-comment>
            </div>
            <div class="button-item">
                <n-agree :text="agree" :targetType="targetType" :articleId="articleId" :userId="userId"></n-agree>
            </div>
        </div>
    </div>
</template>

<script>
    import nn from 'utils/debug'
    import nAPI from 'api/index'
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal')

    export default {
        props: {
            footerType: { default: 0 },
            articleId: { default: '' },
            author: {
                default() {
                    return {
                        id: '',
                        avatar: '',
                        nick: '',
                        from: ''
                    }
                }
            },
            articleTime: { default: '' },
            comment: { default: '0' },
            forward: { default: '0' },
            agree: { default: '0' }
//            article: {
//                default() {
//                    return {
//                        headerUrl: '',
//                        userName: '',
//                        userIssue: '',
//                        articleTime: '',
//                        comment: 0,
//                        forward: 0,
//                        agree: 0
//                    }
//                }
//            }
        },
        data() {
            return {
                hasAgree: false,
                agreeIcon: '/src/components/cells/images/zan.png',
                headerUrl: '/resources/common/defaultHeader.png',
                targetType: 'article',
                userId: ''
            }
        },
        mounted() {
            if(this.author.avatar.length > 0) {
                this.headerUrl = this.author.avatar;
            }
            storage.getItem('bossInfo',(res) => {
                modal.toast({ message: res.data, duration: 1 })
                if(res.data) {
                    var bossInfo = JSON.parse(res.data);
                    this.userId = bossInfo._id;
                }
            })
        },
        methods: {
            agreeIt() {
                storage.setItem('articleId', this.articleId, () => {});
                if(!this.hasAgree) {
                    nAPI.upvote(this.articleId, this.userId).then(res => {
                        nn.dump('success', res)
                        modal.toast({
                            message: '已赞',
                            duration: 0.3
                        })
                        this.agreeIcon = '/src/components/cells/images/agree-active.png';
                        this.$emit('agree', res.result);
                    }).catch(res => {
                        nn.dump('Failed', res)
                        modal.toast({ message: res, duration: 1 });
                    })
//                    modal.toast({
//                        message: '已赞',
//                        duration: 0.3
//                    })
//                    this.agreeIcon = '/src/components/cells/images/agree-active.png';
//                    this.$emit('agree', parseInt(this.article.agree) + 1);
                } else {
                    nAPI.upvote(this.articleId, this.userId).then(res => {
                        nn.dump('success', res)
                        modal.toast({
                            message: '已赞',
                            duration: 0.3
                        })
                        this.agreeIcon = '/src/components/cells/images/zan.png';
                        this.$emit('agree', res.result);
                    }).catch(res => {
                        nn.dump('Failed', res)
                        modal.toast({ message: res, duration: 1 });
                    })
//                    modal.toast({
//                        message: '取消赞',
//                        duration: 0.3
//                    })
//                    this.agreeIcon = '/src/components/cells/images/zan.png';
//                    this.$emit('agree', parseInt(this.article.agree) - 1);
                }
                this.hasAgree = !this.hasAgree;
            },
            repostIt() {
                storage.setItem('articleId', this.articleId, () => {});
                navigator.push(routerPage.repostInput)
            },
            commentIt() {
                storage.setItem('articleId', this.articleId, () => {});
                navigator.push(routerPage.createComment)
            },
            toUserHome() {
                navigator.push(routerPage.userHome)
            }
        },
        components: {
            cellUserInfo: require('components/cell-user-info/index.vue'),
            nAgree: require('components/textIcon/agree/index.vue'),
            nComment: require('components/textIcon/comment/index.vue'),
            nRepost: require('components/textIcon/repost/index.vue')
        }
    }
</script>

<style>
    .article-box {
        background-color: #fff;
        margin-bottom: 10px;
    }

    .button-fresh-group {
        margin-left: 30px;
        margin-right: 30px;
        flex-direction: row;
        border-top-width: 2px;
        border-color: #f8f8f8;
        width: 690px;
    }

    .button-repost-group {
        flex-direction: row;
        width: 750px;
    }

    .button-item {
        flex-direction: row;
        flex:1;
        height: 73px;
        justify-content: center;
        align-items: center;
    }

    .button-icon {
        width: 32px;
        height: 32px;
        margin-right: 14px;
    }

    .button-content {
        font-size: 24px;
        color: #bbbbbb;
    }
    
    .agree-active {
        color: #fc6d3f;
    }
</style>