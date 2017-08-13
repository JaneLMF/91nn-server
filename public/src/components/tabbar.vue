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
        <div class="createArticle-btn-wrap"  v-if="!articleFlag">
            <image class="createArticle-btn" src="/resources/nav-footer/open.png" @click="toPushArticle"></image>
        </div>
      <div class="tabbar" append="tree" v-if="!articleFlag">
        <div class="tabbar-group">
            <tabitem
                    :index="tabItems[0].index"
                    :icon="tabItems[0].icon"
                    :title="tabItems[0].title"
                    :titleColor="tabItems[0].titleColor"
                    @tabItemOnClick="tabItemOnClick"
            ></tabItem>
            <tabitem
                    :index="tabItems[1].index"
                    :icon="tabItems[1].icon"
                    :title="tabItems[1].title"
                    :titleColor="tabItems[1].titleColor"
                    @tabItemOnClick="tabItemOnClick"
            ></tabItem>
        </div>
        <div class="createArticle-wrap">
            <div class="createArticle-style"></div>
            <div class="createArticle-style"></div>
        </div>
        <div class="tabbar-group">
            <tabitem
                    :index="tabItems[2].index"
                    :icon="tabItems[2].icon"
                    :title="tabItems[2].title"
                    :titleColor="tabItems[2].titleColor"
                    @tabItemOnClick="tabItemOnClick"
            ></tabItem>
            <tabitem
                    :index="tabItems[3].index"
                    :icon="tabItems[3].icon"
                    :title="tabItems[3].title"
                    :titleColor="tabItems[3].titleColor"
                    @tabItemOnClick="tabItemOnClick"
            ></tabItem>
        </div>
      </div>

        <div class="article-modal-wrap" v-if="articleFlag" @click="articleModal">
            <div class="article-modal-btn-box">
                <div class="article-modal-btn-group">
                    <image src="/resources/nav-footer/dongtai.png" class="articl-modal-btn-icon"></image>
                    <text class="articl-modal-btn-tit">动态</text>
                </div>
                <div class="article-modal-btn-group">
                    <image src="/resources/nav-footer/article.png" class="articl-modal-btn-icon"></image>
                    <text class="articl-modal-btn-tit">文章</text>
                </div>
            </div>
            <div class="close-article-modal-btn-wrap" @click="closePushArticleModal">
                <image src="/resources/nav-footer/close.png" class="close-article-modal-btn"></image>
            </div>
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
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 100px;

    }

    .tabbar-group {
        width: 325px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-top-width: 1px;
        border-color: #eeeeee;
    }

    .createArticle-wrap {
        width: 100px;
        background-color: #fff;
        flex-direction: row;
        justify-content: space-between;
    }

    .createArticle-style {
        width: 10px;
        border-top-width: 1px;
        border-color: #eeeeee;
    }

    .createArticle-btn-wrap {
        position: fixed;
        bottom: 20px;
        left: 325px;
        width: 100px;
        height: 100px;
        border-width: 1px;
        border-color: #eeeeee;
        border-radius: 100px;
        background-color: #fff;
    }

    .createArticle-btn {
        margin-top: 10px;
        margin-left: 10px;
        width: 80px;
        height: 80px;
    }

    .article-modal-wrap {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: #fff;
    }

    .article-modal-btn-box {
        position: absolute;
        left: 190px;
        bottom: 550px;
        width: 370px;
        height: 170px;
        flex-direction: row;
        justify-content: space-between;
    }

    .article-modal-btn-group {
        width: 120px;
    }

    .articl-modal-btn-icon {
        width: 120px;
        height: 120px;
        margin-bottom: 20px;
    }

    .articl-modal-btn-tit {
        width: 120px;
        text-align: center;
        font-size: 28px;
        color: #434343;
    }

    .close-article-modal-btn-wrap {
        position: absolute;
        left: 360px;
        bottom: 50px;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    .close-article-modal-btn {
        width: 30px;
        height: 30px;
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
        selectedIndex: 0,
          articleFlag: false
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
        toPushArticle() {
            this.articleFlag = true;
            console.log(this.articleFlag);
        },
        closePushArticleModal() {
            this.articleFlag = false;
            console.log(this.articleFlag);
        },
        articleModal(e) {
            e.stopPropagation();
        }
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
