export interface WordpressPostInterface {
	id: string
	date: string
	date_gmt: string
	guid: {
		rendered: string
	}
	modified: string
	modified_gmt: string
	slug: string
	status: string
	type: string
	link: string
	title: {
		rendered: string
	}
	content: {
		rendered: string
		protected: boolean
	}
	excerpt: {
		rendered: string
		protected: boolean
	}
	author: number | string
	featured_media: number | string
	comment_status: string
	ping_status: string
	sticky: boolean
	template: string
	format: string
	meta: {
		footnotes: string
	}
	categories: Array<number | string>
	tags: Array<string>
	yoast_head: string
	yoast_head_json: {
		title: string
		description: string
		robots: {
			index: string
			follow: string
			"max-snippet": string
			"max-image-preview": string
			"max-video-preview": string
		}
		canonical: string
		og_locale: string
		og_type: string
		og_title: string
		og_description: string
		og_url: string
		og_site_name: string
		article_published_time: string
		og_image: [
			{
				width: number
				height: number
				url: string
				type: string
			}
		]
		author: string
		twitter_card: string
		twitter_misc: {
			"Written by": string
			"Est. reading time": string
		}
		schema: {
			"@context": string
			"@graph": [
				{
					"@type": string
					"@id": string
					isPartOf: {
						"@id": string
					}
					author: {
						name: string
						"@id": string
					}
					headline: string
					datePublished: string
					dateModified: string
					mainEntityOfPage: {
						"@id": string
					}
					wordCount: string
					commentCount: string
					publisher: {
						"@id": string
					}
					articleSection: Array<string>
					inLanguage: string
					potentialAction: [
						{
							"@type": string
							name: string
							target: Array<string>
						}
					]
				},
				{
					"@type": string
					"@id": string
					url: string
					name: string
					isPartOf: {
						"@id": string
					}
					datePublished: string
					dateModified: string
					description: string
					breadcrumb: {
						"@id": string
					}
					inLanguage: string
					potentialAction: [
						{
							"@type": string
							target: Array<string>
						}
					]
				},
				{
					"@type": string
					"@id": string
					itemListElement: [
						{
							"@type": string
							position: string | number
							name: string
							item: string
						},
						{
							"@type": string
							position: string | number
							name: string
						}
					]
				},
				{
					"@type": string
					"@id": string
					url: string
					name: string
					description: string
					publisher: {
						"@id": string
					}
					potentialAction: [
						{
							"@type": string
							target: {
								"@type": string
								urlTemplate: string
							}
							"query-input": string
						}
					]
					inLanguage: string
				},
				{
					"@type": string
					"@id": string
					name: string
					url: string
					logo: {
						"@type": string
						inLanguage: string
						"@id": string
						url: string
						contentUrl: string
						width: string | number
						height: string | number
						caption: string
					}
					image: {
						"@id": string
					}
				},
				{
					"@type": string
					"@id": string
					name: string
					image: {
						"@type": string
						inLanguage: string
						"@id": string
						url: string
						contentUrl: string
						caption: string
					}
				}
			]
		}
	}
	amp_enabled: boolean
	_links: {
		self: [
			{
				href: string
			}
		]
		collection: [
			{
				href: string
			}
		]
		about: [
			{
				href: string
			}
		]
		author: [
			{
				embeddable: boolean
				href: string
			}
		]
		replies: [
			{
				embeddable: boolean
				href: string
			}
		]
		"version-history": [
			{
				count: 1
				href: string
			}
		]
		"predecessor-version": [
			{
				id: string | number
				href: string
			}
		]
		"wp:featuredmedia": [
			{
				embeddable: boolean
				href: string
			}
		]
		"wp:attachment": [
			{
				href: string
			}
		]
		"wp:term": [
			{
				taxonomy: string
				embeddable: boolean
				href: string
			},
			{
				taxonomy: string
				embeddable: boolean
				href: string
			}
		]
		curies: [
			{
				name: string
				href: string
				templated: boolean
			}
		]
	}
}
