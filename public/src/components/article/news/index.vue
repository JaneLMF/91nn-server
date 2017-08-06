<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        props: {
            news: {
                default() {
                    return {
                        articleID: '',
                        tit: '',
                        intro: '',
                        imgUrl: '',
                        issue: '',
                        comment: '',
                        agree: '',
                        time: ''
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

