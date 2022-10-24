import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 35,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff90',

    },
    drawerLogo: {
        height: 130,
        width: '80%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    close: {
        alignSelf: 'flex-end',
    },

    navTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    navWrapper: {
        width: '100%',
        height: 45,
        borderColor: '#000',
        borderRadius: 35,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        backgroundColor: '#ffffff90',
        marginVertical: 3
    }
})