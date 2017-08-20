<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
		props: {
            title: { default: '' },
            summary: { default: '' },
            author: {
                default() {
                    return {

                    }
                }
            },
            images: {
                default() {
                    return []
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

