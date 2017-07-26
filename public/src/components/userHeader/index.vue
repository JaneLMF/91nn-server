<template>
    <div :class="[article.headerStyle + '-header-wrap']">
        <image :src="article.headerUrl" :class="[article.headerStyle + '-header']"></image>
        <div class="user-info-wrap">
            <text :class="[article.headerStyle + '-name']">{{ article.userName }}</text>
            <text class="user-issue">{{ article.subTitle }}</text>
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

    .user-header {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .user-wiki-details-header {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .user-info-wrap {
        margin-left: 20px;
    }

    .user-name {
        font-size: 28px;
        color: #434343;
    }

    .user-wiki-details-name {
        font-size: 36px;
        color: #434343;
    }

    .user-issue {
        font-size: 22px;
        color: #959595;
    }
</style>