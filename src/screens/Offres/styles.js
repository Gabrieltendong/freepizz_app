import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('screen')

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        height: height,

    },
})