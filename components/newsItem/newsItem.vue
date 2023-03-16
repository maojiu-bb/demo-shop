<template>
	<view class="news-item" v-for="item in props.news" :key="item.id" @click="navigate(item.id)">
		<image :src="item.img_url"></image>
		<view class="right">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<text>发表时间：{{item.add_time}}</text>
				<text>浏览：{{item.click}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		news: {
			type: Array,
			default: []
		}
	})
	const emits = defineEmits(['newDetail'])

	const navigate = (id) => {
		emits('newDetail', id)
	}
</script>

<style lang="scss">
	.news-item {
		padding: 10rpx;
		display: flex;
		border-bottom: 1px solid $shop-color;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			padding: 10rpx;
			margin-left: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				word-wrap: break-word;
				word-break: break-all;
				overflow: hidden;
				font-size: 26rpx;
			}

			.info {
				/* #ifdef H5 */
				font-size: 12rpx;
				/* #endif */
				/* #ifdef MP-WEIXIN */
				font-size: 16rpx;
				/* #endif */

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
