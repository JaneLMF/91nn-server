<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    var modal = weex.requireModule('modal');
    const storage = weex.requireModule('storage');

	export default {
        data() {
            return {
                title: '注册',
                buttonText: '下一步',
                canNext: false
            }
        },
        components: {
            mesgVerify: require('components/mesgVerify/index.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        },
        methods: {
            getPhoneAndMesg(v) {
                console.log(v);
                var obj = {
                    code: v.code,
                    phone: v.phone
                }
                if(v.code != '' && v.phone != '') {
                    storage.setItem('registerInfo', JSON.stringify(obj), () => {
                        navigator.push(routerPage.registerNext)
                    });
                } else {
                    modal.toast({ message: '请确认以上信息填写无误', duration: 1 });
                }
            }
        }
	}
</script>

