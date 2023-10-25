import { AxiosResponse } from "axios"
import { TransHistorySliceState } from "./redux"

export interface RequestParams<D = undefined> {
	id?: string
	data?: D
	pager?: {
		perPage: string | number
		page: string | number
	}
}

export interface RequestPaginationParams {
	id?: string | number
	slug?: TransHistorySliceState["activeTab"]
	perPage: string | number
	page: string | number
}

export interface ServerResponse<T = any, D = any> extends AxiosResponse<T, D> {
	message: string
}
