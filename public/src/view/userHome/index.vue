<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                userInfo: {
                    userHeader: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                    isVIP: true,
                    userName: '鹿晗',
                    userSex: 'man',
                    userIntro: '机械神教和比特神教信徒...'
                },
                badgeData: {
                    action() {                                  //点击回调
                        console.log('click badge1');
                    },
                    iconStyle: {
                        url: '/src/view/personal/images/nav-mesg.png',                                //图片源
                        size: 's'
                    },
                    superScriptState: {
                        hasSuperScript: true,                  //是否需要
                        state: '2',                              //角标类型
                        content: '99'
                    },
                    iconName: {
                        hasName: false,                         //是否有tit
                        name: ''
                    }
                },
                hasIcon: true,
                settingAction() {
                    navigator.push(routerPage.settings)
                },
                jumpMyNews() {
                    navigator.push(routerPage.myNews)
                },
                jumpMyFavorites() {
                    navigator.push(routerPage.myFavorites)
                }
            }
        },
        components: {
            userInfo: require('components/userInfo/index.vue'),
            badge: require('components/badge/index.vue'),
            actionRow: require('components/actionRow/index.vue')
        },
        methods: {
            jumpToFollows() {
                navigator.push(routerPage.myFollows)
            },
            jumpToFans() {
                navigator.push(routerPage.myFans)
            },
            jumpMyComments() {
                navigator.push(routerPage.myComments)
            }
        }
    }
</script>

