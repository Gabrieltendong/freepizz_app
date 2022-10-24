//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './style';
import { INPUT_BORDER, LIGHT_GRAY } from '../../../styles/colors';

// create a component
const DropInput = ({
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
                <TouchableOpacity style={styles.input2} >
                    <Ionicons name='caret-down' size={24} color={LIGHT_GRAY} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default DropInput;
