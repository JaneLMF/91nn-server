<template>
  <div
          :dataRole="dataRole"
          class="container"
          :style="{ height: height, backgroundColor: backgroundColor }">
    <text
            v-if="!rightItemSrc"
            naviItemPosition="right"
            :style="{ color: rightItemColor }"
            class="right-text"
            v-on:click="onclickrightitem">{{rightItemTitle}}</text>

    <div v-if="rightItemSrc"
         naviItemPosition="right"
         class="right-image-box"
         v-on:click="onclickrightitem">

      <image :src="rightItemSrc"
             class="right-image"/>

    </div>

    <text
            v-if="!leftItemSrc"
            naviItemPosition="left"
            :style="{ color: leftItemColor }"
            class="left-text"
            v-on:click="onclickleftitem">{{leftItemTitle}}</text>
    <image
            v-if="leftItemSrc"
            naviItemPosition="left"
            :src="leftItemSrc"
            class="left-image"></image>

    <div
         v-if="leftItemSrc"
         class="left-image-box"
         v-on:click="onclickleftitem"></div>

    <text
            naviItemPosition="center"
            :style="{ color: titleColor }"
            class="center-text">{{title}}</text>
  </div>
</template>

<style scoped>
  .border {
    border-width: 1px;
  }

  .container {
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 750px;
  }
  .right-text {
    position: absolute;
    bottom: 28px;
    right: 32px;
    text-align: right;
    font-size: 32px;
    font-family: 'Open Sans', sans-serif;
  }
  .left-text {
    position: absolute;
    bottom: 28px;
    left :32px;
    text-align :left;
    font-size: 32px;
    font-family: 'Open Sans', sans-serif;
  }
  .center-text {
    position: absolute;
    bottom: 25px;
    left: 172px;
    right: 172px;
    text-align: center;
    font-size: 36px;
  }

  .left-image-box {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 120px;
    height: 80px;
  }

  .left-image {
    position: absolute;
    bottom: 20px;
    left: 28px;
    width: 25px;
    height: 48px;
  }

  .right-image-box {
    position: absolute;
    bottom: 20px;
    right: 28px;
    width: 50px;
    height: 50px;
    align-items: center;
  }

  .right-image {
    width: 6px;
    height: 40px;
  }
</style>

<script>
    module.exports = {
        props: {
            dataRole: { default: 'navbar' },
            //导航条背景色
            backgroundColor: { default: '#fc6d3f' },
            //导航条高度
            height: { default: 88 },
            //导航条标题
            title: { default: '' },
            //导航条标题颜色
            titleColor: { default: 'white' },
            //右侧按钮图片
            rightItemSrc: { default: '' },
            //右侧按钮标题
            rightItemTitle: { default: '' },
            //右侧按钮标题颜色
            rightItemColor: { default: 'black' },
            //左侧按钮图片
            leftItemSrc: { default: '/src/images/common/back.png' },
            //左侧按钮标题
            leftItemTitle: { default: '' },
            //左侧按钮颜色
            leftItemColor: { default: 'black' }
        },
        methods: {
            onclickrightitem: function (e) {
                this.$emit('naviBarRightItemClick', e);
            },
            onclickleftitem: function (e) {
                this.$emit('naviBarLeftItemClick', e);
            }
        }
    }
</script>
