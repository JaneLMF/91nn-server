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
            storage.getItem('userId',(res) => {
                if(res.data) {
                    console.log('getStorage:' + res.data);
                    this.uId = res.data;
                }
            })
        },
        data() {
            return {
                title: '',
                rightItemTitle: '跳过',
                isFemale: true,
                canSubmit: false,
                nick: '',
                uId: ''
            }
        },
        components: {
            backNavpage: require('components/navbar/back-navbar.vue')
        },
        methods: {
            submitForm() {
                var sex = '';
                if(isFemale) {
                    sex = 'female';
                } else {
                    sex = 'male';
                }
                if(this.nick == '') {
                    this.canSubmit = false;
                } else {
                    this.canSubmit = true;
                }
                if(!this.canSubmit) {
                    modal.toast({ message: '请确认以上信息填写无误', duration: 1 })
                } else {
                    nAPI.updateUserNickSex(this.uId, sex, this.nick).then(res => {
                        nn.dump('success', res);
                    }).catch(res => {
                        nn.dump('Failed', res)
                    })
                }
            },
            chooseFemale() {
                this.isFemale = true;
            },
            chooseMale() {
                this.isFemale = false;
            },
            getNick(e) {
                this.nick = e.value;
            }
        }
	}
</script>

