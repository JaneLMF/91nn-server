<template>
    <div class="countDown-wrap">
        <div class="time">
            <n-player :num="timeHour"></n-player>
            <text class="maohao">:</text>
            <n-player :num="timeMinute"></n-player>
            <text class="maohao">:</text>
            <n-player :num="timeSecond"></n-player>
        </div>
        <text class="tit">开始倒计时</text>
    </div>
</template>

<style>
    .countDown-wrap {
        justify-content: center;
        align-items: center;
    }

    .time {
        flex-direction: row;
    }

    .maohao {
        padding-right: 2px;
        padding-left: 2px;
        font-size: 28px;
        color: #fc6d3f;
    }

    .tit {
        margin-top: 17px;
        font-size: 24px;
        color: #888888;
    }
</style>

<script>
    const D_VALUE_MAX = 86400000;
    export default {
        props: {
//            targetTime: { default: 1501405931000 }
            targetTime: { default: 1501490891000 }
        },
        data() {
            return {
                timing: '',
                timer: null,
                timeHour: '',
                timeMinute: '',
                timeSecond: ''
            }
        },
        computed: {
            time_now() {
//                return this.formatDuring(600000);
                var oldTime = (new Date("2017/07/30 17:12:11")).getTime();
                return oldTime;
            }
        },
        mounted() {
            var now = new Date();
            this.timing = now.getTime();

            var d_value = this.targetTime - this.timing;
            if(d_value < D_VALUE_MAX) {
                this.timeHour = this.formatHours(d_value);
                this.timeMinute = this.formatMinutes(d_value);
                this.timeSecond = this.formatSeconds(d_value);
            }
            this.countDown();
        },
        methods: {
            formatDuring(mss) {
                var days = parseInt(mss / (1000 * 60 * 60 * 24));
                var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = (mss % (1000 * 60)) / 1000;
                return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
            },
            formatDays(time) {
                return parseInt(time / (1000 * 60 * 60 * 24));
            },
            formatHours(time) {
                return parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            },
            formatMinutes(time) {
                return parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
            },
            formatSeconds(time) {
                return parseInt((time % (1000 * 60)) / 1000);
            },
            countDown() {
                this.timer = setInterval(() => {
                    this.timeSecond--;
                    if (this.timeSecond < 0) {
                        this.timeMinute--;
                        this.timeSecond = 59;
                        if(this.timeMinute < 0) {
                            this.timeHour--;
                            this.timeMinute = 59;
                            if(this.timeHour == 0) {
                                clearInterval(this.timer);
                            }
                        }
                    }
                },1000)
            }
        },
        components: {
            nPlayer: require('components/countDown/player.vue')
        }
    }
</script>