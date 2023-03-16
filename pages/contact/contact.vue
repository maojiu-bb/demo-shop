<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view class="phone" @click="makePhoneCall">联系电话：400-618-9090（点击拨打）</view>
			<view class="address">地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map"></map>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	const data = reactive({
		longitude: 24.2914,
		latitude: 38.676,
		scale: 14,
		markers: [{
			longitude: 24.2914,
			latitude: 38.676,
			iconPath: '@/static/hmlogo.png'
		}]
	})

	const makePhoneCall = () => {
		uni.makePhoneCall({
			phoneNumber: '400-618-9090',
			success() {},
			fail() {
				uni.showToast({
					title: '拨打电话失败！',
					icon: 'error'
				})
			}
		})
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			.phone {
				padding: 20rpx 15rpx;
				border-bottom: 1px solid #eee;
				line-height: 2;
			}

			.address {
				padding: 20rpx 15rpx;
				line-height: 2;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
