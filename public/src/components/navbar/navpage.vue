<template>
  <div class="wrapper">
    <navbar
            :dataRole="dataRole"
            :height="computeHeight"
            :backgroundColor="backgroundColor"
            :title="title"
            :titleColor="titleColor"
            :leftItemSrc="leftItemSrc"
            :leftItemTitle="leftItemTitle"
            :leftItemColor="leftItemColor"
            :rightItemSrc="rightItemSrc"
            :rightItemTitle="rightItemTitle"
            :rightItemColor="rightItemColor"
            @naviBarRightItemClick="naviBarRightItemClick"
            @naviBarLeftItemClick="naviBarLeftItemClick">

    </navbar>
    <div class="wrapper" :style="{ marginTop: height }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 750;
  }
</style>

<script>
    import uweex from 'utils/weex/instance'
    module.exports = {
        components: {
            navbar: require('./navbar.vue')
        },
        props: {
            dataRole: { default: 'navbar' },
            backgroundColor: { default: '#fc6d3f' },
            height: { default: 88 },
            title: { default: "" },
            titleColor: { default: 'white' },
            rightItemSrc: { default: '' },
            rightItemTitle: { default: '' },
            rightItemColor: { default: 'black' },
            leftItemSrc: { default: '' },
            leftItemTitle: { default: '' },
            leftItemColor: { default: 'black' }
        },
        computed: {
            computeHeight: function(){
                //adapter navbar for ios
                if (uweex.isIOS()){
                    let env = weex.config.env;
                    let scale = env.scale;
                    let deviceWidth = env.deviceWidth / scale;
                    this.height = 64.0 * 750.0 / deviceWidth;
                }
                return this.height;
            }
        },
        methods: {
            naviBarRightItemClick: function (e) {
                this.$emit('naviBarRightItemClick', e)
            },
            naviBarLeftItemClick: function (e) {
                this.$emit('naviBarLeftItemClick', e)
            }
        }
    }
</script>
