<template>
    <div @click="clickIcon" class="badge-wrap">
        <div :class="['badgeIcon-wrap-' + iconStyle.size]">
            <div :class="['icon-wrap-' + iconStyle.size]">
                <image :src="iconStyle.url" :class="['badgeImg-wrap-' + iconStyle.size]" ></image>
            </div>
            <text v-if="superScriptState.hasSuperScript" :class="[superScriptState.state == '1' ? 'superScript-hot' : 'superScript-mesg']">{{ superScriptState.content }}</text>
        </div>
        <text v-if="iconName.hasName" :class="['badgeTit-wrap-' + iconStyle.size]">{{ iconName.name }}</text>
    </div>
</template>

<style>
    .badge-wrap {
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }

    .badgeIcon-wrap-m {
        position: relative;
        width: 90px;
        height: 100px;
    }

    .badgeImg-wrap-m {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90px;
        height: 90px;
    }

    .icon-wrap-m {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }

    .superScript-hot {
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #ff6a3c;
        color: #fff;
        font-size: 12px;
        border-radius: 20px;
        border-width: 1px;
        border-color: #fff;
    }

    .badgeTit-wrap-m {
        font-size: 24px;
        color: #333;
        font-weight: 200;
        margin-top: 19px;
    }

    /*---------------------------------------------*/
    .badgeIcon-wrap-s {
        position: relative;
        width: 60px;
        height: 60px;
    }

    .badgeImg-wrap-s {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 40px;
    }

    .icon-wrap-s {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .superScript-mesg {
        position: absolute;
        top: 0;
        right: 2px;
        display: block;
        width: 26px;
        height: 22px;
        line-height: 20px;
        text-align: center;
        background-color: #fff;
        color: #ff6a3c;
        font-size: 12px;
        border-radius: 16px;
        border-width: 2px;
        border-color: #ff6a3c;
    }

    /*-------------------------------------*/
    .badgeIcon-wrap-l {
        width: 120px;
        height: 120px;
    }

    .badgeImg-wrap-l {
        width: 90px;
        height: 90px;
    }

    .icon-wrap-l {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        background-color: #fff;
        justify-content: center;
        align-items: center;
    }

    .badgeTit-wrap-l {
        font-size: 36px;
        color: #434343;
        font-weight: 200;
        margin-top: 20px;
    }
</style>

<script>
    module.exports = {
        name: 'badge',
        props: {
            action: {default: function() {              //点击回调

            }},
            iconStyle: {                                //图标样式
                default() {
                    return {
                        url: '',                        //图片源
                        size: 'm'                        //icon大小
                    }
                }
            },
            superScriptState: {                         //角标
                default() {
                    return {
                        hasSuperScript: false,          //是否需要
                        state: '',                      //角标类型
                        content: ''                     //角标文字
                    }
                }
            },
            iconName: {                                 //图标名
                default() {
                    return {
                        hasName: false,                 //是否有tit
                        name: ''                        //tit
                    }
                }
            }
        },
        computed: {
            superScriptClass() {
                if(this.superScriptState.state == '1') {
                    return 'superScript-hot';
                } else if(this.superScriptState.state == '2') {
                    return 'superScript-mesg';
                }
            },
            badgeIconClass() {
                return 'badgeIcon-wrap-' + this.iconStyle.size;
            },
            badgeTit() {
                return 'badgeTit-wrap-' + this.iconStyle.size;
            },
            badgeImgClass() {
                return 'badgeImg-wrap-' + this.iconStyle.size;
            }
        },
        methods: {
            clickIcon() {
                this.action();
            }
        }
    }

</script>