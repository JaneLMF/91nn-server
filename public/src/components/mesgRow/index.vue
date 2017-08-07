<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
		props: {
		    mesgRow: {
		        default() {
		            return {
                        iconUrl: '',
                        iconName: '',
                        newestMesg: '',
                        time: '',
                        mesgCount: 0
                    }
                }
            }
        },
        methods: {
            clickIt() {
                this.$emit('callBack');
            }
        }
	}
</script>

