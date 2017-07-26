<template>
  <div class="wrapper">
    <div class="tabbar" append="tree">
      <tabitem
        v-for="item in tabItems"
        :key="item.index"
        :index="item.index"
        :title="item.title"
        :titleFontSize="item.titleFontSize"
        :titleColor="item.titleColor"
        :bottomColor="item.bottomColor"
        :backgroundColor="backgroundColor"
        @tabItemOnClick="tabItemOnClick">
      </tabItem>
    </div>
    <embed
        v-for="(item , i) in tabItems"
        :src="item.src"
        :key="i"
        type="weex"
        :style="{ visibility: item.visibility }"
        class="content">
    </embed>
  </div>
</template>

<style scoped>
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
    margin-top: 90px;
    margin-bottom: 0px;
  }
  .tabbar {
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 90px;
    /*border-width: 1px;*/
  }
</style>

<script>
  module.exports = {
    props: {
      tabItems: { default: [] },
      backgroundColor: { default: '#ffffee' },
      selectedColor: { default: '#ff0000' },
      unselectedColor: { default: '#000000' },
      bottomSelectedColor: { default: '#ff0000'},
      bottomUnSelectedColor: { default: '#000000'},
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
            tabItem.bottomColor = this.bottomSelectedColor;
            tabItem.visibility = 'visible';
          }
          else {
            tabItem.icon = tabItem.image;
            tabItem.titleColor = this.unselectedColor;
            tabItem.bottomColor = this.bottomUnSelectedColor;
            tabItem.visibility = 'hidden';
          }
        }
      },
    }
  }
</script>
