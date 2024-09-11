import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles"; 

export default function CalcularCombustivel() {
  const [alcoolPrice, setAlcoolPrice] = useState(""); 
  const [gasolinaPrice, setGasolinaPrice] = useState(""); 
  const [message, setMessage] = useState("");

  const calcularMelhorOpcao = () => {
    const alcool = parseFloat(alcoolPrice);
    const gasolina = parseFloat(gasolinaPrice);

    if (isNaN(alcool) || isNaN(gasolina)) {
      setMessage("Insira valores válidos para ambos os campos.");
      return;
    }

    const resultado = alcool / gasolina;
    if (resultado < 0.7) {
      setMessage("Abastecer com Álcool");
    } else {
      setMessage("Abastecer com Gasolina");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual a melhor opção de combustível?</Text>

      <Text>Álcool (preço por L):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={alcoolPrice}
        onChangeText={(value) => setAlcoolPrice(value)} 
      />

      <Text>Gasolina (preço por L):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasolinaPrice}
        onChangeText={(value) => setGasolinaPrice(value)} 
      />

      <Button title="Calcular" onPress={calcularMelhorOpcao} />

      {message ? <Text style={styles.result}>{message}</Text> : null}
    </View>
  );
}