<template>
	<view>
		<view class="goods-list">
			<view class="goods-item" v-for="item in props.goodsList" :key="item.id" @click="navigate(item.id)">
				<image :src="item.img_url"></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		goodsList: {
			type: Array,
			default: []
		}
	})
	const emits = defineEmits(['goGoodsDetail'])

	const navigate = (id) => {
		emits('goGoodsDetail', id)
	}
</script>

<style lang="scss">
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods-item {
			width: 375rpx;
			background-color: #fff;
			border: 1px solid #ccc;
			border-top: 0;
			box-sizing: border-box;

			&:nth-child(2n) {
				border-left: 0;
			}

			image {
				width: 80%;
				height: 160px;
				display: block;
				margin: 0 auto;
				margin-top: 20rpx;
			}

			.price,
			.name {
				padding: 10px;
			}

			.price {
				padding-bottom: 0;

				text {
					color: $shop-color;
					font-size: 20px;

					&:nth-child(2) {
						color: #bbb;
						font-size: 16px;
						text-decoration: line-through;
					}
				}
			}

			.name {
				font-size: 24rpx;
			}
		}
	}
</style>
