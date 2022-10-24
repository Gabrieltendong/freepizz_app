import { StyleSheet } from "react-native";
import { BLACK, LIGHT_BLACK, PRIMARY } from "../../styles/colors";
import { colors, mixins } from '../../styles';


export default StyleSheet.create({
    txtHeader: {
        fontSize: 56,
        color: PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },

    txtSub: {
        fontSize: 32,
        color: LIGHT_BLACK,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    imgPic: {
        ...mixins.boxShadow(0.4, 10, 3),
        borderRadius: 30,
        height: 230,
        width: '100%',
        resizeMode: 'cover',
        marginTop: 80,
        marginBottom: 20

    },

    txtOu: {
        fontSize: 48,
        color: BLACK,
        textAlign: 'center',
        marginVertical: 15
    }
})