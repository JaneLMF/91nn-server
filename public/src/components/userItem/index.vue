<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        props: {
            userInfo: {
                default() {
                    return {
                        header: '',
                        name: '',
                        intro: ''
                    }
                }
            }
        },
        methods: {
            clickIt() {
                this.$emit('callBack')
            }
        }
	}
</script>

