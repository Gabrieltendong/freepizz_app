import { StyleSheet, Dimensions } from "react-native";
import { BLACK } from "../../styles/colors";

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },

    screenContainer: {
        paddingTop: 70,
        alignItems: 'center',
        flex: 1
    },

    swiperWrapper: {
        height: height / 1.2,
    },

    titleText: {
        fontSize: 40,
        color: BLACK,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20

    },

    subText: {
        fontSize: 24,
        color: BLACK,
        textAlign: 'center',
        fontWeight: '400',
    },

    cancelText: {
        fontSize: 18,
        color: BLACK
    },

    paginWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
        marginVertical: 20,
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