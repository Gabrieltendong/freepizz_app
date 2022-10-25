import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styles";
import { BLACK, INPUT_FOCUSED, PRIMARY } from "../../../styles/colors";

export default StyleSheet.create({
    headWrapper: {
        position: 'relative',
        width: '100%',
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: PRIMARY
    },

    headText: {
        fontSize: 24,
        color: BLACK,
        fontWeight: 'bold'
    },

    iconWrapper: {
        position: 'absolute',
        left: 0
    },

    txtWrapper: {
        position: 'absolute',
        right: 0
    },

    textRight: {
        fontSize: 18,
        fontWeight: '700',
        color: INPUT_FOCUSED,
    },


    // styles chat head
    flex: {
        paddingTop: 12,
        width: '40%'
    },

    imgTrajet: {
        height: 25,
        width: '100%',
    },

    text_black: {
        color: colors.BLACK,
    },

    row: {
        flexDirection: 'row',

    },

    align_center: {
        alignItems: 'center'
    },

    text_small: {
        fontSize: 10
    },
    text_small_12: {
        fontSize: 12
    },
    text_gray: {
        color: colors.BLACK,
        opacity: 0.4
    },

    img_country: {
        height: 12,
        width: 12,
        borderRadius: 5,
        marginLeft: 5
    },

})