import { GET } from "config/api"
import { NewsInterface, NewsResponseInterface, RequestPaginationParams, RequestParams, ServerResponse } from "types"
import { wordpressEndpoints } from "./wordpressendpoints"
import { WordpressPostInterface } from "types/wordpress"

export const FetchPostsApi = async (params: RequestPaginationParams): Promise<ServerResponse<Array<WordpressPostInterface>, any>> => {
	return await GET(wordpressEndpoints.post.all(params?.page, params?.perPage))
}

export const FetchPostApi = async (params: RequestParams): Promise<ServerResponse<WordpressPostInterface, any>> => {
	return await GET(wordpressEndpoints.post.single(params?.id))
}
