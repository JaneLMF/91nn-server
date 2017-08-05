<template>
  <div
          :style="{height: height }"
          class="container"
          @click="onclickitem">
    <div class="tab-line" :style="{
        borderTopColor : backgroundColor,
        borderBottomColor: bottomColor,
        height: height,
        marginLeft: margin,
        marginRight: margin,
         }">
      <text
              :style="{ color: titleColor, fontSize: titleFontSize}"
              class="tab-text">{{title}}</text>
    </div>
  </div>
</template>

<style scoped>
  .border {
    border-width: 1px;
  }

  .container {
    flex: 1;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }

  .tab-text {
    text-align: center;
  }

  .tab-line {
    justify-content: center;
    border-top-width: 4px;
    border-bottom-width: 4px;
  }
</style>

<script>
    module.exports = {
        props: {
            height: {default: 90 },
            index: { default: 0 },
            title: { default: '' },
            margin: { default: 25 },
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
