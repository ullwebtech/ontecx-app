// Get today's date
let today = new Date()

// Subtract one day
today.setDate(today.getDate() - 1)

const _date = today?.toLocaleDateString()?.split("/")?.join("-")
const newDate = new Date(_date)
const _day = newDate?.getDate()
const _month = newDate?.getMonth()
let formattedMonth = ""
const _year = newDate?.getFullYear()

if (_month === 0) {
	formattedMonth = "01"
} else if (_month < 10) {
	formattedMonth = `0${_month}`
} else {
	formattedMonth = `${_month}`
}

const earliestPublishDate = `${_year}-${formattedMonth}-${_day}`

export const newsendpoints = {
	TOPHEADLINES: (country?: string) => `/search-news?source-countries=${country}&earliest-publish-date=${earliestPublishDate}`,
	SEARCH: (query?: string) => `/v2/everything?q=${query}`,
	SHOW: (slug?: string) => `/extract-news?url=${slug}&analyze=true`
}
