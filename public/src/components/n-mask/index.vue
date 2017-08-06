<template>
    <div class="root" :style="{'opacity': opacity}" @click="_click"></div>
</template>

<script>

    module.exports = {
        props: {
            "opacity": {
                default: '0.2'
            }
        },
        methods: {
            "_click": function () {
                this.$emit("click");
            }
        }
    }
</script>

<style>
    .root{
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color: #f7f7f7;
        opacity: 0.3;
    }
</style>