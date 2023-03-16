import {
	onLoad
} from '@dcloudio/uni-app'
import {
	reactive
} from "vue";
import news from '@/static/data/news.json'

export const useNews = () => {
	const data = reactive({
		news: []
	})

	onLoad(() => {
		getNews()
	})

	const getNews = () => {
		if (news.status === 200) {
			data.news = news.data
		} else {
			uni.showToast({
				title: '获取咨询列表失败！',
				icon: "error"
			})
		}
	}

	const goDetail = (id) => {
		uni.navigateTo({
			url: '/pages/newDetail/newDetail?id=' + id
		})
	}
	return {
		data,
		goDetail
	}
}
