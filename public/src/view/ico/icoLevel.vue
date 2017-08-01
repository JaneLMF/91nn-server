<template>
    <list class="level-bg">
        <cell class="level-wrap" v-for="(item, i) in icoInfo" :key="i" @click="jumpTodetails">
            <div class="level-group">
                <user-header class="follower-header" :article="item.article"></user-header>
                <ico-level :oLevel="item.oLevel"></ico-level>
                <div v-if="isOver(item.targetTime)" class="ico-time-line-wrap">
                    <div class="ico-time-line-group">
                        <text class="ico-time-line-tit">开始</text>
                        <text class="ico-time-line-content">{{ item.startTime }}</text>
                    </div>
                    <div class="ico-time-line-group">
                        <text class="ico-time-line-tit">结束</text>
                        <text class="ico-time-line-content">{{ item.targetTime }}</text>
                    </div>
                </div>
                <count-down v-else :targetTime="item.targetTime"></count-down>
            </div>
            <div class="line"></div>
        </cell>
    </list>
</template>

<style>
    .level-bg {
        width: 750px;
    }

    .level-wrap {
        width: 750px;
        justify-content: center;
        align-items: center;
    }

    .level-group {
        width: 690px;
        margin-top: 40px;
        margin-bottom: 40px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .ico-time-line-wrap {
        height: 70px;
        justify-content: center;
        align-items: center;
    }

    .ico-time-line-group {
        flex-direction: row;
    }

    .ico-time-line-tit {
        font-size: 24px;
        color: #959595;
    }

    .ico-time-line-content {
        margin-left: 20px;
        font-size: 24px;
        color: #434343;
    }

    .line {
        margin-left: 90px;
        width: 600px;
        height: 1px;
        background-color: #e5e5e5;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                isCutDown: false,
                icoInfo: [
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 's'
                        },
                        startTime: 1501405931000,
                        targetTime: 1501588184536
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 'a'
                        },
                        startTime: 1501668878136,
                        targetTime: 1501584598645
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 'b'
                        },
                        startTime: 1501582479136,
                        targetTime: 1501583048653
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 'c'
                        },
                        startTime: 1501405931000,
                        targetTime: 1501582478136
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 'd'
                        },
                        startTime: 1501405931000,
                        targetTime: 1501582478136
                    },
                    {
                        article: {
                            headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3302918643,3035794080&fm=58&u_exp_0=2735885028,2702488670&fm_exp_0=86&bpow=848&bpoh=876',
                            userName: 'YOYOW',
                            subTitle: '媒体',
                            headerStyle: 'user'
                        },
                        oLevel: {
                            lStyle: 'details',
                            level: 'a'
                        },
                        startTime: 1501405931000,
                        targetTime: 1501582478136
                    }
                ]
            }
        },
        components: {
            countDown: require('components/countDown/index.vue'),
            userHeader: require('components/userHeader/index.vue'),
            icoLevel: require('components/icoLevel/index.vue')
        },
        computed: {
//            isOver(timming) {
//                var now = new Date();
//                var d_time = parseInt(timming) - now.getTime();
//                if(d_time > 86400000 || d_time < 0) {
//                    return true;
//                } else {
//                    return false;
//                }
//            }
        },
        methods: {
            jumpTodetails() {
                navigator.push(routerPage.icoDetails)
            },
            isOver(timming) {
                var now = new Date();
                var d_time = parseInt(timming) - now.getTime();
                console.log(now.getTime());
                if(d_time > 86400000 || d_time < 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>