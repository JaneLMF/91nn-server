<template>
    <div class="container">
        <rich-navigator @leftItemClick="leftItemClick" @rightItemClick="rightItemClick"/>
        <nn-web class="web" ref="web" @change="finsh" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/rich-editor.html"></nn-web>
        <!--<nn-web class="web" ref="web" @change="finsh" src="http://192.168.199.200:8080/src/test/rich-editor.html"></nn-web>-->
        <div class="bar">
            <image class="bar-pic" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/picture.png" @click="insertImage"></image>
            <image class="bar-aite" src="http://images-file.oss-cn-hangzhou.aliyuncs.com/91nn/aite.png" @click="aite"></image>
        </div>
    </div>
</template>
<script>
    const app = weex.requireModule('app');
    const storage = weex.requireModule('storage');
    const navigator = weex.requireModule('navigator');
    const nnWebView = weex.requireModule('nnWebView');
    export default {
        components:{
            richNavigator:require('./rich-editor-navigator.vue')
        },
        methods:{
            rightItemClick(){
                nnWebView.evaluateJavascript(this.$refs.web,'window.html()',(e)=>{
                    var obj = {
                        title:e.title,
                        html:e.html,
                        isEdited:true,
                    };
                    storage.setItem('richEditorContent',JSON.stringify(obj),()=>{
                        navigator.pop({},()=>{});
                    });
                });
            },
            leftItemClick(){
                navigator.pop(()=>{});
            },
            insertImage(){
                app.getPhoto((res)=>{
                    nnWebView.evaluateJavascript(this.$refs.web,'window.insertImage("'+res.data+'")',()=>{});
                })

            },
            aite(){
                app.getUser((res)=>{
                    var html = "\"<a href='"+res.screen_name+"'>"+res.screen_name+"</a>\"";
                    var js = "window.appendHTML("+html+")";
                    console.log(js);
                    nnWebView.evaluateJavascript(this.$refs.web,js,()=>{});
            })
            },
            finsh(){
                storage.getItem('richEditorContent',(res) => {
                    if(res.data) {
                        nnWebView.evaluateJavascript(this.$refs.web,"window.placeHTMLToEditor("+res.data+")",()=>{});
                    }
                })
            }
        }
    }

</script>
<style>
    .container {
        flex:1;
    }
    .web {
        flex:1;
    }

    .bar {
        height:100px;
        flex-direction: row;
        justify-content:flex-end;
        align-items: center;
        border-top-width:1px;
        border-top-color: #e3e3e3;
    }
    .bar-pic,.bar-aite {
        margin-right: 20px;
    }
    .bar-pic {
        width:80px;
        height:80px;
    }
    .bar-aite {
        width:70px;
        height:70px;
    }
</style>