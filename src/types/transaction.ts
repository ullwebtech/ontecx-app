import { TransHistorySliceState } from "./redux"
import { MobileAirtimeTransResponseInterface, WalletTransactoinResponseInterface } from "./response"

export interface TransactionItemProps {
	data: WalletTransactoinResponseInterface | MobileAirtimeTransResponseInterface
	icon?: string
	tab?: TransHistorySliceState["activeTab"]
}
