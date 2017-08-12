<template>
    <navpage
            class="root"
            :dataRole="dataRole"
            :title="title"
            :titleColor="titleColor"
            :backgroundColor="backgroundColor"
            :rightItemTitle="rightItemTitle"
            :leftItemSrc="leftItemSrc" @naviBarLeftItemClick="leftItemClick"
            :rightItemSrc="rightItemSrc">
        <div v-if="showLine" style="height: 1px; background-color: #e5e5e5;"></div>
        <slot></slot>
    </navpage>
</template>

<script>
    import navigator from 'utils/modules/navigator'
    export default {
        props: {
            showLine: {default: false},
            title: { default: '' },
            dataRole: { default: 'none' },
            leftItemSrc: { default: '/src/images/common/back.png' },
            backgroundColor: { default: '#fc6d3f' },
            titleColor: { default: 'white' },
            rightItemTitle: { default: '' },
            rightItemSrc: {default: ''},
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