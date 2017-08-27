<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    mounted() {
	        console.log(this.cellItem);
        },
	    props: {
	        cellItem: {
	            default() {
	                return {

                    }
                }
            }
        },
		components: {
            cellFresh: require('components/cells/cellFresh.vue'),
            slotRepost: require('components/cells/slotRepost.vue'),
            cellCoin: require('components/cells/cellCoin.vue'),
            concernApp: require('components/cells/concernApp.vue'),
            concernChain: require('components/cells/concernChain.vue'),
            concernCoin: require('components/cells/concernCoin.vue'),
            concernUser: require('components/cells/concernUser.vue'),
            repostComment: require('components/cells/repostComment.vue')
        }
	}
</script>

