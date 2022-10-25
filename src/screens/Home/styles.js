import { StyleSheet, Dimensions } from "react-native";
import { BLACK, PRIMARY, WHITE } from "../../styles/colors";

const { height } = Dimensions.get('screen')

export default StyleSheet.create({

    container: {
        paddingHorizontal: 0,
        paddingTop: 0
    },


    bgContainer: {
        flex: 1,
        height: height,

    },

    homeTop: {
        backgroundColor: '#ffffff70',
        padding: 15
    },

    userName: {
        fontSize: 13,
        color: BLACK,
        textAlign: 'center',
        marginVertical: 15
    },

    infoIcon: {
        alignSelf: 'flex-end',
    },

    soldeTxt: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center'
    },

    searchInput: {
        borderColor: '#000',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center'
    },

    pH: {
        paddingHorizontal: 20
    },

    soldePrice: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    rowFlexPadding: { paddingHorizontal: 10, marginBottom: 8 },

    alignCenter: {
        alignItems: 'center'
    },

    promoWrapper: {
        height: 240,
        width: '100%',
    },

    pagination: {
        position: 'absolute',
        bottom: 0,
    },

    promoSlide: {
        borderWidth: 2,
        borderColor: BLACK,
        height: 220,
        width: '100%',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 10
    },

    promoImg: {
        height: '50%',
        width: '100%',
        resizeMode: 'cover'
    },

    promoBottom: {
        backgroundColor: BLACK,
        paddingHorizontal: 10,
        height: '50%',
        paddingVertical: 5
    },

    flexStart: {
        justifyContent: 'flex-start',
        marginBottom: 20
    },

    pizzIcon: {
        height: 34,
        width: 34,
        backgroundColor: WHITE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    rowFlex_2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    yelTxt: {
        fontSize: 12,
        color: PRIMARY,
        fontWeight: 'bold'
    }
})