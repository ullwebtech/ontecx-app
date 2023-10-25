import { AppPinResponseInterface, BankingDetailsResponseInterface, MobileAirtimeTransResponseInterface, WalletTransactoinResponseInterface } from "./response"

export interface WalletInterface {
	id: number | string
	account_id: number | string
	created_at: string
	earnings_balance: number | string
	last_action: "credited" | "debited"
	main_balance: number | string
	points_balance: number | string
	updated_at: string
	wallet_address: string
	wallet_id: number | string
}
export interface UserInterface {
	id: number | string
	account_id: number | string
	first_name: string
	last_name: string
	username: string
	email: string
	phone_number: string
	api_token: string
	verified_at: string
	created_at: string
	updated_at: string
	// ----------> relationships
	banking_details: BankingDetailsResponseInterface
	security: AppPinResponseInterface
	wallet: WalletInterface
	wallet_trans: Array<WalletTransactoinResponseInterface>
	mobile_trans: Array<MobileAirtimeTransResponseInterface>
}

export interface AccountId {
	account_id: number
}
