<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        data() {
            return {
                size: { default: 'xm' },
                iconUrl: { default: '/resources/repostMesgBox/at-btn.png' },
                text: { default: '' },
                textColor: { default: '#bbbbbb' }
            }
        },
        components: {
            textIcon: require('components/textIcon/index.vue')
        },
        methods: {
            clickIt() {
                this.$emit('callBack');
            }
        }
	}
</script>

