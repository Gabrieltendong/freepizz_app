import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Container = ({ children, style }) => {
    return (
        <ScrollView style={[styles.container, style]} >
            {children}
        </ScrollView>
    )
}

export default Container