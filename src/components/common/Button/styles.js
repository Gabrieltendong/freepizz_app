import { StyleSheet, Dimensions } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../../styles/colors";

const { height, width } = Dimensions.get('screen')

export default StyleSheet.create({
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY,
        height: 62,
        borderRadius: 35,
        position: 'relative',
    },

    btnText: {
        color: BLACK,
        fontSize: 24,
        fontWeight: 'bold'
    },

    iconWrapper: {
        marginHorizontal: 5
    }
})