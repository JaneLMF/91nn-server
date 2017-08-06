<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
		props: {
		    size: { default: 's' },
            iconDirection: { default: 'row' },
            textDirection: { default: 'right' },
            hasClick: { default: false },
            iconUrl: { default: '' },
            text: { default: '' },
            textColor: { default: '#bbbbbb' }
        },
        methods: {
		    clickIt() {
		        this.$emit('callBack', !this.hasClick);
            }
        }
	}
</script>

