import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../styles/colors";

export default StyleSheet.create({
    rowFlex_2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pizzIcon: {
        height: 44,
        width: 44,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    pizzWrapper: {
        justifyContent: 'flex-start',
        padding: 6,
        height: 56
    },

    yelTxt: {
        fontSize: 16,
        color: BLACK,
        fontWeight: 'bold'
    },

    yelTxtBold: { marginLeft: 5, fontWeight: 'bold' }

})