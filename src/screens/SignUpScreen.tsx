import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import React from "react"
import ScreenContainer from "components/misc/ScreenContainer"
import { useAppDispatch } from "redux/store"
import { LoginApp } from "redux/reducers/appSlice"

export default function SignUpScreen() {
	const dispatcher = useAppDispatch()

	const handleSubmit = () => {
		dispatcher(LoginApp(true))
	}
	return (
		<ScreenContainer style={styles.screen}>
			<View style={styles.formContainer}>
				<Text style={styles.title}>Sign Up</Text>

				<View style={styles.formGroup}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Full Name</Text>
						<TextInput keyboardType="default" style={styles.input} />
					</View>

					<View style={styles.inputGroup}>
						<Text style={styles.label}>Emaill Address</Text>
						<TextInput keyboardType="email-address" style={styles.input} />
					</View>

					<TouchableOpacity onPress={handleSubmit} activeOpacity={0.5} style={styles.inputGroup}>
						<View style={[styles.button, styles.btnBlue]}>
							<Text style={[styles.btnText]}>Proceed</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "#FFFFFF"
	},
	formContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 20
	},
	title: {
		fontFamily: "extraBold",
		fontSize: 22,
		color: "#1280E1",
		marginBottom: 40
	},
	formGroup: {
		// flex: 1,
		width: "100%",
		flexDirection: "column",
		justifyContent: "space-around"
	},
	inputGroup: {
		marginVertical: 15
	},
	label: {
		fontFamily: "medium",
		marginBottom: 8
	},
	input: {
		height: 50,
		backgroundColor: "#F1F1F1",
		borderRadius: 5,
		paddingHorizontal: 10
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
	btnText: {
		fontFamily: "semiBold",
		fontSize: 16,
		textAlign: "center",
		color: "#ffffff"
	}
})
