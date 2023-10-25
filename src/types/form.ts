import { TextInputProps, NativeSyntheticEvent, TextInputChangeEventData, StyleProp, TextStyle, ViewStyle } from "react-native"

export type InputTextProps = {
	placeholder?: string
	textInputProps?: TextInputProps
	labelTopValue?: number
	borderColor?: string
	borderWidth?: number
	paddingVertical?: number
	borderRadius?: number
	value: string
	textInputStyles?: any
	labelStyles?: any
	inputContainerStyles?: any
	onChangeText: (value: string) => void
}

export type DropdownProps = {
	id: string
	name: string
	value: string
}

export interface TextFieldProps {
	label?: string
	forceLabel?: boolean
	inputType?: TextInputProps
	inputStyle?: StyleProp<TextStyle>
	value?: string
	name?: string
	password?: boolean
	error?: string
	touched?: boolean
	amount?: boolean
	handleChange?: () => void
	onChange?: (e: string | React.ChangeEvent<any>) => void
	toggleSelect?: () => void
	toggleContacts?: () => void
	containerStyle?: StyleProp<ViewStyle>
}

export interface ButtonProps {
	title: string
	onSubmit?: () => void
	disabled?: boolean
	isLoading?: boolean
	btnStyles?: StyleProp<ViewStyle>
}
