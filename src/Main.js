import React from "react";
import { View, Text } from "react-native";

export function Main() {
    return (
        <View>
            <Text style={styles.baseText}>Aplicación Para Encontrar malwares</Text>
            <Button
                onPress={() => Alert.alert('Escaneando Información...')}
                title="Escaner Archivos"
                accessibilityLabel="Learn more about this purple button"
                color='red'
            />
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
  
// export default Main