<template>
    <div class="userIcon-wrap">
        <div class="userHeader-wrap">
            <div class="userHeader-bg">
                <image :src="userInfo.userHeader" class="userHeader" @click="viewInfo"></image>
            </div>
            <image v-if="userInfo.attestation" src="/src/components/userInfo/images/vip.png" class="userVIP"></image>
        </div>
        <div class="userInfo-wrap">
            <text class="userInfo-name">{{ userInfo.userName }}</text>
            <!--<image src="/src/components/userInfo/images/sex-m.png" class="userInfo-sex"></image>-->
            <image :src="[userInfo.userSex == 'male' ? maleIcon : femaleIcon]" class="userInfo-sex"></image>
        </div>
        <text class="user-intro">{{ userInfo.userIntro }}</text>
    </div>
</template>

<style>
    .userIcon-wrap {
        justify-content: center;
        align-items: center;
    }

    .userHeader-wrap {
        position: relative;
        width: 132px;
        height: 132px;
    }

    .userHeader-bg {

    }

    .userHeader {
        width: 130px;
        height: 130px;
        border-radius: 130px;
        border-width: 2px;
        border-color: #f8997a;
    }

    .userVIP {
        position: absolute;
        bottom: 0;
        right: 20px;
        width: 24px;
        height: 24px;
    }

    .userInfo-wrap {
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
    }

    .userInfo-name {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 36px;
        color: #fff;
    }

    .userInfo-sex {
        /*margin-left: 10px;*/
        position: absolute;
        top: 28px;
        right: 0px;
        width: 24px;
        height: 24px;
    }

    .user-intro {
        font-size: 28px;
        color: #fff;
    }
</style>

<script>
    export default {
        data() {
            return {
                maleIcon: '/src/components/userInfo/images/sex-w.png',
                femaleIcon: '/src/components/userInfo/images/sex-m.png'
            }
        },
        props: {
            userInfo: {
                default() {
                    return {
                        userHeader: '',
                        attestation: false,
                        userName: '',
                        userSex: '',
                        userIntro: ''
                    }
                }
            }
        },
        methods: {
            viewInfo() {
                this.$emit('viewInfo');
            }
        },
        mounted() {
            console.log(this.userInfo.userSex);
        }
    }
</script>