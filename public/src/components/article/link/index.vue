<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
        props: {
            newsDetails: {
                default() {
                    return {
                        article: {
                            headerUrl: '',
                            userName: '',
                            userIssue: '',
                            articleTime: '',
                            comment: '',
                            forward: '',
                            agree: ''
                        },
                        followType: '',
                        followClass: '',
                        followTarget: '',
                        coinPriceCNY: '',
                        coinPriceUS: '',
                        rise: '',
                        riseStatus: ''
                    }
                }
            }
        },
        data() {
            return {
                footerType: 0
            }
        },
        components: {
            followTarget: require('components/followTarget/index.vue')
        },
        methods: {
            viewDetails() {
                this.$emit('viewIt', this.articleID);
            }
        }
	}
</script>

