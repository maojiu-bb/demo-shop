<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in data.swiper" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in data.navs" :key="index" @click="navClickHandler(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<GoodList @goGoodsDetail="goGoodsDetail" :goodsList="data.goodsList"></GoodList>
		</view>
	</view>
</template>

<script setup>
	import GoodList from '@/components/goodsList/goodsList.vue'

	import {
		useGetHomeInfo
	} from '@/hooks/useGetHomeInfo.js'

	const {
		data,
		navClickHandler,
		goGoodsDetail
	} = useGetHomeInfo()
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 375rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav-item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					line-height: 120rpx;
					font-size: 40rpx;
					color: #fff;
					margin: 10px auto;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot-goods {
			margin: 8px 0;

			.title {
				height: 50px;
				line-height: 50px;
				text-align: center;
				color: $shop-color;
				letter-spacing: 10px;
				background-color: #fff;
				border: 1px solid #ccc;
			}
		}
	}
</style>
