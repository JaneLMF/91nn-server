<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {
	        size: { default: 's' },
            iconUrl: { default: '/src/components/cells/images/zan.png' },
            text: { default: '赞' },
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
                    this.iconUrl = '/src/components/textIcon/agree/images/agree-active.png';
                    this.textColor = '#fc6d3f';
                    if(this.text == '赞') {
                        this.text = '1';
                    } else {
                        this.text = parseInt(this.text) + 1 + '';
                    }
                } else {
                    this.iconUrl = '/src/components/textIcon/agree/images/agree.png';
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

