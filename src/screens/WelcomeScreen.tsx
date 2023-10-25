import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import React from "react"
import { RootStackScreenProps } from "types"
import { useAppDispatch } from "redux/store"
import { LoginApp } from "redux/reducers/appSlice"

export default function WelcomeScreen({ navigation }: RootStackScreenProps<"WelcomeScreen">) {
	const dispatcher = useAppDispatch()

	const gotoSignup = () => navigation?.navigate("SignUpScreen")
	const gotoDashboard = () => dispatcher(LoginApp(true))

	return (
		<ImageBackground source={require("assets/images/welcome-bg.png")} resizeMode="cover" style={styles.imageContainer}>
			<View style={styles.overlay}>
				<Text style={styles.title}>Welcome to Ontecx</Text>
				<Text style={styles.text}>Stay informed, discover trending topics, and enjoy a seamless reading and listening experience.</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity activeOpacity={0.5} onPress={gotoDashboard}>
						<View style={[styles.button, styles.btnBlue]}>
							<Text style={[styles.btnText]}>Proceed</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.5} onPress={gotoSignup}>
						<View style={[styles.button, styles.btnTransp]}>
							<Text style={[styles.btnText]}>Sign up</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		justifyContent: "flex-end",
		flexDirection: "column"
	},
	overlay: {
		padding: 20,
		backgroundColor: "#3399AA66",
		flex: 1,
		justifyContent: "flex-end"
	},
	title: {
		fontFamily: "bold",
		fontSize: 26,
		color: "#FFFFFF"
	},

	text: {
		fontFamily: "medium",
		fontSize: 16,
		color: "#FFFFFF"
	},
	buttonContainer: {
		marginVertical: 10,
		flexDirection: "column",
		justifyContent: "space-between"
	},
	button: {
		borderRadius: 10,
		width: "100%",
		padding: 20,
		marginBottom: 15
	},
	btnBlue: {
		backgroundColor: "#1280E1"
	},
	btnTransp: {
		borderWidth: 1.5,
		borderColor: "#FFFFFF"
	},
	btnText: {
		fontFamily: "semiBold",
		fontSize: 16,
		textAlign: "center",
		color: "#ffffff"
	}
})
