<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="{active: data.active === index}" v-for="(item, index) in data.categorys" :key="item.id"
				@click="changeActive(index)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item, index) in data.images" :key="item.id" v-if="!data.flag">
				<image :src="item.img_url" @click="previewImg(index, $event)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="data.flag">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		useGetImages
	} from '@/hooks/useGetImages.js'

	const {
		data,
		changeActive,
		previewImg
	} = useGetImages()
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			border-right: 1px solid #ccc;
			height: 100%;

			view {
				width: 100%;
				height: 120rpx;
				line-height: 120rpx;
				text-align: center;
				border-bottom: 1px solid #ccc;

				&.active {
					background-color: $shop-color;
					color: #fff;
				}
			}
		}

		.right {
			width: 550rpx;
			height: 100%;

			.item {
				margin: 25rpx;

				image {
					width: 500rpx;
					height: 500rpx;
					border-radius: 20px;
				}

				text {
					word-wrap: break-word;
					overflow: hidden;
				}
			}
		}
	}
</style>
