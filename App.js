import React, { useState } from "react";
import { View} from "react-native";
import styles from "./styles"; 
import CalcularCombustivel from "./modules/calcular/CalcularCombustive";

export default function App() {

  return (
    <View style={styles.container}>


      {/* Aqui estamos incluindo o componente Calcular_cobustivel */}
      <CalcularCombustivel/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text:{
    color: '#fff',
  }
});