import { GET, POST, PUT } from "config/api"
import { UpdateAccountParams, UpdateAccountResponseInterface, UserInterface } from "types"
import { RequestParams, ServerResponse } from "types/http"
import { accountEndpoints } from "./accountendpoints"

export const FetchAccountApi = async (): Promise<ServerResponse<UserInterface, any>> => {
	return await GET(accountEndpoints.INDEX)
}

export const UpdateAccountApi = async (params: RequestParams<UpdateAccountParams>): Promise<ServerResponse<UpdateAccountResponseInterface, any>> => {
	return await POST(accountEndpoints.UPDATE(params?.id as string), params?.data)
}
