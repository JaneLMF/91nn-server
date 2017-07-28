<template>
    <div>
        <action-row :rowTit="header.rowTit" :btnClass="header.btnClass" :callBack="header.callBack">
            <image class="header" slot="mesg" :src="header.content"></image>
        </action-row>
        <action-row :rowTit="name.rowTit" :btnClass="name.btnClass" :callBack="name.callBack">
            <text class="content" slot="mesg">{{ name.content }}</text>
        </action-row>
        <action-row :rowTit="sex.rowTit" :btnClass="sex.btnClass" :callBack="sex.callBack">
            <text class="content" slot="mesg">{{ sex.content }}</text>
        </action-row>
        <action-row :rowTit="intro.rowTit" :btnClass="intro.btnClass" :callBack="intro.callBack">
            <text class="content" slot="mesg">{{ intro.content }}</text>
        </action-row>
        <action-row :rowTit="from.rowTit" :btnClass="from.btnClass" :callBack="from.callBack">
            <text class="content" slot="mesg">{{ from.content }}</text>
        </action-row>
    </div>
</template>

<style>
    .header {
        width: 60px;
        height: 60px;
        border-radius: 60px;
    }

    .content {
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
                header: {
                    rowTit: '手机',
                    btnClass: 'details',
                    callBack() {
                        navigator.push(routerPage.updateAccount)
                    },
                    content: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394'
                },
                name: {
                    rowTit: '昵称',
                    btnClass: 'details',
                    callBack() {
                        navigator.push(routerPage.updateName)
                    },
                    content: '鹿晗'
                },
                sex: {
                    rowTit: '性别',
                    btnClass: 'details',
                    callBack() {
                        navigator.push(routerPage.updateAccount)
                    },
                    content: '男'
                },
                intro: {
                    rowTit: '简介',
                    btnClass: 'details',
                    callBack() {
                        navigator.push(routerPage.updateIntro)
                    },
                    content: '清风徐来，币圈happy...'
                },
                from: {
                    rowTit: '地区',
                    btnClass: 'details',
                    callBack() {
                        navigator.push(routerPage.updateFrom)
                    },
                    content: '北京市'
                }
            }
        },
        components: {
            actionRow: require('components/actionRow/index.vue')
        }
    }
</script>