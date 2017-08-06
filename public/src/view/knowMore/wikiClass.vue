<template>
    <div>
        <div v-for="(item, i) in news" :key="i" class="cell-wrap">
            <n-news :news="item" class="cell-item"></n-news>
        </div>
    </div>
</template>

<style>
    .cell-wrap {
        width: 750px;
        background-color: #f8f8f8;
    }

    .cell-item {
        margin-bottom: 10px;
    }
</style>

<script>
    export default {
        data() {
            return {
                news: [
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    },
                    {
                        tit: '比特币的胜利！美国国税局放弃要求Coinbase提供用户账户密码和安全设置',
                        intro: '到达现场，记者没想到这里会如此繁忙。头戴安全帽的工作人员似乎是在那思索些什么，来来往往的水泥车和货车看得记者眼花缭乱，他们是在进行大规模的布线工作...',
                        imgUrl: '',
                        issue: '比特大时代',
                        comment: '10',
                        agree: '10',
                        time: '07/23'
                    }
                ]
            }
        },
        components: {
            nNews: require('components/news/index.vue')
        }
    }
</script>