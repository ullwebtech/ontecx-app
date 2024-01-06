import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AppState } from "redux/store"
import { NewsSliceStateInterface, RequestParams } from "types"
import { FetchNewsContentApi, FetchTopHeadlineNewsApi, SearchNewsApi } from "apis/news/newsendapis"

const initialState: NewsSliceStateInterface = {
	isLoading: false,
	data: undefined,
	newsContent: null
}

export const FetchNewsHeadlinesApiHandler = createAsyncThunk("news/fetchtopheadline", async (params: RequestParams, thunkAPI) => {
	return await FetchTopHeadlineNewsApi(params)
})

export const SearchNewsApiHandler = createAsyncThunk("news/search_news", async (params: RequestParams, thunkAPI) => {
	return await SearchNewsApi(params)
})

export const FetchNewsContentApiHandler = createAsyncThunk("news/fetchNewsContent", async (params: RequestParams, thunkAPI) => {
	return await FetchNewsContentApi(params)
})

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(FetchNewsHeadlinesApiHandler.pending, (state, action) => {
			state.isLoading = true
		})
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(FetchNewsHeadlinesApiHandler.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action?.payload?.data
		})

		builder.addCase(FetchNewsHeadlinesApiHandler.rejected, (state, action) => {
			state.isLoading = false
		})

		// --------------------------------------------------------
		/* Search news  */
		// --------------------------------------------------------

		builder.addCase(SearchNewsApiHandler.pending, (state, action) => {
			state.isLoading = true
		})
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(SearchNewsApiHandler.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action?.payload?.data
		})

		builder.addCase(SearchNewsApiHandler.rejected, (state, action) => {
			state.isLoading = false
		})

		// --------------------------------------------------------
		/* Fetch news content */
		// --------------------------------------------------------

		builder.addCase(FetchNewsContentApiHandler.pending, (state, action) => {
			state.isLoading = true
		})
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(FetchNewsContentApiHandler.fulfilled, (state, action) => {
			state.isLoading = false
			state.newsContent = action?.payload?.data
		})

		builder.addCase(FetchNewsContentApiHandler.rejected, (state, action) => {
			state.isLoading = false
		})
	}
})

export const {} = newsSlice.actions
export const getNewsHeadlines = (state: AppState) => state?.news
