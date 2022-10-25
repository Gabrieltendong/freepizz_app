import { StyleSheet } from "react-native";
import { BLACK, LIGHT_BLACK, LIGHT_GRAY, PRIMARY } from "../../styles/colors";
import { colors, mixins } from '../../styles';


export default StyleSheet.create({

    signImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },

    Container: {
        paddingHorizontal: 20,
        flex: 1
    },

    wrapper: {
        height: '70%',
    },

    flex: {
        flex: 1
    },

    swiper: {

    },

    segmentWrapper: {
        borderColor: 'green',
        height: 50,
    },

    segmentTab: {
        borderRadius: 25,
        height: 30
    },

    cancelWrapper: {
        alignSelf: 'flex-end',
        height: 22,
        marginTop: 50
    },

    cancelText: {
        fontSize: 18,
        color: BLACK
    },

    txtHeader: {
        fontSize: 56,
        color: PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },

    txtSub: {
        fontSize: 32,
        color: LIGHT_BLACK,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    imgPic: {
        ...mixins.boxShadow(0.4, 10, 4),
        borderRadius: 30,
        height: 230,
        width: '100%',
        marginTop: 80,
        marginBottom: 20,
        overflow: 'hidden'
    },

    txtOu: {
        fontSize: 48,
        color: BLACK,
        textAlign: 'center',
    },

    paginWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
        marginVertical: 20,
        bottom: 50,
        alignSelf: 'center'
    },

    pagination: {
        position: 'absolute',
        bottom: 50,
    },

    dotsWrapper: {
        flexDirection: 'row',
    },

    dots: {
        height: 9,
        width: 9,
        borderRadius: 14,
        backgroundColor: '#00000040',
        marginHorizontal: 3
    }
})