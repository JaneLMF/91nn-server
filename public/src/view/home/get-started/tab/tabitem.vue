<template>
  <div
    :style="{ backgroundColor: backgroundColor }"
    class="container"
    @click="onclickitem">
    <div :style="{
        borderTopColor : backgroundColor,
        borderBottomColor: bottomColor,
         }" class="tab-line">
      <text
        :style="{ color: titleColor, fontSize: titleFontSize}"
        class="tab-text">{{title}}</text>
    </div>
  </div>  
</template>

<style scoped>
  .container {
    flex: 1;
    flex-direction: column; 
    align-items:center; 
    justify-content:center; 
    height: 90px;
    /*border-width: 1px;*/
  }

  .tab-text {
    text-align: center;  
    font-size: 20px;
    /*border-width: 1px;*/
  }
  .tab-line {
    height: 90px;
    justify-content: center;
    border-top-width: 4px;
    border-bottom-width: 4px;
  }
</style>

<script>
  module.exports = {
    props: {
      index: { default: 0 },
      title: { default: '' },
      titleColor: { default: '#000000' },
      bottomColor: { default: '#ffffee' },
      titleFontSize: { default: '30px' },
      backgroundColor: { default: '#ffffee' }
    },
    methods: {
      onclickitem: function (e) {
        var params = {
          index: this.index
        };
        this.$emit('tabItemOnClick', params);
      }
    }
  }
</script>
