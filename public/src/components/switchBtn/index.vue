<template>
    <div class="switch" :class="[checked?'checked':'', disabled?'disabled':'', 'sz-' + size]" @click="change">
        <div class="icon" :class="[checked?'icon-checked':'', disabled?'icon-disabled':'', 'isz-' + size]" ref="icon"></div>
        <text v-if="$slots.default" class="text" :class="[disabled?'text-disabled':'']"><slot></slot></text>
    </div>
</template>
<script>
    const animation = weex.requireModule('animation')
    export default {
        name: 'u-switch',
        props: {
            value: [String, Number, Boolean, Object, Array],
            trueValue: {
                type: [String, Number, Boolean, Object, Array],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean, Object, Array],
                default: false
            },
            size: {
                // 'small', 'normal', 'large'
                type: String,
                default: 'small'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            checked () {
                return this.value == this.trueValue
            }
        },
        methods: {
            change () {
                if (!this.disabled) {
                    const targetValue = this.checked ? this.falseValue : this.trueValue
                    animation.transition(this.$refs.icon, {
                        styles: {
                            transform: `translateX(${this.checked ? '0' : '100%'})`
                        },
                        duration: 300, //ms
                        timingFunction: 'ease',
                        delay: 0 //ms
                    })
                    this.$emit('input', targetValue)
                    this.$emit('change', targetValue)
                }
            }
        },
        mounted () {
            this.$nextTick(() => {
                if (this.checked) {
                    animation.transition(this.$refs.icon, {
                        styles: {
                            transform: 'translateX(100%)'
                        },
                        duration: 0, //ms
                        delay: 0 //ms
                    })
                }
            })
        }
    }
</script>
<style>
    .switch {
        width: 80px;
        flex-direction: row;
        align-items: center;
        background-color: #c9c9c9;
    }

    .sz-small {
        min-width: 80px;
        height: 40px;
        border-radius: 20px;
    }

    .sz-normal {
        min-width: 120px;
        height: 60px;
        border-radius: 30px;
    }

    .sz-large{
        min-width: 160px;
        height: 80px;
        border-radius: 40px;
    }

    .checked {
        background-color: #fc6d3f;
    }

    .disabled {
        background-color: #c9c9c9;
    }

    .icon {
        background-color: #fff;
        border-style: solid;
        border-color: #c9c9c9;
        transform: translateX(0);
    }

    .icon-checked {
        border-color: #fc6d3f;
    }

    .icon-disabled {
        border-color: #c9c9c9;
    }

    .isz-small {
        width: 40px;
        height: 40px;
        border-width: 2px;
        border-radius: 20px;
    }

    .isz-normal {
        width: 60px;
        height: 60px;
        border-width: 4px;
        border-radius: 30px;
    }

    .isz-large {
        width: 80px;
        height: 80px;
        border-width: 6px;
        border-radius: 3px;
    }

    .text {
        color: #c9c9c9;
        margin-left: 40px;
    }

    .text-disabled {
        color: #e6ecf2;
    }
</style>
