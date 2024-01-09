import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { PauseIcon, SpeakerWaveIcon, StopCircleIcon } from "react-native-heroicons/outline"

import TrackPlayer from "react-native-track-player"

type AudioPlayerProps = {
	audioFile?: string | null
	audioTitle?: string
	trackId?: string
	artwork?: string
}
export default function AudioPlayer({ audioFile, audioTitle, trackId, artwork }: AudioPlayerProps) {
	const [readnews, setReadnews] = React.useState<boolean>(false)
	const [startAudio, setStartAudio] = React.useState<boolean>(false)

	// Handle audio
	const playAudio = async () => {
		setReadnews(true)
		setStartAudio(true)
		try {
			await TrackPlayer.add({
				id: trackId,
				url: audioFile as string,
				title: audioTitle,
				artist: "ONTECx",
				artwork: artwork
			})
		} catch (error) {
			console.log("====================================")
			console.log(error)
			console.log("====================================")
		}
		await TrackPlayer.play()
	}

	const pauseAudio = async () => {
		setReadnews(false)

		await TrackPlayer.pause()
	}

	const stopAudio = async () => {
		setReadnews(false)
		setStartAudio(false)

		await TrackPlayer.stop()
	}

	React.useEffect(() => {
		return () => {
			TrackPlayer.stop()
		}
	}, [readnews, startAudio])

	return (
		<View style={styles.articleIcon}>
			<View>
				{readnews && (
					<TouchableOpacity activeOpacity={0.5} onPress={pauseAudio}>
						<PauseIcon size={25} color={"rgba(218, 166, 45, 1)"} />
					</TouchableOpacity>
				)}
				{!readnews && (
					<TouchableOpacity activeOpacity={0.5} onPress={playAudio}>
						<SpeakerWaveIcon size={25} color={"rgba(218, 166, 45, 1)"} />
					</TouchableOpacity>
				)}
			</View>
			{startAudio && (
				<View>
					<TouchableOpacity activeOpacity={0.5} onPress={stopAudio}>
						<StopCircleIcon size={25} color={"rgba(218, 166, 45, 1)"} />
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	articleIcon: {
		borderRadius: 50,
		backgroundColor: "rgba(244, 236, 216, 1)",
		padding: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%"
	}
})
