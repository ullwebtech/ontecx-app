import { ColorSchemeName } from "react-native"

import { NewsInterface, NewsResponseInterface, WordpressPostInterface } from "types"

export interface AppSliceState {
	isLoggedIn: boolean
	appTitle?: string
	showArticleHeader?: boolean
	articleTitle?: string
}

export interface NewsSliceStateInterface {
	isLoading: boolean
	data?: Array<WordpressPostInterface> | string
	newsContent: WordpressPostInterface | null | string
}
