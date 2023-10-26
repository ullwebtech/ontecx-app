import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { DrawerContentComponentProps, DrawerItemList } from "@react-navigation/drawer"
export default function CustomDrawerItems(props: DrawerContentComponentProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Latest Stories</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Statups</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Fintech</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Tech Digest</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Industries</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>Case Studies</Text>
			</TouchableOpacity>

			<TouchableOpacity activeOpacity={0.5} style={styles.drawerItem}>
				<Text style={styles.drawerItemText}>About Us</Text>
			</TouchableOpacity>

			{/* <DrawerItemList {...props} /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 10,
		flexDirection: "column"
	},

	drawerItem: {
		backgroundColor: "rgba(241, 241, 241, 1)",
		width: "100%",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10
	},
	drawerItemText: {
		fontFamily: "medium"
	}
})
