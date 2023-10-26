import type { StackScreenProps } from "@react-navigation/stack"
import type { DrawerScreenProps } from "@react-navigation/drawer"
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type RootScreenParamList = {
	WelcomeScreen?: undefined
	SignUpScreen?: undefined
	Dashboard?: undefined
	Home?: undefined
	StackArticleScreens?: undefined
	ArticleContent?: undefined
	ReadNews?: undefined
}

export type RootStackScreenProps<T extends keyof RootScreenParamList> = StackScreenProps<RootScreenParamList, T>
export type RootDrawerScreenProps<T extends keyof RootScreenParamList> = DrawerScreenProps<RootScreenParamList, T>
export type RootBottomTabScreenProps<T extends keyof RootScreenParamList> = BottomTabScreenProps<RootScreenParamList, T>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootScreenParamList {}
	}
}
