import ConfirmPasswordResetScreen from "screens/auth/ConfirmPasswordResetScreen"
import CreateAccountScreen from "screens/auth/CreateAccountScreen"
import CreatePasswordScreen from "screens/auth/CreatePasswordScreen"
import ForgotPasswordScreen from "screens/auth/ForgotPasswordScreen"
import LoginScreen from "screens/auth/LoginScreen"
import VerifyAccountScreen from "screens/auth/VerifyAccountScreen"

import { ScreenConfig } from "types"

export const authScreens: Array<ScreenConfig> = [
	{
		name: "Login",
		component: LoginScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: "CreateAccount",
		component: CreateAccountScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: "VerifyAccount",
		component: VerifyAccountScreen,
		options: {
			headerShown: false
		}
	},

	{
		name: "ForgotPassword",
		component: ForgotPasswordScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: "ConfirmPasswordReset",
		component: ConfirmPasswordResetScreen,
		options: {
			headerShown: false
		}
	},
	{
		name: "CreateNewPassword",
		component: CreatePasswordScreen,
		options: {
			headerShown: false
		}
	}
]
