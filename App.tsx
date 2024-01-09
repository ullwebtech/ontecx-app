import "react-native-gesture-handler"
import { SplashScreen } from "expo-router"

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native"

import {
	Montserrat_100Thin,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold,
	Montserrat_900Black
} from "@expo-google-fonts/montserrat"
import { Provider as ReduxProvider } from "react-redux"
import { useFonts } from "expo-font"
import React from "react"
import { ReduxStore } from "redux/store"
import AppNavigation from "AppNavigation"
import PermissionRequestManager from "components/misc/PermissionRequestManager"
import TrackPlayer from "react-native-track-player"

export default function App() {
	const [initAudioPlayer, setAudioPlayer] = React.useState<boolean>(false)

	const [loaded, error] = useFonts({
		thin: Montserrat_100Thin,
		light: Montserrat_300Light,
		regular: Montserrat_400Regular,
		medium: Montserrat_500Medium,
		bold: Montserrat_700Bold,
		semiBold: Montserrat_600SemiBold,
		extraBold: Montserrat_800ExtraBold,
		black: Montserrat_900Black
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	React.useEffect(() => {
		if (error) throw error
	}, [error])

	React.useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}

		const setupAudio = async () => {
			if (!initAudioPlayer) {
				await TrackPlayer.setupPlayer()
			}
			setAudioPlayer(true)
		}
		setupAudio()
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<ReduxProvider store={ReduxStore}>
			<StatusBar animated={true} backgroundColor={"#1280E1"} barStyle={"light-content"} showHideTransition={"slide"} hidden={false} />
			<PermissionRequestManager>
				<AppNavigation />
			</PermissionRequestManager>
		</ReduxProvider>
	)
}

const styles = StyleSheet.create({})
