<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

	export default {
        data() {
            return {
                commentFlag: false,
                ischecked: false,
                checkBoxName: '同时评论',
                atSize: 'xm',
                atIconUrl: '/resources/repostMesgBox/at-btn.png',
                canSubmit: false
            }
        },
        components: {
            nCheckBox: require('components/checkBox/index.vue')
        },
        methods: {
            checkBoxCallBack(v) {
                this.ischecked = !v;
            },
            isInputed(event) {
                console.log(event.value);
                if(event.value.length > 0) {
                    this.canSubmit = true;
                } else {
                    this.canSubmit = false;
                }
            },
            atUser() {
                navigator.push(routerPage.userList)
            },
            closeIt() {
                this.$emit('callBack', this.commentFlag);
            }
        }
	}
</script>

