import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMelhorOpcao = () => {
    const precoAlcoolNum = parseFloat(precoAlcool);
    const precoGasolinaNum = parseFloat(precoGasolina);
    
    if (precoAlcoolNum && precoGasolinaNum) {
      const melhorOpcao = (precoAlcoolNum / precoGasolinaNum) < 0.7 ? "Abasteça com Álcool" : "Abasteça com Gasolina";
      setResultado(melhorOpcao);
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparador de Combustível</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Alcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />
      <Button title="Calcular" onPress={calcularMelhorOpcao} />
      {resultado && <Text style={styles.result}>{resultado}</Text>}
      <Image
        source={{ uri: 'https://example.com/imagem-combustivel.jpg' }} // Substitua pela URL da imagem
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default App;