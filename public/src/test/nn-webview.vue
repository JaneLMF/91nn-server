<template>
    <back-navbar :title="title">
        <div style="width: 755px; flex: 1">
            <text>hello</text>
            <nn-webview src="http://192.168.0.153:8080/src/test/test-event.html" style="width: 755px; flex: 1" @click="webviewClick"></nn-webview>
        </div>
    </back-navbar>
</template>

<script>
    export default {
        data() {
            return {
                title: '测试事件'
            }
        },
        methods: {
            webviewClick(view) {
                let data = view.data
                console.log('type of ', (typeof view.data))
                if ((typeof view.data) === 'string'){
                    console.log('type is string')
                    data = JSON.parse(view.data)
                }
                console.log('webview click ', data.event, data.data)
            }
        },
        components: {
            backNavbar: require("components/navbar/back-navbar.vue")
        }
    }
</script>

<style>

</style>