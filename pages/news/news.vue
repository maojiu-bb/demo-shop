<template>
	<view class="news">
		<newsItem :news="data.news" @newDetail="goDetail"></newsItem>
	</view>
</template>

<script setup>
	import newsItem from '@/components/newsItem/newsItem.vue'
	import {
		useNews
	} from '@/hooks/useNews.js'
	const {
		data,
		goDetail
	} = useNews()
</script>

<style lang="scss">
	.news {}
</style>
