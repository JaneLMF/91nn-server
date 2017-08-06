<template>
    <div class="repost-mesg-wrap">
        <text v-if="type == 'text'" class="repost-mesg">{{ repostInfo }}</text>
        <div class="repost-at-target-wrap" v-else-if="type == 'user'">
            <text class="repost-at-fenge">//</text>
            <follow-target class="repost-at-target"
                           :followType="followType"
                           :followClass="followClass"
                           :followTarget="followTarget"
                           :followID="followID"
            ></follow-target>
        </div>
    </div>
</template>

<style>
    .repost-mesg-wrap {
        margin-bottom: 10px;
    }

    .repost-mesg {
        font-size: 28px;
        color: #333333;
    }

    .repost-at-target-wrap {
        flex-direction: row;
    }

    .repost-at-fenge {
        font-size: 28px;
        color: #5583ff;
    }

    .repost-at-target {
        margin-right: 10px;
    }
</style>

<script>
    export default {
        props: {
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