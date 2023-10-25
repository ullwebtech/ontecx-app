import { StyleProp, ViewStyle } from "react-native"

export interface SVGIconProps {
	style?: StyleProp<ViewStyle>
	width?: number
	height?: number
	xmlns?: string
}

export interface SVGComponentProps extends SVGIconProps {
	children?: React.ReactNode
}
