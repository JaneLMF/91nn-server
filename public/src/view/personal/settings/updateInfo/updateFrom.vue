<template>
    <list class="place-wrap">
        <cell v-for="(item, i) in place" :key="i">
            <text class="place">{{ item }}</text>
        </cell>
    </list>
</template>

<style>
    .place-wrap {
        margin-left: 30px;
        margin-right: 30px;
    }

    .place {
        width: 690px;
        height: 86px;
        line-height: 86px;
        font-size: 28px;
        color: #434343;
        border-bottom-width: 1px;
        border-color: #e5e5e5;
    }
</style>

<script>
    export default {
        data() {
            return {
                place : ['北京','天津','上海','重庆','河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','内蒙古','广西','西藏','宁夏','新疆','香港','澳门','台湾']
            }
        },
        methods: {

        }
    }
</script>