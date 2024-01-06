import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import React from "react"
import { ClockIcon, MusicalNoteIcon } from "react-native-heroicons/outline"
import { Image } from "expo-image"
import { useNavigation } from "@react-navigation/native"
import { useAppDispatch } from "redux/store"
import { setAppTitle } from "redux/reducers/appSlice"
import { FetchNewsContentApiHandler, FetchNewsHeadlinesApiHandler, getNewsHeadlines } from "redux/reducers/newsSlice"
import { useSelector } from "react-redux"
import { NewsInterface } from "types"

type RecommendNewsProps = {
	showHeader?: boolean
	height?: number | string
}
export default function RecommendNews({ showHeader = true, height = 300 }: RecommendNewsProps) {
	const navigation = useNavigation()
	const dispatcher = useAppDispatch()
	const { isLoading, data } = useSelector(getNewsHeadlines)

	const articles = data?.news ?? []
	const showMore = () => navigation?.navigate("ReadNews")

	const gotoArticleContent = (_slug?: string, _title?: string) => {
		dispatcher(setAppTitle({ articleTitle: _title, articleHeader: true }))

		dispatcher(FetchNewsContentApiHandler({ id: _slug }))
		navigation?.navigate("StackArticleScreens")
	}

	React.useEffect(() => {
		dispatcher(FetchNewsHeadlinesApiHandler({ id: "ng" }))
	}, [])

	const renderItem = ({ item }: { item: NewsInterface }) => {
		return (
			<TouchableOpacity onPress={() => gotoArticleContent(item?.url, item?.language?.toLocaleUpperCase())} activeOpacity={0.5} style={styles.card}>
				{/* image */}
				<View>
					<Image source={{ uri: item?.image, width: 250, height: 250 }} style={styles.cardImg} />
				</View>

				{/* body */}
				<View style={styles.cardBody}>
					{/* header */}
					<View style={styles.cardHeader}>
						<Text style={styles.cardCategory}>{item?.author}</Text>
						{/* <Text style={styles.cardHeaderSeparator} />
						<Text style={styles.cardTag}>{item?.tag}</Text> */}
					</View>

					<View>
						<Text style={styles.cardBodyText} numberOfLines={1}>
							{item?.title}
						</Text>
					</View>

					{/* Footer */}
					<View style={styles.footer}>
						{/* article infor */}
						<View style={styles.articleInfo}>
							<Text style={styles.author} numberOfLines={2}>
								{item?.text}
							</Text>
							<Text style={styles.date}>
								<ClockIcon size={16} color={"gray"} /> {new Date(item?.publish_date)?.toUTCString()}
							</Text>
						</View>
						<View style={styles.articleIcon}>
							<MusicalNoteIcon size={16} color={"rgba(218, 166, 45, 1)"} />
						</View>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
			{showHeader && (
				<View style={styles.header}>
					<Text style={styles.heading}>Recommend for you</Text>
					<TouchableOpacity activeOpacity={0.5} onPress={showMore}>
						<Text style={styles.info}>Show more</Text>
					</TouchableOpacity>
				</View>
			)}

			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					showsVerticalScrollIndicator={false}
					data={articles}
					renderItem={renderItem}
					style={{ height: "100%" }}
					contentContainerStyle={{ paddingBottom: 30 }}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		padding: 10
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20
	},
	heading: {
		fontFamily: "extraBold",
		fontSize: 18
	},
	info: {
		fontFamily: "medium",
		color: "gray"
	},
	card: {
		flexDirection: "row"
	},
	cardImg: {
		width: 100,
		height: 100,
		borderRadius: 12,
		marginHorizontal: 10
	},
	cardBody: {
		flexDirection: "column",
		justifyContent: "space-between"
	},
	cardHeader: {
		flexDirection: "row",
		position: "relative"
	},
	cardCategory: {
		fontSize: 12,
		fontFamily: "medium",
		marginRight: 5,
		backgroundColor: "rgba(217, 235, 250, 1)",
		color: "rgba(18, 128, 225, 1)",
		padding: 2,
		paddingHorizontal: 5,
		borderRadius: 20
	},
	cardHeaderSeparator: {
		padding: 4,
		borderRadius: 50,
		backgroundColor: "rgba(18, 128, 225, 1)",
		height: 5,
		position: "relative",
		marginRight: 5,
		top: 6
	},
	cardTag: {
		color: "rgba(105, 105, 105, 1)",
		fontSize: 12,
		fontFamily: "medium",
		marginRight: 5,
		padding: 2,
		paddingHorizontal: 5,
		borderRadius: 20
	},
	cardBodyText: {
		fontFamily: "bold",
		width: "50%",
		marginVertical: 10
	},
	footer: {
		flexDirection: "row",
		alignItems: "center"
	},
	articleInfo: {
		flexDirection: "column",
		marginRight: 30
	},
	author: {
		fontFamily: "normal",
		fontSize: 12,
		color: "gray"
	},
	date: {
		fontFamily: "normal",
		fontSize: 12,
		color: "gray",
		flexDirection: "row",
		gap: 4,
		alignItems: "center"
	},
	articleIcon: {
		borderRadius: 50,
		backgroundColor: "rgba(244, 236, 216, 1)",
		padding: 8
	},
	separator: {
		marginVertical: 8,
		borderWidth: 1,
		borderColor: "#ddd"
	}
})
