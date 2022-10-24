import { StyleSheet } from "react-native";
import { BLACK, PLACEHOLDER, PRIMARY } from "../../../styles/colors";

export default StyleSheet.create({
    Wrapper: {
        backgroundColor: 'transparent',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 6
    },

    // inputWrapper: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     paddingLeft: 5,
    //     height: 58,
    //     borderRadius: 35,
    // },

    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingLeft: 5,
        height: 58,
    },

    iconWrapper: {
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    lableTxt: {
        paddingLeft: 24,
        marginBottom: 8,
        color: BLACK,
        fontSize: 14,
        fontWeight: 'bold'
    },

    input: {
        textAlign: 'justify',
        height: '80%',
        color: '#000',
        flex: 1,
        fontSize: 17,
    },
    error: {
        fontSize: 14,
        color: 'tomato'
    },

    // Phone input
    btnStyle: {
        backgroundColor: 'transparent',
        marginLeft: 20,
        alignSelf: "center",
        width: '20%'
    },

    imgWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '100%'
    },

    rowChild: {
        alignSelf: 'center'
    },

    img: {
        height: 32,
        width: 32
    },

    // country Input

    btnCntyStyle: {
        backgroundColor: 'transparent',
        marginLeft: 20,
        alignSelf: "center",
        width: '100%'
    },

    cntyWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '88%'
    },

    cntyText: {
        fontSize: 16,
        color: '#333333'
    },

    rowChildCnty: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '40%',
    }
})