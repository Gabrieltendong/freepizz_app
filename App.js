import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/navigators';
import { PRIMARY } from './src/styles/colors';

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={PRIMARY} />
      <Router />
    </NavigationContainer>

  );
}


