<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'
    import nn from 'utils/debug'
    import nAPI from 'api/index'

    const storage = weex.requireModule('storage');
    const nnWebView = weex.requireModule('nnWebView');

    var modal = weex.requireModule('modal');

    export default {
        data() {
            return {
                title: '发动态',
                rightItemTitle: '发布',
                ischecked: false,
                checkBoxName: '同时评论',
                atSize: 'xm',
                atIconUrl: '/resources/repostMesgBox/at-btn.png'
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            nCheckBox: require('components/checkBox/index.vue'),
            nAt: require('components/textIcon/at/index.vue')
        },
        methods: {
            checkBoxCallBack(v) {
                this.ischecked = v;
            },
            atUser() {
                navigator.push(routerPage.userList)
            },
            finsh(){

            },
            submitArticle() {
                nnWebView.evaluateJavascript(this.$refs.web,'window.html()',(e)=>{
                    var _e = JSON.parse(e);
//                    var obj = {
//                        title:_e.title,
//                        html:_e.html,
//                        isEdited:true,
//                    };
                    nAPI.createNews(_e.html).then(res => {
                        nn.dump('success', res)
                        modal.toast({ message: res.result, duration: 1 });
                        navigator.pop();
                    }).catch(res => {
                        nn.dump('Failed', res)
//                        modal.toast({ message: res, duration: 1 });
                    })
//                    storage.setItem('richEditorContent',JSON.stringify(obj),()=>{
//                        navigator.pop({},()=>{});
//                    });
                });
            }
        }
	}
</script>

