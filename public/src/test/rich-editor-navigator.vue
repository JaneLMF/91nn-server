<template>
    <div>
        <div class="navigator-item-ios-height" v-if="iOS"></div>
        <div class="navigator">
            <div class="navigator-item navigator-item-left" @click="leftItemClick">
                <image class="navigator-item-back" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/back.png"></image>
            </div>
            <div class="navigator-item navigator-item-center">
                <text style="color: #ffffff;">文章</text>
            </div>
            <div class="navigator-item navigator-item-right" @click="rightItemClick">
                <text style="color: #ffffff;">发布</text>
            </div>
        </div>
    </div>
</template>
<!--$emit-->
<script>
    export default {
        created(){
            this.iOS = weex.config.env.platform == "iOS"
        },
        methods:{
            data:{
              iOS:false,
            },
            leftItemClick(){
                this.$emit('leftItemClick')
            },
            rightItemClick(){
                this.$emit('rightItemClick')
            }
        }

    }
</script>
<style>
    .navigator {
        height:88px;
        flex-direction: row;
        justify-content:space-between;
        background-color:#F96E48 ;
    }
    .navigator-item-ios-height {
        height:40px;
        background-color:#F96E48 ;
    }
    .navigator-item {
        flex:1;
        justify-content:center;
        padding-left:30px;
        padding-right: 30px;
    }
    .navigator-item-left {
        align-items: flex-start;
    }
    .navigator-item-center {
        align-items: center;
    }
    .navigator-item-right {
        align-items: flex-end;
    }
    .navigator-item-back {
        width:35px;
        height:40px;
    }
</style>