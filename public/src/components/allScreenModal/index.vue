<template>
    <div class="modal-wrap" @click="openModal">
        <slot></slot>
    </div>
</template>

<style>
    .modal-wrap {
        width: 750px;
        height: 1080px;
        background-color: rgba(255, 255, 255, 0.5);
        justify-content: center;
        align-items: center;
    }
</style>

<script>
    var modal = weex.requireModule('modal')

    export default {
        props: {
            flag: { default: false }
        },
        methods: {
            openModal() {
                this.$emit('openIt', !this.flag);
                modal.toast({
                    message: this.flag,
                    duration: 0.3
                })
            }
        }
    }
</script>