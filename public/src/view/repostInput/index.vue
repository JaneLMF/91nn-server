<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        data() {
            return {
                title: '转发',
                ischecked: false,
                checkBoxName: '同时评论',
                atSize: 'xm',
                atIconUrl: '/resources/repostMesgBox/at-btn.png'
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            nCheckBox: require('components/checkBox/index.vue'),
            nAt: require('components/textIcon/at/index.vue')
        },
        methods: {
            checkBoxCallBack(v) {
                this.ischecked = v;
            },
            atUser() {
                console.log('at');
            }
        }
	}
</script>

