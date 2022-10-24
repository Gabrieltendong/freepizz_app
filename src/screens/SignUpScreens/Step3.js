import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import PhoneInput from '../../components/common/PhoneInput'
import DropInput from '../../components/common/DropInput'
import Input from '../../components/common/Input'

const Step3 = () => {
    return (
        <View>
            <Text style={styles.txtHeader} >Etape 3</Text>
            <Text style={styles.txtSub} >Questions de securite</Text>
            <PhoneInput label={"Telephone"} />
            <DropInput label={"Langue de preference"} />
            <DropInput label={"Date de naissance"} />
            <DropInput label={"Question secret"} />
            <Input placeholder={"Response"} />
        </View>
    )
}

export default Step3