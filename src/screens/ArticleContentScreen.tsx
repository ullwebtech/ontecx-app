import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native"
import React from "react"
import { Image } from "expo-image"
import { ClockIcon, MusicalNoteIcon, PauseIcon, SpeakerWaveIcon } from "react-native-heroicons/outline"
import { RootStackScreenProps } from "types"
import { useAppDispatch } from "redux/store"
import { useSelector } from "react-redux"
import { FetchNewsContentApiHandler, getNewsHeadlines } from "redux/reducers/newsSlice"
import * as Speech from "expo-speech"

export default function ArticleContentScreen({ route, navigation }: RootStackScreenProps<"ArticleContent">) {
	const dispatcher = useAppDispatch()
	const { isLoading, newsContent } = useSelector(getNewsHeadlines)
	const [readnews, setReadnews] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (newsContent && readnews === true) {
			Speech.speak(newsContent?.text)
		}

		if (newsContent && readnews === false) {
			Speech.stop()
		}

		return () => {
			Speech.stop()
		}
	}, [readnews])
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			{isLoading ? (
				<ActivityIndicator size={"large"} />
			) : (
				<>
					<Image source={{ uri: newsContent?.image, width: 512, height: 512 }} style={styles.articleImg} contentFit="cover" transition={1000} />
					<View style={styles.header}>
						<Text style={styles.title}>{newsContent && newsContent?.title}</Text>

						<View style={styles.articleInfo}>
							<View style={styles.articleDetails}>
								{/* <Text style={styles.author}>By {newsContent?.authors?.join(", ")}</Text> */}
								<Text style={styles.date}>
									<ClockIcon size={16} color={"gray"} /> {new Date(newsContent?.publish_date as string)?.toUTCString()}
								</Text>
							</View>
							<TouchableOpacity activeOpacity={0.5} onPress={() => setReadnews(!readnews)} style={styles.articleIcon}>
								{readnews === true ? <PauseIcon size={24} color={"rgba(218, 166, 45, 1)"} /> : <SpeakerWaveIcon size={24} color={"rgba(218, 166, 45, 1)"} />}
							</TouchableOpacity>
						</View>
					</View>

					<View>
						<Text style={styles.articleBodyText}>{newsContent && newsContent?.text}</Text>
					</View>
				</>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		marginTop: 1
	},
	articleImg: {
		width: "100%",
		height: 220
	},
	articleIcon: {
		borderRadius: 50,
		backgroundColor: "rgba(244, 236, 216, 1)",
		padding: 8
	},
	header: {
		padding: 10
	},
	title: {
		fontFamily: "extraBold",
		fontSize: 22,
		marginBottom: 15
	},

	articleInfo: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		marginBottom: 8
	},
	articleDetails: {
		flexDirection: "column"
	},
	author: {
		fontFamily: "normal",
		fontSize: 12,
		color: "gray"
	},
	date: {
		fontFamily: "normal",
		fontSize: 12,
		color: "gray"
	},
	articleBodyText: {
		fontFamily: "medium",
		fontSize: 14,
		paddingVertical: 10,
		paddingHorizontal: 15,
		textDecorationStyle: "solid",
		textAlign: "justify",
		lineHeight: 27
	}
})
