import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable } from "react-native"
import React from "react"
import { ClockIcon, MusicalNoteIcon } from "react-native-heroicons/outline"
import { Image } from "expo-image"

type ArticleListingProps = {
	id: number
	category: string
	tag: string
	text: string
	author: string
	date: {
		date: string
		time: string
	}
	img: any
}
const articleListing: Array<ArticleListingProps> = [
	{
		id: 1,
		category: "STARTUPS",
		tag: "latest stories",
		text: "Nigerian Agric-Tech Startup Releaf secures $4.2M in seed funding, grants",
		author: "By Barnabas Blessing (Arabella)",
		date: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/article-1.png")
	},
	{
		id: 2,
		category: "TECH DIGEST",
		tag: "CASE STUDIES",
		text: "How to become a tech savvy",
		author: "By Barnabas Blessing (Arabella)",
		date: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/article-2.png")
	},

	{
		id: 3,
		category: "INDUSTRIES",
		tag: "latest stories",
		text: "Virtual Workspace? What You Need To Know",
		author: "By Barnabas Blessing (Arabella)",
		date: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/article-3.png")
	},

	{
		id: 4,
		category: "TECH DIGEST",
		tag: "CASE STUDIES",
		text: "How to become a tech savvy",
		author: "By Barnabas Blessing (Arabella)",
		date: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/article-2.png")
	}
]

type RecommendNewsProps = {
	showHeader?: boolean
}
export default function RecommendNews({ showHeader = true }: RecommendNewsProps) {
	const renderItem = ({ item }: { item: ArticleListingProps }) => {
		return (
			<TouchableOpacity activeOpacity={0.5} style={styles.card}>
				{/* image */}
				<View>
					<Image source={item?.img} style={styles.cardImg} />
				</View>

				{/* body */}
				<View style={styles.cardBody}>
					{/* header */}
					<View style={styles.cardHeader}>
						<Text style={styles.cardCategory}>{item?.category}</Text>
						<Text style={styles.cardHeaderSeparator} />
						<Text style={styles.cardTag}>{item?.tag}</Text>
					</View>

					<View>
						<Text style={styles.cardBodyText} numberOfLines={2}>
							{item?.text}
						</Text>
					</View>

					{/* Footer */}
					<View style={styles.footer}>
						{/* article infor */}
						<View style={styles.articleInfo}>
							<Text style={styles.author}>{item?.author}</Text>
							<Text style={styles.date}>
								{item?.date.date} <ClockIcon size={16} color={"gray"} /> {item?.date?.time}
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
					<TouchableOpacity activeOpacity={0.5}>
						<Text style={styles.info}>Show more</Text>
					</TouchableOpacity>
				</View>
			)}

			<FlatList
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				showsVerticalScrollIndicator={false}
				data={articleListing}
				renderItem={renderItem}
				style={{ height: 300 }}
				contentContainerStyle={{ paddingBottom: 30 }}
			/>
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
		color: "gray"
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
