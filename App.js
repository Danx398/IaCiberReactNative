import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Main } from './src/Main';


export default function App() {
  return (
    <View style={estilo.container}>
      <Main />
    </View>
  );
}

const estilo = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
