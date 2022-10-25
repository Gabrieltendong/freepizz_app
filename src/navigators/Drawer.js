import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Dimensions, Text } from "react-native";
import DrawerContent from "../components/layout/DrawerContent";
import { ACCOUNT, APROPOS, CODE_PROMO, FREE_BEES, RESTO } from "../constants/routes";
import Compte from "../screens/Compte";
import Confirmation from "../screens/Confirmation";
import Freebees from "../screens/Freebess";
import Home from "../screens/Home";
import Restos from "../screens/RestoScreen";
import { Ionicons } from '@expo/vector-icons';
import { BLACK, PRIMARY } from "../styles/colors";
import Header from "../components/common/Header";
import Apropos from "../screens/Apropos";

const { width } = Dimensions.get('screen')

const drawer = createDrawerNavigator()

const Drawer = () => {
    return (
        <drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerTintColor: BLACK,
                headerStyle: { backgroundColor: PRIMARY },
                headerTitleAlign: 'center',
                drawerStyle: { backgroundColor: 'transparent', width: width }, drawerType: 'front'
            }}
        >
            <drawer.Screen name="Acceuil" component={Home} />
            <drawer.Screen name={CODE_PROMO} options={{ headerLeft: () => (<Ionicons name="md-chevron-back" size={28} color={BLACK} />) }} component={Confirmation} />
            <drawer.Screen name={FREE_BEES} options={{ headerLeft: () => (<Ionicons name="md-chevron-back" size={28} color={BLACK} />) }} component={Freebees} />
            <drawer.Screen name={ACCOUNT} options={{ headerLeft: () => (<Ionicons name="md-chevron-back" size={28} color={BLACK} />) }} component={Compte} />
            <drawer.Screen name={RESTO} options={{ headerLeft: () => (<Ionicons name="md-chevron-back" size={28} color={BLACK} />) }} component={Restos} />
            <drawer.Screen name={APROPOS} options={{ headerLeft: () => (<Ionicons name="md-chevron-back" size={28} color={BLACK} />) }} component={Apropos} />
        </drawer.Navigator>
    )
}
export default Drawer;