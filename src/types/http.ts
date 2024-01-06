import { AxiosResponse } from "axios"

export interface ServerResponse<T = any, D = any> extends AxiosResponse<T, D> {
	message: string
}
