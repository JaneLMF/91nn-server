<template>
    <scroller v-if="actived">
        <slot></slot>
    </scroller>
</template>
<script>
    export default {
        name: 'u-tab',
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: [String, Number, Boolean, Object, Array],
                required: true
            }
        },
        data () {
            return {
                $parent: null
            }
        },
        computed: {
            actived () {
                return this.$parent && this.$parent.value === this.value
            }
        },
        beforeDestroy () {
            this.$parent && this.$parent.removeTab(this)
        }
    }
</script>
