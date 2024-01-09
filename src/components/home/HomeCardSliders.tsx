import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, TouchableOpacity } from "react-native"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { ClockIcon, MusicalNoteIcon } from "react-native-heroicons/outline"
import { useSelector } from "react-redux"
import { FetchPostApiHandler, getNewsPost } from "redux/reducers/newsSlice"
import { useAppDispatch } from "redux/store"
import { setAppTitle } from "redux/reducers/appSlice"
import { useNavigation } from "@react-navigation/native"
import { WordpressPostInterface } from "types"
import { PickNewsFeed } from "utilities/utils"

export default function HomeCardSliders() {
	const { isLoading, data } = useSelector(getNewsPost)
	const dispatcher = useAppDispatch()
	const navigation = useNavigation()

	const _data: WordpressPostInterface[] = data ? PickNewsFeed(JSON.parse(data as string), 5) : []
	const articles = _data

	const gotoArticleContent = (_slug?: string, _title?: string) => {
		dispatcher(setAppTitle({ articleTitle: _title, articleHeader: true }))

		dispatcher(FetchPostApiHandler({ id: _slug }))
		navigation?.navigate("StackArticleScreens")
	}

	return (
		<View style={styles.container}>
			{isLoading ? (
				<ActivityIndicator size={"large"} />
			) : (
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{articles.map((item, index) => (
						<TouchableOpacity key={item?.slug} activeOpacity={0.5} onPress={() => gotoArticleContent(item?.id, "EN")}>
							<ImageBackground
								source={{ uri: item?.yoast_head_json?.og_image[0]?.url, width: item?.yoast_head_json?.og_image[0]?.width, height: item?.yoast_head_json?.og_image[0]?.height }}
								resizeMode="cover"
								style={styles.imageContainer}
								borderRadius={20}
							>
								<View style={styles.cardBody}>
									<View style={styles.cateCont}>
										<Text style={styles.categoryTag}>{item?.yoast_head_json?.schema["@graph"][0]?.articleSection?.join(" ")}</Text>
									</View>
									<View>
										<Text style={styles.title} numberOfLines={2}>
											{item?.title?.rendered}
										</Text>
									</View>
									<View style={styles.footer}>
										<View style={styles.infoCont}>
											<Text style={styles.author}>{item?.yoast_head_json.author}</Text>
											<Text style={styles.articleInfo}>
												{new Date(item?.yoast_head_json?.article_published_time)?.toDateString()} <ClockIcon size={15} color={"rgba(255, 255, 255, 1)"} />{" "}
												{new Date(item?.yoast_head_json?.article_published_time)?.toTimeString()}
											</Text>
										</View>
										<View style={styles.iconCont}>
											<MusicalNoteIcon size={20} color={"rgba(255, 255, 255, 1)"} />
										</View>
									</View>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		padding: 10
	},
	imageContainer: {
		width: 230,
		height: 150,
		marginHorizontal: 10
	},
	cardBody: {
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: 20,
		height: "100%",
		padding: 10
	},
	cateCont: { flexDirection: "row" },
	categoryTag: {
		backgroundColor: "rgba(255, 255, 255, 0.16)",
		padding: 8,
		fontSize: 12,
		borderRadius: 20,
		color: "#fff",
		fontFamily: "medium"
	},
	title: {
		fontFamily: "extraBold",
		color: "#fff",
		marginVertical: 10
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	infoCont: {
		marginRight: 5
	},
	author: {
		fontSize: 12,
		fontFamily: "normal",
		color: "#eeeeee"
	},
	articleInfo: {
		fontSize: 9,
		fontFamily: "normal",
		color: "#eeeeee"
	},
	iconCont: {
		borderRadius: 50,
		backgroundColor: "rgba(217, 217, 217, 0.32)",
		padding: 8
	}
})
