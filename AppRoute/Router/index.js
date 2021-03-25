import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import auth from "@react-native-firebase/auth"

import AboutScreen from '../Pages/AboutScreen'
import AddScreen from '../Pages/AddScreen'
import HomeScreen from '../Pages/Home'
import LoginScreen from '../Pages/Login'
import RegisterScreen from '../Pages/Register'
import ProjectScreen from '../Pages/ProjectSreen'
import Setting from '../Pages/Setting'
import SkillsProject from '../Pages/SkillsProject'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainApp" component={MainApp} options={{title: 'Molidu'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const MainApp = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userInfo = auth().currentUser
        setUser(userInfo)
    }, [])

    return (
        <>
            {
                user.email === "molidu@gmail.com" ? 
                    <Tab.Navigator initialRouteName="HomeScreen">
                        <Tab.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen} />
                        <Tab.Screen name="Setting" component={Setting} />
                        <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
                    </Tab.Navigator>
                :
                    <Tab.Navigator initialRouteName="HomeScreen">
                        <Tab.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen} />
                        <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
                    </Tab.Navigator>
            }
        </>
    )
}
