<template>
    <div v-if="flag" class="modal-wrap" @click="openModal">
        <slot></slot>
    </div>
</template>

<style>
    .modal-wrap {
        width: 750px;
        height: 1334px;
        background-color: #fff;
        opacity: 0.5;
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
                this.flag = !this.flag;
                this.$emit('openIt', this.flag);
                modal.toast({
                    message: this.flag,
                    duration: 0.3
                })
            }
        }
    }
</script>