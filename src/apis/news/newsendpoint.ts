export const newsendpoints = {
	TOPHEADLINES: (country?: string) => `/search-news?source-countries=${country}`,
	SEARCH: (query?: string) => `/v2/everything?q=${query}`,
	SHOW: (slug?: string) => `/extract-news?url=${slug}&analyze=true`
}
