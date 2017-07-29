<template>
    <div>
        <div @click="take" style="width: 200px; height: 100px; background-color: #33bbee; justify-content: center; align-items: center;">
            <text>Take Photo</text>
        </div>
        <div>
            <text>{{message}}</text>
        </div>
        <image style="width: 300px; height: 300px; background-color: gainsboro" :src="src"></image>
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
            take(){
                console.log('weex choose')
                app.getPhoto((res)=>{
                    this.message = JSON.stringify(res);
                    this.src = res.data;
                })
            }
        }
    }
</script>