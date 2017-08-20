<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {

        },
        data() {
	        return {
	            iconUrl: '/resources/inputIcon/phoneNum.png',
                placeHolderText: '请输入手机号码'
            }
        },
		components: {
		    iconInput: require('components/iconInput/index.vue')
        },
        methods: {
	        callBack(v) {
	            console.log(v);
            }
        }
	}
</script>

