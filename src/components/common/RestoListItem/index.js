import { View, Text } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { PRIMARY } from '../../../styles/colors';

const RestoListItem = () => {
    return (
        <View style={styles.itemWrapper} >
            <View style={[styles.pizzIcon]} >
                <Ionicons name="md-pizza-outline" size={38} color={PRIMARY} />
            </View>
            <View style={styles.rowFlex} >
                <View style={{ alignItems: 'flex-start', justifyContent: 'space-between' }} >
                    <Text style={[styles.yelTxt, { fontSize: 18 }]} >Freepizz Templeton</Text>
                    <Text style={styles.yelTxt} >1056 boulevard Maloney</Text>
                    <Text style={styles.yelTxt} >Gatineau, QC J8R4J8</Text>
                    <Text style={styles.yelTxt} >1056 boulevard Maloney</Text>
                </View>
                <View style={{ alignItems: 'flex-end', height: '100%', justifyContent: 'flex-start' }} >
                    <Text style={[styles.yelTxt, { fontSize: 18 }]} >2.80KM</Text>
                    <Text style={styles.yelTxt} >Taux de tremise: <Text style={{ fontSize: 16.5, color: PRIMARY }} >5%</Text></Text>
                </View>
            </View>
        </View>
    )
}

export default RestoListItem