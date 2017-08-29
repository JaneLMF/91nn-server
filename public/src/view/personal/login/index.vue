<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    import nAPI from 'api/index'
    import nn from 'utils/debug'

    const storage = weex.requireModule('storage');

    var modal = weex.requireModule('modal');

	export default {
	    data() {
	        return {
	            title: '登录',
                userPhone: '',
                userPassword: '',
                buttonStyle: {
                    size: 'm',
                    buttonText: '登录',
                    unclickColor: '#ff622a',
                    clickedColor: '#eee'
                },
                txtBtnStyle: [
                    {
                        fontSize: '26px',
                        btnColor: '#ff622a',
                        btnText: '立即注册'
                    },
                    {
                        fontSize: '26px',
                        btnColor: '#434343',
                        btnText: '找回密码'
                    }
                ]
            }
        },
		components: {
            backNavpage: require('components/navbar/back-navbar.vue'),
            inputPhone: require('components/iconInput/inputPhone/index.vue'),
            inputPw: require('components/iconInput/inputPw/index.vue'),
            nnButton: require('components/button/index.vue'),
            textButton: require('components/textButton/index.vue')
        },
        methods: {
            login() {
                console.log('tologin');
                console.log(this.userPhone, this.userPassword);
                if(this.userPhone != '' && this.userPassword != '') {
                    nAPI.login(this.userPhone, this.userPassword).then(res => {
                        nn.dump('success', res);
//                        storage.getItem('bossInfo',(res) => {
//                            if(res.data) {
//                                console.log(res.data);
//                                var bossInfo = JSON.parse(res.data);
//
//                            }
//                        })
//                        storage.removeItem('bossInfo', () => {
//                            console.log(456);
//                        });
                        storage.setItem('bossInfo', JSON.stringify(res.result), () => {
                            navigator.pop();
                        });
                    }).catch(res => {
                        nn.dump('Failed', res);
                        console.log(789);
                        modal.toast({ message: res.err, duration: 1 })
                    })
                } else {
                    modal.toast({ message: '请确认以上信息填写无误', duration: 1 })
                }
            },
            regist() {
                console.log('register');
                navigator.push(routerPage.register);
            },
            forgetPw() {
                console.log('forgetPw');
            },
            getPhone(v) {
                this.userPhone = v;
            },
            getPw(v) {
                this.userPassword = v;
            }
        }
	}
</script>

