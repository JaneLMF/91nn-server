<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {
	        size: { default: 'm' },
            iconUrl: { default: '/resources/textIcon/agree.png' },
            text: { default: '0' },
            textColor: { default: '#bbbbbb' }
        },
        data() {
	        return {
	            hasAgree: false
            }
        },
		components: {
		    textIcon: require('components/textIcon/index.vue')
        },
        methods: {
	        agree() {
                if(!this.hasAgree) {
                    this.iconUrl = '/resources/textIcon/agree-active.png';
                    this.textColor = '#fc6d3f';
                    if(this.text == '赞') {
                        this.text = '1';
                    } else {
                        this.text = parseInt(this.text) + 1 + '';
                    }
                } else {
                    this.iconUrl = '/resources/textIcon/agree.png';
                    this.textColor = '#bbbbbb';
                    if(this.text == '1') {
                        this.text = '赞';
                    } else {
                        this.text = parseInt(this.text) - 1 + '';
                    }
                }
                this.hasAgree = !this.hasAgree;
            }
        }
	}
</script>

