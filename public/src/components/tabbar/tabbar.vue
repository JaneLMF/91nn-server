<template>
    <div class="wrapper" :style="{top: marginTop}">
        <scroller append="tree" style="flex-direction: row;"  scroll-direction="horizontal">
            <div :class="[ scrolleable == false ? 'tabbase' : 'tabbase-scroller' ]" :style="{height: tabHeight, backgroundColor: backgroundColor}" >
              <div :style="{height: tabHeight}" v-for="item in tabItems"
                   :key="item.index">
                  <tabitem
                          :index="item.index"
                          :title="item.title"
                          :height="tabHeight"
                          :margin="tabMargin"
                          :titleFontSize="item.titleFontSize"
                          :titleColor="item.titleColor"
                          :bottomColor="item.bottomColor"
                          :backgroundColor="backgroundColor"
                          @tabItemOnClick="tabItemOnClick">
                  </tabItem>
              </div>
            </div>
        </scroller>
        <embed
            v-for="(item , i) in tabItems"
            :src="item.src"
            :key="i"
            type="weex"
            :style="{ visibility: item.visibility, top: tabHeight}"
            class="content">
        </embed>
  </div>
</template>

<style scoped>
  .border {
    border-width: 1px;
  }

  .wrapper {
    width: 750px;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .tabbase{
      width: 750px;
      flex-direction: row;
      justify-content: space-around;
  }

  .tabbase-scroller{
      /*width: 750px;*/
      flex-direction: row;
      justify-content: space-around;
  }

  .content {
    width: 750px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

</style>

<script>
  module.exports = {
    props: {
      scrolleable: {default: false},
      marginTop: { default: 0 },
      tabHeight: { default: 90 },
      tabMargin: { default: 25 },
      tabItems: { default: [] },
      backgroundColor: { default: '#f8f8f8' },
      selectedColor: { default: '#fc6d3f' },
      unselectedColor: { default: '#333333' },
      bottomSelectedColor: { default: '#fc6d3f'},
      bottomUnSelectedColor: { default: '#f8f8f8'},
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
