import {
	onLoad
} from '@dcloudio/uni-app'
import {
	reactive
} from "vue";

export const useNewsDetail = () => {
	const data = reactive({
		detail: {}
	})

	onLoad(() => {
		getNewDetail()
	})

	const getNewDetail = () => {
		if (newDetail.status === 200) {
			data.detail = newDetail.data[0]
		} else {
			uni.showToast({
				title: '获取咨询详情失败！',
				icon: 'error'
			})
		}
	}
	return data
}
