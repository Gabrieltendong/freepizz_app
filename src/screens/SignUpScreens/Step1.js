import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import MaIcon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from "./styles";
import { SIGN_IN } from "../../constants/routes";

const welcome = require('../../assets/images/Banners_Burger.png')

const Step1 = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.txtHeader} >Etape 1</Text>
            <Text style={styles.txtSub} >Validation de la carte</Text>

            <Image source={welcome} style={styles.imgPic} />
            <Input rigthIcon={<MaIcon name="barcode-scan" color={'dodgerblue'} size={24} />} />

            <Button onPress={() => navigation.navigate(SIGN_IN)} text={"Je ne possede pas de carte de membre"} textColor={"#000000"} placeholder="Entrer votre numero de carte" />
        </View>
    )
}

export default Step1;