import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppState } from "redux/store"
import { NewsSliceStateInterface, RequestPaginationParams, RequestParams } from "types"
import { FetchNewsContentApi, FetchTopHeadlineNewsApi, SearchNewsApi } from "apis/news/newsendapis"
import { FetchPostApi, FetchPostsApi } from "apis/wordpress/wordpressapis"

const initialState: NewsSliceStateInterface = {
	isLoading: false,
	data: undefined,
	newsContent: null
}

export const FetchPostsApiHandler = createAsyncThunk("post/fetch-all", async (params: RequestPaginationParams, thunkAPI) => {
	return await FetchPostsApi(params)
})

export const FetchPostApiHandler = createAsyncThunk("post/fetch-single", async (params: RequestParams, thunkAPI) => {
	return await FetchPostApi(params)
})

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(FetchPostsApiHandler.pending, (state, action) => {
			state.isLoading = true
		})
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(FetchPostsApiHandler.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = JSON.stringify(action?.payload?.data)
		})

		builder.addCase(FetchPostsApiHandler.rejected, (state, action) => {
			state.isLoading = false
		})

		// --------------------------------------------------------
		/* Fetch news content */
		// --------------------------------------------------------

		builder.addCase(FetchPostApiHandler.pending, (state, action) => {
			state.isLoading = true
		})
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(FetchPostApiHandler.fulfilled, (state, action) => {
			state.isLoading = false
			state.newsContent = JSON.stringify(action?.payload?.data)
		})

		builder.addCase(FetchPostApiHandler.rejected, (state, action) => {
			state.isLoading = false
		})
	}
})

export const {} = newsSlice.actions
export const getNewsPost = (state: AppState) => state?.news
