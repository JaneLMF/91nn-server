<template>
  <div class="wrapper" @click="getHeight">
      <nn-attext ref="at"  style="height: 10px; width: 755px"></nn-attext>
    <text>hello</text>
  </div>
</template>

<script>
  module.exports = {
    mounted: function () {
      // this.getHeight()
    },
    methods: {
      getHeight: function() {
        console.log('height:' + this.$refs.at.getHeight())
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    /*justify-content: center;*/
  }
  .panel {
    width: 600px;
    margin-left: 75px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
  }
  .text {
    lines: 3;
    color: #666666;
    font-size: 32px;
  }
</style>