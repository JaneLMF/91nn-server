<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

	export default {
	    data() {
	        return {
	            title: '消息',
                mesgRow: [
                    {
                        iconUrl: '/resources/mesgBox/comment.png',
                        iconName: '评论我',
                        newestMesg: '',
                        time: '05/23',
                        mesgCount: 0
                    },
                    {
                        iconUrl: '/resources/mesgBox/at.png',
                        iconName: '@我',
                        newestMesg: '',
                        time: '05/23',
                        mesgCount: 20
                    },
                    {
                        iconUrl: '/resources/mesgBox/agree.png',
                        iconName: '赞',
                        newestMesg: '',
                        time: '05/23',
                        mesgCount: 20
                    },
                    {
                        iconUrl: '/resources/mesgBox/mesg.png',
                        iconName: '私信',
                        newestMesg: '比特时代给你留言',
                        time: '05/23',
                        mesgCount: 5
                    },
                    {
                        iconUrl: '/resources/mesgBox/service.png',
                        iconName: '小秘书',
                        newestMesg: '你好！欢迎使用链链。如果在使用过程中...',
                        time: '05/23',
                        mesgCount: 5
                    },
                    {
                        iconUrl: '/resources/mesgBox/fans.png',
                        iconName: '我的粉丝',
                        newestMesg: '您新增了2个粉丝',
                        time: '05/23',
                        mesgCount: 5
                    }
                ]
            }
        },
		components: {
		    mesgRow: require('components/mesgRow/index.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        },
        methods: {
            callBack0() {
                navigator.push(routerPage.commentMe)
            },
            callBack1() {
                navigator.push(routerPage.atMe)
            },
            callBack2() {
                navigator.push(routerPage.agreeMe)
            }
        }
	}
</script>

