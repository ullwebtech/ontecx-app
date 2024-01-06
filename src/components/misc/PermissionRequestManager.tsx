import { StyleSheet, Text, View } from "react-native"
import React from "react"
import * as Location from "expo-location"

type PermissionRequestManagerProps = {
	children?: React.ReactNode
}
export default function PermissionRequestManager({ children }: PermissionRequestManagerProps) {
	React.useEffect(() => {
		;(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				//  Show popup
				return
			}
		})()
	}, [])
	return children
}

const styles = StyleSheet.create({})
