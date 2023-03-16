const BASE_URL = 'http://localhost:8082'
export const myRequest = (option) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + option.url,
			method: option.method || 'GET',
			data: option.data,
			success() {
				resolve(data)
			},
			fail() {
				reject(new Error('fail'))
			}
		})
	})
}
