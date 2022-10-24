//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { styles } from './style';

// create a component
const Button = ({
    text,
    onPress,
    style,
    textColor,
    rightIcon,
    isLoading
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            {
                isLoading ?
                    <ActivityIndicator size={20} color={colors.WHITE} />
                    :
                    <Text style={[
                        styles.text_btn,
                        {
                            color: textColor ? textColor : colors.WHITE
                        }
                    ]}
                    >{text}</Text>
            }

            {
                rightIcon &&
                <Ionicons
                    name={rightIcon}
                    color={colors.WHITE}
                    style={styles.icon_wrapper}
                    size={20}
                />
            }
        </TouchableOpacity>
    );
};

//make this component available to the app
export default Button;
