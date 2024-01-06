import { AppScreensProps } from "types"
import { authScreens } from "./authScreens"
import { appScreens } from "./appScreens"

export const SCREENS: AppScreensProps = {
	auth: authScreens,
	app: appScreens
}
