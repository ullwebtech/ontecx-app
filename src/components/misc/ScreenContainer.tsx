import { StyleSheet, Text, View, SafeAreaView, StyleProp, ViewStyle } from "react-native"
import React from "react"

type ScreenContainerProps = {
	children: React.ReactNode
	style?: StyleProp<ViewStyle>
}
export default function ScreenContainer({ children, style }: ScreenContainerProps) {
	return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 15
	}
})
