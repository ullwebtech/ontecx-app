import { StyleSheet, Text, View } from "react-native"
import React from "react"
import RecommendNews from "components/home/RecommendNews"
import { useAppDispatch } from "redux/store"
import { setAppTitle } from "redux/reducers/appSlice"

export default function ReadNewsScreen() {
	const dispatcher = useAppDispatch()
	React.useEffect(() => {
		dispatcher(setAppTitle("Read News"))
	}, [])

	return (
		<View style={styles.container}>
			<RecommendNews showHeader={false} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flex: 1
	}
})
