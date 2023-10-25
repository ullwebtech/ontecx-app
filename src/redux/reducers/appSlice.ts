import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "redux/store"
import { AppSliceState } from "types"
import { Appearance, ColorSchemeName } from "react-native"

const initialState: AppSliceState = {
	isLoggedIn: false,
	appTitle: "Home"
}

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		LoginApp(state, action) {
			state.isLoggedIn = action?.payload
		},

		setAppTitle(state, action) {
			state.appTitle = action?.payload
		}
	}
})

export const { LoginApp, setAppTitle } = appSlice.actions

export const getAppState = (state: AppState) => state?.app
export const getAuthStatus = (state: AppState) => state?.app?.isLoggedIn
export const getApptitle = (state: AppState) => state?.app?.appTitle
