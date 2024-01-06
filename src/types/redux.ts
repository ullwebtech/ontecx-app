import { ColorSchemeName } from "react-native"

import { NewsInterface, NewsResponseInterface } from "types"

export interface AppSliceState {
	isLoggedIn: boolean
	appTitle?: string
	showArticleHeader?: boolean
	articleTitle?: string
}

export interface NewsSliceStateInterface {
	isLoading: boolean
	data?: NewsResponseInterface
	newsContent: NewsInterface | null
}
