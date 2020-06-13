import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function MainRouter(props) {
  return (
    <NavigationContainer>
      {!props.authUser ? (
        <Stack.Navigator>
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  )
}

export default MainRouter
