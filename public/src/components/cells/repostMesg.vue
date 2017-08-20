<template>
    <div class="repost-mesg-wrap">
        <text v-if="repostText.type == 'text'" class="repost-mesg">{{ repostText.text }}</text>
        <div class="repost-at-target-wrap" v-else-if="repostText.type == 'atUser'">
            <text class="repost-at-fenge">//</text>
            <follow-target class="repost-at-target"
                           :followType="repostText.type"
                           :followText="repostText.atUser.nick"
                           :followID="repostText.atUser._id"
            ></follow-target>
        </div>
    </div>
</template>

<style>
    .repost-mesg-wrap {
        margin-bottom: 10px;
    }

    .repost-mesg {
        font-size: 32px;
        color: #333333;
    }

    .repost-at-target-wrap {
        flex-direction: row;
    }

    .repost-at-fenge {
        font-size: 32px;
        color: #5583ff;
    }

    .repost-at-target {
        margin-right: 10px;
    }
</style>

<script>
    export default {
        props: {
            repostText: {
                default() {
                    return {

                    }
                }
            },
            type: { default: '' },
            repostInfo: { default: '' },
            followType: { default: '' },
            followClass: { default: '' },
            followTarget: { default: '' },
            followID: { default: '' }
        },
        components: {
            followTarget: require('components/followTarget/index.vue')
        }
    }
</script>