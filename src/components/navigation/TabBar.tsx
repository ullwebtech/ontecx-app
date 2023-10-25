import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Bars4Icon, HomeIcon, MusicalNoteIcon, NewspaperIcon } from "react-native-heroicons/outline"
import { DrawerActions, useNavigation } from "@react-navigation/native"

export default function TabBar({ state, navigation, descriptors }: BottomTabBarProps) {
	const [activeTab, setActiveTab] = React.useState<"home" | "read-news" | "paid-news" | "categories">("home")

	const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer())

	/* navigation */
	const onPressHome = () => {
		setActiveTab("home")
		navigation?.navigate("Dashboard")
	}

	const onPressReadNews = () => {
		setActiveTab("read-news")
		navigation?.navigate("ReadNews")
	}
	return (
		<View style={[styles.tabBarContainer]}>
			<TouchableOpacity style={[styles.tab, { borderTopColor: activeTab === "home" ? "#1280E1" : "transparent" }]} onPress={onPressHome}>
				<HomeIcon size={30} color={activeTab === "home" ? "#1280E1" : "gray"} />
				<Text style={[styles.label, { color: activeTab === "home" ? "#1280E1" : "gray" }]}>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity style={[styles.tab, { borderTopColor: activeTab === "read-news" ? "#1280E1" : "transparent" }]} onPress={onPressReadNews}>
				<NewspaperIcon size={30} color={activeTab === "read-news" ? "#1280E1" : "gray"} />
				<Text style={[styles.label, { color: activeTab === "read-news" ? "#1280E1" : "gray" }]}>Read News</Text>
			</TouchableOpacity>

			<TouchableOpacity style={[styles.tab, { borderTopColor: activeTab === "paid-news" ? "#1280E1" : "transparent" }]} onPress={() => setActiveTab("paid-news")}>
				<MusicalNoteIcon size={30} color={activeTab === "paid-news" ? "#1280E1" : "gray"} />
				<Text style={[styles.label, { color: activeTab === "paid-news" ? "#1280E1" : "gray" }]}>Pad News</Text>
			</TouchableOpacity>

			<TouchableOpacity style={[styles.tab]} onPress={toggleDrawer}>
				<Bars4Icon size={30} color={activeTab === "categories" ? "#1280E1" : "gray"} />
				<Text style={[styles.label, { color: activeTab === "categories" ? "#1280E1" : "gray" }]}>Categories</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	tabBarContainer: {
		backgroundColor: "#ffffff",
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24
	},

	tab: {
		alignItems: "center",
		justifyContent: "center",
		borderTopWidth: 1,
		paddingTop: 2,
		borderTopColor: "transparent"
	},
	label: {
		fontFamily: "medium",
		textAlign: "center",
		fontSize: 12
	}
})
