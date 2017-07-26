<template>
    <mesg-verify :buttonText="buttonText" :submitAction="submitAction"></mesg-verify>
</template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                buttonText: '下一步',
                submitAction() {
                    navigator.push(routerPage.submitNewPw)
                }
            }
        },
        components: {
            mesgVerify: require('components/mesgVerify/index.vue')
        }
    }
</script>