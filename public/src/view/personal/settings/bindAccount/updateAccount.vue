<template>
    <back-navpage :title="title">
        <div>
            <mesg-verify :buttonText="buttonText" :submitAction="submitAction"></mesg-verify>
        </div>
    </back-navpage>
</template>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                title: '绑定手机号',
                buttonText: '完成绑定',
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