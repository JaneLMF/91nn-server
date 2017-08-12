<template>
    <div class="wrapper">
      <div class="header-bg" :style="{height: computeHeight}"></div>
      <embed
        v-for="(item , i) in tabItems"
        :src="item.src"
        :key="i"
        type="weex"
        :style="{ visibility: item.visibility, marginTop: computeHeight }"
        class="content"
        ></embed>
      <div class="tabbar" append="tree">
        <tabitem
          v-for="item in tabItems"
          :key="item.index"
          :index="item.index"
          :icon="item.icon"
          :title="item.title"
          :titleColor="item.titleColor"
          @tabItemOnClick="tabItemOnClick"
          ></tabItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header-bg {
    width: 750px;
    background-color: #fc6d3f;
  }
  .wrapper {
    width: 750px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin-top: 0;
    margin-bottom: 100px;
  }
  .tabbar {
    flex-direction: row;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 100px;
  }
</style>

<script>
    import uweex from 'utils/weex/instance'

  module.exports = {
    props: {
      tabItems: { default: [] },
      selectedColor: { default: '#fc6d3f' },
      unselectedColor: { default: '#000000' }
    },
    data: function () {
      return {
        selectedIndex: 0
      }
    },
    components: {
      tabitem: require('./tabitem.vue')
    },
    created: function () {
      this.select(this.selectedIndex);
    },
    methods: {
      tabItemOnClick: function (e) {
        this.selectedIndex = e.index;
        this.select(e.index);
        this.$emit('tabBarOnClick', e);
      },
      select: function(index) {
        for(var i = 0; i < this.tabItems.length; i++) {
          var tabItem = this.tabItems[i];
          if(i == index){
            tabItem.icon = tabItem.selectedImage;
            tabItem.titleColor = this.selectedColor;
            tabItem.visibility = 'visible';
          }
          else {
            tabItem.icon = tabItem.image;
            tabItem.titleColor = this.unselectedColor;
            tabItem.visibility = 'hidden';
          }
        }
      },
    },
    computed: {
        computeHeight: function(){
            //adapter navbar for ios
            if (uweex.isIOS()){
                let env = weex.config.env;
                let scale = env.scale;
                let deviceWidth = env.deviceWidth / scale;
                this.height = 20.0 * 750.0 / deviceWidth;
            }
            return this.height;
        }
    },
  }
</script>
