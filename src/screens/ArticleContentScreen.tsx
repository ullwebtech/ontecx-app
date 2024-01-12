import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native"
import React from "react"
import { Image } from "expo-image"
import { ClockIcon, MusicalNoteIcon, PauseIcon, SpeakerWaveIcon, StopCircleIcon, StopIcon } from "react-native-heroicons/outline"
import { RootStackScreenProps, WordpressPostInterface } from "types"
import { useAppDispatch } from "redux/store"
import { useSelector } from "react-redux"
import * as Speech from "expo-speech"
import { getNewsPost } from "redux/reducers/newsSlice"
import { extractAudioUrl } from "utilities/utils"
import { HtmlToTextOptions, compile } from "html-to-text"
import AudioPlayer from "components/misc/AudioPlayer"

const htmlToTextoptions: HtmlToTextOptions = {
	// ...
	wordwrap: null,
	selectors: [
		{
			selector: "a",
			format: "skip"
		},
		{
			selector: "img",
			format: "skip"
		}
	]
}
const compiledConvert = compile(htmlToTextoptions) // options passed here

export default function ArticleContentScreen({ route, navigation }: RootStackScreenProps<"ArticleContent">) {
	const dispatcher = useAppDispatch()
	const { isLoading, newsContent } = useSelector(getNewsPost)

	const content: WordpressPostInterface | string = newsContent ? JSON.parse(newsContent as string) : null
	const articleContent = content as WordpressPostInterface
	const audioLink = extractAudioUrl(articleContent?.content?.rendered)

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			{isLoading ? (
				<ActivityIndicator size={"large"} />
			) : (
				<>
					<Image
						source={{
							uri: articleContent?.yoast_head_json?.og_image[0]?.url,
							width: articleContent?.yoast_head_json?.og_image[0]?.width,
							height: articleContent?.yoast_head_json?.og_image[0]?.height
						}}
						style={styles.articleImg}
						contentFit="cover"
						transition={1000}
					/>
					<View style={styles.header}>
						<Text style={styles.title}>{articleContent?.title?.rendered}</Text>

						<View style={styles.articleInfo}>
							<View style={styles.articleDetails}>
								<Text style={styles.author}>By {articleContent?.yoast_head_json?.author}</Text>
								<Text style={styles.date}>
									<ClockIcon size={16} color={"gray"} /> {new Date(articleContent?.yoast_head_json?.article_published_time)?.toUTCString()}
								</Text>
							</View>
							<AudioPlayer audioFile={audioLink} audioTitle={articleContent?.title?.rendered} trackId={articleContent?.slug} artwork={articleContent?.yoast_head_json?.og_image[0]?.url} />
						</View>
					</View>

					<View>
						<Text style={styles.articleBodyText}>{compiledConvert(articleContent?.content?.rendered)}</Text>
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

	header: {
		padding: 10
	},
	title: {
		fontFamily: "extraBold",
		fontSize: 22,
		marginBottom: 15
	},

	articleInfo: {
		flexDirection: "column",
		width: "100%",
		justifyContent: "space-between",
		marginBottom: 8,
		rowGap: 10
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
