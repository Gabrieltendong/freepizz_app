import { View, Text, Image } from 'react-native'
import React from 'react'
import Input from '../../components/common/Input'
import Container from '../../components/common/Container'
import styles from './styles'
import Button from '../../components/common/Button'
import { BLACK } from '../../styles/colors'
import { SIGN_UP } from '../../constants/routes'

const Logo = require('../../assets/images/Logo/LOGOGÉNÉRALFONDNOIR.png')

const SignIn = ({ navigation }) => {
    return (
        <Container>

            <Image style={styles.logoImg} source={Logo} />
            <Input placeholder={"Couriel"} />
            <Input placeholder={"Mot de passe"} />

            <Text style={styles.forgetPass} >Oublie votre mot de passe?</Text>
            <Button onPress={() => navigation.navigate('Tabs')} text={"OUVRIRE UNE SESSION"} style={{ marginVertical: 25 }} />

            <Text style={styles.noAcc} >Vous n'avez pas de compte?</Text>
            <Button onPress={() => navigation.navigate(SIGN_UP)} text={"S'INSCRIRE"} style={{ marginVertical: 25, backgroundColor: BLACK }} />
        </Container>
    )
}

export default SignIn