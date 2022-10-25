import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { PRIMARY } from '../../styles/colors';


const Freebees = () => {
    return (
        <Container style={{ paddingHorizontal: 0 }} >
            <Input inputStyle={{ marginHorizontal: 20 }} placeholder={"Rechercher"} rigthIcon={<Ionicons name='close-sharp' size={38} color={'#00000020'} />} />
            <View style={[styles.rowFlex, { justifyContent: 'flex-start', backgroundColor: '#00000010', padding: 6, height: 56 }]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Bistro Aleria</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Au Royaume des animaux</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Bistro Aleria</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Au Royaume des animaux</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Bistro Aleria</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, { justifyContent: 'flex-start', padding: 6, height: 56 }]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Au Royaume des animaux</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.pizzWrapper]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={28} color={PRIMARY} />
                </View>
                <View style={styles.rowFlex_2} >
                    <Text style={[styles.yelTxt, styles.yelTxtBold]} >Bistro Aleria</Text>
                    <Text style={styles.yelTxt} >50,00$</Text>
                </View>
            </View>
        </Container>
    )
}

export default Freebees