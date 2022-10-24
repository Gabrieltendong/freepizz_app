import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles';
import { BLACK } from '../../../styles/colors';

// define your styles
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.PRIMARY,
        borderRadius: 15
    },
    text_btn: {
        color: BLACK,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icon_wrapper: {
        marginLeft: 5
    }
});