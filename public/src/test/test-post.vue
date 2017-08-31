<template>
    <div style="background-color: #999999">
        <div style="height: 500px; position: fixed; left: 0; right: 0; top: 200px; padding: 20px; background-color: #ffffff">
            <!--<nn-web ref="web" style="flex: 1;" src="http://192.168.2.22:8000/test-post.html"></nn-web>-->
            <nn-web ref="web" style="flex: 1;" src="http://ihaiwai.oss-cn-hangzhou.aliyuncs.com/app/ihaiwai/weex/1.0/html/test-post.html"></nn-web>
            <div class="bar">
                <div class="bar-left">
                    <!--<image src="http://ihaiwai.oss-cn-hangzhou.aliyuncs.com/app/ihaiwai/img/checkbox.png" class="image"></image>-->
                    <!--<text>微博分享</text>-->
                    <image @click="aite1" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/aite.png" class="image" style="margin-left: 20px"></image>
                    <text>模拟选取</text>
                    <image @click="aite2" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/aite.png" class="image" style="margin-left: 20px"></image>
                    <text>真实选取</text>
                </div>
                <div class="bar-right">
                    <div class="submit" @click="submit">
                        <text class="submit-text">发表评论</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .bar {
        height:100px;
    }
    .bar,.bar-left,.bar-right {
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
    }
    .image {
        width:60px;
        height:60px;
        margin-right: 20px;
    }
    .submit {
        background-color: #FB6239;
        padding:10px;
        border-radius: 10px;

    }
    .submit-text {
        color: #ffffff;
    }
</style>
<script>
    const app = weex.requireModule("app");
    const nnWebView = weex.requireModule("nnWebView");
    export default {
        methods: {
            aite1(e) {
                const text = "@text";
                const link = "link";
                nnWebView.evaluateJavascript(this.$refs.web,'window.addLink("'+text+'","'+link+'")',(e)=>{})
            },
            aite2(e){
                app.getUser((u)=>{
                    const text = u.nick;
                    const link = u._id;
                    nnWebView.evaluateJavascript(this.$refs.web,'window.addLink("'+text+'","'+link+'")',(e)=>{})
                })
            },
            submit(){
                nnWebView.evaluateJavascript(this.$refs.web,'window.html()',(e)=>{
                    console.log(e)
                })
            }
        }
    }
</script>