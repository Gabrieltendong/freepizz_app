import { StyleSheet } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../styles/colors";

export default StyleSheet.create({
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    codeTxt: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: '700',
        textAlign: 'center'
    },

    codeTitle: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 6,
        textAlign: 'center'
    },

    divider: {
        width: '100%',
        backgroundColor: 'lightgray',
        height: 2,
        marginVertical: 10
    },

    total: {
        fontSize: 24,
        color: BLACK,
        height: 45,
        marginTop: 30,
        textAlign: 'center'
    },

    price: {
        fontSize: 28,
        fontWeight: 'bold',
        color: BLACK,
    },

    pizzIcon: {
        height: 44,
        width: 44,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    yelTxt: {
        fontSize: 16,
        color: BLACK,
        fontWeight: 'bold'
    }
})