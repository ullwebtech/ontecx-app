import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { BellIcon } from "react-native-heroicons/outline"
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { useSelector } from "react-redux"
import { getApptitle, getArticleHeaderState, getArticleTitle, setAppTitle } from "redux/reducers/appSlice"
import { useNavigation } from "@react-navigation/native"
import { useAppDispatch } from "redux/store"

export default function Appheader() {
	const apptitle = useSelector(getApptitle)
	const showArticleHeader = useSelector(getArticleHeaderState)
	const articleTitle = useSelector(getArticleTitle)
	const navigation = useNavigation()
	const dispatcher = useAppDispatch()

	const goBack = () => {
		dispatcher(setAppTitle({ articleHeader: false }))
		navigation?.goBack()
	}

	return (
		<>
			{!showArticleHeader ? (
				<View style={styles.container}>
					<View style={styles.titleCont}>
						<Text style={styles.title} numberOfLines={1}>
							{apptitle}
						</Text>
					</View>

					<View style={styles.iconCont}>
						<BellIcon size={30} color="gray" />
					</View>
				</View>
			) : (
				<View style={styles.container}>
					<TouchableOpacity onPress={goBack} activeOpacity={0.5}>
						<ArrowLeftIcon size={20} color="gray" />
					</TouchableOpacity>

					<Text style={styles.articleTitle}>{articleTitle}</Text>
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		position: "relative"
	},
	titleCont: {},
	title: {
		fontFamily: "bold",
		fontSize: 16
	},
	iconCont: {
		padding: 2,
		borderWidth: 0.8,
		borderColor: "gray",
		borderRadius: 50
	},

	articleTitle: {
		fontFamily: "bold",
		fontSize: 16,
		flex: 1,
		textAlign: "center"
	}
})
