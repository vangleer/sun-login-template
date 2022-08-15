const defaultConfig = {
	baseUrl: '',
	header: {
		'Content-Type':'application/json;charset=UTF-8',
		'Content-Type':'application/x-www-form-urlencoded'
	}
}

class Request {
	constructor(config = {}) {
		this.config = { ...defaultConfig, ...config }
		this.interceptor = {
			request: null,
			response: null,
		}
	}
	
	request(options) {
		const config = { ...this.config, ...options }
		
		return new Promise((resolve, reject) => {
			config.complete = (response) => {
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				
				resolve(response.data)
			}
			
			config.fail = (error) => {
				reject(error)
			}
			
			if (this.interceptor.request) {
				this.interceptor.request(config)
			}
			console.log(config)
			uni.request(config)
		})
	}
	
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	}
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
}

export default new Request()