<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        props: {
            ischecked: { default: false },
            name: { default: '' },
            value: { default: '' }
        },
        data() {
            return {
                checked: '/resources/checkBox/checked.png',
                unchecked: '/resources/checkBox/unchecked.png'
            }
        },
        methods: {
            checkIt() {
                this.ischecked = !this.ischecked;
                this.$emit('callBack', this.ischecked);
            }
        }
	}
</script>

