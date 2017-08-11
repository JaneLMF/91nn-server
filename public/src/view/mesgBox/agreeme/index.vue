<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    data() {
	        return {
                title: '赞我的',
                commentGroup: [
                    {
                        type: 0,
                        myComment: 'hello world',
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            useType: 'agree',
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
                            useType: 'agree',
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
                            useType: 'agree',
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

