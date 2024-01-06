export interface RequestParams<D = undefined> {
	id?: string
	data?: D | FormData
	pager?: {
		perPage: string | number
		page: string | number
	}
}

export interface RequestPaginationParams {
	id?: string | number
	slug?: string
	perPage: string | number
	page: string | number
}
