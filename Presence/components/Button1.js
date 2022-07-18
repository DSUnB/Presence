import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';

export default function button1() {
  return (
    <View>
        <Button
            buttonStyle={styles.botao}
            title="Botão"
        >
        </Button>
        <Text style={styles.texto}>Texto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    botao: {
        fontWeight: "bold",
        backgroundColor: 'red',
    },
    texto: {
        color: 'green',
    }

})
