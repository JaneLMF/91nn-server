<template>
    <div class="level-bg">
        <div class="level-wrap" v-for="(item, i) in icoInfo" :key="i">
            <div class="level-group">
                <user-header class="follower-header" :article="item.article"></user-header>
                <ico-level :oLevel="item.oLevel"></ico-level>
                <!--<div v-if="[isOver(item.targetTime)]" class="ico-time-line-wrap">-->
                    <!--<div class="ico-time-line-group">-->
                        <!--<text class="ico-time-line-tit">开始</text>-->
                        <!--<text class="ico-time-line-content">{{ item.startTime }}</text>-->
                    <!--</div>-->
                    <!--<div class="ico-time-line-group">-->
                        <!--<text class="ico-time-line-tit">结束</text>-->
                        <!--<text class="ico-time-line-content">{{ item.targetTime }}</text>-->
                    <!--</div>-->
                <!--</div>-->
                <count-down :targetTime="item.targetTime"></count-down>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>

<style>
    .level-bg {
        width: 750px;
    }

    .level-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
    }

    .level-group {
        margin-top: 40px;
        margin-bottom: 40px;
        flex-direction: row;
        justify-content: space-between;
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
    export default {
        data() {
            return {
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
                        targetTime: 1501490891000
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
                        targetTime: 1501490891000
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
                        startTime: 1501405931000,
                        targetTime: 1501490891000
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
                        targetTime: 1501490891000
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
                        targetTime: 1501490891000
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
                        targetTime: 1501490891000
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
            isOver(timming) {
                var now = new Date();
                if(now <= timming) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
</script>