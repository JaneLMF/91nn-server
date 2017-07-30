<template>
    <div>
        <div @click="share" style="width: 200px; height: 100px; background-color: #33bbee; justify-content: center; align-items: center;">
            <text>Share</text>
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
            share(){
                app.share({
                    title:'title',
                    summary:'summary',
                    url:'http://www.ihaiwai.com',
                    image:'http://static.ihaiwai.com/img/20170715/d3c32ea7ccb941f38a86f39ae955f661.jpg'
                },(res)=>{
                    this.message = JSON.stringify(res);
                })
            }
        }
    }
</script>