export type DataPlanParams = {
	provider: "etisalat-data" | "airtel-data" | "mtn-data" | "glo-data"
}

export type BouquentsParams = {
	provider: "gotv" | "startimes" | "dstv"
}

export interface BankAccountVerificationParams {
	account_name?: string
	account_number: string
	bank_code: string
	bank_name?: string
}

export interface BankTransferParams extends BankAccountVerificationParams {
	amount?: string | number
}

export type APPPINParams = {
	app_pin?: string
	confirm_pin?: string
}

export type ChangeAccountPasswordParams = {
	password?: string
	confirm_password?: string
}

export type UpdateAccountParams = {
	first_name?: string
	last_name?: string
	email?: string
	phone_number?: string
}

export interface CreateBankingDetailsParams extends BankAccountVerificationParams {}

export type WalletTopupParams = {
	topup_amount?: string | number
}

export type PhoneNumberVerificationParams = {
	phone_number?: string
	country_code?: "NG" | string
}

export type MeterVerificationParams = {
	meter_number?: string
	service?: string
	type?: "prepaid" | "postpaid"
}

export type SmartcardVerficationParams = {
	smartcard_number?: string
	provider?: "gotv" | "dstv" | "startimes"
}

export type MobileAirtimeParams = {
	phone_number: string
	amount: string
	/**
	 * Which wallet to charge airtime purchase from
	 */
	from: "balance" | "points"
	service: string
}

export type WalletEarningsRequestParams = {
	/**
	 * The amount to withdraw
	 */
	amount?: number | string
	/**
	 * Where to send the amount to could be `bank` or `balance`
	 */
	to?: "balance" | "bank"
}

export type WalletWithdrawalRequestParams = {
	/**
	 * The amount to send to payout bank
	 */
	amount?: number | string
}
