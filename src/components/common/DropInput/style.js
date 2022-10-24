import { StyleSheet } from 'react-native'
import { colors, fonts, mixins } from '../../../styles';
import { LIGHT_GRAY, PRIMARY } from '../../../styles/colors';

// define your styles
export const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    input_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 15,
        marginTop: 5,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: colors.PRIMARY
    },
    label: {
        color: colors.BLACK,
        fontWeight: 'bold'
    },
    input1: {
        width: '85%',
        color: colors.BLACK,
        marginHorizontal: 4,
        height: '100%',
    },
    divider: {
        height: '90%',
        width: 2,
        backgroundColor: PRIMARY
    },

    input2: {
        width: '15%',
        alignItems: 'center'
    },
    borderError: {
        borderColor: 'red'
    }
});