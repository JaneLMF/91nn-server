<template>
    <scroller style="padding: 50px; flex: 1;">
        <div style="height: 100px; background-color: rebeccapurple"></div>
        <div style="height: 100px; background-color: rosybrown"></div>
        <nn-html :html="html" @select="select"></nn-html>
        <div style="height: 100px; background-color: rosybrown"></div>
        <div style="height: 100px; background-color: rebeccapurple"></div>
    </scroller>
</template>
<script>
    export default {
        data:{
            html:"",
            html1:"<font color='red'>哈哈哈</font> <h1>渤这十年中在娱乐圈摸爬滚打的最新代名词</h1>。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉很轻松……” 黄渤长得不好看，也不出众，但他的会讲话，得到... <a href='http://www.jianshu.com/p/533ab64be24e'>黄渤：颜值不够，情商来凑</a>渤这十年中在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉高情商是黄渤这十年中，在娱乐圈摸爬滚打的最新代名词。“黄渤情商真高……”“黄渤太会说话了……”,“访谈黄渤，你会感觉很轻松……” 黄渤长得不好看，也不出众，但他的会讲话，得到... <a href='http://www.jianshu.com/p/533ab64be24e'>黄渤：颜值不够，情商来凑</a>",
            html2:"黄渤初中时就读的是青岛九中。他的家族，<a href='http://www.jianshu.com/p/533ab64be24e'>网页链接</a>"
        },
        created(){
            this.html = this.html1;
        },
        methods:{
            select(e){
                console.log(e);
                this.html = this.html == this.html1 ? this.html2 : this.html1;
            }
        }
    }
</script>
<style>
    .ttt {
        /*background-color: #11d33f;*/
        /*height:120px;*/
        /*width:200px;*/
        /*height:500px;*/
        /*flex:1;*/
    }
</style>
