<template>
    <back-navpage :title="title">
        <mesg-verify :buttonText="buttonText" :submitAction="submitAction"></mesg-verify>
    </back-navpage>
</template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                title: '修改密码',
                buttonText: '下一步',
                submitAction() {
                    navigator.push(routerPage.submitNewPw)
                }
            }
        },
        components: {
            mesgVerify: require('components/mesgVerify/index.vue'),
            backNavpage: require('components/navbar/back-navbar.vue')
        }
    }
</script>