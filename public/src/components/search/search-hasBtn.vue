<template>
    <div class="search-box" :class="[oSearch.searchWrapStyle]">
        <div class="search-wrap">
            <div class="search-moudle" :class="[oSearch.hasBtn? 'search-moudle-noAll': 'search-moudle-all']" >
                <div class="submit-search-wrap">
                    <image src="/src/components/search/images/nav-search.png" class="submit-search"></image>
                </div>
                <input type="text" :placeholder="oSearch.placeHolderText" class="input-search" :class="[oSearch.inputSearchStyle]" />
            </div>
            <slot :class="[oSearch.hasBtn? 'mesgMoudle': '']"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            oSearch: {
                deafult() {
                    return {
                        placeHolderText: '',
                        hasBtn: false,
                        searchWrapStyle: '',
                        searchMoudleStyle: '',
                        inputSearchStyle: ''
                    }
                }
            }
        }
    }
</script>

<style>
    .search-box {
        width: 750px;
    }

    .search-wrap {
        margin-left: 30px;
        margin-right: 30px;
        width: 690px;
        height: 90px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .search-moudle {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #f15d2d;
    }

    .search-wrap-fc6d3f {
        background-color: #fc6d3f;
    }

    .search-moudle-all {
        width: 690px;
        height: 50px;
    }

    .search-moudle-noAll {
        width: 610px;
        height: 50px;
    }

    .submit-search-wrap {
        width: 60px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    .submit-search {
        width: 24px;
        height: 24px;
    }

    .input-search-fff {
        width: 550px;
        font-size: 26px;
        color: #fff;
        placeholder-color: #fff;
    }
</style>