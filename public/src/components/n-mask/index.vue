<template>
    <div class="root" v-if="opacity > 0" :style="{'opacity': opacity, 'backgroundColor': backgroundColor}" @click="_click"></div>
    <div class="root" v-else @click="_click"></div>
</template>

<script>

    module.exports = {
        props: {
            "opacity": {
                type: Number,
                default: 0
            },
            "backgroundColor": {
                type: String,
                default: '#f7f7f7'
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
    }
</style>