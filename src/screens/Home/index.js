import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { BLACK, LIGHT_GRAY, PRIMARY, SECONDARY } from '../../styles/colors';
import styles from './styles';
import OffreItem from '../../components/common/OffreItem';
import Swiper from 'react-native-swiper'
const promo = require('../../assets/images/Banners_Promo.png')
const promo2 = require('../../assets/images/Banners_Sandwitch.png')
const claire_bg = require('../../assets/images/Backgrounds/ClaireMode.png')

const Home = () => {
    return (
        <Container style={{ paddingHorizontal: 0, paddingTop: 0 }} >
            <ImageBackground source={claire_bg} style={styles.bgContainer} >
                <View style={styles.homeTop} >
                    <Text style={styles.userName} >Bonjour John</Text>
                    <View>
                        <Ionicons style={styles.infoIcon} name="alert-circle-outline" size={20} color={BLACK} />
                        <Text style={styles.soldeTxt} >Ton solde est de <Text style={styles.soldePrice} >11,23E</Text></Text>
                    </View>
                    <Input inputStyle={{ borderColor: '#000', borderWidth: 1, width: '90%', alignSelf: 'center' }} placeholder={"Entrez un code promo"} rigthIcon={<Ionicons name='checkmark' size={20} color={BLACK} />} />
                </View>
                <View style={{ paddingHorizontal: 20 }} >
                    <View style={[styles.rowFlex, styles.rowFlexPadding]} >
                        <Text style={styles.itemTxt} >
                            Vous y etes presque!
                        </Text>
                        <TouchableOpacity style={[styles.rowFlex, styles.alignCenter]} >
                            <Text>
                                Voir tout
                            </Text>
                            <Ionicons name="chevron-forward" size={22} color={BLACK} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.promoWrapper} >
                        <Swiper
                            activeDotColor={SECONDARY}
                            dotColor={LIGHT_GRAY}
                            loop={false}
                            paginationStyle={styles.pagination}

                        >
                            <View style={styles.promoSlide} >
                                <Image source={promo} style={styles.promoImg} />
                                <View style={styles.promoBottom} >
                                    <View style={[styles.rowFlex, { justifyContent: 'flex-start', marginBottom: 20 }]} >
                                        <View style={[styles.pizzIcon]} >
                                            <Ionicons name="md-pizza-outline" size={24} color={PRIMARY} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }} >
                                            <Text style={[styles.yelTxt, { marginLeft: 5 }]} >10 pointes de pizza</Text>
                                            <Text style={styles.yelTxt} >6,00E</Text>
                                        </View>
                                    </View>
                                    <Progress.Bar color={PRIMARY} height={18} borderColor={"white"} borderRadius={25} progress={0.3} width={null} />
                                </View>
                            </View>
                            <View style={styles.promoSlide} >
                                <Image source={promo} style={styles.promoImg} />
                                <View style={styles.promoBottom} >
                                    <View style={[styles.rowFlex, { justifyContent: 'flex-start', marginBottom: 20 }]} >
                                        <View style={[styles.pizzIcon]} >
                                            <Ionicons name="md-pizza-outline" size={24} color={PRIMARY} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }} >
                                            <Text style={[styles.yelTxt, { marginLeft: 5 }]} >10 pointes de pizza</Text>
                                            <Text style={styles.yelTxt} >6,00E</Text>
                                        </View>
                                    </View>
                                    <Progress.Bar color={PRIMARY} height={18} borderColor={"white"} borderRadius={25} progress={0.3} width={null} />
                                </View>
                            </View>
                        </Swiper>
                    </View>
                    <View style={[styles.rowFlex, styles.rowFlexPadding]} >
                        <Text style={styles.itemTxt} >
                            Offres
                        </Text>
                        <TouchableOpacity style={[styles.rowFlex, styles.alignCenter]} >
                            <Text>
                                Voir tout
                            </Text>
                            <Ionicons name="chevron-forward" size={22} color={BLACK} />
                        </TouchableOpacity>
                    </View>
                    <OffreItem src={promo2} />
                </View>
            </ImageBackground>
        </Container>
    )
}

export default Home