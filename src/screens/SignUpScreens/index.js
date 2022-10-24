import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import Step1 from './Step1'
import Swiper from 'react-native-swiper'
import styles from './styles'
import { PRIMARY, SECONDARY } from '../../styles/colors'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'


const SignUp = ({ navigation }) => {
    return (
        <Container>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                loop={false}
                activeDotStyle={styles.activeDotStyle}
                activeDotColor={SECONDARY}
                dotColor={PRIMARY}
                paginationStyle={styles.paginationStyle}
            >
                <Step1 navigation={navigation} />
                <Step2 />
                <Step3 />
                <Step4 />
            </Swiper>
        </Container>
    )
}

export default SignUp