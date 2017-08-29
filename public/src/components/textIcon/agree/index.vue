<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import nn from 'utils/debug'
    import nAPI from 'api/index'

    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal')

	export default {
	    props: {
	        size: { default: 'm' },
            iconUrl: { default: '/resources/textIcon/agree.png' },
            text: { default: '0' },
            textColor: { default: '#bbbbbb' },
            targetType: { default: '' },
            articleId: { default: '' },
            userId: { default: '' }
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
                modal.toast({
                    message: this.articleId,
                    duration: 0.3
                })
                if(!this.hasAgree) {
                    nAPI.upvote(this.targetType, this.articleId, this.userId).then(res => {
                        nn.dump('success', res)
                        modal.toast({
                            message: '已赞',
                            duration: 0.3
                        })
                        this.iconUrl = '/resources/textIcon/agree-active.png';
                        this.textColor = '#fc6d3f';
                        this.text = res.result;
                        this.hasAgree = !this.hasAgree;
                    }).catch(res => {
                        nn.dump('Failed', res)
//                        modal.toast({ message: res, duration: 1 });
                    })
//                    this.iconUrl = '/resources/textIcon/agree-active.png';
//                    this.textColor = '#fc6d3f';
//                    if(this.text == '赞') {
//                        this.text = '1';
//                    } else {
//                        this.text = parseInt(this.text) + 1 + '';
//                    }
                } else {
                    nAPI.delUpvote(this.targetType, this.articleId, this.userId).then(res => {
                        nn.dump('success', res)
                        modal.toast({
                            message: '已取消点赞',
                            duration: 0.3
                        })
                        this.iconUrl = '/resources/textIcon/agree.png';
                        this.textColor = '#bbbbbb';
                        if(res.result == '0') {
                            this.text = '赞';
                        } else {
                            this.text = res.result;
                        }
                        this.hasAgree = !this.hasAgree;
                    }).catch(res => {
                        nn.dump('Failed', res)
                        modal.toast({ message: "del" + res, duration: 1 });
                    })
//                    this.iconUrl = '/resources/textIcon/agree.png';
//                    this.textColor = '#bbbbbb';
//                    if(this.text == '1') {
//                        this.text = '赞';
//                    } else {
//                        this.text = parseInt(this.text) - 1 + '';
//                    }
                }
                this.hasAgree = !this.hasAgree;
            }
        }
	}
</script>

