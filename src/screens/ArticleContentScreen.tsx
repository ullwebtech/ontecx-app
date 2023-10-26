import { StyleSheet, Text, View, ScrollView } from "react-native"
import React from "react"
import { Image } from "expo-image"
import { ClockIcon, MusicalNoteIcon } from "react-native-heroicons/outline"

export default function ArticleContentScreen() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<Image source={require("assets/images/article-1.png")} style={styles.articleImg} contentFit="cover" transition={1000} />
			<View style={styles.header}>
				<Text style={styles.title}>Nigerian Agric-Tech Startup Releaf secures $4.2M in seed funding, grants</Text>

				<View style={styles.articleInfo}>
					<View style={styles.articleDetails}>
						<Text style={styles.author}>By Barnabas Blessing (Arabella)</Text>
						<Text style={styles.date}>
							Feb 27, 2023 <ClockIcon size={16} color={"gray"} /> 2 mins read
						</Text>
					</View>
					<View style={styles.articleIcon}>
						<MusicalNoteIcon size={16} color={"rgba(218, 166, 45, 1)"} />
					</View>
				</View>
			</View>

			<View>
				<Text style={styles.articleBodyText}>
					Nigerian startup Releaf has raised US$4.2 million in seed equity and grant funding to support the development and scaling of technology solutions for the oil palm sector. Releaf is an
					agri-tech startup founded in 2017 that develops proprietary hardware and software solutions to drive the industrialization of food processing in Africa. It took part in the Y Combinator
					accelerator programme in Silicon Valley the same year; however, it only started operations in the oil palm space in 2019 and deployed its proprietary technology in January of this year. The
					startup’s proprietary hardware increases the availability and quality of raw materials for food factories, while the sourcing software connects them directly to more than 2,000 smallholder
					farmers. Releaf also uses digital technologies including USSD and open banking to work seamlessly with its network of smallholder farmers. To support further growth, Relief has raised US$2.7
					million seed funding in a round led by Samurai Incubate Africa, Future Africa and Consonance Investment Managers with participation from Stephen Pagliuca, Chairman of Bain Capital, and
					Justin Kan of Twitch. The startup has also secured US$1.5 million in grants from The Challenge Fund for Youth Employment (CFYE) and USAID. Ikenna Nzewi and Uzoma Ayogu, Releaf’s CEO and CTO,
					are also among the inaugural cohort of entrepreneurs selected by Endeavor Nigeria for its 10-week Endeavor ScaleUp Program. The seed funding will enable the development of industrial food
					processing technology in Nigeria’s smallholder-driven oil palm sector. The grant will enable Releaf to provide working capital and other value-added services for smallholders and small-scale
					processors. It will also support the training, recruitment and retention of more women and youth in Nigeria oil palm sector through the creation of both digital and technical jobs. “Our
					mandate is to industrialize Africa’s food processing industry. This round of funding enables us to develop and prove our technology with smallholder farmers in the oil palm sector. Given
					Nigerians spend around 60% of their income on food and Africa’s population is set to increase by 100,000 people per day over the next three decades, we’re presented with an incredible
					opportunity to feed more people, reduce consumer costs, and supply the fastest-growing food market in the world,” said Ikenna Nzewi. This new funding will enable better productivity and
					accelerate the eradication of the menial and archaic processes that are prevalent across Nigeria’s oil palm sector and the agriculture sector as a whole. It will also enable Releaf to drive
					more value and profitability across the oil palm value chain, as well as support direct and ancillary job creation in the farming communities of South and Eastern Nigeria.
				</Text>
			</View>
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
