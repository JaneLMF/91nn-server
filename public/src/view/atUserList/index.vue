<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        data() {
            return {
                title: '选择用户',
                indexMenu: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                atLeastGroup: [
                    {
                        header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                        name: '鹿晗',
                        intro: '你牛策略选币策略达人'
                    }
                ],
                userGroup: [
                    {
                        class: 'A',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    },
                    {
                        class: 'B',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    },
                    {
                        class: 'C',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    },
                    {
                        class: 'D',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    },
                    {
                        class: 'E',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            },
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    },
                    {
                        class: 'L',
                        user: [
                            {
                                header: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                                name: '鹿晗',
                                intro: '你牛策略选币策略达人'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            userItem: require('components/userItem/index.vue')
        }
	}
</script>

