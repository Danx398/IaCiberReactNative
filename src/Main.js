import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export function Main() {
    return (
        <View style={styles.containertext}>
            <Text style={styles.baseText}>Aplicación Para Encontrar malwares</Text>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => Alert.alert('Escaneando Información...')}
            >
                <View style={styles.containertext}>
                    <Text style={styles.textoCentrado}>
                        Escanear Archivos
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    containertext: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        // backgroundColor: '#B4E4FF',
        backgroundColor: '#3E54AC',
        width: 250,
        height: 250,
        borderRadius: 125
    },
    textoCentrado: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40
    }
});

// export default Main