import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/common/Container'
import Step1 from './Step1'
import Swiper from 'react-native-swiper'
import styles from './styles'
import { LIGHT_GRAY, PRIMARY, SECONDARY } from '../../styles/colors'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'


const SignUp = ({ navigation }) => {

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.Container} >
            <TouchableOpacity style={styles.cancelWrapper} >
                <Text style={styles.cancelText} >Cancel</Text>
            </TouchableOpacity>
            <View style={styles.wrapper} >
                <Swiper
                    loop={false}
                    style={styles.swiper}
                    activeDotColor={SECONDARY}
                    dotColor={LIGHT_GRAY}
                    showsPagination={false}
                >
                    <Step1 navigation={navigation} />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </Swiper>
            </View>
            <RenderPagination />
        </ScrollView>
    )
}

export default SignUp