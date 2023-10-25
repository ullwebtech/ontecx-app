import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { appSlice } from "./reducers/appSlice"
import { useDispatch } from "react-redux"

const makeStore = () =>
	configureStore({
		reducer: {
			[appSlice.name]: appSlice.reducer
		},
		devTools: true
	})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const ReduxStore = makeStore()

export type AppDispatch = typeof ReduxStore.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
