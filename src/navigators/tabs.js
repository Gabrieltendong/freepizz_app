import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Commander from "../screens/Commander";
import Home from "../screens/Home";
import Offres from "../screens/Offres";
import Reserver from "../screens/Reserver";
import Ionicons from '@expo/vector-icons/Ionicons';
import Drawer from "./Drawer";
import Profile from "../screens/Profile";
import { BLACK, LIGHT_GRAY, PRIMARY, WHITE } from "../styles/colors";

const tabs = createBottomTabNavigator()

const Tabs = () => {
    return (
        <tabs.Navigator screenOptions={{
            headerStyle: { backgroundColor: PRIMARY },
            tabBarStyle: { backgroundColor: PRIMARY },
            tabBarActiveTintColor: BLACK,
            tabBarInactiveTintColor: LIGHT_GRAY,

        }} >
            <tabs.Screen options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='home-outline'
                        size={20}
                        color={color}
                    />
                ),
            }} name="Home" component={Drawer} />
            <tabs.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='ios-pricetag-outline'
                        size={20}
                        color={color}
                    />
                ),
            }} name="Offres" component={Offres} />
            <tabs.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='fast-food-outline'
                        size={20}
                        color={color}
                    />
                ),
            }} name="Commader" component={Commander} />
            <tabs.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='ios-clipboard-outline'
                        size={20}
                        color={color}
                    />
                ),
            }} name="Reserver" component={Reserver} />
            <tabs.Screen options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name='ios-card-outline'
                        size={20}
                        color={color}
                    />
                ),
            }} name="Compte" component={Profile} />
        </tabs.Navigator>
    )
}

export default Tabs;