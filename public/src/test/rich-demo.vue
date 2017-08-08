<template>
    <div @viewappear="viewappear">
        <div class="btn" @click="writeNoTitle">
            <text class="btn-text">writeNoTitle</text>
        </div>
        <div class="btn" @click="editNoTitle">
            <text class="btn-text">editNoTitle</text>
        </div>

        <div class="btn" @click="writeHasTitle">
            <text class="btn-text">writeHasTitle</text>
        </div>
        <div class="btn" @click="editHasTitle">
            <text class="btn-text">editHasTitle</text>
        </div>
    </div>
</template>
<script>
    const storage = weex.requireModule('storage');
    const navigator = weex.requireModule('navigator');
    export default {
        methods: {
            writeNoTitle(){
                var content = {
                    title:'',
                    html:'',
                };
                storage.setItem('richEditorContent',JSON.stringify(content),()=>{
                    navigator.push({url:'http://192.168.2.22:8080/dist/native/test/rich-editor.js'},()=>{})
                });
            },
            editNoTitle(){
                var html = "<p>赋予一个村庄动感的，是风。</p>";
                html += "<p>描绘乡村的景物画，草木绝不可少。草木又极少静立的样子，树柳披风，风吹草斜，画面便有了动感，有了活力。</p>";
                html += "<p>不光是在图画中，在真实的乡村里，目光所及，无不是风的踪影。</p>";
                html += "<p>鸡鸭低头啄食，翅膀上有一两根羽毛被风吹动翻卷，那是穿堂而过的风。屋檐下的蜘蛛网也颤动起来，如果不是露珠，就算有风吹过也难让人发现。一只全身红亮羽毛的公鸡抖动着大红冠子从院子外面大踏脚步而来，裹挟了一阵风。鸭子们嘎嘎叫着撤了几步，伸长脖子仍贪恋着吃食，母鸡们倒是噶噶噶地跑开了几只，却是一只母鸡咕咕咕地低了头，脯子贴了地，短短的尾巴翘起，那只公鸡高踏着脚，翅膀扑扇，扬起地上的仆仆风尘。 </p>";
                html += "<p>依着院墙搭起的架子上，葡萄和丝瓜的叶子被一阵风吹得晃动，鸡鸭再次聚拢，杨树的叶子一阵哗哗的响起。风走得高了，空中的鸟雀迎风飞起，像一下一下地攒着劲儿，一蹿一蹿，隐进树枝摇动的巢里。</p>";
                html += "<p>这农家小院的风景，透着宁静，祥和，自然。风里传递着安稳，质朴和踏实。</p>";
                html += "<img src='http://upload-images.jianshu.io/upload_images/1465367-62181998442aaa83.gif?imageMogr2/auto-orient/strip'/><br/>";
                var content = {
                    title:'title',
                    html:html,
                };
                storage.setItem('richEditorContent',JSON.stringify(content),()=>{
                    navigator.push({url:'http://192.168.2.22:8080/dist/native/test/rich-editor.js'},()=>{})
                });
            },
            writeHasTitle(){
                var content = {
                    title:'',
                    html:'',
                    showTitle:true,
                };
                storage.setItem('richEditorContent',JSON.stringify(content),()=>{
                    navigator.push({url:'http://192.168.2.22:8080/dist/native/test/rich-editor.js'},()=>{})
                });
            },

            editHasTitle(){
                var html = "<p>赋予一个村庄动感的，是风。</p>";
                html += "<p>描绘乡村的景物画，草木绝不可少。草木又极少静立的样子，树柳披风，风吹草斜，画面便有了动感，有了活力。</p>";
                html += "<p>不光是在图画中，在真实的乡村里，目光所及，无不是风的踪影。</p>";
                html += "<p>鸡鸭低头啄食，翅膀上有一两根羽毛被风吹动翻卷，那是穿堂而过的风。屋檐下的蜘蛛网也颤动起来，如果不是露珠，就算有风吹过也难让人发现。一只全身红亮羽毛的公鸡抖动着大红冠子从院子外面大踏脚步而来，裹挟了一阵风。鸭子们嘎嘎叫着撤了几步，伸长脖子仍贪恋着吃食，母鸡们倒是噶噶噶地跑开了几只，却是一只母鸡咕咕咕地低了头，脯子贴了地，短短的尾巴翘起，那只公鸡高踏着脚，翅膀扑扇，扬起地上的仆仆风尘。 </p>";
                html += "<p>依着院墙搭起的架子上，葡萄和丝瓜的叶子被一阵风吹得晃动，鸡鸭再次聚拢，杨树的叶子一阵哗哗的响起。风走得高了，空中的鸟雀迎风飞起，像一下一下地攒着劲儿，一蹿一蹿，隐进树枝摇动的巢里。</p>";
                html += "<p>这农家小院的风景，透着宁静，祥和，自然。风里传递着安稳，质朴和踏实。</p>";
                html += "<img src='http://upload-images.jianshu.io/upload_images/1465367-62181998442aaa83.gif?imageMogr2/auto-orient/strip'/><br/>";
                var content = {
                    title:'平凡',
                    html:html,
                    showTitle:true
                };
                storage.setItem('richEditorContent',JSON.stringify(content),()=>{
                    navigator.push({url:'http://192.168.2.22:8080/dist/native/test/rich-editor.js'},()=>{})
                });
            },
            viewappear(){
                storage.getItem('richEditorContent',(e)=>{
                    if (e.data) {
                        var result = JSON.parse(e.data);
                        if(result.isEdited) {
                            console.log('编辑内容为:' + JSON.stringify(result))
                        }
                    }
                })
            }
        }
    }
</script>
<style>
    .btn {
        margin-top: 10px;
        height:100px;
        justify-content:center;
        align-items:center;
        background-color: #888888;
    }
    .btn-text {
        color: #ffffff;
    }
</style>