export type CreateAccountFormValues = {
	username?: string
	password?: string
}

export type OTPFormValues = {
	code?: string
}

export interface UsernameFormData {
	username: string
}

export type ResetToken = {
	reset_token?: string
}

export interface CreatePasswordFormValues {
	password?: string
	confirm_password?: string
}

export interface ResetPasswordParams extends CreatePasswordFormValues, ResetToken {}
