import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Dimensions } from "react-native";
import DrawerContent from "../components/layout/DrawerContent";
import { CODE_PROMO, FREE_BEES, RESTO } from "../constants/routes";
import Confirmation from "../screens/Confirmation";
import Freebees from "../screens/Freebess";
import Home from "../screens/Home";
import Restos from "../screens/RestoScreen";
import { BLACK, PRIMARY } from "../styles/colors";

const { width } = Dimensions.get('screen')

const drawer = createDrawerNavigator()

const Drawer = () => {
    return (
        <drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerTintColor: BLACK,
                headerStyle: { backgroundColor: PRIMARY },
                drawerStyle: { backgroundColor: 'transparent', width: width }, drawerType: 'front'
            }}
        >
            <drawer.Screen name="Acceuil" component={Home} />
            <drawer.Screen name={CODE_PROMO} component={Confirmation} />
            <drawer.Screen name={FREE_BEES} component={Freebees} />
            <drawer.Screen name={RESTO} component={Restos} />
        </drawer.Navigator>
    )
}
export default Drawer;