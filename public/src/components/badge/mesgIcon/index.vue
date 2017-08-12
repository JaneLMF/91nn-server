<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

	export default {
        data() {
	        return {
                badgeData: {
                    action() {                                  //点击回调
                        console.log('click badge1');
                    },
                    iconStyle: {
                        url: '/resources/badge/nav-mesg.png',                                //图片源
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
                }
            }
        },
        components: {
            badge: require('components/badge/index.vue')
        },
        methods: {
            viewMesg() {
                navigator.push(routerPage.mesgBox);
            }
        }
	}
</script>

