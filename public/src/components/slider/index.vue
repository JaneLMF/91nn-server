<template>
    <slider class="slider-wrap">
        <div  v-for="(item, i) in bannerData" :key="i" class="slider-group">
            <image :src="item.imageUrl" class="slider-item"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<style>
    .slider-wrap {
        position: relative;
        width: 750px;
        height: 400px;
    }

    .slider-group {
        width: 750px;
        height: 400px;
    }

    .slider-item {
        width: 750px;
        height: 350px;
    }

    .indicator {
        width: 750px;
        height: 30px;
        position: absolute;
        bottom: 0px;
        item-color: rgba(51, 51, 51, 0.5);
        item-selected-color: #fff;
        item-size: 10px;
    }
</style>

<script>
    export default {
        props: {
            bannerData: {
                default() {
                    [
                        {
                            imageUrl: '',
                            callBack() {

                            }
                        }
                    ]
                }
            }
        }
    }
</script>