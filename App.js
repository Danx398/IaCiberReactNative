import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Main } from './src/Main';
import { Prueba } from './src/Prueba';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Aplicación Para Encontrar malwares</Text>
      <Button
       onPress={() => Alert.alert('Escaneando Información...')}
        title="Escaner Archivos"
        accessibilityLabel="Learn more about this purple button"
        color='red'
      />
      <Main/>
      <Prueba/>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom:20,
  },
  container: {
    marginTop:350,
    alignItems: 'center',
    /*  flex: 1,
     justifyContent: 'center', */
  },
});
