<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    export default {
        props: {

        },
        data() {
            return {
                inputType: 'password',
                iconUrl: '/resources/inputIcon/password.png',
                placeHolderText: '请输入密码'
            }
        },
        components: {
            iconInput: require('components/iconInput/index.vue')
        },
        methods: {
            callBack(v) {
                console.log(v);
                this.$emit('callBack', v);
            }
        }
    }
</script>

