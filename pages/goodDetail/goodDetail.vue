<template>
	<view class="goodDetail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(item, index) in data.images" :key="index">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="info">
			<view class="price">
				<text>￥{{data.info.sell_price}}</text>
				<text>￥{{data.info.market_price}}</text>
			</view>
			<view class="title">{{data.info.title}}</view>
			<view class="attr">
				<view>货号：{{data.info.goods_no}}</view>
				<view>库存：{{data.info.stock_quantity}}</view>
			</view>
		</view>
		<view class="detail">
			<view class="header">详细介绍</view>
			<view class="content">
				<rich-text :nodes="data.detail.content"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="data.options" :buttonGroup="data.buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script setup>
	import goodsDetail from '@/static/data/goodsDetail.json'
	import {
		reactive
	} from "vue";
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const data = reactive({
		images: [],
		info: {},
		detail: {},
		options: [{
			icon: 'headphones',
			text: '客服'
		}, {
			icon: 'shop',
			text: '店铺',
			info: 2,
			infoBackgroundColor: '#007aff',
			infoColor: "red"
		}, {
			icon: 'cart',
			text: '购物车',
			info: 2
		}],
		buttonGroup: [{
				text: '加入购物车',
				backgroundColor: '#ff0000',
				color: '#fff'
			},
			{
				text: '立即购买',
				backgroundColor: '#ffa200',
				color: '#fff'
			}
		]
	})

	onLoad(() => {
		getGoodsDetail()
	})

	const getGoodsDetail = () => {
		if (goodsDetail.status === 200) {
			data.images = goodsDetail.data.images
			data.info = goodsDetail.data.info
			data.detail = goodsDetail.data.detail
		} else {
			uni.showToast({
				title: '获取数据失败！',
				icon: 'error'
			})
		}
	}

	const onClick = (e) => {
		uni.showToast({
			title: `${e.content.text}模块尚未开发！`,
			icon: 'none',
			duration: 600
		})
	}
	const buttonClick = (e) => {
		if (e.index === 0) {
			uni.showToast({
				title: '加入购物车成功！',
				icon: 'success',
				duration: 600
			})
		} else {
			uni.showToast({
				title: '订单支付模块尚未开发！',
				icon: 'none'
			})
		}
		data.options[2].info++
	}
</script>

<style lang="scss">
	.goodDetail {
		swiper {
			width: 750rpx;
			height: 500rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			padding: 20rpx;
			padding-top: 30rpx;

			.price {
				color: $shop-color;
				font-size: 40rpx;

				text:nth-child(2) {
					margin-left: 10rpx;
					color: #bbb;
					font-size: 30rpx;
					text-decoration: line-through;
				}
			}

			.title {
				margin: 20rpx 0;
			}

			.attr {
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				padding: 20rpx 0;
				font-size: 25rpx;
			}
		}

		.detail {
			padding: 20rpx;
			padding-bottom: 50px;

			.header {
				font-size: 35rpx;
			}

			.content {
				margin-top: 15rpx;
				line-height: 1.8;
				font-size: 30rpx;

				.gomeImgLoad {
					width: 750rpx !important;
				}
			}
		}

		.goods-nav {
			position: fixed;
			bottom: 0;
			width: 750rpx;
		}
	}
</style>
