<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {
	        size: { default: 'm' },
            iconUrl: { default: '/resources/textIcon/comment.png' },
            text: { default: '0' },
            textColor: { default: '#bbbbbb' }
        },
        data() {
	        return {
	            hasAgree: false
            }
        },
		components: {
		    textIcon: require('components/textIcon/index.vue')
        },
        methods: {
            commentIt() {

            }
        }
	}
</script>

