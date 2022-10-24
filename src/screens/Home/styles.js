import { StyleSheet, Dimensions } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../styles/colors";

const { height } = Dimensions.get('screen')

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        height: height,

    },

    userName: {
        fontSize: 13,
        color: BLACK,
        textAlign: 'center',
        marginVertical: 15
    },

    soldeTxt: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center'
    },

    soldePrice: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    promoSlide: {
        borderWidth: 2,
        borderColor: BLACK,
        height: 220,
        width: '100%',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 10
    },

    promoImg: {
        height: '50%',
        width: '100%',
        resizeMode: 'cover'
    },

    promoBottom: {
        backgroundColor: BLACK,
        paddingHorizontal: 10,
        height: '50%',
        paddingVertical: 5
    },

    pizzIcon: {
        height: 34,
        width: 34,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    yelTxt: {
        fontSize: 12,
        color: PRIMARY,
        fontWeight: 'bold'
    }
})