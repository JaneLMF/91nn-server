<template>
	<div class="article-box">
		<div class="article-content-wrap" style="">
			<div class="user-wrap">
				<div class="user-header-wrap">
					<image :src="article.headerUrl" class="user-header"></image>
					<div class="user-info-wrap">
						<text class="user-name">{{ article.userName }}</text>
						<text class="user-issue">来自: {{ article.userIsuue }}</text>
					</div>
				</div>
				<div class="article-time-wrap">
					<text class="article-time">{{ article.articleTime }}</text>
				</div>
			</div>
			<div class="article-wrap">
				<text class="article-content">{{ article.articleContent }}</text>
			</div>
			<div class="article-img-wrap" v-if="article.articleImg.length > 0">
				<div class="article-img-group" v-for="(item, i) in article.articleImg" :key="i">
					<image class="article-img-item" :src="item"></image>
				</div>
			</div>
		</div>
		<div class="button-group">
			<div class="button-item">
				<image class="button-icon" src="/src/view/home/images/zhuanfa.png"></image>
				<text class="button-content">{{ article.forward }}</text>
			</div>
			<div class="button-item">
				<image class="button-icon" src="/src/view/home/images/pinglun.png"></image>
				<text class="button-content">{{ article.comment }}</text>
			</div>
			<div class="button-item">
				<image class="button-icon" src="/src/view/home/images/zan.png"></image>
				<text class="button-content">{{ article.agree }}</text>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    props: {
			article: {
			    default() {
			        return {
						headerUrl: '',
						userName: '',
						userIsuue: '',
						articleTime: '',
						articleContent: '',
                        articleImg: [],
						comment: '',
						forward: '',
						agree: ''
					}
				}
			}
		},
		data() {
	        return {

			}
		}
	}
</script>

<style>
	.article-box {
		background-color: #fff;
		margin-bottom: 10px;
	}

	.article-content-wrap {
		background-color: #fff;
		padding-left: 40px;
		padding-right: 40px;
	}

	.user-wrap {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 30px;
	}

	.user-header-wrap {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 60px;
	}

	.article-time-wrap {
		justify-content: flex-end;
		align-items: center;
		height: 60px;
	}

	.article-time {
		font-size: 24px;
		color: #959595;
	}

	.article-wrap {
		margin-top: 30px;
		margin-bottom: 25px;
		justify-content: space-around;
		text-align: justify;
	}

	.article-content {
		font-weight: 200;
		font-size: 28px;
		color: #333333;
		justify-content: space-around;
	}

	.article-img-wrap {
		margin-bottom: 25px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.article-img-group {

	}

	.article-img-item {
		width: 210px;
		height: 118px;
		border-radius: 4px;
	}

	.user-info-wrap {
		margin-left: 20px;
	}

	.user-name {
		font-size: 24px;
		color: #333333;
	}

	.user-issue {
		font-size: 24px;
		color: #959595;
	}

	.user-header {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}

	.button-group {
		flex-direction: row;
		border-top-width: 2px;
		border-color: #e5e5e5;
		width: 750px;
	}

	.button-item {
		flex-direction: row;
		flex:1;
		height: 73px;
		justify-content: center;
		align-items: center;
	}

	.button-icon {
		width: 32px;
		height: 32px;
		margin-right: 14px;
	}

	.button-content {
		font-size: 24px;
		color: #bbbbbb;
	}
</style>