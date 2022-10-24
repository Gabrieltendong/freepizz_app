import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PRIMARY } from '../../styles/colors';
import styles from './styles';


const Commander = () => {
    return (
        <View>
            <Text>Commander</Text>
            <Input placeholder={"Chercher un rest"} rigthIcon={<Feather name='x' size={24} />} />
        </View>
    )
}

export default Commander