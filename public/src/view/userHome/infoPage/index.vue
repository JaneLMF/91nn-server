<style src="./style.css"></style>

<template src="./index.html"></template>

<script>
	export default {
	    props: {
	        user: {
	            default() {
	                return {
	                    headerUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4034448303,3432913783&fm=58&u_exp_0=3467414688,3099608373&fm_exp_0=86&bpow=960&bpoh=1394',
                        nickName: '鹿晗',
                        sex: '男',
                        intro: '清风徐来，币圈happy',
                        from: '北京',
                        uid: '16283938'
                    }
                }
            }
        },
	    data() {
	        return {
	            title: '资料'
            }
        },
		components: {
            backNavpage: require('components/navbar/back-navbar.vue')
        }
	}
</script>

