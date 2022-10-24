//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { colors } from '../../../styles';

import { styles } from './style';
import { INPUT_BORDER } from '../../../styles/colors';

// create a component
const PhoneInput = ({
    label,
    onChangeText,
    inputStyle,
    placeholder,
    value,
    isError,
    ref,
    labelStyle,
    defaultValue,
    ...props
}) => {
    return (
        <View style={[styles.container]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <View style={[
                styles.input_wrapper, inputStyle,
                isError && styles.borderError
            ]}
            >
                <TextInput
                    placeholder={placeholder ? placeholder : label}
                    defaultValue={defaultValue}
                    onChangeText={onChangeText}
                    placeholderTextColor={INPUT_BORDER}
                    style={styles.input1}
                    value={value}
                    ref={ref}
                    {...props}
                />
                <View style={styles.divider} />
                <TextInput
                    placeholder={"Poste"}
                    defaultValue={defaultValue}
                    onChangeText={onChangeText}
                    placeholderTextColor={INPUT_BORDER}
                    style={styles.input2}
                    value={value}
                    ref={ref}
                    {...props}
                />
            </View>
        </View>
    );
};

//make this component available to the app
export default PhoneInput;
