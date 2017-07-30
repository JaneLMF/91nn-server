<template>
    <image :src="[levelUrl]" :class="[levelStyle]"></image>
</template>

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
        computed: {
            levelUrl() {
                return '/src/components/icoLevel/images/' + this.oLevel.lStyle + '-' + this.oLevel.length + '.png'
            },
            levelStyle() {
                return this.oLevel.lStyle + '-level'
            }
        }
    }
</script>