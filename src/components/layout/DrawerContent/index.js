import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { CODE_PROMO, FREE_BEES, RESTO } from '../../../constants/routes';


const logo = require('../../../assets/images/Logo/LOGO-BANANE.png')

const drawerLink = [
    { title: "Compte et preferences", route: 'Compte' },
    { title: "A propos du programme", route: 'Compte' },
    { title: "Freebees", route: FREE_BEES },
    { title: "Historique de transaction", route: 'Compte' },
    { title: "Nos Restos", route: RESTO },
    { title: "Emplois", route: 'Compte' },
    { title: "Commander", route: '' },
    { title: "Reserver", route: '' },
    { title: "Menu", route: '' },
    { title: "Ajouter un code promo", route: CODE_PROMO },
    { title: "Foire aux questions", route: '' },
    { title: "Nous joindre", route: '' },
    { title: "Termes et Conditions", route: '' },
    { title: "Politique de confidentialite", route: '' },
    { title: "Se deconnecter", route: '' },
]

const DrawerContent = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.close} >
                <Ionicons name='close-sharp' size={38} color={'#fff'} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Image source={logo} style={styles.drawerLogo} />
                {
                    drawerLink.map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.navWrapper} >
                            <Text style={styles.navTxt} >{item.title}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default DrawerContent