import axios from "axios"
import { apiConfigs } from "config/config"
import { encode } from "base-64"

const baseUrl = apiConfigs?.getBaseUrl()
const apiKey = apiConfigs?.apiKey
const apiKeyEndcode = encode(apiKey as string)

const HttpClient = axios.create({
	responseType: "json"
})

// request interceptors
HttpClient.interceptors.request.use(
	configs => {
		/* Configure the api resource base url. */

		configs.baseURL = baseUrl

		const url = configs?.url?.split(":")
		if (url) {
			/* only add authorization header when access level for that 
		resource is protected */
			const isProtected = url[0]
			const path = url[1]

			if (isProtected === "protected") {
				if (typeof configs?.headers != "undefined") {
					configs.headers.Authorization = `Basic ${apiKeyEndcode}`
				}
			}

			if (path) configs.url = path
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
