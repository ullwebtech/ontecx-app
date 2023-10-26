import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "screens/HomeScreen"
import { useSelector } from "react-redux"
import { getAuthStatus } from "redux/reducers/appSlice"
import WelcomeScreen from "screens/WelcomeScreen"
import SignUpScreen from "screens/SignUpScreen"
import TabBar from "components/navigation/TabBar"
import { RootScreenParamList } from "types"
import Appheader from "components/navigation/Appheader"
import ReadNewsScreen from "screens/ReadNewsScreen"
import CustomDrawerItems from "components/navigation/DrawerItems"
import ArticleContentScreen from "screens/ArticleContentScreen"

const Stack = createNativeStackNavigator<RootScreenParamList>()
const Drawer = createDrawerNavigator<RootScreenParamList>()
const Tab = createBottomTabNavigator<RootScreenParamList>()

const StackScreen = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="WelcomeScreen"
			component={WelcomeScreen}
			options={{
				headerShown: false
			}}
		/>

		<Stack.Screen
			name="SignUpScreen"
			component={SignUpScreen}
			options={{
				headerShown: false
			}}
		/>
	</Stack.Navigator>
)

const StackArticleScreens = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="ArticleContent"
			component={ArticleContentScreen}
			options={{
				headerShown: false
			}}
		/>
	</Stack.Navigator>
)

const TabScreens = () => (
	<Tab.Navigator tabBar={props => <TabBar {...props} />}>
		<Tab.Screen
			name="Dashboard"
			component={HomeScreen}
			options={{
				headerShown: false
			}}
		/>
		<Tab.Screen
			name="ReadNews"
			component={ReadNewsScreen}
			options={{
				headerShown: false
			}}
		/>
	</Tab.Navigator>
)

const AppNavigation = () => {
	const isLoggedIn = useSelector(getAuthStatus)

	return (
		<NavigationContainer>
			{!isLoggedIn ? (
				<StackScreen />
			) : (
				<Drawer.Navigator
					screenOptions={{
						headerLeft: () => null
					}}
					drawerContent={props => <CustomDrawerItems {...props} />}
				>
					<Drawer.Screen
						name="Home"
						component={TabScreens}
						options={{
							headerTitle: props => <Appheader />
						}}
					/>

					<Drawer.Screen
						name="StackArticleScreens"
						component={StackArticleScreens}
						options={{
							headerTitle: props => <Appheader />
						}}
					/>
				</Drawer.Navigator>
			)}
		</NavigationContainer>
	)
}
export default AppNavigation
