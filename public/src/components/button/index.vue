<template>
    <div class="button-wrap"
         :class="['button-wrap-' + buttonStyle.size]"
         :style="{backgroundColor: btnBackground}"
         @click="clickIt" >
        <text class="button-text"
              :class="['button-text-' + buttonStyle.size]" >{{ buttonStyle.buttonText }}</text>
    </div>
</template>

<style>
    .button-wrap {
        border-radius: 8px;
        justify-content: center;
        align-items: center;
    }

    .button-text {
        color: #fff;
        text-align: center;
    }

    .button-wrap-m {
        width: 570px;
        height: 70px;
    }

    .button-text-m {
        font-size: 32px;
    }
</style>

<script>
    export default {
        props: {
            buttonStyle: {
                default() {
                    return {
                        size: 'm',
                        buttonText: '',
                        unclickColor: '#ff622a',
                        clickedColor: '#eee'
                    }
                }
            }
        },
        data() {
            return {
                isClicked: false
            }
        },
        computed: {
            btnBackground() {
                if(this.isClicked) {
                    return this.buttonStyle.clickedColor;
                } else {
                    return this.buttonStyle.unclickColor;
                }
            }
        },
        methods: {
            clickIt() {
                this.isClicked = true;
                this.$emit('callBack', this.isClicked);
            }
        }
    }
</script>