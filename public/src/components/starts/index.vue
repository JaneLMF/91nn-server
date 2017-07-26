<template>
    <div class="bc-start-group">
        <div class="bc-start-item" v-if="parseInt(level.split('')[0]) > 0" v-for="n in parseInt(level.split('')[0])">
            <image :class="startStyle" src="/src/view/link-wiki/images/start-all.png"></image>
        </div>
        <div class="bc-start-item" v-if="parseInt(level.split('')[2]) > 0">
            <image :class="startStyle" :src="'/src/view/link-wiki/images/start-' + level.split('')[2] + '.png'"></image>
        </div>
        <div class="bc-start-item" v-if="5 - Math.ceil(level) > 0" v-for="n in (5 - Math.ceil(level))">
            <image :class="startStyle" src="/src/view/link-wiki/images/start-none.png"></image>
        </div>
    </div>
</template>

<style>
    .bc-start-group {
        flex-direction: row;
    }

    .bc-start-small {
        width: 24px;
        height: 23px;
    }

    .bc-start-middle {
        width: 33px;
        height: 31px;
    }
</style>

<script>
    export default {
        props: {
            level: {
                default: ''
            },
            startStyle: {
                default: ''
            }
        }
    }
</script>