<template>
    <cell-container :article="newsDetails.article" :footerType="footerType" @agree="v=>newsDetails.article.agree=v">
        <div class="follow-text-wrap">
            <text class="follow-text">我刚刚关注了</text>
            <follow-target :followType="newsDetails.followType" :followClass="newsDetails.followClass" :followTarget="newsDetails.followTarget"></follow-target>
            <text class="follow-text">当前价格</text>
            <text class="follow-text">¥{{ newsDetails.coinPriceCNY }}</text>
        </div>
        <div class="cell-coin-bg">
            <div class="cell-coin-wrap">
                <div class="coin-rise-bg" :class="[newsDetails.riseStatus == 'up' ? 'coin-rise-bg-up' : 'coin-rise-bg-down']">
                    <div class="coin-rise-wrap">
                        <text class="coin-prise-CNY">¥{{ newsDetails.coinPriceCNY }}</text>
                        <text class="coin-prise-US">${{ newsDetails.coinPriceUS }}</text>
                    </div>
                </div>
                <div class="coin-info-wrap">
                    <div class="coin-name-wrap">
                        <text class="coin-name-text">{{ newsDetails.followClass }}</text>
                        <text class="coin-name-text">/</text>
                        <text class="coin-name-text">{{ newsDetails.followTarget }}</text>
                    </div>
                    <text class="coin-rise-text">{{ risePercent }}</text>
                </div>
            </div>
        </div>
    </cell-container>
</template>

<style>
    .follow-text-wrap {
        flex-direction: row;
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        height: 60px;
        justify-content: flex-start;
    }

    .follow-text {
        font-size: 26px;
        color: #434343;
    }

    .cell-coin-bg {
        width: 750px;
        height: 120px;
        background-color: #f8f7f7;
    }

    .cell-coin-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        height: 120px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .coin-rise-bg {
        height: 80px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
    }

    .coin-rise-bg-up {
        background-color: #11d33f;
    }

    .coin-rise-bg-down {
        background-color: #ff6d6b;
    }

    .coin-rise-wrap {
        padding-left: 25px;
        padding-right: 25px;
        align-items: flex-end;
    }

    .coin-prise-CNY {
        font-size: 32px;
        color: #fff;
    }

    .coin-prise-US {
        margin-top: 5px;
        font-size: 20px;
        color: #fff;
    }

    .coin-info-wrap {
        margin-left: 30px;
    }

    .coin-name-wrap {
        flex-direction: row;
    }

    .coin-name-text {
        font-size: 32px;
        color: #434343;
    }

    .coin-rise-text {
        font-size: 20px;
        color: #959595;
    }
</style>

<script>
    export default {
        props: {
            newsDetails: {
                default() {
                    return {
                        article: {
                            headerUrl: '',
                            userName: '',
                            userIssue: '',
                            articleTime: '',
                            comment: '',
                            forward: '',
                            agree: ''
                        },
                        followType: '',
                        followClass: '',
                        followTarget: '',
                        coinPriceCNY: '',
                        coinPriceUS: '',
                        rise: '',
                        riseStatus: ''
                    }
                }
            }
        },
        data() {
            return {
                footerType: 1
            }
        },
        components: {
            cellContainer: require('./cellContainer.vue'),
            followTarget: require('components/followTarget/index.vue')
        },
        computed: {
            risePercent() {
                if(this.newsDetails.riseStatus == 'up') {
                    return '+' + this.newsDetails.rise;
                } else {
                    return '-' + this.newsDetails.rise;
                }
            }
        }
    }
</script>