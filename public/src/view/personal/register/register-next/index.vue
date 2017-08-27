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
        mounted() {
            storage.getItem('registerInfo',(res) => {
                if(res.data) {
                    console.log('getStorage:' + res.data);
                    this.registerInfo = res.data;
                }
            })
        },
        data() {
            return {
                title: '注册',
                registerInfo: {},
                OncePassword: '',
                checkPassword: '',
                canSubmit: false
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue')
        },
        methods: {
            getPw(e) {
                this.OncePassword = e.value;
                console.log(this.OncePassword);
            },
            checkPw(e) {
                console.log(this.nick, this.OncePassword, e.value);
                if(e.value == this.OncePassword) {
                    this.checkPassword = e.value;
                    this.canSubmit = true;
                } else {
                    modal.toast({ message: '两次输入的密码不一致', duration: 1 })
                }
            },
            submitForm() {
                if(!this.canSubmit) {
                    modal.toast({ message: '请确认以上信息填写无误', duration: 1 })
                } else {
                    nAPI.register(this.registerInfo.code, this.registerInfo.phone, this.checkPassword).then(res => {
                        nn.dump('success', res);
                        storage.setItem('userId', JSON.stringify(res.result.id), () => {
                            navigator.push(routerPage.registerNick);
                        });
                    }).catch(res => {
                        nn.dump('Failed', res)
                    })
                }
            }
        }
    }
</script>

