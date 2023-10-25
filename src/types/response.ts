import { UserInterface } from "./user"

export interface DataPlansResponseInterface {
	id: string
	name: string
	unit: string
	amount: string
	formatted_amount: string
	duration: string
}

export interface BouquentsResponseInterface {
	id: string
	name: string
	amount: string
	formatted_amount: string
}

export interface BanksReponseInterface {
	id: string
	name: string
	bank_code: string
}

export interface BankAccountVerificationResponseInterface {
	account_number: string
	account_name: string
	bank_id: string
}

export interface AppPinResponseInterface {
	id: number
	security_id: number
	account_id: number
	pin_last_used: string
	passcode_last_used: string
	created_at: string
	updated_at: string
}

export interface AuthorizeAppPInResponsenInterface {
	user_passcode_auth: string
}

export interface UpdateAccountResponseInterface extends UserInterface {}

export interface BankingDetailsResponseInterface {
	id: number | string
	banking_id: number | string
	account_id: number | string
	payout_bank: {
		account_number: string
		account_name: string
		bank_name: string
		bank_code: string
	}
	customer_id: string
	virtual_account: {
		bank: {
			name: string
			id: number | string
			slug: string
		}
		account_name: string
		account_number: string
	}
	virtual_account_id: string
	created_at: "2023-09-11T00:59:51.000000Z"
	updated_at: string
}

export interface WalletTransactoinResponseInterface {
	id: number | string
	trans_id: number | string
	account_id: number | string
	wallet_id: number | string
	transaction: "credit" | "debit"
	reference: string
	desc: string
	service: string
	wallet_address: string
	wallet: string
	status: "pending" | "success" | "failed" | "abandoned" | "error"
	amount: number | string
	service_fees: number | string
	subtotal: number | string
	prev_balance: number | string
	new_balance: number | string
	date: string
	created_at: string
	updated_at: string
}

export interface TopupResponseInterface {
	payment: {
		authorization_url: string
		access_code: string
		reference: string
	}
	transaction: WalletTransactoinResponseInterface
}

export interface MobileAirtimeTransResponseInterface {
	id: number | string
	tranx_id: number | string
	account_id: number | string
	wallet_trans_id: number | string
	reference: string
	phone_number: string
	desc: string
	provider: string
	service: string
	status: "pending" | "failed" | "delivered"
	comm: number | string
	amount: number | string
	subtotal: number | string
	date: string
	created_at: string
	updated_at: string
}

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

export interface PhoneNumberVerificationResponseInterface {
	number: string
	carrier_name: string
	slugs: {
		airtime_slug: "mtn" | "airtel" | "glo" | "etisalat"
		data_slug: "mtn-data" | "airtel-data" | "glo-data" | "etisalat-data"
	}
	country: {
		name: string
		dail_code: string | number
		code: string
	}
	mobile: {
		local_dailing: string
		intl_dailing: string
		intl_number: string
		html_link: string
	}
	is_valid: boolean
	is_valid_for_region: boolean
	icon: string
}

export interface MeterVerificationResponseInterface {
	Customer_Name: string
	Meter_Number: string
	Customer_District: string
	Address: string
}

export interface SmartcardVerificationResponseInterface {
	customer_name: string
	status: string
	due_date: string
	customer_number: string
	customer_type: string
	current_bouquet: string
	current_bouquet_code: string
	renewal_amount: number | string
}

export interface WalletEarningsResponseInterface extends WalletTransactoinResponseInterface {}
export interface WalletWithdrawalResponseInterface extends WalletTransactoinResponseInterface {}
