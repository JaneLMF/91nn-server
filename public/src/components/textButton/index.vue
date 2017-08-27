<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {
            txtBtnStyle: {
                default() {
                    return {
                        fontSize: '',
                        btnColor: '',
                        btnText: ''
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

