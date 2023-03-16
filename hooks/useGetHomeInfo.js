import {
	onLoad
} from '@dcloudio/uni-app'

import {
	reactive
} from "vue";
import swiper from '@/static/data/swiper.json'
import goods from '@/static/data/goods.json'
import navs from '@/static/data/navs.json'

export const useGetHomeInfo = () => {
	const data = reactive({
		swiper: [],
		navs: [],
		goodsList: [],
		page: 1,
		flag: false
	})

	onLoad(() => {
		getGoods()
		getSwiper()
		getNavs()
	})

	const getSwiper = () => {
		// 轮播图数据
		if (swiper.status === 200) {
			data.swiper = swiper.data
		} else {
			failMessage('轮播图')
		}
	}

	const getNavs = () => {
		if (navs.status === 200) {
			data.navs = navs.data
		} else {
			failMessage('导航栏')
		}
	}

	const getGoods = (type) => {
		if (data.page > goods.length) {
			data.flag = true
			return
		} else {
			if (goods[data.page - 1].status === 200) {
				const res = goods[data.page - 1].data
				if (type === 'reachBottom') {
					data.goodsList = [...data.goodsList, ...res]
				} else if (type === 'pullDownRefresh') {
					data.goodsList = [...res, ...data.goodsList]
				} else {
					data.goodsList.push(...res)
				}
			} else {
				failMessage('商品列表')
			}
		}
	}

	const failMessage = (message) => {
		uni.showToast({
			title: `获取${message}失败！`,
			icon: 'error'
		})
	}

	const navClickHandler = (url) => {
		uni.navigateTo({
			url
		})
	}

	const goGoodsDetail = (id) => {
		uni.navigateTo({
			url: '/pages/goodDetail/goodDetail?id=' + id
		})
	}

	return {
		data,
		navClickHandler,
		getGoods,
		goGoodsDetail
	}
}
