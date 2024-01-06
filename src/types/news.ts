export interface NewsInterface {
	id: number
	title: string
	text: string
	url: string
	image: string
	publish_date: string
	author: string
	authors: Array<string>
	language: string
	source_country: string
	sentiment: number
}
export interface NewsResponseInterface {
	news: Array<NewsInterface>
}
