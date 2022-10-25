import { StyleSheet } from "react-native";
import { PRIMARY, WHITE } from "../../styles/colors";

export default StyleSheet.create({
    wrapper: {
        marginVertical: 6
    },

    borderBox: {
        borderWidth: 2,
        borderColor: PRIMARY,
        borderRadius: 20,
        paddingVertical: 10
    },

    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    flexStart: {
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10
    },

    paddingXY: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    flexTxt: {
        fontSize: 18,
        fontWeight: '400',
        width: '50%'
    },

    itemTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 5
    },

    divider: {
        width: '100%',
        height: 2,
        backgroundColor: PRIMARY
    },

    pizzIcon: {
        height: 64,
        width: 64,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    yelTxt: {
        fontSize: 12,
        color: PRIMARY,
        fontWeight: 'bold'
    },

    bottomIcon: {
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 30
    }
})