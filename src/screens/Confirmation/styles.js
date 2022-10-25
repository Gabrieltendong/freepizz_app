import { StyleSheet } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../styles/colors";

export default StyleSheet.create({
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    pizzWrapper: {
        justifyContent: 'flex-start',
        padding: 6,
        height: 56
    },

    rowFlex_2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
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

    confirmBtnText: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10
    },

    cancelBtnText: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: BLACK
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
    },

    yelTxtBold: { marginLeft: 5, fontWeight: 'bold' }
})