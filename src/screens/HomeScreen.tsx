import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Pressable } from "react-native"
import React from "react"
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import HomeCardSliders from "components/home/HomeCardSliders"
import RecommendNews from "components/home/RecommendNews"
import { useAppDispatch } from "redux/store"
import { setAppTitle } from "redux/reducers/appSlice"

export default function HomeScreen() {
	const dispatcher = useAppDispatch()
	React.useEffect(() => {
		dispatcher(setAppTitle({ title: "Home" }))
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.headerSec}>
				{/* The search form container */}
				<View style={styles.formCont}>
					{/* Input container */}
					<View style={styles.inputCont}>
						<TextInput placeholder="Search" keyboardType="web-search" style={styles.input} />
						<MagnifyingGlassIcon size={28} color={"#ddd"} style={styles.searchIcon} />
					</View>

					{/* Button container */}
					<View style={styles.btnCont}>
						<TouchableOpacity activeOpacity={0.5}>
							<View style={[styles.button, styles.btnBlue]}>
								<Text style={[styles.btnText]}>Search</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				{/* Categories */}
				<View style={styles.categoriesCont}>
					<ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollCont} contentContainerStyle={styles.scrollContentCont}>
						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>All</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Latest Stories</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Startups</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Fintech</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Tech Digest</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Industries</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={styles.textCont}>
							<Text style={styles.text}>Case Studies</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</View>

			<HomeCardSliders />
			<RecommendNews />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
	headerSec: {
		backgroundColor: "#ffffff",
		borderTopWidth: 1,
		borderTopColor: "#dddddd",
		paddingHorizontal: 10,
		paddingBottom: 10
	},
	button: {
		borderRadius: 10,
		width: "100%",
		padding: 10
	},
	btnBlue: {
		backgroundColor: "#1280E1"
	},
	btnText: {
		fontFamily: "semiBold",
		fontSize: 16,
		textAlign: "center",
		color: "#ffffff"
	},
	input: {
		height: 40,
		backgroundColor: "#F1F1F1",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingLeft: 40
	},
	formCont: {
		flexDirection: "row",
		width: "100%",
		padding: 10,
		justifyContent: "center",
		alignItems: "center"
	},

	inputCont: {
		flex: 1,
		marginRight: 5,
		position: "relative"
	},
	searchIcon: {
		position: "absolute",
		top: 5,
		left: 5
	},

	btnCont: {
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center"
	},
	scrollCont: {},
	scrollContentCont: {},
	categoriesCont: {
		marginTop: 8
	},
	textCont: {
		borderRadius: 50,
		backgroundColor: "#F6F5F8",
		padding: 10,
		paddingHorizontal: 20,
		marginHorizontal: 8
	},
	text: {
		fontFamily: "semiBold"
	}
})
