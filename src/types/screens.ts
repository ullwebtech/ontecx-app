import { RootStackParamList, WalletEarningsRequestParams } from "types"
import type { StackNavigationOptions } from "@react-navigation/stack"
import React from "react"
import { ParamListBase, RouteProp } from "@react-navigation/native"

type ScreenComponentType<ParamList extends ParamListBase, RouteName extends keyof ParamList> =
	| React.ComponentType<{
			route: RouteProp<ParamList, RouteName>
			navigation: any
	  }>
	| React.ComponentType<{}>

export type ScreenConfig = {
	name: keyof RootStackParamList
	component: any
	options?: StackNavigationOptions // Include options if provided
	initialParams?: any
}

export interface AppScreensProps {
	auth: Array<ScreenConfig>
	app: Array<ScreenConfig>
}

export interface TransactionReceiptScreenParams {
	transactionId?: string
}

export interface WithdrawEarningsScreenParams {
	send_to?: WalletEarningsRequestParams["to"]
}

export interface VerifyAccountScreenParams {
	accountId?: string
}

export interface EditBankingDetailsScreenParams {
	fetchBanks?: boolean
}

export interface BankTransferScreenParams extends EditBankingDetailsScreenParams {}

export interface ConfirmPasswordResetParamList extends VerifyAccountScreenParams {}

export interface AppDashboardScreenParams {
	refreshUser?: boolean
}
