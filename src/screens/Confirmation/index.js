import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import Container from '../../components/common/Container'
import { BLACK, PRIMARY } from '../../styles/colors';
import Button from '../../components/common/Button';


const Confirmation = ({ navigation }) => {
    return (
        <View  >
            <Text style={styles.codeTxt} >Tu as encre le code promo suivant:</Text>
            <Text style={styles.codeTitle} >CODEDEMO</Text>
            <View style={styles.divider} />
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Freepizz</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Freepizz</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <Text style={styles.total} >Total<Text style={styles.price}>100,00$</Text></Text>
            <Button text={"CONFIRMER"} style={styles.confirmBtnText} textColor={BLACK} />
            <Button text={"ANNULER"} style={styles.cancelBtnText} />
        </View>
    )
}

export default Confirmation