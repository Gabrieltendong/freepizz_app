import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './styles'
import { BLACK, PRIMARY } from '../../../styles/colors';

const OffreItem = ({ src }) => {
    return (
        <View style={styles.itemWrapper} >
            <Image source={src} style={styles.itemImg} />
            <View style={[styles.rowFlex, { justifyContent: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: BLACK }]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={24} color={PRIMARY} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }} >
                    <Text style={[styles.yelTxt, { marginLeft: 5 }]} >Repas enfant</Text>
                    <Text style={styles.yelTxt} >x5</Text>
                </View>
            </View>
        </View>
    )
}

export default OffreItem