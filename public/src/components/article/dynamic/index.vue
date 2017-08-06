<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
		props: {
            dynamic: {
                default() {
                    return {
                        userName: '',
                        content: ''
                    }
                }
            }
        },
        methods: {
            viewDetails() {
                this.$emit('viewIt', this.articleID);
            }
        }
	}
</script>

