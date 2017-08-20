<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    data() {
	        return {
	            title: '登录'
            }
        },
		components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            inputPhone: require('components/iconInput/inputPhone/index.vue')
        }
	}
</script>

