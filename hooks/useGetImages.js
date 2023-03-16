import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive
	} from "vue";
	import categorys from '@/static/data/categorys.json'
	import images from '@/static/data/images.json'

	export const useGetImages = () => {
		const data = reactive({
			categorys: [],
			images: [],
			active: 0,
			flag: false
		})

		onLoad(() => {
			getCategorys()
		})

		const getCategorys = () => {
			if (categorys.status === 200) {
				data.categorys = categorys.data
				changeActive(data.active)
			} else {
				failMessage('分类列表')
			}
		}

		const changeActive = (index) => {
			data.active = index
			if (images.status === 200) {
				if (index >= images.data.length) {
					data.flag = true
					return
				} else {
					data.images = images.data[index].data
					data.flag = false
				}
			} else {
				failMessage('详情')
			}
		}

		const previewImg = (index) => {
			const urls = data.images.map(item => item.img_url)
			uni.previewImage({
				current: index,
				urls
			})
		}

		const failMessage = (message) => {
			uni.showToast({
				title: `获取${message}失败！`,
				icon: 'error'
			})
		}
		return {
			data,
			changeActive,
			previewImg
		}
	}
