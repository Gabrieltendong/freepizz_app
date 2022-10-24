import { StyleSheet } from 'react-native'
import { colors, fonts, mixins } from '../../../styles';

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
    input: {
        flex: 1,
        color: colors.BLACK,
        marginHorizontal: 10
    },
    borderError: {
        borderColor: 'red'
    }
});