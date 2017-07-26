<template>
    <div class="content-wrap">
        <text v-if="isSummary" class="content">{{ proIntroContent }}</text>
        <text v-else class="content">比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的...初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特</text>
        <text @click="viewDetail" class="detail-btn">阅读全文</text>
    </div>
</template>

<style>
    .content-wrap {
        margin-left: 30px;
        margin-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .content {
        font-size: 26px;
        color: #434343;
        line-height: 40px;
    }
    
    .detail-btn {
        font-size: 26px;
        color: #959595;
    }
</style>

<script>
    export default {
        props: {
            proIntroContent: { default: '' }
        },
        data() {
            return {
                isSummary: true
            }
        },
        methods: {
            viewDetail() {
                return this.isSummary = !this.isSummary;
            }
        }
    }
</script>