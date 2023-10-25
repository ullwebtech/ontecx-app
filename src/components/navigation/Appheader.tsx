import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { BellIcon } from "react-native-heroicons/outline"
import { useSelector } from "react-redux"
import { getApptitle } from "redux/reducers/appSlice"

export default function Appheader() {
	const apptitle = useSelector(getApptitle)

	return (
		<View style={styles.container}>
			<View style={styles.titleCont}>
				<Text style={styles.title}>{apptitle}</Text>
			</View>

			<View style={styles.iconCont}>
				<BellIcon size={30} color="gray" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%"
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
	}
})
