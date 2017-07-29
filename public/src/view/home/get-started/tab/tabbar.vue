<template>
  <div class="wrapper">
    <div class="nav-wrap" :style="{
        backgroundColor: backgroundColor,
         }">
      <scroller class="tabbar" append="tree" scroll-direction="horizontal">
        <div v-for="item in tabItems"
             :key="item.index">
          <tabitem
                  :index="item.index"
                  :title="item.title"
                  :titleFontSize="item.titleFontSize"
                  :titleColor="item.titleColor"
                  :bottomColor="item.bottomColor"
                  @tabItemOnClick="tabItemOnClick">
          </tabItem>
        </div>
      </scroller>
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
    /*width: 750px;*/
    width: 750px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

  }
  .nav-wrap {
    width: 750px;
    background-color: #f8f8f8;
  }
  .content {
    width: 750px;
    position: absolute;
    top: 90px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
  }
  .tabbar {
    /*width: 750px;*/
    /*height: 90px;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    flex-direction: row;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 90px;
  }
</style>

<script>
  module.exports = {
    props: {
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
