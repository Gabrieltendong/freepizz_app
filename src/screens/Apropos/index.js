import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Swiper from 'react-native-swiper'
import { LIGHT_GRAY, PRIMARY, SECONDARY } from '../../styles/colors'
import Screen1 from './screen1'
import { useState } from 'react'
import Screen2 from './screen2'
import Screen3 from './screen3'

const Apropos = () => {
    const [SelectedIndex, setSelectedIndex] = useState(0)

    const RenderPagination = () => {
        return (
            <View style={styles.paginWrapper} >
                <TouchableOpacity onPress={() => { SelectedIndex != 0 && setSelectedIndex(SelectedIndex - 1) }} >
                    <Text style={styles.cancelText} >Retour</Text>
                </TouchableOpacity>
                <View style={styles.dotsWrapper} >
                    {
                        [0, 1, 2, 3].map((item, i) => (
                            <View key={i} style={[styles.dots, SelectedIndex === i && { backgroundColor: PRIMARY }]} />
                        ))
                    }
                </View>
                <TouchableOpacity onPress={() => { setSelectedIndex(SelectedIndex + 1) }} >
                    <Text style={styles.cancelText} >Suivant</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container} >
            <View style={styles.swiperWrapper} >
                <Swiper
                    loop={false}
                    style={styles.swiper}
                    activeDotColor={SECONDARY}
                    dotColor={LIGHT_GRAY}
                    showsPagination={false}
                >
                    <Screen1 />
                    <Screen2 />
                    <Screen3 />
                </Swiper>
            </View>
            <RenderPagination />
        </View>
    )
}

export default Apropos