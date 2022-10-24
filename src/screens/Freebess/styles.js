import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../styles/colors";

export default StyleSheet.create({
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

    yelTxt: {
        fontSize: 16,
        color: BLACK,
        fontWeight: 'bold'
    }
})