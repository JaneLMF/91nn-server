<template>
    <text class="followTarget" @click="clickIt">{{ followText }}</text>
</template>

<style>
    .followTarget {
        font-size: 28px;
        color: #5583ff;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    export default {
        props: {
            followType: { default: '' },
            followClass: { default: '' },
            followTarget: { default: '' },
            followID: { default: '' }
        },
        computed: {
            followText() {
                let followText = '',
                    followType = this.followType,
                    followClass = this.followClass,
                    followTarget = this.followTarget;
                if(followType == 'coin') {
                    followText = '$' + followClass + '/' + followTarget + '$';
                } else if(followType == 'link') {
                    followText = '$' + followClass + '·' + followTarget + '$';
                } else if(followType == 'user') {
                    followText = '@' + followTarget;
                }
                return followText;
            }
        },
        methods: {
            clickIt() {
                if(this.followType == 'coin') {
                    navigator.push(routerPage.appDetails)
                } else if(this.followType == 'link') {
                    navigator.push(routerPage.userHome)
                } else if(this.followType == 'user') {
                    navigator.push(routerPage.userHome)
                }
            }
        }
    }
</script>