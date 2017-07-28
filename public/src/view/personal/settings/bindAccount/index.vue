<template>
    <action-row :rowTit="rowTit" :btnClass="btnClass" :callBack="callBack">
        <text class="phone" slot="mesg">{{ phoneNum }}</text>
    </action-row>
</template>

<style>
    .phone {
        margin-right: 10px;
        font-size: 28px;
        color: #959595;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        data() {
            return {
                rowTit: '手机号绑定',
                btnClass: 'details',
                callBack() {
                    navigator.push(routerPage.updateAccount)
                },
                phoneNum: '15000345234'
            }
        },
        components: {
            actionRow: require('components/actionRow/index.vue')
        }
    }
</script>