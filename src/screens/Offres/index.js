import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import Container from '../../components/common/Container'
import OffreItem from '../../components/common/OffreItem'

const bg_claire = require('../../assets/images/Backgrounds/ClaireMode.png')
const promo1 = require('../../assets/images/Banners_Sandwitch.png')
const promo2 = require('../../assets/images/Banners_Burger.png')
const promo3 = require('../../assets/images/Banners_Cocktail.png')
const promo4 = require('../../assets/images/Banners_Offre.png')
const promo5 = require('../../assets/images/Banners_Promo.png')


const Offres = () => {
    return (
        <ImageBackground style={styles.bgContainer} source={bg_claire} >
            <Container style={{ backgroundColor: 'transparent' }} >
                <OffreItem src={promo5} />
                <OffreItem src={promo1} />
                <OffreItem src={promo2} />
                <OffreItem src={promo3} />
                <OffreItem src={promo4} />
            </Container>
        </ImageBackground>
    )
}

export default Offres