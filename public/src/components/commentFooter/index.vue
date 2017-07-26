<template>
    <div class="commentFooter-bg">
        <div class="commentFooter-wrap">
            <input type="text" :placeholder="commentFooter.placeholderText" class="commentFooter-input" />
            <div class="follow-btn-wrap">
                <image v-if="follow" src="/src/components/commentFooter/images/follow.png" class="follow-btn" @click="changeFollow"></image>
                <image v-else src="/src/components/commentFooter/images/unfollow.png" class="follow-btn"  @click="changeFollow"></image>
            </div>
        </div>
    </div>
</template>

<style>
    .commentFooter-bg {
        width: 750px;
        height: 100px;
        background-color: #fff;
        border-top-width: 1px;
        border-color: #dddddd;
    }

    .commentFooter-wrap {
        width: 690px;
        height: 100px;
        margin-right: 30px;
        margin-left: 30px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .commentFooter-input {
        width: 612px;
        height: 56px;
        border-width: 1px;
        border-color: #eeeeee;
        border-radius: 56px;
        background-color: #f8f8f8;
        font-size: 26px;
        padding-left: 30px;
        placeholder-color: #bbbbbb;
    }

    .follow-btn-wrap {
        width: 78px;
        height: 56px;
        justify-content: center;
        align-items: flex-end;
    }

    .follow-btn {
        width: 49px;
        height: 44px;
    }
</style>

<script>
    export default {
        props: {
            commentFooter: {
                default() {
                    return {
                        placeholderText: '',
                        isFollow: false
                    }
                }
            }
        },
        data() {
            return {
                follow: this.isFollow
            }
        },
        methods: {
            changeFollow() {
                this.follow = !this.follow;
            }
        }
    }
</script>