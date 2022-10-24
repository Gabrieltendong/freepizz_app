import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { SIGN_IN, SIGN_UP } from "../constants/routes";
import SignIn from "../screens/SigIn";
import SignUp from "../screens/SignUpScreens";
import Tabs from "./tabs";

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name={SIGN_IN} component={SignIn} />
            <Stack.Screen name={SIGN_UP} component={SignUp} />
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    )
}

export default Router;