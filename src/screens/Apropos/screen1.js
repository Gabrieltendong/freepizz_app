import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { PRIMARY } from '../../styles/colors';

const Screen1 = () => {
    return (
        <View style={styles.screenContainer} >
            <Ionicons name='gift-outline' size={210} color={PRIMARY} />
            <Text style={styles.titleText} >On te recommpenses sur tes achats</Text>
            <Text style={styles.subText} >Lorem Ipsum sit dolor emit is just a dummy text from th textile industries in th early 80's </Text>
        </View>
    )
}

export default Screen1