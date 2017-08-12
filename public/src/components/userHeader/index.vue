<template>
    <div :class="[article.headerStyle + '-header-wrap']">
        <image :src="article.headerUrl" :class="[article.headerStyle + '-header']"></image>
        <div class="user-info-wrap">
            <text :class="[article.headerStyle + '-name']">{{ article.userName }}</text>
            <text :class="[article.headerStyle + '-issue']">{{ article.subTitle }}</text>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            article: {
                default() {
                    return {
                        headerUrl: '',
                        userName: '',
                        subTitle: '',
                        headerStyle: ''
                    }
                }
            }
        }
    }
</script>

<style>
    .user-header-wrap {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
    }

    .user-wiki-details-header-wrap {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    .follow-header-wrap {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 80px;
    }

    .user-header {
        width: 70px;
        height: 70px;
        border-radius: 70px;
    }

    .user-wiki-details-header {
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }

    .follow-header {
        width: 80px;
        height: 80px;
        border-radius: 80px;
    }

    .user-info-wrap {
        margin-left: 20px;
    }

    .user-name {
        font-size: 28px;
        color: #000;
    }

    .user-wiki-details-name {
        font-size: 36px;
        color: #434343;
    }

    .follow-name {
        font-size: 28px;
        color: #434343;
    }

    .user-issue {
        font-size: 22px;
        color: #959595;
    }

    .user-wiki-details-issue {
        font-size: 22px;
        color: #959595;
    }

    .follow-issue {
        margin-top: 15px;
        font-size: 24px;
        color: #959595;
    }
</style>