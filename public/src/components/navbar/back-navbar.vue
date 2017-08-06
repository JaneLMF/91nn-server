<template>
    <navpage
            class="root"
            :dataRole="dataRole"
            :title="title"
            :leftItemSrc="leftItemSrc" @naviBarLeftItemClick="leftItemClick">
        <slot></slot>
    </navpage>
</template>

<script>
    import navigator from 'utils/modules/navigator'
    export default {
        props: {
            title: { default: '' },
            dataRole: { default: 'none' },
            leftItemSrc: { default: '/src/images/common/back.png' },
        },
        methods: {
            leftItemClick: function(e) {
                if (this.naviBarLeftItemClick == null){
                    navigator.pop()
                    return
                }
                this.$emit('naviBarLeftItemClick', e)
            }
        },
        components: {
            navpage: require('./navpage.vue')
        }
    }
</script>

<style scoped>
    .root {
        width: 750px;
    }

</style>