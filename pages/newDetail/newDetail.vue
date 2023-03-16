<template>
	<view class="newDetail">
		<view class="title">{{data.detail.title}}</view>
		<view class="info">
			<text>发表时间：{{data.detail.add_time}}</text>
			<text>浏览：{{data.detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="data.detail.content"></rich-text>
		</view>
	</view>
</template>

<script setup>
	import newDetail from '@/static/data/newDetail.json'
	import {
		useNewsDetail
	} from '@/hooks/useNewsDetail.js'

	const {
		detail
	} = useNewsDetail()
</script>

<style lang="scss">
	.newDetail {
		padding: 20rpx;

		.title {
			font-size: 38rpx;
			line-height: 1.6;
			text-align: center;
		}

		.info {
			font-size: 20rpx;
			margin-top: 20rpx;

			text:nth-child(2) {
				margin-left: 20px;
			}
		}

		.content {
			border-top: 1px solid #ccc;
			margin-top: 20rpx;
			padding-top: 20rpx;
			font-size: 30rpx;
			line-height: 1.6;
		}
	}
</style>
