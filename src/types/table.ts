import { StyleProp, TextStyle } from "react-native"
export interface TableBaseProps {
	children: React.ReactNode
}

export interface TableRowProps {
	name?: string
	value?: string | number | React.ReactNode
	forceRenderTextValue?: boolean
	labelStyle?: StyleProp<TextStyle>
	valueStyle?: StyleProp<TextStyle>
	listBorder?: boolean
	listCenter?: boolean
}

export interface ListBaseProps extends TableBaseProps {}
