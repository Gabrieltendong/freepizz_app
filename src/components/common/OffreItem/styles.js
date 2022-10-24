import { StyleSheet } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../../styles/colors";
import { colors, mixins } from '../../../styles';

export default StyleSheet.create({
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '30%'
    },

    itemWrapper: {
        borderWidth: 2,
        borderColor: BLACK,
        height: 160,
        ...mixins.boxShadow(0.2, 15, 5),
        width: '100%',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 20
    },

    itemImg: {
        height: '70%',
        width: '100%',
        resizeMode: 'cover'
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