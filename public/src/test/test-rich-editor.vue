<template>
    <div>
        <div @click="richEditor" style="width: 200px; height: 100px; background-color: #33bbee; justify-content: center; align-items: center;">
            <text>richEditor</text>
        </div>
        <div>
            <text>{{message}}</text>
        </div>
    </div>
</template>
<script>
    const app = weex.requireModule('app')
    export default {
        data:{
            message:'',
            src:''
        },
        methods: {
            richEditor(){
                var html = "<p>赋予一个村庄动感的，是风。</p>";
                html += "<p>描绘乡村的景物画，草木绝不可少。草木又极少静立的样子，树柳披风，风吹草斜，画面便有了动感，有了活力。</p>";
                html += "<p>不光是在图画中，在真实的乡村里，目光所及，无不是风的踪影。</p>";
                html += "<p>鸡鸭低头啄食，翅膀上有一两根羽毛被风吹动翻卷，那是穿堂而过的风。屋檐下的蜘蛛网也颤动起来，如果不是露珠，就算有风吹过也难让人发现。一只全身红亮羽毛的公鸡抖动着大红冠子从院子外面大踏脚步而来，裹挟了一阵风。鸭子们嘎嘎叫着撤了几步，伸长脖子仍贪恋着吃食，母鸡们倒是噶噶噶地跑开了几只，却是一只母鸡咕咕咕地低了头，脯子贴了地，短短的尾巴翘起，那只公鸡高踏着脚，翅膀扑扇，扬起地上的仆仆风尘。 </p>";
                html += "<p>依着院墙搭起的架子上，葡萄和丝瓜的叶子被一阵风吹得晃动，鸡鸭再次聚拢，杨树的叶子一阵哗哗的响起。风走得高了，空中的鸟雀迎风飞起，像一下一下地攒着劲儿，一蹿一蹿，隐进树枝摇动的巢里。</p>";
                html += "<p>这农家小院的风景，透着宁静，祥和，自然。风里传递着安稳，质朴和踏实。</p>";
                html += "<img src='http://upload-images.jianshu.io/upload_images/1465367-62181998442aaa83.gif?imageMogr2/auto-orient/strip'/>";
                app.editor({
                    title:'故乡的风',
                    html:html
                },(res)=>{
                    this.message = JSON.stringify(res);
                })
            }
        }
    }
</script>