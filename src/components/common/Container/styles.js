import { StyleSheet, Dimensions, Platform } from "react-native";
import { BG_COLOR } from "../../../styles/colors";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
        paddingHorizontal: 20,
        paddingTop: Platform.OS == 'ios' ? 50 : 20
    }
})