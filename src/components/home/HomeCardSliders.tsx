import { StyleSheet, Text, View, ImageBackground } from "react-native"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { ClockIcon, MusicalNoteIcon } from "react-native-heroicons/outline"

const slideContent = [
	{
		slug: 1,
		tag: "Latest Stories",
		title: "Google Africa First Internet Cable To Arrive Togo",
		author: "Barnabas Blessing (Arabella)",
		timing: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/slide-1.png")
	},

	{
		slug: 2,
		tag: "Latest Stories",
		title: "TechonomyAfrica Partners With AFOMA To Power Blockchain Education Growth",
		author: "Barnabas Blessing (Arabella)",
		timing: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},

		img: require("assets/images/slide-2.png")
	},
	{
		slug: 3,
		tag: "Latest Stories",
		title: "Bitsika New Social Feature Payment Plan",
		author: "Barnabas Blessing (Arabella)",
		timing: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/slide-3.png")
	},

	{
		slug: 4,
		tag: "Latest Stories",
		title: "Lendsqr, The Lending Solution In Africa",
		author: "Barnabas Blessing (Arabella)",
		timing: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/slide-4.png")
	},
	{
		slug: 5,
		tag: "Latest Stories",
		title: "Five Technology Trends For 2022",
		author: "Barnabas Blessing (Arabella)",
		timing: {
			date: "Feb 27, 2023",
			time: "2 mins read"
		},
		img: require("assets/images/slide-5.png")
	}
]
export default function HomeCardSliders() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{slideContent.map((item, index) => (
					<ImageBackground key={item?.slug} source={item?.img} resizeMode="cover" style={styles.imageContainer} borderRadius={20}>
						<View style={styles.cardBody}>
							<View style={styles.cateCont}>
								<Text style={styles.categoryTag}>{item?.tag}</Text>
							</View>
							<View>
								<Text style={styles.title} numberOfLines={2}>
									{item?.title}
								</Text>
							</View>
							<View style={styles.footer}>
								<View style={styles.infoCont}>
									<Text style={styles.author}>{item?.author}</Text>
									<Text style={styles.articleInfo}>
										{item?.timing.date} <ClockIcon size={15} color={"rgba(255, 255, 255, 1)"} /> {item?.timing.time}
									</Text>
								</View>
								<View style={styles.iconCont}>
									<MusicalNoteIcon size={20} color={"rgba(255, 255, 255, 1)"} />
								</View>
							</View>
						</View>
					</ImageBackground>
				))}
			</ScrollView>
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
		fontSize: 12,
		fontFamily: "normal",
		color: "#eeeeee"
	},
	iconCont: {
		borderRadius: 50,
		backgroundColor: "rgba(217, 217, 217, 0.32)",
		padding: 8
	}
})
