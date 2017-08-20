<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
		props: {
		    iconUrl: { default: '' },
            placeHolderText: { default: '' }
        },
        methods: {
            inputIt(e) {
                this.$emit('callBack', e);
            }
        }
	}
</script>

