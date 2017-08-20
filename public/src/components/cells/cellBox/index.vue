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
            cellLink: require('components/cells/cellLink.vue')
        }
	}
</script>

