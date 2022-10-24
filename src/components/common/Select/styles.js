import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
import { PRIMARY } from "../../../styles/colors";

export default StyleSheet.create({
    selectWrapper: {
        marginHorizontal: 7
    },

    selectItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '100%'
    },

    btnStyle: {
        borderRadius: 10,
        height: 45,
        backgroundColor: PRIMARY,
        maxWidth: 160,
    },

    label: {
        color: '#cecece',
        fontWeight: '500'
    },

    valueStyle: {
        color: '#333',
        height: '100%',
        fontWeight: '500',
        alignItems: 'center',
        paddingVertical: 10,
        fontSize: 16,
    }
})