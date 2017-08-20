<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

	export default {
	    props: {
	        size: { default: 'm' },
            iconUrl: { default: '/resources/textIcon/repost.png' },
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
            repostIt() {
                navigator.push(routerPage.repostInput)
            }
        }
	}
</script>

