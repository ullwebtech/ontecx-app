import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "redux/store"
import { AppSliceState } from "types"
import { Appearance, ColorSchemeName } from "react-native"

const initialState: AppSliceState = {
	isLoggedIn: false,
	appTitle: "Home",
	articleTitle: "",
	showArticleHeader: false
}

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		LoginApp(state, action) {
			state.isLoggedIn = action?.payload
		},

		setAppTitle(state, action) {
			if (typeof action?.payload?.title !== "undefined") state.appTitle = action?.payload?.title

			if (typeof action?.payload?.articleHeader !== "undefined") state.showArticleHeader = action?.payload?.articleHeader

			if (typeof action?.payload?.articleTitle !== "undefined") state.articleTitle = action?.payload?.articleTitle
		}
	}
})

export const { LoginApp, setAppTitle } = appSlice.actions

export const getAppState = (state: AppState) => state?.app
export const getAuthStatus = (state: AppState) => state?.app?.isLoggedIn
export const getApptitle = (state: AppState) => state?.app?.appTitle
export const getArticleHeaderState = (state: AppState) => state?.app?.showArticleHeader
export const getArticleTitle = (state: AppState) => state?.app?.articleTitle
