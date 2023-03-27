import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Main } from './src/Main';
import { Prueba } from './src/Prueba';


export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <Prueba/>
    </View>
  );
}
