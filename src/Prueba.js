import { Text, View, StyleSheet } from "react-native";

export const Prueba = () => {
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