import { WordpressPostInterface } from "types"

export function extractAudioUrl(htmlEncodedText: string): string | null {
	const audioRegex = /<audio.*?src=["'](.*?)["']/g
	const anchorRegex = /<a.*?href=["'](.*?)["']/g

	let match
	let audioUrl = null

	// Check for audio source in <audio> tag
	while ((match = audioRegex.exec(htmlEncodedText)) !== null) {
		if (match.length >= 2) {
			audioUrl = match[1]
			break
		}
	}

	// Check for audio source in <a> tag if not found in <audio> tag
	if (!audioUrl) {
		while ((match = anchorRegex.exec(htmlEncodedText)) !== null) {
			if (match.length >= 2 && match[1].endsWith(".m4a")) {
				audioUrl = match[1]
				break
			}
		}
	}

	return audioUrl ? audioUrl?.replace("?_=1", "") : null
}

export function PickNewsFeed(newsFeeds: WordpressPostInterface[], count: number = 5): WordpressPostInterface[] {
	if (newsFeeds.length <= count) {
		return newsFeeds // Return the whole array if it has 5 or fewer elements
	} else {
		const pickedNewsFeeds: WordpressPostInterface[] = []
		const copyOfNewsFeeds = [...newsFeeds] // Create a copy to avoid modifying the original array

		while (pickedNewsFeeds.length < count) {
			const randomIndex = Math.floor(Math.random() * copyOfNewsFeeds.length)
			pickedNewsFeeds.push(copyOfNewsFeeds.splice(randomIndex, 1)[0]) // Remove and push randomly picked element
		}

		return pickedNewsFeeds
	}
}
