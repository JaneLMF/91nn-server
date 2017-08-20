<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    export default {
        data() {
            return {
                commentFlag: false,
                title: '正文',
                isAuth: false,
                comment: [
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    },
                    {
                        article: {
                            headerUrl: '/src/view/home/images/badge-boss.png',
                            userName: '月明静朗',
                            subTitle: '2017-06-12  11：30',
                            headerStyle: 'user'
                        },
                        agreeNum: '12',
                        content: '区块链在知识产权领域的应用核心在于提出一种新的知识产权体系和机制，而不仅仅是模仿比特币的实现方案。'
                    }
                ],
                authName: '鹿晗',
                authHeader: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                contentTime: '2017-06-20 11:30',
                contentIssue: '微博',
                contentTit: 'Parity钱包漏洞导致15万ETH被盗，多重签名钱包用户需尽快转移资金',
                content: '根据Etherscan.io确认的数据显示，据该公司的报告，目前已经确认有150,000ETH（大约价值3000万美元）被盗。据Parity所说，这次的漏洞是一种叫做wallet.sol的多重签名合约出现bug导致的。不过，数据显示这个问题已经被缓解，白帽黑客此前已经找回了大约377，000可能受到这个漏洞影响的ETH。Parity方面在公开讲话中将这个bug的严重程度列为“极严重的”，敦促“所有在多重签名钱包中存有资金的用户”都将资金转移到一个安全的地址。根据Etherscan.io确认的数据显示，据该公司的报告，目前已经确认有150,000ETH（大约价值3000万美元）被盗。据Parity所说，这次的漏洞是一种叫做wallet.sol的多重签名合约出现bug导致的。不过，数据显示这个问题已经被缓解，白帽黑客此前已经找回了大约377，000可能受到这个漏洞影响的ETH。Parity方面在公开讲话中将这个bug的严重程度列为“极严重的”，敦促“所有在多重签名钱包中存有资金的用户”都将资金转移到一个安全的地址。',
                contentComment: '3',
                contentAgree: '12',
                hasAgree: false,
                agreeIcon: '/src/view/content/images/un-agree.png'
            }
        },
        components: {
            commentGroup: require('components/commentGroup/index.vue'),
            backNavpage: require('components/navbar/back-navbar.vue'),
            commentBox: require('components/commentBox/index.vue')
        },
        methods: {
            agreeIt() {
                if(!this.hasAgree) {
                    this.agreeIcon = '/src/view/content/images/agree.png';
                    this.contentAgree++;
                } else {
                    this.agreeIcon = '/src/view/content/images/un-agree.png';
                    this.contentAgree--;
                }
                this.hasAgree = !this.hasAgree;
            },
            toComment() {
                this.commentFlag = true
            },
            methods: {
                webviewClick(view) {
                    let data = view.data
                    console.log('type of ', (typeof view.data))
                    if ((typeof view.data) === 'string'){
                        console.log('type is string')
                        data = JSON.parse(view.data)
                    }
                    console.log('webview click ', data.event, data.data)
                }
            }
        }
    }
</script>