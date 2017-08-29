<template>
    <div class="home-wrap">
        <n-search :oSearch="oSearch">
            <n-mesg-icon class="personal-header-mesg"></n-mesg-icon>
        </n-search>
        <list class="list-wrap" @scroll="isViewed">
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">{{ refreshText }}</text>
            </refresh>
            <cell v-for="(item, i) in articleMoudle" :key="i" class="cell-wrap">
                <cell-box class="cell-item" :cellItem="item"></cell-box>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">Loading ...</text>
            </loading>
        </list>
    </div>
</template>

<style>
    .indicator {
        width: 750px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        background-color: rgba(252, 109, 63, 0.65);
        font-size: 24px;
        text-align: center;
    }

    .personal-header-mesg {
        margin-left: 30px;
        margin-top: 20px;
    }

    .cell-wrap {
        width: 750px;
        background-color: #f8f8f8;
    }

    .cell-item {
        margin-bottom: 10px;
    }
</style>

<script>
    import routerPage from 'router/page'
    import navigator from 'utils/modules/navigator'

    import nn from 'utils/debug'

    import nAPI from 'api/index'

    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal');

    export default {
        mounted() {
            storage.getItem('bossInfo',(res) => {
                if(res.data) {
                    console.log(res.data);
                    var bossInfo = JSON.parse(res.data);
                    this.userID = bossInfo._id;
                    nAPI.getArticleInHome(this.userID, this.maxLength, this.isFirstTime).then(res => {
                        nn.dump('success', res);
                        this.articleMoudle = res.result;
                    }).catch(res => {
                        nn.dump('Failed', res)
                    })
                }
            })
        },
        data() {
            return {
                refreshText: '正在加载内容',
                refreshing: false,
                showLoading: 'hide',
                userID: '598eca8c9f4489110c5b7fee',
                maxLength: 10,
                isFirstTime: true,
                articleMoudle: [],
                oSearch: {
                    placeHolderText: '搜索区块链/币种/应用',
                    hasBtn: true,
                    searchWrapStyle: 'search-wrap-fc6d3f',
                    searchMoudleStyle: '',
                    inputSearchStyle: 'input-search-fff'
                },
                badgeData: {
                    action() {                                  //点击回调
                        console.log('click badge1');
                    },
                    iconStyle: {
                        url: '/src/view/personal/images/nav-mesg.png',                                //图片源
                        size: 's'
                    },
                    superScriptState: {
                        hasSuperScript: true,                  //是否需要
                        state: '2',                              //角标类型
                        content: '99'
                    },
                    iconName: {
                        hasName: false,                         //是否有tit
                        name: ''
                    }
                }
            }
        },
        components: {
            cellFresh: require('components/cells/cellFresh.vue'),
            nSearch: require('components/search/search-hasBtn.vue'),
            badge: require('components/badge/index.vue'),
            slotRepost: require('components/cells/slotRepost.vue'),
            cellCoin: require('components/cells/cellCoin.vue'),
            cellLink: require('components/cells/cellLink.vue'),
            nMesgIcon: require('components/badge/mesgIcon/index.vue'),
            cellBox: require('components/cells/cellBox/index.vue')
        },
        methods: {
            viewMesg()  {
                navigator.push(routerPage.mesgBox);
            },
            onrefresh (event) {
                console.log('is refreshing')
                modal.toast({ message: 'refresh', duration: 1 })
                this.refreshing = true
                nAPI.getArticleInHome(this.userID, this.maxLength, this.isFirstTime).then(res => {
                    nn.dump('success', res);
                    this.articleMoudle = res.result.concat(this.articleMoudle);
                    this.refreshing = false;
                    this.refreshText = '更新' + res.result.length + '篇内容'
                    console.log('ansoknqoidnaoknsdklancoijascklmzxocoiacaso');
//                    console.log(this.articleMoudle);
                }).catch(res => {
                    nn.dump('Failed', res)
                })
            },
//            onpullingdown (event) {
//                console.log('is onpulling down')
//                modal.toast({ message: 'pulling down', duration: 1 })
//            },
            onloading (event) {
                modal.toast({message: 'loading', duration: 1})
                this.showLoading = 'show'
                nAPI.getArticleInHome(this.userID, this.maxLength, this.isFirstTime).then(res => {
                    nn.dump('success', res);
                    this.articleMoudle = res.result.concat(this.articleMoudle);
                    this.showLoading = 'hide'
                    console.log('ansoknqoidnaoknsdklancoijascklmzxocoiacaso');
//                    console.log(this.articleMoudle);
                }).catch(res => {
                    nn.dump('Failed', res)
                })
            },
            isViewed(e) {
                this.isFirstTime = false;
                console.log(e.contentOffset.x, e.contentOffset.y);
            }
        }
    }
</script>