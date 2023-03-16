<template>
	<view>
		<GoodsList @goGoodsDetail="goGoodsDetail" :goodsList="data.goodsList"></GoodsList>
		<view class="bottom" v-if="data.flag">-----没有更多数据了-----</view>
	</view>
</template>

<script setup>
	import {
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	import GoodsList from '@/components/goodsList/goodsList.vue'

	import {
		useGetHomeInfo
	} from '@/hooks/useGetHomeInfo.js'
	import {
		ref
	} from "vue";


	const {
		data,
		getGoods,
		goGoodsDetail
	} = useGetHomeInfo()

	onReachBottom(() => {
		data.page += 1
		getGoods('reachBottom')
	})

	onPullDownRefresh(() => {
		setTimeout(() => {
			data.page += 1
			getGoods('pullDownRefresh')
			uni.stopPullDownRefresh()
		}, 1000)
	})
</script>

<style lang="scss">
	.bottom {
		text-align: center;
		padding: 40rpx 0;
		background-color: #eee;
		color: #bbb;
	}
</style>
