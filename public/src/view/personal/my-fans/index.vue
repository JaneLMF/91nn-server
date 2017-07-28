<template>
    <div>
        <div v-if="followList.length == 0" class="nofile-wrap">
            <image src="/src/view/personal/my-news/images/nofile.png" class="nofile"></image>
            <text class="nofile-tit">还没有人关注你，快去发条帖吧！</text>
        </div>
        <div v-else v-for="(item, i) in followList" :key="i">
            <follows :followers="item" @follow="v=>item.isFollow=v"></follows>
        </div>
    </div>
</template>

<style>
    .nofile-wrap {
        width: 750px;
        height: 1024px;
        justify-content: center;
        align-items: center;
    }

    .nofile {
        width: 304px;
        height: 230px;
    }

    .nofile-tit {
        margin-top: 50px;
        font-size: 26px;
        color: #bbbbbb;
    }
</style>

<script>
    export default {
        data() {
            return {
                followList: [
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                            userName: '鹿晗',
                            subTitle: '链链策略选币达人',
                            headerStyle: 'follow'
                        },
                        isFollow: false,
                    },
                    {
                        article: {
                            headerUrl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2949599068,3391309327&fm=58&u_exp_0=2382565453,3058003917&fm_exp_0=86&bpow=502&bpoh=502',
                            userName: '王俊凯',
                            subTitle: '链链策略选币达人',
                            headerStyle: 'follow'
                        },
                        isFollow: false,
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: '王源',
                            subTitle: '链链策略选币达人',
                            headerStyle: 'follow'
                        },
                        isFollow: false,
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=179813241,910224211&fm=58&u_exp_0=3907746922,576918801&fm_exp_0=86&bpow=1600&bpoh=2000',
                            userName: '易烊千玺',
                            subTitle: '链链策略选币达人',
                            headerStyle: 'follow'
                        },
                        isFollow: false,
                    }
                ]
            }
        },
        components: {
            follows: require('components/follows/index.vue')
        }
    }
</script>