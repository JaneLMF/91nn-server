<template>
    <div>
        <div class="tab-nav" :class="[tabBarClass.tabBarStyle]">
            <scroller class="tab-nav-wrap" :class="[tabBarClass.hasNextBtn ? 'tab-nav-hasNextBtn' : 'tab-nav-noNextBtn']" scroll-direction="horizontal">
                <div class="tab-nav-group" v-for="tab in tabs">
                    <text class="tab-item" :class="[tab.value===value? tabBarClass.activeClass : tabBarClass.defaultClass]" @click="selectTab(tab)">{{tab.label}}</text>
                </div>
            </scroller>
            <image v-if="tabBarClass.hasNextBtn" src="/src/view/home/images/nextButton.png" @click="nextTab(value, tabs)" class="nav-next"></image>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .homePage-tabBarNav {
        background-color: #f3f3f3;
    }

    .homePage-active {
        color: #ff6539;
        border-bottom-width: 4px;
        border-color: #ff6539;
    }

    .linkWiki-tabBarNav {
        background-color: #fc6d3f;
    }

    .link-wiki-active {
        color: #fff;
        border-bottom-width: 4px;
        border-color: #fff;
    }

    .link-wiki-default {
        color: #fff;
    }

    .tab-nav {
        width: 750px;
        height: 70px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .tab-nav-wrap {
        height: 70px;
        flex-direction: row;
        justify-content: space-between;
    }

    .tab-nav-hasNextBtn {
        width: 680px;
    }

    .tab-nav-noNextBtn {
        width: 750px;
    }

    .tab-nav-group {
        /*width: 110px;*/
        padding-left: 25px;
        padding-right: 25px;
        height: 70px;
        justify-content: center;
        align-items: center;
    }

    .tab-item {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 28px;
    }

    .nav-next {
        justify-content: center;
        align-items: center;
        width: 15px;
        height: auto;
        /*padding-top: 5px;*/
        padding-left: 5px;
        /*padding-right: 5px;*/
        /*padding-bottom: 5px;*/
    }
</style>

<script>
    export default {
        name: 'u-tabs',
        props: {
            value: {
                type: [String, Number, Boolean, Object, Array],
                default: 0
            },
            tabs: {
                default() {
                    return [{
                        label: '',
                        value: 0
                    }]
                }
            },
            tabBarClass: {
                default() {
                    return {
                        activeClass: '',
                        defaultClass: '',
                        tabBarStyle: '',
                        hasNextBtn: true
                    }
                }
            }
        },
        methods: {
            addTab (tab) {
                this.tabs.push(tab)
            },
            removeTab (tab) {
                this.tabs.splice(this.tabs.indexOf(tab), 1)
            },
            selectTab (tab) {
                this.$emit('input', tab.value)
                this.$emit('change', tab.value)
            },
            nextTab (val, arr) {
                let pageIndex = val;
                if(pageIndex < arr.length - 1) {
                    this.$emit('input', val + 1)
                }
            }
        }
    }
</script>