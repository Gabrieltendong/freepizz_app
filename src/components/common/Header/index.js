import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import styles from './styles'
import { BLACK } from '../../../styles/colors';

const Header = ({ title, navigation, cancel, item, textColor, chat, editProfile }) => {

    return (
        <View style={styles.headWrapper} >
            <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.goBack()} >
                <Feather name='chevron-left' size={38} color={BLACK} />
            </TouchableOpacity>
            <Text style={[styles.headText, textColor && { color: textColor }]} >{title}</Text>
        </View>
    )
}

export default Header