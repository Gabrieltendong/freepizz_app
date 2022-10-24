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
            <View style={[styles.rowFlex, { justifyContent: 'flex-start', padding: 6, height: 56 }]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }} >
                    <Text style={[styles.yelTxt, { marginLeft: 5, fontWeight: 'bold' }]} >Freepizz</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, { justifyContent: 'flex-start', backgroundColor: '#00000010', padding: 6, height: 56 }]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }} >
                    <Text style={[styles.yelTxt, { marginLeft: 5, fontWeight: 'bold' }]} >Freepizz</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <Text style={styles.total} >Total<Text style={styles.price}>100,00$</Text></Text>
            <Button text={"CONFIRMER"} style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} textColor={BLACK} />
            <Button text={"ANNULER"} style={{ width: '90%', alignSelf: 'center', backgroundColor: BLACK }} />
        </View>
    )
}

export default Confirmation