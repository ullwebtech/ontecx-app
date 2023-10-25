import { ColorSchemeName } from "react-native"

import { UserInterface, WalletInterface } from "./user"
import {
	BankingDetailsResponseInterface,
	BanksReponseInterface,
	MobileAirtimeTransResponseInterface,
	PhoneNumberVerificationResponseInterface,
	SimplePaginationResponseInterface,
	WalletTransactoinResponseInterface
} from "./response"
import { BankTransferParams, WalletEarningsRequestParams, WalletTopupParams } from "./request"

export interface RequestState<ResData = undefined> {
	data?: ResData
	isLoading?: boolean
	error?: string

	message?: string
}
export interface AppSliceState {
	isLoggedIn: boolean
	appTitle?: string
}

export interface AuthSliceState {
	isActive?: boolean
	api_token?: string
	authUser?: UserInterface
	username?: string
	password_reset_token?: string
	isUserRefreshed?: boolean
	isRefreshing: boolean
}

export interface WalletSliceState {
	isLocked: boolean
	lockPlaceholder: string
	main_balance: string | number
	points_balance: string | number
	earnings_balance: string | number
	bankTransferData?: BankTransferParams
}

export type IconsNames = {
	airtime?: string
	cabletv?: string
	electricity?: string
	internet?: string
	success?: string
	error?: string
	pending?: string
	wallet?: string
}

export interface IconSliceState {
	dark?: IconsNames
	light?: IconsNames
}

export type ModalState<D = any> = {
	open: boolean
	data?: D
	param: string | number
}
export interface ModalStateSlice {
	appSecurityChecker: ModalState<string>
	appTopupOptions: ModalState<WalletTopupParams>
	appWalletWithdrawal: ModalState<WalletInterface>

	walletEarningWithdrawal: ModalState<{ send_to: WalletEarningsRequestParams["to"] }>
	walletWithdrawal: ModalState<string>
}

export interface BanksSliceState {
	isFetchingBanks: boolean
	data?: Array<BanksReponseInterface>
	bankingDetails?: BankingDetailsResponseInterface
}

export interface ActionInterface<Payload = any> {
	payload: Payload
	type: string
}

export interface AirtimeSliceState {
	isVerifying: boolean
	isFetching: boolean
	receipt?: MobileAirtimeTransResponseInterface
	verifiedNumber?: PhoneNumberVerificationResponseInterface
}

export interface TransHistorySliceState {
	isFetching: boolean
	data?: SimplePaginationResponseInterface<WalletTransactoinResponseInterface> | SimplePaginationResponseInterface<MobileAirtimeTransResponseInterface>
	activeTab: "wallet" | "airtime" | "internet" | "cabletv" | "electricity"
}

export interface WalletTransSliceState {
	isFetching: boolean
	data?: WalletTransactoinResponseInterface
}
