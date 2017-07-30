<template>
    <text class="player">{{ showText }}</text>
</template>

<style>
    .player {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 4px;
        background-color: #fc6d3f;
        color: #fff;
        font-size: 24px;
    }
</style>

<script>
    export default {
        props: {
            num: { default: '' }
        },
        computed: {
            showText() {
                var targetText = this.num + '';
                if(targetText.length == 1) {
                    targetText = '0' + targetText;
                }
                return targetText;
            }
        }
    }
</script>