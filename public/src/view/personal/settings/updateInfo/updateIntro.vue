<template>
    <back-navpage :title="title">
        <div class="input-wrap">
            <input type="text" placeholder="介绍下自己" class="input-intro" />
        </div>
    </back-navpage>
</template>

<style>
    .input-wrap {
        width: 690px;
        margin-right: 30px;
        margin-left: 30px;
    }

    .input-intro {
        margin-top: 40px;
        padding-bottom: 30px;
        border-bottom-width: 1px;
        border-color: #c9c9c9;
        font-size: 28px;
        placeholder-color: #c9c9c9;
    }
</style>

<script>
    export default {
        data() {
            return {
                title: '编辑简介'
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue')
        }
    }
</script>