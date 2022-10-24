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
const Input = ({
    iconName,
    rigthIcon,
    label,
    onChangeText,
    inputStyle,
    placeholder,
    iconColor,
    value,
    isError,
    ref,
    labelStyle,
    defaultValue,
    SecureTextEntry,
    setSecureTextEntry,
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
                <FontAwesome
                    name={iconName}
                    size={16}
                    color={iconColor ? iconColor : colors.PRIMARY}
                />
                <TextInput
                    placeholder={placeholder ? placeholder : label}
                    defaultValue={defaultValue}
                    onChangeText={onChangeText}
                    placeholderTextColor={INPUT_BORDER}
                    style={styles.input}
                    value={value}
                    ref={ref}
                    {...props}
                />
                {
                    setSecureTextEntry ?
                        <TouchableOpacity onPress={() => setSecureTextEntry(!SecureTextEntry)} >
                            {rigthIcon && rigthIcon}
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                            {rigthIcon && rigthIcon}
                        </TouchableOpacity>
                }
            </View>
        </View>
    );
};

//make this component available to the app
export default Input;
