<template>
    <image :src="levelUrl" :class="[oLevel.lStyle + '-level']"></image>
</template>

<img src="images/details-s.png"/>
<style>
    .details-level {
        width: 55px;
        height: 60px;
    }

    .index-level {
        width: 82px;
        height: 90px;
    }
</style>

<script>
    export default {
        props: {
            oLevel: {
                default() {
                    return {
                        lStyle: '',
                        level: ''
                    }
                }
            }
        },
        data() {
            return {
                levelUrl: ''
            }
        },
        mounted() {
            this.levelUrl = '/src/components/icoLevel/images/' + this.oLevel.lStyle + '-' + this.oLevel.level + '.png';
        }
    }
</script>