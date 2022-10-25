import { View, Text } from 'react-native'
import React from 'react'
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Swiper from 'react-native-swiper'
import Feather from '@expo/vector-icons/Feather';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { PRIMARY, WHITE, GRAY_LIGHTER, BLACK } from '../../styles/colors';
import styles from './styles';

const Step2 = () => {

    const swiperRef = React.useRef()


    const [secureText, setSecureText] = React.useState(true)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    return (
        <View style={{ flex: 1 }} >
            <Text style={styles.txtHeader} >Etape 2</Text>
            <Text style={styles.txtSub} >Authentification</Text>
            <SegmentedControl
                values={['Je suis un individu', 'Je suis une entreprise']}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    const index = event.nativeEvent.selectedSegmentIndex
                    setSelectedIndex(index);
                }}
                tintColor={PRIMARY}
                style={styles.segmentWrapper}
                activeFontStyle={{ color: WHITE }}
                fontStyle={{ color: BLACK }}
                tabStyle={styles.segmentTab}
                backgroundColor={GRAY_LIGHTER}
            />
            {
                selectedIndex === 0 ?
                    <View style={{ flex: 1 }} >
                        <Input placeholder={"Prenoms"} />
                        <Input placeholder={"Noms"} />
                        <Input placeholder={"Genre"} />
                        <Input placeholder={"Couriel"} />
                        <Input placeholder={"Confirmer Couriel"} />
                        <Input placeholder={"Password"} SecureTextEntry={secureText} setSecureTextEntry={setSecureText} rigthIcon={<Feather name="eye" color={'#00000070'} size={24} />} />
                        <Input placeholder={"Confirm Password"} rigthIcon={<Feather name="eye" color={'#00000070'} size={24} />} />
                    </View>
                    :
                    <View style={{ flex: 1 }} >
                        <Input placeholder={"Prenoms de L'entreprise"} />
                        <Input placeholder={"Contact"} />
                        <Input placeholder={"Genre"} />
                        <Input placeholder={"Couriel"} />
                        <Input placeholder={"Confirmer Couriel"} />
                        <Input placeholder={"Password"} SecureTextEntry={secureText} setSecureTextEntry={setSecureText} rigthIcon={<Feather name="eye" color={'#00000070'} size={24} />} />
                        <Input placeholder={"Confirm Password"} rigthIcon={<Feather name="eye" color={'#00000070'} size={24} />} />
                    </View>
            }

        </View>
    )
}

export default Step2