export interface SimplePaginationResponseInterface<D = undefined> {
	current_page: number | string
	data: Array<D>
	first_page_url: string
	from: number | string
	next_page_url: string
	path: string
	per_page: number | string
	prev_page_url: string
	to: number | string
}
