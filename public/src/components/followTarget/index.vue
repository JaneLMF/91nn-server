<template>
    <text class="followTarget" @click="clickIt">{{ followText }}</text>
</template>

<style>
    .followTarget {
        font-size: 32px;
        color: #5583ff;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        props: {
            followType: { default: '' },
            followText: { default: '' },
            followID: { default: '' }
        },
        computed: {
//            follow() {
//                let followTarget = '',
//                    followType = this.followType,
//                    followText = this.followText;
//                if(followType == 'atUser') {
//                    followTarget = '@' + followText;
//                } else {
//                    followTarget = followText;
//                }
//                return followTarget;
//            }
        },
        methods: {
            clickIt() {
                if(this.followType == 'coin') {
                    navigator.push(routerPage.appDetails)
                } else if(this.followType == 'chain') {
                    navigator.push(routerPage.wikiDetails)
                } else if(this.followType == 'user') {
                    navigator.push(routerPage.userHome)
                } else if(this.followType == 'app') {
                    navigator.push(routerPage.appDetails)
                } else if(this.followType == 'ico') {
                    navigator.push(routerPage.coinDetails)
                }
            }
        }
    }
</script>