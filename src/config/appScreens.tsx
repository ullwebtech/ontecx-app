import { AppHeaderLeft, AppHeaderRight, AppHeaderTitle } from "components/app/dashboard/AppHeader"
import AppScreen from "screens/app/AppScreen"
import HistoriesScreen from "screens/app/HistoriesScreen"
import TopupScreen from "screens/app/Wallet/Topup/TopupScreen"
import ConfirmBalanceWithdrawalToMerchantScreen from "screens/app/Wallet/withdrawal/Confirmation/ConfirmBalanceWithdrawalToMerchantScreen"
import WithdrawBalanceScreen from "screens/app/Wallet/withdrawal/WithdrawBalanceScreen"
import WithdrawBalanceToMerchantScreen from "screens/app/Wallet/withdrawal/WithdrawBalanceToMerchantScreen"
import WithdrawEarningsScreen from "screens/app/Wallet/withdrawal/WithdrawEarningsScreen"
import AccountScreen from "screens/app/account/AccountScreen"
import EditAccountPasswordScreen from "screens/app/account/EditAccountPasswordScreen"
import EditBankingDetailsScreen from "screens/app/account/EditBankingDetailsScreen"
import EditProfileScreen from "screens/app/account/EditProfileScreen"
import EditSecurityPINScreen from "screens/app/account/EditSecurityPINScreen"
import AirtimeReceiptScreen from "screens/app/features/airtime/AirtimeReceiptScreen"
import AirtimeScreen from "screens/app/features/airtime/AirtimeScreen"
import { ScreenConfig } from "types"
import WalletReceiptScreen from "screens/app/Wallet/WalletReceiptScreen"
import AboutAppScreen from "screens/app/about/AboutAppScreen"
import ElectricityScreen from "screens/app/features/electricity/ElectricityScreen"
import AddMeterScreen from "screens/app/features/electricity/meter/AddMeterScreen"
import ConfirmMeterInfoScreen from "screens/app/features/electricity/meter/ConfirmMeterInfoScreen"
import BuyElectricityScreen from "screens/app/features/electricity/BuyElectricityScreen"
import ConfirmTokenPurchaseScreen from "screens/app/features/electricity/ConfirmTokenPurchaseScreen"
import ElectricityReceiptScreen from "screens/app/features/electricity/ElectricityReceiptScreen"

export const appScreens: Array<ScreenConfig> = [
	{
		name: "AppDashboard",
		component: AppScreen,

		options: {
			headerShown: true,
			headerShadowVisible: false,
			headerLeft: () => <AppHeaderLeft />,
			headerRight: () => <AppHeaderRight />,
			headerTitle: () => <AppHeaderTitle />
		},
		initialParams: {
			refreshUser: true
		}
	},
	{
		name: "Histories",
		component: HistoriesScreen,

		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Transactions"
		}
	},
	{
		name: "Account",
		component: AccountScreen,
		options: {
			headerShadowVisible: false,
			headerShown: true
		}
	},
	{
		name: "AboutApp",
		component: AboutAppScreen,
		options: {
			headerShadowVisible: false,
			headerShown: true,
			title: "Support and About Us"
		}
	},
	{
		name: "EditProfile",
		component: EditProfileScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Profile Settings"
		}
	},
	{
		name: "EditBankingDetails",
		component: EditBankingDetailsScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Banking Settings"
		}
	},
	{
		name: "EditSecurityPIN",
		component: EditSecurityPINScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Wallet Security Settings"
		}
	},
	{
		name: "EditAccountPassword",
		component: EditAccountPasswordScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Account Security Settings"
		}
	},

	// ------------> [App Features]

	// -------------> [Wallet Screens]
	{
		name: "WalletTopup",
		component: TopupScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Wallet Top Up"
		}
	},
	{
		name: "WalletReceipt",
		component: WalletReceiptScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Receipt"
		}
	},
	{
		name: "WithdrawEarnings",
		component: WithdrawEarningsScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Withdraw Earnings"
		}
	},
	{
		name: "WithdrawBalance",
		component: WithdrawBalanceScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Cash Out"
		}
	},

	{
		name: "WithdrawBalanceToMerchant",
		component: WithdrawBalanceToMerchantScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Bank Transfer"
		}
	},
	{
		name: "ConfirmBalanceWithdrawalToMerchant",
		component: ConfirmBalanceWithdrawalToMerchantScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Confirm Transfer"
		}
	},

	// -------------> [Airtime Screens]
	{
		name: "Airtime",
		component: AirtimeScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Mobile Airtime"
		}
	},
	{
		name: "AirtimeReceipt",
		component: AirtimeReceiptScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Receipt"
		}
	},
	// --------------> Electricity
	{
		name: "Electricity",
		component: ElectricityScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Electricity"
		}
	},
	{
		name: "AddMeter",
		component: AddMeterScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Add Meter"
		}
	},
	{
		name: "ConfirmMeterInfo",
		component: ConfirmMeterInfoScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Confirm Meter"
		}
	},
	{
		name: "BuyElectricity",
		component: BuyElectricityScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Buy Power"
		}
	},
	{
		name: "ConfirmTokenPurchase",
		component: ConfirmTokenPurchaseScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Confirm Details"
		}
	},
	{
		name: "ElectricityReceipt",
		component: ElectricityReceiptScreen,
		options: {
			headerShown: true,
			headerShadowVisible: false,
			title: "Receipt"
		}
	}
]
