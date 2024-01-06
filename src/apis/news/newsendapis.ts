import { GET } from "config/api"
import { NewsInterface, NewsResponseInterface, RequestParams, ServerResponse } from "types"
import { newsendpoints } from "./newsendpoint"

export const FetchTopHeadlineNewsApi = async (params: RequestParams): Promise<ServerResponse<NewsResponseInterface, any>> => {
	return await GET(newsendpoints.TOPHEADLINES(params?.id))
}

export const FetchNewsContentApi = async (params: RequestParams): Promise<ServerResponse<NewsInterface, any>> => {
	return await GET(newsendpoints.SHOW(params?.id))
}

export const SearchNewsApi = async (params: RequestParams): Promise<ServerResponse<NewsResponseInterface, any>> => {
	return await GET(newsendpoints.TOPHEADLINES(params?.id))
}
