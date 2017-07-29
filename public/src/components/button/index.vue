<template>
    <div class="button-wrap" >
        <text class="button-text">{{  }}</text>
    </div>
</template>

<style>
    .button-wrap {
        border-radius: 8px;
    }

    .button-text{

    }
</style>

<script>
    export default {
        props: {
            buttonStyle: {
                default() {
                    return {
                        size: 'm',
                        buttonText: ''
                    }
                }
            }
        }
    }
</script>