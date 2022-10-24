import { StyleSheet } from "react-native";
import { BLACK, LIGHT_GRAY, PRIMARY, WHITE } from "../../../styles/colors";
import { colors, mixins } from '../../../styles';

export default StyleSheet.create({
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 6
    },

    itemWrapper: {
        borderColor: BLACK,
        height: 140,
        backgroundColor: '#00000010',
        width: '100%',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        marginBottom: 20,
        padding: 15
    },

    itemImg: {
        height: '70%',
        width: '100%',
        resizeMode: 'cover'
    },

    pizzIcon: {
        height: 64,
        width: 64,
        borderWidth: 5,
        borderColor: PRIMARY,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    yelTxt: {
        fontSize: 12,
        color: BLACK,
        fontWeight: 'bold',
        textAlign: 'left'
    }
})