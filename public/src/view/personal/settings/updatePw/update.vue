<template>
    <div class="update-bg">
        <div class="update-wrap">
            <input type="text" placeholder="请输入新密码" class="update-input" />
            <input type="text" placeholder="请确认密码" class="update-input" />
            <text class="submit-btn">完成</text>
        </div>
    </div>
</template>

<style>
    .update-bg {
        width: 750px;
    }

    .update-wrap {
        margin-right: 90px;
        margin-left: 90px;
    }

    .update-input {
        margin-top: 90px;
        padding-bottom: 12px;
        width: 570px;
        border-bottom-width: 1px;
        border-color: #dddddd;
        font-size: 28px;
        placeholder-color: #bbbbbb;
    }

    .submit-btn {
        margin-top: 80px;
        width: 570px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 32px;
        color: #fff;
        border-radius: 8px;
        background-color: #fc6d3f;
    }
</style>