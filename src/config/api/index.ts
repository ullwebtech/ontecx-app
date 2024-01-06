import axios from "axios"
import { apiConfigs } from "config/config"

const baseUrl = apiConfigs?.getBaseUrl()

const HttpClient = axios.create({
	responseType: "json"
})

// request interceptors
HttpClient.interceptors.request.use(
	configs => {
		/* Configure the api resource base url. */

		configs.baseURL = baseUrl
		if (typeof configs?.headers != "undefined") {
			configs.headers["x-api-key"] = `${apiConfigs.apiKey}`
		}

		/* Return the configurations to Axios */
		return configs
	},
	err => Promise.reject(err)
)

/* response interceptors */
HttpClient.interceptors.response.use(
	response => {
		return Promise.resolve(response)
	},
	error => {
		return Promise.reject(error?.response?.data)
	}
)
/* export  */

export const { GET, POST, PUT, DELETE, PATCH } = {
	GET: HttpClient.get,
	POST: HttpClient.post,
	PUT: HttpClient.put,
	DELETE: HttpClient.delete,
	PATCH: HttpClient.patch
}
